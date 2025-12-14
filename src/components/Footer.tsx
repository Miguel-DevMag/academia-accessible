import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="bg-foreground text-background"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-background rounded-lg w-fit"
              aria-label="Academia - Ir para página inicial"
            >
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
              </div>
              <span className="text-xl font-display font-bold">
                Academia
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Sistema de gestão para academia de fitness com foco em acessibilidade 
              para todos os usuários.
            </p>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links do rodapé">
            <h3 className="text-lg font-display font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Treinos', href: '/treinos' },
                { name: 'Suplementos', href: '/suplementos' },
                { name: 'Vídeos Acessíveis', href: '/videos' },
                { name: 'Depoimentos', href: '/depoimentos' },
                { name: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors focus-visible:ring-2 focus-visible:ring-background rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>contato@academia.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Rua das Academias, 123<br />São Paulo - SP</span>
              </li>
            </ul>
          </div>

          {/* Acessibilidade */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              Acessibilidade
            </h3>
            <p className="text-background/70 leading-relaxed mb-4">
              Este site foi desenvolvido seguindo as diretrizes WCAG 2.1 
              para garantir acesso a todas as pessoas.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/50">
              <span>Compatível com leitores de tela</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Academia. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-secondary" aria-label="amor" /> para inclusão
          </p>
        </div>
      </div>
    </footer>
  );
}
