import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Camera, User, Save, LogOut, Trash2 } from 'lucide-react';

const Perfil = () => {
  const { user, profile, updateProfile, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Por favor, selecione uma imagem.',
      });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'A imagem deve ter no máximo 2MB.',
      });
      return;
    }

    setIsUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/avatar.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      const { error: updateError } = await updateProfile({ avatar_url: publicUrl });

      if (updateError) throw updateError;

      toast({
        title: 'Sucesso!',
        description: 'Foto de perfil atualizada.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: error.message || 'Erro ao enviar imagem.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    const { error } = await updateProfile({ full_name: fullName });
    
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível salvar as alterações.',
      });
    } else {
      toast({
        title: 'Sucesso!',
        description: 'Perfil atualizado com sucesso.',
      });
    }
    
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: 'Até logo!',
      description: 'Você saiu da sua conta.',
    });
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    if (!confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      return;
    }

    toast({
      variant: 'destructive',
      title: 'Funcionalidade em desenvolvimento',
      description: 'A exclusão de conta estará disponível em breve.',
    });
  };

  return (
    <Layout>
      <div className="section-container max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="section-title">Meu Perfil</h1>
          <p className="section-subtitle">
            Gerencie suas informações pessoais
          </p>
        </header>

        <div className="card-accessible">
          {/* Foto de perfil */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-muted overflow-hidden border-4 border-primary/20">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Alterar foto de perfil"
              >
                <Camera className="w-5 h-5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
                aria-label="Selecionar foto de perfil"
              />
            </div>
            {isUploading && (
              <p className="text-sm text-muted-foreground mt-2">Enviando...</p>
            )}
          </div>

          {/* Formulário */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={user.email || ''}
                disabled
                className="mt-2 bg-muted"
              />
              <p className="text-sm text-muted-foreground mt-1">
                O email não pode ser alterado.
              </p>
            </div>

            <div>
              <Label htmlFor="fullName" className="text-foreground font-medium">
                Nome Completo
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Seu nome completo"
                className="mt-2"
              />
            </div>

            {isAdmin && (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="text-primary font-semibold">
                  ⭐ Você é um administrador
                </p>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => navigate('/admin')}
                >
                  Acessar Painel Admin
                </Button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button onClick={handleSave} disabled={isLoading} className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sair da Conta
              </Button>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <h2 className="text-lg font-semibold text-destructive mb-2">Zona de Perigo</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Ações irreversíveis para sua conta.
              </p>
              <Button variant="destructive" onClick={handleDeleteAccount}>
                <Trash2 className="w-4 h-4 mr-2" />
                Excluir Minha Conta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;
