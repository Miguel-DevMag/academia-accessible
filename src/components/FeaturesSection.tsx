import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Video, 
  Pill, 
  MessageSquare,
  Eye,
  Ear,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Dumbbell,
    title: 'Treinos Detalhados',
    description: 'Exercícios com descrições textuais completas, fáceis de entender com ou sem imagens.',
    href: '/treinos',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Video,
    title: 'Vídeos Acessíveis',
    description: 'Todos os vídeos com legendas sincronizadas e tradução em Libras disponível.',
    href: '/videos',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Pill,
    title: 'Suplementos',
    description: 'Informações claras sobre suplementação, com linguagem simples e objetiva.',
    href: '/suplementos',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: MessageSquare,
    title: 'Contato Textual',
    description: 'Comunicação via formulário, sem dependência de áudio para tirar dúvidas.',
    href: '/contato',
    color: 'bg-secondary/10 text-secondary',
  },
];

const accessibilityFeatures = [
  {
    icon: Eye,
    title: 'Para Deficiência Visual',
    items: [
      'Leitores de tela (NVDA, JAWS, VoiceOver)',
      'Alto contraste e modo escuro',
      'Aumento de fonte até 150%',
      'Navegação completa por teclado',
      'Descrição textual de imagens',
    ],
  },
  {
    icon: Ear,
    title: 'Para Deficiência Auditiva',
    items: [
      'Legendas em todos os vídeos',
      'Integração com VLibras',
      'Conteúdo prioritariamente textual',
      'Interface visual clara',
      'Comunicação via formulário',
    ],
  },
];

export function FeaturesSection() {
  return (
    <section 
      className="section-container"
      aria-labelledby="features-heading"
    >
      {/* Título da seção */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 id="features-heading" className="section-title">
          O que oferecemos
        </h2>
        <p className="section-subtitle mx-auto">
          Conteúdo fitness completo e acessível para todos os usuários, 
          independente de suas necessidades.
        </p>
      </div>

      {/* Grid de features principais */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="card-accessible group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <feature.icon className="w-7 h-7" aria-hidden="true" />
            </div>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              {feature.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {feature.description}
            </p>

            <Button 
              asChild 
              variant="ghost" 
              className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
            >
              <Link to={feature.href}>
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      {/* Seção de Acessibilidade */}
      <div className="bg-muted rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
          Recursos de Acessibilidade
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {accessibilityFeatures.map((category) => (
            <div 
              key={category.title}
              className="bg-background rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-display font-bold text-foreground">
                  {category.title}
                </h4>
              </div>

              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span 
                      className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" 
                      aria-hidden="true" 
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
