# 📹 Pasta de Vídeos Locais

## Como adicionar seus vídeos aqui

### ✅ Passo 1: Coloque seus vídeos nesta pasta

1. Você baixou um vídeo? (Ex: `meu-treino.mp4`)
2. Copie para esta pasta: `public/videos/`
3. Estrutura fica assim:

```
academia-accessible/
├── public/
│   └── videos/
│       ├── README.md
│       ├── aquecimento.mp4
│       ├── treino-força.mp4
│       └── cardio.mp4
```

### ✅ Passo 2: Atualize o arquivo de configuração

Abra: `src/data/videosConfig.ts`

Em vez de usar URL do YouTube, use o caminho local:

**❌ ANTES (YouTube):**
```typescript
videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
```

**✅ DEPOIS (Local):**
```typescript
videoUrl: '/videos/meu-treino.mp4',
```

### ✅ Exemplo Completo

```typescript
{
  id: 7,
  title: 'Meu Treino de Força',
  description: 'Treino que eu gravei',
  duration: '20:00',
  category: 'Força',
  hasSubtitles: true,
  hasLibras: true,
  thumbnail: '💪',
  videoUrl: '/videos/treino-força.mp4',  // ← CAMINHO LOCAL!
},
```

## 📋 Tipos de Vídeo Suportados

- ✅ `.mp4` - Recomendado (compatível com tudo)
- ✅ `.webm` - Ótima qualidade, menor tamanho
- ✅ `.ogg` - Alternativa
- ✅ `.mov` - De câmeras/iPhones
- ✅ `.avi` - Antigos

## 🎬 Comparação: Local vs YouTube

| Aspecto | Local | YouTube |
|---------|-------|---------|
| Carregamento | Rápido (sem internet precisa) | Lento (precisa internet) |
| Controle | Total | Limitado |
| Qualidade | A que você escolher | YouTube reduz |
| Privacidade | Privado | Público |
| Integração | Perfeita | Funciona bem |
| Espaço | Usa espaço do servidor | Não ocupa |

## 💡 Dicas

### ✨ Como converter um vídeo para MP4

Se você tem um vídeo em outro formato, use:

1. **Online (grátis):**
   - https://convertio.co/pt/
   - https://www.freeconvert.com/

2. **No Windows (grátis):**
   - Baixe: https://www.ffmpeg.org/download.html
   - Comando: `ffmpeg -i video.mov -c:v libx264 video.mp4`

### 📊 Tamanho de arquivo recomendado

- 🎯 **Ideal:** 50-200 MB
- ⚠️ **Máximo:** 500 MB (para não ficar muito lento)
- 💾 **Muito grande:** Comprima/converta

### 🎯 Onde encontrar vídeos bons para fitness

- YouTube (baixe com: https://www.y2mate.com/)
- Vimeo (similar ao YouTube)
- Seu próprio celular (grave você mesmo!)
- Sites de stock: Pexels, Pixabay

## 🔄 Fluxo Completo

1. 📥 Baixe o vídeo (ou grave o seu)
2. 📝 Converta para MP4 (se necessário)
3. 📁 Copie para `public/videos/`
4. ⚙️ Abra `src/data/videosConfig.ts`
5. ➕ Adicione seu vídeo com caminho: `/videos/seu-video.mp4`
6. 💾 Salve
7. 🎉 Pronto! Seu vídeo aparece na app!

## ❓ FAQ

### P: Posso usar YouTube E vídeos locais ao mesmo tempo?
**R:** Sim! Na mesma app você pode ter ambos.

### P: Meu vídeo não aparece
**R:** Verifique:
1. Arquivo está em `public/videos/`?
2. Nome do arquivo está correto?
3. Caminho em `videosConfig.ts` é `/videos/seu-video.mp4`?
4. Você fez `npm run dev` para recarregar?

### P: Posso mover vídeos para outro lugar?
**R:** Não recomendo. Use sempre `public/videos/`

### P: Como deletar um vídeo?
**R:** 
1. Delete o arquivo de `public/videos/`
2. Remove de `videosConfig.ts`
3. Salve

## 📞 Suporte

Se tiver dúvidas, entre em contato! 

---

**Última atualização:** 17 de Dezembro de 2025
**Status:** ✅ Pronto para usar
