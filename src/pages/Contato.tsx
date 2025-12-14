import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <Layout>
      <div className="section-container">
        {/* Header da página */}
        <header className="mb-12 text-center">
          <h1 className="section-title">Entre em Contato</h1>
          <p className="section-subtitle mx-auto">
            Fale conosco através do formulário abaixo. Respondemos todas as 
            mensagens por texto, garantindo acessibilidade total.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="card-accessible">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" aria-hidden="true" />
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  Mensagem Enviada!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Recebemos sua mensagem e responderemos em até 24 horas 
                  através do e-mail informado.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-lg">
                    Nome completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    className="h-12 text-lg"
                    aria-describedby="nome-hint"
                  />
                  <p id="nome-hint" className="text-sm text-muted-foreground">
                    Seu nome será usado para personalizar nossa resposta.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">
                    E-mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="h-12 text-lg"
                    aria-describedby="email-hint"
                  />
                  <p id="email-hint" className="text-sm text-muted-foreground">
                    Responderemos sua mensagem neste e-mail.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-lg">
                    Telefone (opcional)
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto" className="text-lg">
                    Assunto <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full h-12 px-3 text-lg rounded-xl border border-input bg-background focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="matricula">Matrícula</option>
                    <option value="duvida">Dúvida sobre treinos</option>
                    <option value="acessibilidade">Sugestão de acessibilidade</option>
                    <option value="suplementos">Informações sobre suplementos</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-lg">
                    Mensagem <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    placeholder="Escreva sua mensagem aqui..."
                    className="min-h-[150px] text-lg"
                    aria-describedby="mensagem-hint"
                  />
                  <p id="mensagem-hint" className="text-sm text-muted-foreground">
                    Descreva sua dúvida ou solicitação com detalhes.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Campos marcados com <span className="text-destructive">*</span> são obrigatórios.
                </p>
              </form>
            )}
          </div>

          {/* Informações de contato */}
          <div className="space-y-6">
            <div className="card-accessible">
              <h2 className="text-xl font-display font-bold text-foreground mb-6">
                Outras formas de contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(11) 9999-9999</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Segunda a Sexta, 8h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">contato@academia.com.br</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respondemos em até 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua das Academias, 123<br />
                      Bairro Fitness - São Paulo, SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso de acessibilidade */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6">
              <h2 className="text-lg font-display font-bold text-foreground mb-3">
                Compromisso com Acessibilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todas as nossas comunicações são feitas por texto, garantindo 
                que pessoas com deficiência auditiva possam participar plenamente. 
                Para atendimento em Libras, utilize o widget VLibras disponível 
                na barra de acessibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contato;
