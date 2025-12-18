# 📚 Academia Accessible - Documentação Completa

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Configuração Inicial](#configuração-inicial)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Guia de Desenvolvimento](#guia-de-desenvolvimento)
6. [Funcionalidades Principais](#funcionalidades-principais)
7. [Banco de Dados](#banco-de-dados)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

**Academia Accessible** é uma plataforma web moderna e totalmente acessível para gerenciamento de academias, com foco especial em inclusão digital. O projeto é construído com React, TypeScript, Tailwind CSS e Supabase, oferecendo uma experiência otimizada para todos os usuários, incluindo pessoas com deficiências visuais, auditivas e motoras.

### Principais Características:
- ✨ **Interface 100% Acessível** com suporte para leitores de tela, navegação por teclado
- 🎨 **Tema Personalizável** com modo escuro, alto contraste e ajuste de tamanho de fonte
- 👥 **Sistema de Usuários** com autenticação via Supabase Auth
- 👨‍💼 **Painel Administrativo** para gerenciar usuários e permissões
- 📸 **Upload de Avatar** com armazenamento em Supabase Storage
- 🎙️ **Text-to-Speech** para leitura de conteúdo
- 📱 **Responsivo** e otimizado para mobile
- 💪 **Gerenciamento de Treinos** com vídeos e suplementos
- 📝 **Sistema de Depoimentos** e contato

---

## 🚀 Configuração Inicial

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou yarn
- Conta no Supabase (https://supabase.com)
- Git

### Passo 1: Clonar o Repositório
```bash
git clone <seu-repositorio-url>
cd academia-accessible
```

### Passo 2: Instalar Dependências
```bash
npm install
```

### Passo 3: Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=https://[seu-projeto].supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=seu_chave_publica_aqui
```

**Como obter essas chaves:**
1. Acesse [supabase.com](https://supabase.com)
2. Crie ou acesse seu projeto
3. Vá em Settings > API
4. Copie o URL do projeto e a chave anônima (Anon key)

### Passo 4: Configurar Banco de Dados Supabase

#### 4.1 Criar as Tabelas
Acesse o Supabase console > SQL Editor e execute os scripts em ordem:

1. **Primeira Migration** (`20251217201621_0a456790-24b6-4e3d-acf5-e89c63f8b0a3.sql`):
   - Cria enums e tabelas
   - Configura Row Level Security (RLS)
   - Define funções de verificação de role

2. **Segunda Migration** (`20251217232806_1e914849-076b-4a16-b6f1-e78cf79a2429.sql`):
   - Cria bucket de storage para avatars
   - Configura políticas de acesso

3. **Terceira Migration** (`20251217235000_make_first_user_admin.sql`):
   - **IMPORTANTE**: Atualiza o trigger para tornar o primeiro usuário um admin
   - Execute esta para funcionalidade completa de admin

### Passo 5: Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`

---

## 📁 Estrutura do Projeto

```
academia-accessible/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ui/             # Componentes UI do shadcn/ui
│   │   └── [componentes principais]
│   ├── contexts/           # Contextos React (Auth, Accessibility)
│   ├── hooks/              # Custom hooks
│   ├── integrations/
│   │   └── supabase/       # Cliente e tipos Supabase
│   ├── pages/              # Páginas da aplicação
│   ├── lib/                # Funções utilitárias
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── supabase/
│   ├── config.toml        # Configuração local Supabase
│   ├── migrations/        # Arquivos de migration SQL
│   └── functions/         # Edge Functions Supabase
├── public/                # Arquivos estáticos
├── package.json           # Dependências do projeto
├── vite.config.ts        # Configuração Vite
├── tailwind.config.ts    # Configuração Tailwind
├── tsconfig.json         # Configuração TypeScript
└── eslint.config.js      # Configuração ESLint
```

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS** - Styling utilitário
- **shadcn/ui** - Componentes acessíveis
- **React Router** - Roteamento
- **React Query** - Gerenciamento de estado

### Backend & Database
- **Supabase** - Backend as a Service
- **PostgreSQL** - Banco de dados
- **Supabase Auth** - Autenticação
- **Supabase Storage** - Armazenamento de arquivos

### Ferramentas de Desenvolvimento
- **ESLint** - Linting
- **Lovable** - IDE Lovable integrado

---

## 💻 Guia de Desenvolvimento

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Build em modo desenvolvimento
npm run build:dev

# Verificar erros com ESLint
npm run lint

# Preview do build de produção
npm run preview
```

### Padrões de Código

#### Componentes
```tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick} role="button" tabIndex={0}>
      {title}
    </div>
  );
};

export default MyComponent;
```

#### Hooks Custom
```tsx
import { useState, useCallback } from 'react';

export function useMyHook() {
  const [state, setState] = useState(false);
  
  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);
  
  return { state, toggle };
}
```

### Acessibilidade

#### Checklist de Acessibilidade
- ✅ Usar labels para inputs
- ✅ Adicionar aria-labels onde necessário
- ✅ Testar com navegação por teclado
- ✅ Usar cores com contraste suficiente
- ✅ Adicionar descrições para imagens (alt text)
- ✅ Estrutura semântica correta (h1, h2, nav, etc)
- ✅ Mensagens de erro com aria-describedby

#### Exemplo de Componente Acessível
```tsx
<div>
  <label htmlFor="email" className="text-foreground font-medium">
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="seu@email.com"
    aria-describedby={error ? 'email-error' : undefined}
  />
  {error && (
    <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
      {error}
    </p>
  )}
</div>
```

---

## 🗄️ Banco de Dados

### Tabelas Principais

#### `profiles`
```sql
- id (UUID) - PK
- user_id (UUID) - FK para auth.users
- full_name (TEXT)
- avatar_url (TEXT)
- email (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### `user_roles`
```sql
- id (UUID) - PK
- user_id (UUID) - FK para auth.users
- role (app_role) - 'admin' ou 'user'
```

#### `app_role` ENUM
```sql
VALUES ('admin', 'user')
```

### Row Level Security (RLS)

Todas as tabelas possuem políticas RLS para:
- Usuários veem apenas seu próprio perfil (exceto admins)
- Admins podem ver e gerenciar todos os perfis
- Storage de avatars é público para leitura, mas apenas proprietários podem upload/delete

### Funções Importantes

#### `has_role(user_id, role)`
Verifica se um usuário tem um papel específico.

#### `handle_new_user()`
Trigger disparado quando um novo usuário é criado. **Atualizado** para tornar o primeiro usuário um admin.

```sql
-- Lógica:
- Cria profile do usuário
- Conta usuários existentes
- Se count = 1 → role = 'admin'
- Se count > 1 → role = 'user'
```

---

## 📄 Funcionalidades Principais

### 1. Autenticação
- **Signup**: Criar nova conta com email e senha
- **Login**: Autenticar usuário existente
- **Logout**: Sair da conta
- **Proteção**: Rotas protegidas redirecionam para /auth

### 2. Perfil de Usuário
- Editar nome completo
- Upload de foto de perfil
- Visualizar informações da conta
- Deletar conta (em admin panel)

### 3. Painel Administrativo
- **Acesso**: Apenas usuários com role 'admin'
- **Funcionalidades**:
  - Listar todos os usuários
  - Ver estatísticas (total de usuários, admins)
  - Promover usuários a admin
  - Remover permissão de admin
  - Deletar usuários

### 4. Acessibilidade
- **Tema**: Light/Dark mode customizável
- **Contraste**: Modo de alto contraste
- **Tipografia**: Ajuste de tamanho de fonte (0.8x até 1.5x)
- **Movimento**: Redução de movimento respeitando preferências do sistema
- **Text-to-Speech**: Leitura de conteúdo em voz alta

### 5. Páginas Principais
- **Home** (/): Página inicial com hero section
- **Treinos** (/treinos): Galeria de treinos disponíveis
- **Suplementos** (/suplementos): Informações de suplementos
- **Vídeos** (/videos): Biblioteca de vídeos
- **Depoimentos** (/depoimentos): Feedbacks de usuários
- **Contato** (/contato): Formulário de contato
- **Auth** (/auth): Login/Signup
- **Perfil** (/perfil): Edição de perfil (requer autenticação)
- **Admin** (/admin): Painel administrativo (requer admin)
- **404**: Página não encontrada

---

## 🚀 Deployment

### Build de Produção
```bash
npm run build
```

Cria pasta `dist/` pronta para deploy.

### Deploy no Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte seu repositório no Vercel (vercel.com)
3. Configure variáveis de ambiente:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
4. Deploy automático em cada push

### Deploy Manual
```bash
# Build local
npm run build

# Fazer upload da pasta 'dist/' para seu servidor/CDN
```

### Configuração de Domínio Personalizado
1. No Vercel > Project Settings > Domains
2. Adicionar domínio
3. Seguir instruções de DNS

---

## 🐛 Troubleshooting

### Problema: "Cannot find module @/components"
**Solução**: Verificar se `vite.config.ts` possui alias corretamente configurado
```typescript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
```

### Problema: Erro de autenticação Supabase
**Solução**:
1. Verificar se `.env` contém `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`
2. Confirmar que as chaves estão corretas no Supabase
3. Verificar CORS settings no Supabase

### Problema: Usuário não consegue fazer upload de avatar
**Solução**:
1. Verificar se bucket 'avatars' existe em Supabase Storage
2. Confirmar RLS policies estão corretas
3. Testar permissões de Storage no Supabase console

### Problema: Primeira conta não virou admin
**Solução**:
1. Executar migration `20251217235000_make_first_user_admin.sql`
2. Verificar se trigger `on_auth_user_created` está ativo
3. Deletar primeira conta e criar nova

### Problema: Compilação com erro TypeScript
**Solução**:
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar cache Vite
rm -rf .vite

# Tentar build novamente
npm run build
```

### Problema: Estilos Tailwind não aparecem
**Solução**:
1. Verificar se arquivo `src/index.css` importa Tailwind
2. Confirmar `tailwind.config.ts` aponta para arquivos corretos
3. Reiniciar servidor dev

### Problema: Função RLS retorna erro de permissão
**Solução**:
1. Verificar se usuário está autenticado (`auth.uid()`)
2. Confirmar user_id na tabela `user_roles`
3. Testar policies diretamente no SQL Editor Supabase

---

## 📞 Suporte

Para mais informações:
- Documentação Supabase: https://supabase.com/docs
- Documentação React: https://react.dev
- Documentação Tailwind: https://tailwindcss.com
- WCAG 2.1 (Acessibilidade): https://www.w3.org/WAI/WCAG21/quickref

---

## 📝 Changelog

### v1.0.0 (2025-12-17)
- ✅ Criação do projeto inicial
- ✅ Setup Supabase com autenticação
- ✅ Sistema de roles (admin/user)
- ✅ Painel administrativo funcional
- ✅ Modo de acessibilidade com múltiplas opções
- ✅ Pages completas (Treinos, Suplementos, Vídeos, Depoimentos, Contato)
- ✅ Upload de avatars
- ✅ System dark mode
- ✅ Trigger para primeiro usuário ser admin
- ✅ Text-to-Speech integrado

---

## ✨ Status da Aplicação

✅ **100% Funcional**

- [x] Autenticação completa
- [x] Database configurado
- [x] Acessibilidade implementada
- [x] Admin panel funcional
- [x] RLS policies ativas
- [x] Storage configurado
- [x] Responsividade mobile
- [x] Deploy pronto

**Tudo pronto para usar em produção!** 🚀
