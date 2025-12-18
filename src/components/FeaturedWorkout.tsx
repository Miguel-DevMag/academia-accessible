import React, { useState } from 'react';
import { Zap, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WorkoutModal } from './WorkoutModal';

const featuredWorkout = {
  id: 1,
  title: 'Treino de Força - Iniciante',
  description: 'Exercícios básicos para desenvolver força muscular. Ideal para quem está começando na academia.',
  shortDescription: 'Comece sua jornada de força com segurança',
  duration: '45 min',
  level: 'Iniciante',
  calories: '300 kcal',
  exercises: [
    {
      name: 'Agachamento Livre',
      sets: '3 séries',
      reps: '12 repetições',
      description: 'Fique em pé com os pés na largura dos ombros. Flexione os joelhos e quadris, descendo como se fosse sentar em uma cadeira. Mantenha as costas retas e os joelhos alinhados com os pés.',
    },
    {
      name: 'Supino Reto',
      sets: '3 séries',
      reps: '10 repetições',
      description: 'Deite-se no banco com os pés apoiados no chão. Segure a barra com as mãos um pouco mais afastadas que a largura dos ombros. Abaixe a barra até o peito e empurre de volta.',
    },
    {
      name: 'Remada Curvada',
      sets: '3 séries',
      reps: '12 repetições',
      description: 'Incline o tronco para frente mantendo as costas retas. Puxe a barra em direção ao abdômen, contraindo as escápulas. Retorne controladamente.',
    },
  ],
};

interface FeaturedWorkoutProps {
  onStartWorkout?: (workoutId: number) => void;
}

export function FeaturedWorkout({ onStartWorkout }: FeaturedWorkoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartWorkout = () => {
    setIsModalOpen(false);
    if (onStartWorkout) {
      onStartWorkout(featuredWorkout.id);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Conteúdo */}
            <div className="animate-fade-in space-y-6">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary animate-bounce" />
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                  Treino em Destaque
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {featuredWorkout.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {featuredWorkout.shortDescription}
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                {featuredWorkout.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y-2 border-border">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {featuredWorkout.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">Duração</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">
                    {featuredWorkout.exercises.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Exercícios</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {featuredWorkout.calories}
                  </p>
                  <p className="text-sm text-muted-foreground">Energia</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="gap-2 group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver Treino Completo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => setIsModalOpen(true)}
                  className="gap-2"
                >
                  Detalhes
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Benefícios */}
              <div className="pt-4 space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  ✓ Instruções detalhadas e acessíveis
                </p>
                <p className="text-sm font-semibold text-foreground">
                  ✓ Ideal para iniciantes
                </p>
                <p className="text-sm font-semibold text-foreground">
                  ✓ Progressão segura
                </p>
              </div>
            </div>

            {/* Imagem/Ilustração */}
            <div className="animate-slide-up hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                      <Play className="w-16 h-16 text-primary fill-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Pronto para começar?
                    </h3>
                    <p className="text-muted-foreground">
                      Clique em "Ver Treino Completo" para mais detalhes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <WorkoutModal 
        workout={featuredWorkout}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStart={handleStartWorkout}
      />
    </>
  );
}

export default FeaturedWorkout;
