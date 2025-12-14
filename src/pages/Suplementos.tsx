import React from 'react';
import { Layout } from '@/components/Layout';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const supplements = [
  {
    id: 1,
    name: 'Whey Protein',
    category: 'Proteína',
    description: 'Proteína do soro do leite, essencial para recuperação e crescimento muscular após os treinos.',
    benefits: [
      'Ajuda no ganho de massa muscular',
      'Acelera a recuperação pós-treino',
      'Fácil digestão e absorção rápida',
    ],
    usage: 'Tomar 1 dose (30g) misturada com água ou leite, preferencialmente após o treino.',
    warnings: 'Não recomendado para pessoas com intolerância à lactose (exceto versões isoladas). Consulte um nutricionista.',
  },
  {
    id: 2,
    name: 'Creatina',
    category: 'Performance',
    description: 'Aminoácido natural que aumenta a força e potência muscular durante exercícios intensos.',
    benefits: [
      'Aumenta força e explosão muscular',
      'Melhora desempenho em treinos intensos',
      'Auxilia no ganho de massa magra',
    ],
    usage: 'Tomar 5g por dia, todos os dias, com água. Pode ser tomada em qualquer horário.',
    warnings: 'Manter-se bem hidratado durante o uso. Pessoas com problemas renais devem consultar um médico.',
  },
  {
    id: 3,
    name: 'BCAA',
    category: 'Aminoácidos',
    description: 'Aminoácidos de cadeia ramificada que auxiliam na recuperação muscular e reduzem a fadiga.',
    benefits: [
      'Reduz dor muscular pós-treino',
      'Preserva massa muscular',
      'Diminui a fadiga durante exercícios',
    ],
    usage: 'Tomar 5-10g antes ou durante o treino, misturado com água.',
    warnings: 'Suplemento seguro para a maioria das pessoas. Evitar em caso de gravidez sem orientação médica.',
  },
  {
    id: 4,
    name: 'Vitamina D',
    category: 'Vitaminas',
    description: 'Vitamina essencial para saúde óssea, imunidade e função muscular adequada.',
    benefits: [
      'Fortalece ossos e articulações',
      'Melhora a imunidade',
      'Auxilia na função muscular',
    ],
    usage: 'Tomar 1 cápsula (2000 UI) por dia, preferencialmente com uma refeição.',
    warnings: 'Não exceder a dose recomendada. Consultar médico para dosagens maiores.',
  },
];

const Suplementos = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Header da página */}
        <header className="mb-12">
          <h1 className="section-title">Suplementos</h1>
          <p className="section-subtitle">
            Informações claras e objetivas sobre suplementação. Sempre consulte 
            um profissional de saúde antes de iniciar qualquer suplemento.
          </p>
        </header>

        {/* Aviso importante */}
        <div className="bg-warning/10 border-2 border-warning/30 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-warning flex-shrink-0 mt-1" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-display font-bold text-foreground mb-2">
              Aviso Importante
            </h2>
            <p className="text-muted-foreground">
              As informações aqui apresentadas são apenas educativas. Suplementos 
              devem ser utilizados sob orientação de um nutricionista ou médico. 
              Cada pessoa tem necessidades diferentes.
            </p>
          </div>
        </div>

        {/* Lista de suplementos */}
        <div className="grid gap-8">
          {supplements.map((supplement) => (
            <article
              key={supplement.id}
              className="card-accessible"
              aria-labelledby={`supplement-title-${supplement.id}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {supplement.category}
                  </span>
                  <h2 
                    id={`supplement-title-${supplement.id}`}
                    className="text-2xl font-display font-bold text-foreground"
                  >
                    {supplement.name}
                  </h2>
                </div>
              </div>

              <p className="text-foreground text-lg mb-6">
                {supplement.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Benefícios */}
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="flex items-center gap-2 text-lg font-display font-semibold text-foreground mb-4">
                    <CheckCircle className="w-5 h-5 text-success" aria-hidden="true" />
                    Benefícios
                  </h3>
                  <ul className="space-y-2">
                    {supplement.benefits.map((benefit, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Como usar */}
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="flex items-center gap-2 text-lg font-display font-semibold text-foreground mb-4">
                    <Info className="w-5 h-5 text-primary" aria-hidden="true" />
                    Como Usar
                  </h3>
                  <p className="text-muted-foreground">
                    {supplement.usage}
                  </p>
                </div>
              </div>

              {/* Avisos */}
              <div className="mt-6 bg-destructive/5 border border-destructive/20 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Atenção:</p>
                  <p className="text-muted-foreground text-sm">
                    {supplement.warnings}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Suplementos;
