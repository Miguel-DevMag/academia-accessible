import React, { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
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
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AccessibilityToolbar() {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50"
      role="region"
      aria-label="Barra de acessibilidade"
    >
      {/* Botão principal de acessibilidade */}
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

          {/* Controles rápidos visíveis sempre */}
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

        {/* Painel expandido */}
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

                {/* VLibras - Widget externo */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.vlibras.gov.br/', '_blank')}
                  className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                  aria-label="Abrir VLibras para tradução em Libras"
                >
                  <span className="mr-2 font-bold">🤟</span>
                  VLibras
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
