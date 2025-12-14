import React from 'react';
import { Layout } from '@/components/Layout';
import { Clock, Target, Flame, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const workouts = [
  {
    id: 1,
    title: 'Treino de Força - Iniciante',
    description: 'Exercícios básicos para desenvolver força muscular. Ideal para quem está começando na academia.',
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
  },
  {
    id: 2,
    title: 'Cardio Acessível',
    description: 'Treino cardiovascular com baixo impacto, perfeito para melhorar a resistência sem sobrecarregar as articulações.',
    duration: '30 min',
    level: 'Todos os níveis',
    calories: '250 kcal',
    exercises: [
      {
        name: 'Marcha Estacionária',
        sets: '3 séries',
        reps: '2 minutos',
        description: 'Marche no lugar levantando os joelhos até a altura do quadril. Mantenha os braços em movimento alternado. Respire de forma regular.',
      },
      {
        name: 'Polichinelo Modificado',
        sets: '3 séries',
        reps: '1 minuto',
        description: 'Alterne os pés para os lados enquanto levanta os braços acima da cabeça. Mantenha um ritmo confortável e constante.',
      },
      {
        name: 'Corrida Estacionária Leve',
        sets: '3 séries',
        reps: '2 minutos',
        description: 'Corra no lugar com passos leves, mantendo os calcanhares próximos ao solo. Respire pelo nariz e expire pela boca.',
      },
    ],
  },
  {
    id: 3,
    title: 'Alongamento e Flexibilidade',
    description: 'Série completa de alongamentos para melhorar a flexibilidade, aliviar tensões e prevenir lesões.',
    duration: '20 min',
    level: 'Todos os níveis',
    calories: '100 kcal',
    exercises: [
      {
        name: 'Alongamento de Isquiotibiais',
        sets: '2 séries',
        reps: '30 segundos cada perna',
        description: 'Sente-se no chão com uma perna esticada e a outra flexionada. Incline o tronco em direção ao pé da perna esticada, mantendo as costas retas.',
      },
      {
        name: 'Alongamento de Quadríceps',
        sets: '2 séries',
        reps: '30 segundos cada perna',
        description: 'Em pé, segure um pé atrás e puxe em direção ao glúteo. Mantenha os joelhos juntos e o tronco ereto.',
      },
      {
        name: 'Rotação de Ombros',
        sets: '2 séries',
        reps: '10 rotações cada direção',
        description: 'Faça círculos com os ombros, primeiro para frente e depois para trás. Movimentos amplos e controlados.',
      },
    ],
  },
];

const Treinos = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Header da página */}
        <header className="mb-12">
          <h1 className="section-title">Treinos Acessíveis</h1>
          <p className="section-subtitle">
            Todos os exercícios com descrições detalhadas, pensados para serem 
            compreendidos por todos, com ou sem auxílio visual.
          </p>
        </header>

        {/* Lista de treinos */}
        <div className="space-y-8">
          {workouts.map((workout) => (
            <article
              key={workout.id}
              className="card-accessible"
              aria-labelledby={`workout-title-${workout.id}`}
            >
              {/* Cabeçalho do treino */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {workout.level}
                  </span>
                  <h2 
                    id={`workout-title-${workout.id}`}
                    className="text-2xl font-display font-bold text-foreground"
                  >
                    {workout.title}
                  </h2>
                </div>

                {/* Métricas */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                    <Flame className="w-4 h-4 text-secondary" aria-hidden="true" />
                    <span>{workout.calories}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                    <Target className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>{workout.exercises.length} exercícios</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {workout.description}
              </p>

              {/* Lista de exercícios */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  Exercícios do Treino
                </h3>

                <div className="space-y-4">
                  {workout.exercises.map((exercise, index) => (
                    <details
                      key={index}
                      className="group bg-muted rounded-xl"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-muted/80 rounded-xl transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-sm">
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
                          className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" 
                          aria-hidden="true" 
                        />
                      </summary>
                      <div className="px-4 pb-4 pt-2">
                        <p className="text-foreground leading-relaxed pl-12">
                          <strong className="block mb-1">Como executar:</strong>
                          {exercise.description}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Botão de ação */}
              <div className="mt-6 pt-6 border-t border-border">
                <Button className="w-full sm:w-auto">
                  Iniciar este treino
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Treinos;
