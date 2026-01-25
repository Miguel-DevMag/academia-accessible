import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, User, Trash2, Shield, ShieldCheck, Calendar, Mail, 
  Bell, Send, Dumbbell, Pill, Clock, Info 
} from 'lucide-react';

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string | null;
  created_at: string;
  isAdmin?: boolean;
}

type NotificationType = 'workout' | 'supplement' | 'reminder' | 'info';

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Notification form state
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifType, setNotifType] = useState<NotificationType>('info');
  const [notifTarget, setNotifTarget] = useState<string>('all');
  const [sendingNotif, setSendingNotif] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      return;
    }

    if (!loading && !isAdmin) {
      toast({
        variant: 'destructive',
        title: 'Acesso negado',
        description: 'Você não tem permissão para acessar esta página.',
      });
      navigate('/');
      return;
    }

    if (isAdmin) {
      fetchUsers();
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchUsers = async () => {
    setIsLoading(true);
    
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível carregar os usuários.',
      });
      setIsLoading(false);
      return;
    }

    // Check admin status for each user
    const usersWithRoles = await Promise.all(
      (profiles || []).map(async (profile) => {
        const { data: roleData } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', profile.user_id)
          .eq('role', 'admin')
          .maybeSingle();

        return {
          ...profile,
          isAdmin: !!roleData,
        };
      })
    );

    setUsers(usersWithRoles);
    setIsLoading(false);
  };

  const toggleAdminRole = async (userId: string, currentlyAdmin: boolean) => {
    if (userId === user?.id) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Você não pode remover seu próprio papel de admin.',
      });
      return;
    }

    if (currentlyAdmin) {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', 'admin');

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: 'Não foi possível remover o papel de admin.',
        });
        return;
      }
    } else {
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role: 'admin' });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: 'Não foi possível adicionar o papel de admin.',
        });
        return;
      }
    }

    toast({
      title: 'Sucesso!',
      description: currentlyAdmin ? 'Papel de admin removido.' : 'Papel de admin adicionado.',
    });
    
    fetchUsers();
  };

  const deleteUser = async (userId: string, userIdAuth: string) => {
    if (userIdAuth === user?.id) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Você não pode excluir sua própria conta aqui.',
      });
      return;
    }

    if (!confirm('Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.')) {
      return;
    }

    // Note: Full deletion requires admin API access
    // For now, we just remove from profiles
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível excluir o usuário.',
      });
      return;
    }

    toast({
      title: 'Sucesso!',
      description: 'Usuário excluído com sucesso.',
    });
    
    fetchUsers();
  };

  const sendNotification = async () => {
    if (!notifTitle.trim() || !notifMessage.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Preencha o título e a mensagem da notificação.',
      });
      return;
    }

    setSendingNotif(true);

    try {
      const targetUsers = notifTarget === 'all' 
        ? users.map(u => u.user_id)
        : [notifTarget];

      const notifications = targetUsers.map(userId => ({
        user_id: userId,
        title: notifTitle.trim(),
        message: notifMessage.trim(),
        type: notifType,
      }));

      const { error } = await supabase
        .from('notifications')
        .insert(notifications);

      if (error) throw error;

      toast({
        title: 'Notificação enviada!',
        description: notifTarget === 'all' 
          ? `Notificação enviada para ${targetUsers.length} usuários.`
          : 'Notificação enviada com sucesso.',
      });

      setNotifTitle('');
      setNotifMessage('');
      setNotifType('info');
      setNotifTarget('all');
    } catch (error) {
      console.error('Error sending notification:', error);
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível enviar a notificação.',
      });
    } finally {
      setSendingNotif(false);
    }
  };

  if (loading || isLoading) {
    return (
      <Layout>
        <div className="section-container">
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">Carregando...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="section-container">
        <header className="mb-8">
          <h1 className="section-title flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            Painel Administrativo
          </h1>
          <p className="section-subtitle">
            Gerencie usuários e envie notificações para a plataforma
          </p>
        </header>

        {/* Sistema de Notificações */}
        <div className="card-accessible mb-8">
          <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Enviar Notificação
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="notif-title">Título da Notificação</Label>
              <Input
                id="notif-title"
                value={notifTitle}
                onChange={(e) => setNotifTitle(e.target.value)}
                placeholder="Ex: Novo treino disponível!"
                maxLength={100}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notif-type">Tipo</Label>
              <Select value={notifType} onValueChange={(v) => setNotifType(v as NotificationType)}>
                <SelectTrigger id="notif-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workout">
                    <span className="flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-blue-600" />
                      Treino
                    </span>
                  </SelectItem>
                  <SelectItem value="supplement">
                    <span className="flex items-center gap-2">
                      <Pill className="w-4 h-4 text-green-600" />
                      Suplemento
                    </span>
                  </SelectItem>
                  <SelectItem value="reminder">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      Lembrete
                    </span>
                  </SelectItem>
                  <SelectItem value="info">
                    <span className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-purple-600" />
                      Informação
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notif-message">Mensagem</Label>
              <Textarea
                id="notif-message"
                value={notifMessage}
                onChange={(e) => setNotifMessage(e.target.value)}
                placeholder="Digite a mensagem da notificação..."
                rows={3}
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground">{notifMessage.length}/500 caracteres</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notif-target">Destinatário</Label>
              <Select value={notifTarget} onValueChange={setNotifTarget}>
                <SelectTrigger id="notif-target">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Todos os usuários ({users.length})
                    </span>
                  </SelectItem>
                  {users.map((u) => (
                    <SelectItem key={u.user_id} value={u.user_id}>
                      {u.full_name || u.email || 'Usuário sem nome'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button
                onClick={sendNotification}
                disabled={sendingNotif || !notifTitle.trim() || !notifMessage.trim()}
                className="w-full bg-gradient-accent hover:opacity-90"
              >
                {sendingNotif ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Notificação
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="card-accessible flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{users.length}</p>
              <p className="text-sm text-muted-foreground">Usuários cadastrados</p>
            </div>
          </div>
          <div className="card-accessible flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {users.filter(u => u.isAdmin).length}
              </p>
              <p className="text-sm text-muted-foreground">Administradores</p>
            </div>
          </div>
        </div>

        {/* Lista de usuários */}
        <div className="card-accessible">
          <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Usuários Cadastrados
          </h2>

          {users.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Nenhum usuário cadastrado ainda.
            </p>
          ) : (
            <div className="space-y-4">
              {users.map((userProfile) => (
                <article
                  key={userProfile.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-muted rounded-xl"
                >
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-background overflow-hidden border-2 border-border flex-shrink-0">
                    {userProfile.avatar_url ? (
                      <img
                        src={userProfile.avatar_url}
                        alt={`Foto de ${userProfile.full_name || 'usuário'}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-7 h-7 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Informações */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-foreground">
                        {userProfile.full_name || 'Sem nome'}
                      </p>
                      {userProfile.isAdmin && (
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          Admin
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Mail className="w-3 h-3" />
                      {userProfile.email || 'Email não disponível'}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      Cadastrado em: {new Date(userProfile.created_at).toLocaleDateString('pt-BR')}
                    </p>
                  </div>

                  {/* Ações */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleAdminRole(userProfile.user_id, userProfile.isAdmin || false)}
                      aria-label={userProfile.isAdmin ? 'Remover admin' : 'Tornar admin'}
                    >
                      {userProfile.isAdmin ? (
                        <>
                          <Shield className="w-4 h-4 mr-1" />
                          Remover Admin
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4 mr-1" />
                          Tornar Admin
                        </>
                      )}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteUser(userProfile.id, userProfile.user_id)}
                      aria-label="Excluir usuário"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
