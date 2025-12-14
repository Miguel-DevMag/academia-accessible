import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section 
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
                <Accessibility className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">Acesso para todos</span>
              </div>

              <h2 
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
              >
                Comece sua jornada fitness hoje
              </h2>

              <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
                Uma plataforma pensada para você, independente de suas necessidades. 
                Acessibilidade não é um extra – é o padrão.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-14 px-8 text-lg"
                >
                  <Link to="/contato">
                    Matricule-se Agora
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-lg"
                >
                  <Link to="/treinos">
                    Explorar Treinos
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual decorativo */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl" />
                <div className="relative w-64 h-64 bg-primary-foreground/10 rounded-3xl flex items-center justify-center border border-primary-foreground/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💪</div>
                    <p className="text-xl font-display font-bold">
                      Seu treino
                    </p>
                    <p className="text-primary-foreground/80">
                      Sua forma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
