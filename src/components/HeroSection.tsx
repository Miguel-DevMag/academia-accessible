import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section 
      className="relative bg-gradient-hero overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span>100% Acessível</span>
            </div>

            <h1 
              id="hero-heading"
              className="section-title !mb-6"
            >
              Fitness para{' '}
              <span className="text-primary">Todos</span>
              <br />
              Sem Barreiras
            </h1>

            <p className="section-subtitle !max-w-xl">
              Uma academia digital inclusiva, desenvolvida com foco em 
              acessibilidade para pessoas com deficiência visual e auditiva. 
              Treinos, vídeos com legendas e muito mais.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold h-14 px-8 text-lg"
              >
                <Link to="/treinos">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
              </Button>

              <Button 
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg border-2"
              >
                <Link to="/videos">
                  <Play className="w-5 h-5 mr-2" aria-hidden="true" />
                  Ver Vídeos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">500+</p>
                  <p className="text-muted-foreground text-sm">Alunos Ativos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">50+</p>
                  <p className="text-muted-foreground text-sm">Treinos Acessíveis</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">24/7</p>
                  <p className="text-muted-foreground text-sm">Acesso Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl transform -rotate-3 opacity-10" />
              
              {/* Card principal */}
              <div className="relative bg-card rounded-3xl shadow-lg p-8 h-full flex flex-col justify-center items-center border border-border">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                  <span className="text-6xl" role="img" aria-label="Pessoa levantando peso">🏋️</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  Acessibilidade Total
                </h2>
                <p className="text-muted-foreground text-center">
                  Navegação por teclado, alto contraste, 
                  legendas em todos os vídeos e muito mais.
                </p>

                {/* Features list */}
                <ul className="mt-6 space-y-2 text-left w-full">
                  {[
                    'Compatível com leitores de tela',
                    'Vídeos com legendas e Libras',
                    'Alto contraste disponível',
                    'Navegação por teclado',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
