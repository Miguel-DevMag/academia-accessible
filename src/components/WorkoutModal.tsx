import React from 'react';
import { X, Clock, Target, Flame, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  description: string;
}

interface Workout {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  calories: string;
  exercises: Exercise[];
}

interface WorkoutModalProps {
  workout: Workout;
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export function WorkoutModal({ 
  workout, 
  isOpen, 
  onClose, 
  onStart 
}: WorkoutModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${workout.id}`}
      >
        <div className="bg-card text-card-foreground rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 flex items-center justify-between">
            <div>
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {workout.level}
              </span>
              <h2 
                id={`modal-title-${workout.id}`}
                className="text-3xl font-bold"
              >
                {workout.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full hover:bg-white/20 p-2 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-6 space-y-6">
            {/* Descrição */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {workout.description}
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{workout.duration}</p>
                <p className="text-sm text-muted-foreground">Duração</p>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-secondary" />
                </div>
                <p className="font-semibold text-foreground">{workout.calories}</p>
                <p className="text-sm text-muted-foreground">Queimadas</p>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{workout.exercises.length}</p>
                <p className="text-sm text-muted-foreground">Exercícios</p>
              </div>
            </div>

            {/* Exercícios */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Exercícios do Treino
              </h3>
              <div className="space-y-3">
                {workout.exercises.map((exercise, index) => (
                  <details
                    key={index}
                    className="group bg-muted rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-muted/80 transition-colors">
                      <div className="flex items-center gap-4 flex-grow">
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-primary/20 text-primary">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-foreground">
                            {exercise.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exercise.sets} · {exercise.reps}
                          </p>
                        </div>
                      </div>
                      <ChevronRight 
                        className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" 
                      />
                    </summary>
                    <div className="px-4 pb-4 pt-2 bg-background/50 border-t border-border">
                      <p className="text-foreground leading-relaxed">
                        <strong className="block mb-2">Como executar:</strong>
                        {exercise.description}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-muted/50 border-t border-border p-6 flex gap-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Voltar
            </Button>
            <Button 
              onClick={onStart}
              className="flex-1"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Começar treino
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
