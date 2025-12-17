import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Play, Clock, Captions, Hand, X, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const videos = [
  {
    id: 1,
    title: 'Aquecimento Completo - 10 Minutos',
    description: 'Rotina de aquecimento para preparar seu corpo antes de qualquer treino. Movimentos simples e eficazes.',
    duration: '10:00',
    category: 'Aquecimento',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🔥',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
  },
  {
    id: 2,
    title: 'Treino de Força para Iniciantes',
    description: 'Aprenda os movimentos básicos de força com explicações detalhadas de cada exercício.',
    duration: '25:00',
    category: 'Força',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '💪',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Alongamento Pós-Treino',
    description: 'Sequência de alongamentos para relaxar os músculos e melhorar a recuperação após o exercício.',
    duration: '15:00',
    category: 'Alongamento',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🧘',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Cardio em Casa - Sem Equipamentos',
    description: 'Treino cardiovascular que pode ser feito em qualquer lugar, usando apenas o peso do corpo.',
    duration: '20:00',
    category: 'Cardio',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🏃',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'Dança Inclusiva - Ritmos Variados',
    description: 'Aula de dança adaptada para todos os níveis e habilidades. Divirta-se enquanto se exercita!',
    duration: '30:00',
    category: 'Dança',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '💃',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Técnicas de Respiração e Relaxamento',
    description: 'Aprenda técnicas de respiração para reduzir o estresse e melhorar sua performance.',
    duration: '12:00',
    category: 'Bem-estar',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🌿',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const { toast } = useToast();

  const playVideo = (videoId: number) => {
    setActiveVideo(videoId);
    toast({
      title: 'Reproduzindo vídeo',
      description: 'Ative as legendas usando o botão CC no player.',
    });
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const activeVideoData = videos.find(v => v.id === activeVideo);

  return (
    <Layout>
      <div className="section-container">
        {/* Header da página */}
        <header className="mb-12">
          <h1 className="section-title">Vídeos Acessíveis</h1>
          <p className="section-subtitle">
            Todos os nossos vídeos possuem legendas sincronizadas e interpretação 
            em Libras, garantindo acesso completo ao conteúdo.
          </p>
        </header>

        {/* Modal de vídeo */}
        {activeVideo && activeVideoData && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 id="video-modal-title" className="font-display font-bold text-foreground">
                  {activeVideoData.title}
                </h2>
                <Button variant="ghost" size="icon" onClick={closeVideo} aria-label="Fechar vídeo">
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="aspect-video bg-muted">
                <iframe
                  src={`${activeVideoData.videoUrl}?cc_load_policy=1&cc_lang_pref=pt`}
                  title={activeVideoData.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">{activeVideoData.description}</p>
                <div className="flex gap-2 mt-4">
                  {activeVideoData.hasSubtitles && (
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      <Captions className="w-3 h-3" aria-hidden="true" />
                      Legendas disponíveis
                    </span>
                  )}
                  {activeVideoData.hasLibras && (
                    <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                      <Hand className="w-3 h-3" aria-hidden="true" />
                      Libras disponível
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Informação de acessibilidade */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Recursos de Acessibilidade nos Vídeos
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Captions className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Legendas</p>
                <p className="text-sm text-muted-foreground">Em todos os vídeos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Hand className="w-5 h-5 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Libras</p>
                <p className="text-sm text-muted-foreground">Interpretação disponível</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de vídeos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              className="card-accessible group"
              aria-labelledby={`video-title-${video.id}`}
            >
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-6xl" role="img" aria-hidden="true">
                  {video.thumbnail}
                </span>
                
                {/* Overlay com play */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" aria-hidden="true" />
                  </div>
                </div>

                {/* Duração */}
                <div className="absolute bottom-2 right-2 bg-foreground/80 text-background text-sm font-medium px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Badges de acessibilidade */}
              <div className="flex gap-2 mb-3">
                {video.hasSubtitles && (
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                    <Captions className="w-3 h-3" aria-hidden="true" />
                    Legendas
                  </span>
                )}
                {video.hasLibras && (
                  <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                    <Hand className="w-3 h-3" aria-hidden="true" />
                    Libras
                  </span>
                )}
              </div>

              {/* Categoria */}
              <span className="text-sm text-muted-foreground">
                {video.category}
              </span>

              <h2 
                id={`video-title-${video.id}`}
                className="text-lg font-display font-bold text-foreground mt-1 mb-2"
              >
                {video.title}
              </h2>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {video.description}
              </p>

              <Button className="w-full mt-auto" onClick={() => playVideo(video.id)}>
                <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                Assistir Vídeo
              </Button>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
