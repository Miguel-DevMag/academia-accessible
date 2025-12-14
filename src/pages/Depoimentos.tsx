import React from 'react';
import { Layout } from '@/components/Layout';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Aluna há 2 anos',
    content: 'Como pessoa com baixa visão, sempre tive dificuldade em acompanhar treinos online. Com a Academia, consigo usar o leitor de tela e aumentar as fontes sem perder nenhuma informação. Finalmente me sinto verdadeiramente incluída no mundo fitness!',
    rating: 5,
    accessibility: 'Deficiência Visual',
    avatar: 'M',
  },
  {
    id: 2,
    name: 'João Santos',
    role: 'Aluno há 1 ano',
    content: 'Os vídeos com legendas e a opção de VLibras mudaram minha vida. Antes era impossível acompanhar as instruções dos exercícios, agora treino com total autonomia. A equipe está de parabéns pelo cuidado com acessibilidade.',
    rating: 5,
    accessibility: 'Deficiência Auditiva',
    avatar: 'J',
  },
  {
    id: 3,
    name: 'Ana Costa',
    role: 'Aluna há 6 meses',
    content: 'O alto contraste e a navegação por teclado são perfeitos para mim. Consigo acessar todos os conteúdos sem precisar de ajuda de ninguém. É muito bom ter essa independência. Recomendo para todos!',
    rating: 5,
    accessibility: 'Deficiência Visual',
    avatar: 'A',
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    role: 'Aluno há 8 meses',
    content: 'Nunca imaginei encontrar uma academia online tão acessível. As descrições detalhadas dos exercícios me permitem entender exatamente o que fazer, mesmo sem ver as imagens. Estou mais forte e saudável graças a vocês.',
    rating: 5,
    accessibility: 'Deficiência Visual',
    avatar: 'P',
  },
  {
    id: 5,
    name: 'Carla Mendes',
    role: 'Aluna há 1 ano e meio',
    content: 'A integração com VLibras é fantástica! Posso entender todo o conteúdo na minha língua. Além disso, o formulário de contato me permite tirar dúvidas sem depender de ligações telefônicas. Excelente trabalho!',
    rating: 5,
    accessibility: 'Deficiência Auditiva',
    avatar: 'C',
  },
  {
    id: 6,
    name: 'Roberto Lima',
    role: 'Aluno há 4 meses',
    content: 'Sou dalônico e o modo de alto contraste me ajuda muito a distinguir os elementos na tela. Os botões grandes e bem espaçados também facilitam a navegação. Uma experiência realmente pensada para todos.',
    rating: 5,
    accessibility: 'Daltonismo',
    avatar: 'R',
  },
];

const Depoimentos = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Header da página */}
        <header className="mb-12 text-center">
          <h1 className="section-title">Depoimentos</h1>
          <p className="section-subtitle mx-auto">
            Histórias reais de pessoas que encontraram inclusão e autonomia 
            na nossa plataforma de fitness acessível.
          </p>
        </header>

        {/* Estatísticas */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="card-accessible text-center">
            <p className="text-4xl font-display font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Alunos Satisfeitos</p>
          </div>
          <div className="card-accessible text-center">
            <p className="text-4xl font-display font-bold text-secondary mb-2">4.9</p>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
          <div className="card-accessible text-center">
            <p className="text-4xl font-display font-bold text-primary mb-2">100%</p>
            <p className="text-muted-foreground">Recomendariam</p>
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="card-accessible relative"
              aria-labelledby={`testimonial-author-${testimonial.id}`}
            >
              {/* Ícone de citação */}
              <Quote 
                className="absolute top-6 right-6 w-10 h-10 text-primary/10" 
                aria-hidden="true" 
              />

              {/* Badge de acessibilidade */}
              <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.accessibility}
              </span>

              {/* Estrelas */}
              <div 
                className="flex gap-1 mb-4" 
                aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
              >
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
              <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Autor */}
              <footer 
                id={`testimonial-author-${testimonial.id}`}
                className="flex items-center gap-4 border-t border-border pt-4"
              >
                <div 
                  className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-xl font-display font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Quer fazer parte dessa história?
          </p>
          <a 
            href="/contato" 
            className="btn-accessible bg-gradient-accent text-accent-foreground"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Depoimentos;
