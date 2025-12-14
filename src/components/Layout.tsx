import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AccessibilityToolbar } from './AccessibilityToolbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link para navegação por teclado */}
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Pular para o conteúdo principal
      </a>

      <AccessibilityToolbar />
      <Header />
      
      <main 
        id="main-content" 
        className="flex-grow mt-[48px]"
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
