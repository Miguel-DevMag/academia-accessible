# 🏋️ Academia Accessible

> Uma plataforma web moderna, totalmente acessível e 100% funcional para gerenciamento de academias.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue.svg)](https://tailwindcss.com)

## 🎯 Sobre o Projeto

**Academia Accessible** é uma plataforma web moderna construída com foco total em acessibilidade digital (WCAG 2.1 AA). O projeto oferece funcionalidades completas para gerenciamento de academias com recursos avançados de inclusão para pessoas com deficiências visuais, auditivas e motoras.

### ✨ Destaques

- 🎨 **100% Acessível** - WCAG 2.1 Level AA compliant
- 🌙 **Tema Customizável** - Dark mode, alto contraste, ajuste de fonte
- 👥 **Sistema de Usuários** - Autenticação segura com Supabase
- 👨‍💼 **Painel Admin** - Gerenciar usuários e permissões
- 📱 **Mobile-First** - Responsivo em todos os dispositivos
- 🎙️ **Text-to-Speech** - Leitura de conteúdo integrada
- 🎬 **VLibras** - Suporte a Libras
- 🔒 **Seguro** - RLS, autenticação JWT, validação de entrada
- 📦 **Sem configuração complexa** - Deploy em 1 clique

---

## 🚀 Começar Rapidamente

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Supabase (gratuita em https://supabase.com)

### Instalação Rápida

```bash
# 1. Clonar repositório
git clone <seu-repo-url>
cd academia-accessible

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
# Copiar .env.example para .env
# Adicionar suas credenciais Supabase

# 4. Setup database (em supabase.com console)
# Executar os 3 SQL files em supabase/migrations/

# 5. Iniciar desenvolvimento
npm run dev
```

Abra [http://localhost:8080](http://localhost:8080) no navegador!

**👉 Para guia completo, veja [GUIA_RAPIDO.md](GUIA_RAPIDO.md)**

---

## 📚 Documentação

- 📖 [Documentação Completa](DOCUMENTACAO.md) - Guia detalhado com todas as funcionalidades
- ⚡ [Guia Rápido](GUIA_RAPIDO.md) - Setup em 5 minutos
- ✅ [Checklist](CHECKLIST.md) - Status do projeto e testing

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **React Query** - State management
- **Zod** - Validation

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Database
- **Supabase Auth** - Authentication
- **Supabase Storage** - File storage
- **PostgREST** - API

### Ferramentas
- **ESLint** - Code quality
- **Vite** - Development & build

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # UI components (shadcn/ui)
│   └── [componentes principais]
├── contexts/           # React Context (Auth, Accessibility)
├── hooks/              # Custom hooks
├── pages/              # Páginas da app
├── integrations/       # Integrações (Supabase)
├── lib/                # Utilitários
├── App.tsx            # Root component
└── main.tsx           # Entry point

supabase/
├── migrations/        # SQL migrations
├── functions/         # Edge functions
└── config.toml       # Configuração local
```

---

## 🔐 Funcionalidades Principais

### 👤 Autenticação
- ✅ Signup com email e senha
- ✅ Login seguro
- ✅ Logout
- ✅ Session persistence
- ✅ Auto token refresh

### 👨‍💼 Painel Admin
- ✅ Listar usuários
- ✅ Promover/remover admin
- ✅ Deletar usuários
- ✅ Ver estatísticas
- ✅ Acesso restrito por role

### 👥 Perfil de Usuário
- ✅ Editar nome completo
- ✅ Upload de avatar
- ✅ Ver informações da conta
- ✅ Logout

### ♿ Acessibilidade
- ✅ Ajuste de tamanho de fonte
- ✅ Modo escuro/claro
- ✅ Alto contraste
- ✅ Text-to-Speech
- ✅ VLibras integrado
- ✅ Navegação por teclado
- ✅ Skip links
- ✅ ARIA labels

### 📄 Páginas
- ✅ Home
- ✅ Treinos
- ✅ Suplementos
- ✅ Vídeos
- ✅ Depoimentos
- ✅ Contato
- ✅ 404 Not Found

---

## 🚀 Deploy

### Vercel (Recomendado)
1. Push para GitHub
2. Conectar em [vercel.com](https://vercel.com)
3. Adicionar variáveis de ambiente
4. Deploy automático!

### Outras plataformas
```bash
npm run build
# Deploy pasta 'dist/' para seu servidor
```

---

## 🧪 Testando

### Teste Manual
```bash
# 1. Signup com primeira conta → deve ser ADMIN
# 2. Logout e faça login
# 3. Acesse /admin com conta admin
# 4. Teste acessibilidade (Toolbar)
# 5. Teste mobile responsiveness
```

### Testes de Acessibilidade
- Testar com leitor de tela (NVDA/JAWS)
- Navegação completa por teclado
- Zoom até 200%
- Modo escuro/alto contraste
- Text-to-speech em cada página

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Erro de módulo @/ | Reiniciar dev server |
| Auth não funciona | Verificar .env com credenciais |
| Primeira conta não admin | Executar migration 20251217235000 |
| Storage 404 | Criar bucket 'avatars' em Supabase Storage |
| Estilos não funcionam | Limpar `.vite` e reinstalar |

Veja [DOCUMENTACAO.md](DOCUMENTACAO.md#-troubleshooting) para mais soluções.

---

## 📊 Status do Projeto

✅ **PRONTO PARA PRODUÇÃO**

- [x] Autenticação completa
- [x] Database configurado
- [x] Admin panel funcional
- [x] Acessibilidade implementada
- [x] Mobile responsivo
- [x] Documentação completa
- [x] Zero erros de compilação

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- [Supabase](https://supabase.com) - Backend infrastructure
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React](https://react.dev) - UI Library
- [VLibras](https://vlibras.gov.br) - Libras support

---

## 📞 Contato & Suporte

- 📖 Documentação: [DOCUMENTACAO.md](DOCUMENTACAO.md)
- ⚡ Guia Rápido: [GUIA_RAPIDO.md](GUIA_RAPIDO.md)
- ✅ Checklist: [CHECKLIST.md](CHECKLIST.md)

**Versão:** 1.0.0  
**Status:** Production Ready ✅  
**Data:** December 17, 2025
