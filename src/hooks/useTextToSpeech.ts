import { useState, useCallback, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      toast({
        variant: 'destructive',
        title: 'Não suportado',
        description: 'Seu navegador não suporta leitura de texto.',
      });
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    // Try to get a Portuguese voice
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(voice => 
      voice.lang.startsWith('pt') || voice.lang.includes('BR')
    );
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [toast]);

  const pause = useCallback(() => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  const speakPage = useCallback(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      const text = mainContent.innerText;
      speak(text);
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível encontrar o conteúdo da página.',
      });
    }
  }, [speak, toast]);

  return {
    speak,
    speakPage,
    pause,
    resume,
    stop,
    isSpeaking,
    isPaused,
  };
}
