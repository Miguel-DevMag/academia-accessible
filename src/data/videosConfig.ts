/**
 * 📹 CONFIGURAÇÃO DE VÍDEOS DE TREINOS
 * 
 * Adicione seus vídeos aqui! É muito simples:
 * 1. Copie um dos exemplos abaixo
 * 2. Mude os valores para seus vídeos
 * 3. Salve o arquivo
 * 4. Pronto! Os vídeos aparecerão na página automaticamente
 * 
 * ⚡ DICA: Você pode usar:
 *    - URLs do YouTube: https://www.youtube.com/embed/ID
 *    - Vídeos locais: /videos/seu-video.mp4
 */

export interface VideoItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: 'Aquecimento' | 'Força' | 'Cardio' | 'Alongamento' | 'Dança' | 'Bem-estar' | 'Outro';
  hasSubtitles: boolean;
  hasLibras: boolean;
  thumbnail: string;
  videoUrl: string;
}

/**
 * COMO ADICIONAR UM VÍDEO NOVO:
 * 
 * OPÇÃO 1 - YouTube:
 * 1. Pegue o ID do YouTube:
 *    - URL: https://www.youtube.com/watch?v=9bZkp7q19f0
 *    - ID: 9bZkp7q19f0
 * 2. Use em: videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0'
 * 
 * OPÇÃO 2 - Vídeo Local (que você baixou):
 * 1. Copie seu arquivo .mp4 para: public/videos/
 * 2. Use em: videoUrl: '/videos/seu-video.mp4'
 * 
 * Exemplo com YouTube:
 * {
 *   id: 7,
 *   title: 'Seu título aqui',
 *   description: 'Descrição do vídeo',
 *   duration: '15:00',
 *   category: 'Força',
 *   hasSubtitles: true,
 *   hasLibras: true,
 *   thumbnail: '💪',
 *   videoUrl: 'https://www.youtube.com/embed/ID_DO_VIDEO',
 * },
 * 
 * Exemplo com Vídeo Local:
 * {
 *   id: 8,
 *   title: 'Meu Treino',
 *   description: 'Treino que eu gravei',
 *   duration: '20:00',
 *   category: 'Força',
 *   hasSubtitles: true,
 *   hasLibras: true,
 *   thumbnail: '💪',
 *   videoUrl: '/videos/meu-treino.mp4',  // ← Arquivo local!
 * },
 */

export const videosConfig: VideoItem[] = [
  // ==================== EXEMPLO 1: AQUECIMENTO ====================
  {
    id: 1,
    title: 'Aquecimento Completo - 10 Minutos',
    description: 'Rotina de aquecimento para preparar seu corpo antes de qualquer treino. Movimentos simples e eficazes.',
    duration: '10:00',
    category: 'Aquecimento',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🔥',
    videoUrl: '/videos/treino1.mp4',
  },

  // ==================== EXEMPLO 2: FORÇA ====================
  {
    id: 2,
    title: 'Treino de Força para Iniciantes',
    description: 'Aprenda os movimentos básicos de força com explicações detalhadas de cada exercício.',
    duration: '25:00',
    category: 'Força',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '💪',
    videoUrl: '/videos/treino2.mp4',
  },

  // ==================== EXEMPLO 3: ALONGAMENTO ====================
  {
    id: 3,
    title: 'Alongamento Pós-Treino',
    description: 'Sequência de alongamentos para relaxar os músculos e melhorar a recuperação após o exercício.',
    duration: '15:00',
    category: 'Alongamento',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🧘',
    videoUrl: '/videos/treino3.mp4',
  },

  // ==================== EXEMPLO 4: CARDIO ====================
  {
    id: 4,
    title: 'Cardio em Casa - Sem Equipamentos',
    description: 'Treino cardiovascular que pode ser feito em qualquer lugar, usando apenas o peso do corpo.',
    duration: '20:00',
    category: 'Cardio',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🏃',
    videoUrl: '/videos/treino4.mp4',
  },

  // ==================== EXEMPLO 5: DANÇA ====================
  {
    id: 5,
    title: 'Dança Inclusiva - Ritmos Variados',
    description: 'Aula de dança adaptada para todos os níveis e habilidades. Divirta-se enquanto se exercita!',
    duration: '30:00',
    category: 'Dança',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '💃',
    videoUrl: '/videos/treino5.mp4',
  },

  // ==================== EXEMPLO 6: BEM-ESTAR ====================
  {
    id: 6,
    title: 'Técnicas de Respiração e Relaxamento',
    description: 'Aprenda técnicas de respiração para reduzir o estresse e melhorar sua performance.',
    duration: '12:00',
    category: 'Bem-estar',
    hasSubtitles: true,
    hasLibras: true,
    thumbnail: '🌿',
    videoUrl: '/videos/treino6.mp4',
  },

  // ==================== ADICIONE SEUS VÍDEOS AQUI ====================
  // Copie um dos exemplos acima, mude os valores e descomente a linha abaixo:
  
  // {
  //   id: 7,
  //   title: 'SEU TÍTULO AQUI',
  //   description: 'Descrição do seu vídeo',
  //   duration: '20:00',
  //   category: 'Força',
  //   hasSubtitles: true,
  //   hasLibras: true,
  //   thumbnail: '💪',
  //   videoUrl: 'https://www.youtube.com/embed/SEU_ID_DO_VIDEO',
  // },

  // {
  //   id: 8,
  //   title: 'OUTRO VÍDEO',
  //   description: 'Outra descrição',
  //   duration: '15:00',
  //   category: 'Cardio',
  //   hasSubtitles: true,
  //   hasLibras: true,
  //   thumbnail: '🏃',
  //   videoUrl: 'https://www.youtube.com/embed/OUTRO_ID',
  // },
];

/**
 * EMOJIS DISPONÍVEIS PARA thumbnail:
 * 🔥 - Aquecimento/Intenso
 * 💪 - Força
 * 🏃 - Cardio
 * 🧘 - Alongamento/Yoga
 * 💃 - Dança
 * 🌿 - Bem-estar/Relaxamento
 * 🚴 - Bicicleta
 * 🤸 - Ginástica
 * ⛹️ - Esportes
 * 🏋️ - Musculação
 * 🥋 - Artes marciais
 * 🏊 - Natação
 * 🚣 - Remo
 * 🧗 - Escalada
 * 🤾 - Esportes em geral
 */

/**
 * CATEGORIAS DISPONÍVEIS:
 * - 'Aquecimento'
 * - 'Força'
 * - 'Cardio'
 * - 'Alongamento'
 * - 'Dança'
 * - 'Bem-estar'
 * - 'Outro'
 */

/**
 * COMO PEGAR O ID DO VIDEO DO YOUTUBE:
 * 
 * 1. Abra o vídeo no YouTube
 * 2. A URL será assim:
 *    https://www.youtube.com/watch?v=9bZkp7q19f0
 * 
 * 3. O ID é o que vem depois de "v="
 *    Neste caso: 9bZkp7q19f0
 * 
 * 4. Use na URL embed assim:
 *    https://www.youtube.com/embed/9bZkp7q19f0
 */
