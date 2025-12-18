# 🔧 Setup Supabase - Guia Passo a Passo

## Visão Geral

Este guia passo a passo mostra como configurar o Supabase corretamente para que Academia Accessible funcione 100%.

---

## 📋 Passo 1: Criar Conta no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Clique em "Sign in" (ou "Start your project" se for novo)
3. Use GitHub para autenticar (mais fácil)
4. Clique em "New project"
5. Preencha:
   - **Project name:** `academia-accessible`
   - **Database password:** Use algo forte (salve isso!)
   - **Region:** Escolha mais próximo de você (ex: South America - São Paulo)
6. Clique "Create new project"
7. Aguarde 2-5 minutos para criar

---

## 🔑 Passo 2: Obter Credenciais

### Encontrar API Keys
1. Abra seu projeto no Supabase
2. Vá em **Settings** > **API** (no menu lateral)
3. Você verá:
   - **Project URL** - Copie isso
   - **Anon/Public key** - Copie isso (NÃO a service role key!)

### Atualizar .env
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...
VITE_SUPABASE_PROJECT_ID=seu-projeto-id
```

---

## 💾 Passo 3: Executar SQL Migrations

### ⚠️ IMPORTANTE: Ordem Importa!

#### Migration 1: Tabelas e RLS
1. Vá em **SQL Editor** no Supabase
2. Clique em "New Query"
3. Cole o conteúdo de: `supabase/migrations/20251217201621_0a456790-24b6-4e3d-acf5-e89c63f8b0a3.sql`
4. Clique em "Run"
5. Deve aparecer "Success!" com ✅

#### Migration 2: Storage
1. Clique em "New Query" novamente
2. Cole o conteúdo de: `supabase/migrations/20251217232806_1e914849-076b-4a16-b6f1-e78cf79a2429.sql`
3. Clique em "Run"
4. Deve aparecer "Success!" com ✅

#### Migration 3: Trigger Admin (⭐ CRÍTICO)
1. Clique em "New Query" novamente
2. Cole o conteúdo de: `supabase/migrations/20251217235000_make_first_user_admin.sql`
3. Clique em "Run"
4. Deve aparecer "Success!" com ✅

✅ **Se todas três rodaram sem erro, banco está pronto!**

---

## 📦 Passo 4: Verificar Storage Bucket

1. Vá em **Storage** no menu lateral
2. Você deve ver um bucket chamado **"avatars"**
3. Se não estiver, clique em "Create new bucket":
   - **Name:** `avatars`
   - **Public bucket:** ✅ Ativado
   - Clique "Create bucket"

### Verificar Policies
1. Clique no bucket "avatars"
2. Vá em "Policies"
3. Você deve ver 4 policies (Anyone can view, Users can upload, etc)
4. Se não tiver, elas foram criadas pela migration

---

## 🔐 Passo 5: Configurar Authentication

### Habilitar Email/Password Auth
1. Vá em **Authentication** > **Providers**
2. Procure por "Email" (deve estar habilitado por padrão)
3. Certifique-se de que:
   - ✅ "Enable Email provider" está marcado
   - ✅ "Confirm email" está habilitado
   - ✅ "Secure password hashing" está habilitado

### Configurar Email Settings (Opcional)
1. Vá em **Authentication** > **Email Templates**
2. Você pode customizar templates de email se quiser

---

## ✅ Passo 6: Testar Configuração

### Teste Local
```bash
npm install
npm run dev
```

### Testar Signup
1. Abra http://localhost:8080
2. Clique em "Criar Conta"
3. Preencha:
   - Nome Completo: `João Silva`
   - Email: `joao@teste.com`
   - Senha: `Senha123!`
4. Clique "Criar Conta"
5. Você deve ser redirecionado para home

### Verificar Database
1. Volte ao Supabase console
2. Vá em **Table Editor**
3. Abra a tabela `profiles` - você deve ver sua conta criada
4. Abra a tabela `user_roles` - deve mostrar role = "admin"

✅ Se conseguiu, **está tudo certo!**

---

## 🐛 Problemas Comuns & Soluções

### ❌ "Erro ao conectar Supabase"
**Causa:** Credenciais erradas no .env
**Solução:**
1. Verificar se URL começa com `https://`
2. Verificar se key não tem espaços
3. Copiar novamente do Supabase Settings > API

### ❌ "SQL error: relation does not exist"
**Causa:** Migrations não foram executadas
**Solução:**
1. Executar as 3 migrations na ordem correta
2. Verificar se não houve erro em nenhuma (procura "Error" na resposta)

### ❌ "Primeira conta não é admin"
**Causa:** Terceira migration não foi executada
**Solução:**
1. Executar: `supabase/migrations/20251217235000_make_first_user_admin.sql`
2. Deletar primeira conta
3. Criar nova conta

### ❌ "Avatar upload falha"
**Causa:** Storage bucket não existe ou policies erradas
**Solução:**
1. Verificar se bucket "avatars" existe
2. Executar segunda migration para recriar policies
3. Teste upload novamente

### ❌ "Página /admin vazia ou redireciona para /"
**Causa:** Usuário não é admin
**Solução:**
1. Verificar tabela `user_roles` no SQL Editor
2. Se não tem admin, executar:
```sql
INSERT INTO public.user_roles (user_id, role) 
VALUES ('seu-user-id', 'admin');
```
3. Fazer logout e login novamente

---

## 🔒 Passo 7: Segurança (Produção)

Quando for para produção, faça:

### Rate Limiting
1. Vá em **Authentication** > **Rate Limiting**
2. Configure limites sensatos

### CORS
1. Vá em **Settings** > **API**
2. Adicione seu domínio em "Allowed Origins"
3. Exemplo: `https://seudominio.com`

### Backups
1. Vá em **Settings** > **Database**
2. Ative backups automáticos

---

## 📊 Verificar Tudo Está OK

Execute no SQL Editor:

```sql
-- Verificar tabelas existem
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- Verificar RLS está ativo
SELECT tablename, rowsecurity FROM pg_tables 
WHERE schemaname = 'public' AND tablename IN ('profiles', 'user_roles');

-- Verificar trigger existe
SELECT trigger_name FROM information_schema.triggers 
WHERE trigger_schema = 'public' AND trigger_name = 'on_auth_user_created';

-- Contar usuários
SELECT COUNT(*) as total_users FROM public.profiles;

-- Ver seus usuários e roles
SELECT p.full_name, p.email, ur.role 
FROM public.profiles p 
LEFT JOIN public.user_roles ur ON p.user_id = ur.user_id;
```

Se todos executarem sem erro, **está 100% OK!** ✅

---

## 🚀 Próximos Passos

1. ✅ Testar localmente (`npm run dev`)
2. ✅ Fazer signup e login
3. ✅ Testar admin panel
4. ✅ Testar upload de avatar
5. ✅ Testar acessibilidade
6. ✅ Deploy em Vercel

---

## 📞 Suporte

Se algo der errado:

1. Verificar [DOCUMENTACAO.md](DOCUMENTACAO.md#-troubleshooting)
2. Verificar logs no Supabase > Logs
3. Verificar console do navegador (F12)
4. Verificar arquivo `.env` contém as credenciais corretas

**Lembre-se:** O arquivo `.env` NÃO deve ser commitado no git!
