import React, { useState, useCallback } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { 
  Plus, 
  Minus, 
  RotateCcw, 
  Sun, 
  Moon, 
  Eye, 
  Hand,
  Accessibility,
  X,
  ChevronDown,
  Volume2,
  VolumeX,
  Pause,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AccessibilityToolbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vlibrasVisible, setVlibrasVisible] = useState(false);
  const [vlibrasReady, setVlibrasReady] = useState(false);
  
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    highContrast,
    toggleHighContrast,
    darkMode,
    toggleDarkMode,
    reducedMotion,
    toggleReducedMotion,
  } = useAccessibility();

  const { speakPage, stop, pause, resume, isSpeaking, isPaused } = useTextToSpeech();

  const showVlibras = useCallback(() => {
    const container = document.getElementById('vlibras-container');
    if (container) {
      container.style.display = 'block';
    }
  }, []);

  const hideVlibras = useCallback(() => {
    const container = document.getElementById('vlibras-container');
    if (container) {
      container.style.display = 'none';
    }
  }, []);

  const loadAndShowVlibras = useCallback(() => {
    // Create container if not exists
    let container = document.getElementById('vlibras-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'vlibras-container';
      container.setAttribute('role', 'complementary');
      container.setAttribute('aria-label', 'Tradutor de Libras VLibras');

      const vwDiv = document.createElement('div');
      vwDiv.setAttribute('vw', '');
      vwDiv.className = 'enabled';

      const accessButton = document.createElement('div');
      accessButton.setAttribute('vw-access-button', '');
      accessButton.className = 'active';
      accessButton.setAttribute('role', 'button');
      accessButton.setAttribute('tabindex', '0');
      accessButton.setAttribute('aria-label', 'Ativar tradutor de Libras');

      const pluginWrapper = document.createElement('div');
      pluginWrapper.setAttribute('vw-plugin-wrapper', '');

      const topWrapper = document.createElement('div');
      topWrapper.className = 'vw-plugin-top-wrapper';

      pluginWrapper.appendChild(topWrapper);
      vwDiv.appendChild(accessButton);
      vwDiv.appendChild(pluginWrapper);
      container.appendChild(vwDiv);
      document.body.appendChild(container);
    }

    container.style.display = 'block';

    // Load script if not loaded
    if (!document.getElementById('vlibras-script')) {
      const script = document.createElement('script');
      script.id = 'vlibras-script';
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.async = true;
      script.type = 'text/javascript';

      script.onload = () => {
        const checkVLibras = setInterval(() => {
          // @ts-ignore
          if (window.VLibras && window.VLibras.Widget) {
            clearInterval(checkVLibras);
            try {
              // @ts-ignore
              new window.VLibras.Widget('https://vlibras.gov.br/app');
              setVlibrasReady(true);
            } catch (error) {
              console.error('Erro ao inicializar VLibras:', error);
            }
          }
        }, 100);

        // Timeout after 5s
        setTimeout(() => clearInterval(checkVLibras), 5000);
      };

      script.onerror = () => console.error('Erro ao carregar script VLibras');
      document.head.appendChild(script);
    } else {
      setVlibrasReady(true);
    }
  }, []);

  const toggleVlibras = useCallback(() => {
    if (vlibrasVisible) {
      hideVlibras();
      setVlibrasVisible(false);
    } else {
      if (!vlibrasReady) {
        loadAndShowVlibras();
      } else {
        showVlibras();
      }
      setVlibrasVisible(true);
    }
  }, [vlibrasVisible, vlibrasReady, hideVlibras, showVlibras, loadAndShowVlibras]);

  const handleTTS = () => {
    if (isSpeaking && !isPaused) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      speakPage();
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50"
      role="region"
      aria-label="Barra de acessibilidade"
    >
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-lg px-3 py-1"
            aria-expanded={isExpanded}
            aria-controls="accessibility-options"
          >
            <Accessibility className="w-5 h-5" aria-hidden="true" />
            <span>Acessibilidade</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              aria-hidden="true" 
            />
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm mr-2 hidden sm:inline">Fonte:</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={decreaseFontSize}
              aria-label="Diminuir tamanho da fonte"
              className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-sm min-w-[3ch] text-center" aria-live="polite">
              {Math.round(fontSize * 100)}%
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={increaseFontSize}
              aria-label="Aumentar tamanho da fonte"
              className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div 
            id="accessibility-options"
            className="border-t border-primary-foreground/20 bg-primary/95"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetFontSize}
                  className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                  aria-label="Restaurar tamanho padrão da fonte"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Fonte Padrão
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                  aria-pressed={darkMode}
                  aria-label={darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'}
                >
                  {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                  {darkMode ? 'Modo Claro' : 'Modo Escuro'}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleHighContrast}
                  className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                  aria-pressed={highContrast}
                  aria-label={highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {highContrast ? 'Contraste Normal' : 'Alto Contraste'}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleReducedMotion}
                  className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                  aria-pressed={reducedMotion}
                  aria-label={reducedMotion ? 'Ativar animações' : 'Reduzir animações'}
                >
                  <Hand className="w-4 h-4 mr-2" />
                  {reducedMotion ? 'Ativar Animações' : 'Reduzir Animações'}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleTTS}
                  className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                  aria-label={isSpeaking ? (isPaused ? 'Continuar leitura' : 'Pausar leitura') : 'Ler página em voz alta'}
                >
                  {isSpeaking ? (
                    isPaused ? (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Continuar
                      </>
                    ) : (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Pausar
                      </>
                    )
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 mr-2" />
                      Ler Página
                    </>
                  )}
                </Button>

                {isSpeaking && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={stop}
                    className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                    aria-label="Parar leitura"
                  >
                    <VolumeX className="w-4 h-4 mr-2" />
                    Parar
                  </Button>
                )}

                {/* VLibras Toggle Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleVlibras}
                  className={`border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 ${
                    vlibrasVisible ? 'bg-primary-foreground/20' : 'bg-transparent'
                  }`}
                  aria-pressed={vlibrasVisible}
                  aria-label={vlibrasVisible ? 'Desativar VLibras' : 'Ativar VLibras'}
                >
                  <Hand className="w-4 h-4 mr-2" />
                  🤟 {vlibrasVisible ? 'Fechar Libras' : 'Libras'}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                  aria-label="Fechar opções de acessibilidade"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
