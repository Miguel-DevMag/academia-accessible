import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationLinks = [
  { name: 'Início', href: '/' },
  { name: 'Treinos', href: '/treinos' },
  { name: 'Suplementos', href: '/suplementos' },
  { name: 'Vídeos', href: '/videos' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Contato', href: '/contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-[48px] z-40 bg-background/95 backdrop-blur-sm border-b border-border"
      role="banner"
    >
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label="Academia - Ir para página inicial"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-shadow">
              <Dumbbell className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              Academia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold px-6"
            >
              <Link to="/contato">Matricule-se</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                asChild
                className="mt-4 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold"
              >
                <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                  Matricule-se
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
