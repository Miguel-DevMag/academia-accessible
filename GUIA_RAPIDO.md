# ⚡ Guia Rápido - Academia Accessible

## 🚀 Começar em 5 minutos

### 1️⃣ Instalar e Rodar
```bash
npm install
npm run dev
```

### 2️⃣ Configurar Supabase
1. Criar projeto em https://supabase.com
2. Copiar URL e chave anônima
3. Colar em `.env`:
```env
VITE_SUPABASE_URL=seu_url
VITE_SUPABASE_PUBLISHABLE_KEY=sua_chave
```

### 3️⃣ Setup do Database
Executar no SQL Editor do Supabase (em ordem):
1. `supabase/migrations/20251217201621_*.sql`
2. `supabase/migrations/20251217232806_*.sql`
3. `supabase/migrations/20251217235000_*.sql` ⭐ **IMPORTANTE**

### 4️⃣ Testar
- Abrir http://localhost:8080
- Clicar em "Criar Conta"
- Primeira conta será **ADMIN** automaticamente
- Entrar em Admin Panel

---

## 📁 Estrutura Rápida

```
src/
├── pages/        ← Páginas (Auth, Admin, Perfil, etc)
├── components/   ← Componentes reutilizáveis
├── contexts/     ← Auth e Accessibility
├── hooks/        ← Custom hooks
└── integrations/ ← Supabase client
```

---

## 🔧 Comandos Úteis

```bash
npm run dev          # Dev server
npm run build        # Build produção
npm run lint         # Verificar erros
npm run preview      # Preview do build
```

---

## 🐛 Erros Comuns

| Erro | Solução |
|------|---------|
| "Cannot find module @/" | Reiniciar dev server |
| Auth não funciona | Verificar .env |
| Storage não funciona | Executar migration de storage |
| Usuário não é admin | Executar migration 20251217235000 |

---

## 🔐 Sistema de Admin

### Como funciona:
- **Primeira pessoa a se registrar** = Admin automático ✨
- **Outras contas** = User comum
- **Admin pode**:
  - Ver todos usuários
  - Promover/remover admin
  - Deletar usuários

### Acessar:
- Fazer login com conta admin
- Ir em `/admin` ou pelo menu

---

## ♿ Acessibilidade

### Funcionalidades:
- 🎨 Alto contraste
- 🌙 Modo escuro
- 📏 Ajuste de fonte
- 🎙️ Leitura em voz alta
- ⌨️ Navegação por teclado
- 🎬 Redução de movimento

### Encontrar:
- Botão no Header (superior direito)
- Abrir "Acessibilidade"

---

## 📱 Páginas Disponíveis

| URL | Nome | Requer Login |
|-----|------|-------------|
| `/` | Home | ❌ |
| `/treinos` | Treinos | ❌ |
| `/suplementos` | Suplementos | ❌ |
| `/videos` | Vídeos | ❌ |
| `/depoimentos` | Depoimentos | ❌ |
| `/contato` | Contato | ❌ |
| `/auth` | Login/Signup | ❌ |
| `/perfil` | Meu Perfil | ✅ |
| `/admin` | Admin Panel | ✅ (Admin) |

---

## 🚀 Deploy (Vercel)

```bash
# 1. Push para GitHub
git push origin main

# 2. Conectar no Vercel
# - Importar repositório
# - Adicionar variáveis de ambiente (.env)
# - Deploy automático!
```

---

## 📞 Precisa de Ajuda?

Verificar `DOCUMENTACAO.md` para guia completo!

### Status: ✅ Pronto para Produção

