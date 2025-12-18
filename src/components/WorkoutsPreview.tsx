import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Target, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

const workouts = [
  {
    id: 1,
    title: 'Treino de Força - Iniciante',
    description: 'Exercícios básicos para desenvolver força muscular com descrições detalhadas de cada movimento.',
    duration: '45 min',
    level: 'Iniciante',
    calories: '300 kcal',
    exercises: ['Agachamento', 'Supino', 'Remada'],
  },
  {
    id: 2,
    title: 'Cardio Acessível',
    description: 'Treino cardiovascular com baixo impacto, ideal para todas as idades e condições físicas.',
    duration: '30 min',
    level: 'Todos',
    calories: '250 kcal',
    exercises: ['Caminhada', 'Polichinelo', 'Corrida estacionária'],
  },
  {
    id: 3,
    title: 'Alongamento e Flexibilidade',
    description: 'Série de alongamentos para melhorar flexibilidade e prevenir lesões.',
    duration: '20 min',
    level: 'Todos',
    calories: '100 kcal',
    exercises: ['Alongamento de pernas', 'Alongamento de braços', 'Yoga básico'],
  },
];

export function WorkoutsPreview() {
  return (
    <section 
      className="bg-muted/50 py-20"
      aria-labelledby="workouts-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 id="workouts-heading" className="section-title">
              Treinos em Destaque
            </h2>
            <p className="section-subtitle">
              Todos os exercícios com instruções detalhadas e acessíveis.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link to="/treinos">
              Ver todos os treinos
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Grid de treinos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {workouts.map((workout, index) => (
            <article
              key={workout.id}
              className="card-accessible flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              {/* Badge de nível */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  {workout.level}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {workout.title}
              </h3>

              <p className="text-muted-foreground mb-4 flex-grow">
                {workout.description}
              </p>

              {/* Métricas */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Flame className="w-4 h-4" aria-hidden="true" />
                  <span>{workout.calories}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Target className="w-4 h-4" aria-hidden="true" />
                  <span>{workout.exercises.length} exercícios</span>
                </div>
              </div>

              {/* Lista de exercícios */}
              <div className="border-t border-border pt-4 mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Exercícios incluídos:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {workout.exercises.map((exercise, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" aria-hidden="true" />
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full mt-auto">
                <Link 
                  to="/treinos"
                  state={{ selectedWorkoutId: workout.id }}
                  aria-label={`Ver treino completo: ${workout.title}`}
                >
                  Ver treino completo
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
