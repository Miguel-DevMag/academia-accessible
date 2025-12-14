import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Aluna há 2 anos',
    content: 'Como pessoa com baixa visão, sempre tive dificuldade em acompanhar treinos online. Com a Academia, consigo usar o leitor de tela e aumentar as fontes. Finalmente me sinto incluída!',
    rating: 5,
    accessibility: 'Deficiência Visual',
  },
  {
    id: 2,
    name: 'João Santos',
    role: 'Aluno há 1 ano',
    content: 'Os vídeos com legendas e a opção de VLibras mudaram minha vida. Antes era impossível acompanhar as instruções, agora treino com total autonomia.',
    rating: 5,
    accessibility: 'Deficiência Auditiva',
  },
  {
    id: 3,
    name: 'Ana Costa',
    role: 'Aluna há 6 meses',
    content: 'O alto contraste e a navegação por teclado são perfeitos. Consigo acessar todos os conteúdos sem precisar de ajuda. Recomendo muito!',
    rating: 5,
    accessibility: 'Deficiência Visual',
  },
];

export function TestimonialsSection() {
  return (
    <section 
      className="section-container"
      aria-labelledby="testimonials-heading"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 id="testimonials-heading" className="section-title">
          O que nossos alunos dizem
        </h2>
        <p className="section-subtitle mx-auto">
          Histórias reais de pessoas que encontraram inclusão na nossa plataforma.
        </p>
      </div>

      {/* Grid de depoimentos */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.id}
            className="card-accessible relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Ícone de citação */}
            <Quote 
              className="absolute top-6 right-6 w-8 h-8 text-primary/20" 
              aria-hidden="true" 
            />

            {/* Badge de acessibilidade */}
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full mb-4">
              {testimonial.accessibility}
            </span>

            {/* Estrelas */}
            <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating 
                      ? 'text-warning fill-warning' 
                      : 'text-muted'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Conteúdo */}
            <blockquote className="text-foreground leading-relaxed mb-6">
              "{testimonial.content}"
            </blockquote>

            {/* Autor */}
            <footer className="flex items-center gap-3 border-t border-border pt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-display font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
