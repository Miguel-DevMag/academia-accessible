# 🛠️ Scripts e Comandos Úteis

## 📦 Instalação & Dependências

```bash
# Instalar dependências
npm install

# Instalar pacote específico
npm install <package-name>

# Instalar como devDependency
npm install --save-dev <package-name>

# Atualizar todas as dependências
npm update

# Verificar dependências desatualizadas
npm outdated

# Limpar cache
npm cache clean --force
```

---

## 🚀 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Iniciar em porta específica (se precisar mudar de 8080)
npm run dev -- --port 3000

# Build para produção
npm run build

# Build em modo development (com source maps)
npm run build:dev

# Preview do build (testa build localmente)
npm run preview
```

---

## 🧹 Linting & Código

```bash
# Verificar erros com ESLint
npm run lint

# Limpar cache ESLint
npm run lint -- --no-cache

# Criar build sem cache
rm -rf .vite && npm run build
```

---

## 🗄️ Banco de Dados (SQL)

### Verificações Úteis

```sql
-- Ver todas as tabelas públicas
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- Ver estrutura de tabela
\d public.profiles

-- Ver todas as funções
SELECT * FROM pg_catalog.pg_proc WHERE pronamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = 'public');

-- Ver triggers
SELECT trigger_name, event_object_table FROM information_schema.triggers 
WHERE trigger_schema = 'public';

-- Ver RLS policies
SELECT * FROM pg_policies WHERE schemaname = 'public';
```

### Queries Úteis

```sql
-- Contar usuários
SELECT COUNT(*) as total_usuarios FROM public.profiles;

-- Ver todos os usuários com roles
SELECT p.user_id, p.full_name, p.email, ur.role 
FROM public.profiles p 
LEFT JOIN public.user_roles ur ON p.user_id = ur.user_id 
ORDER BY p.created_at DESC;

-- Ver apenas admins
SELECT p.full_name, p.email 
FROM public.profiles p 
INNER JOIN public.user_roles ur ON p.user_id = ur.user_id 
WHERE ur.role = 'admin';

-- Ver usuários criados hoje
SELECT p.full_name, p.email, p.created_at 
FROM public.profiles p 
WHERE DATE(p.created_at) = CURRENT_DATE 
ORDER BY p.created_at DESC;

-- Ver usuários por mês
SELECT DATE_TRUNC('month', created_at) as mes, COUNT(*) as total 
FROM public.profiles 
GROUP BY DATE_TRUNC('month', created_at) 
ORDER BY mes DESC;
```

### Limpeza (Cuidado!)

```sql
-- ⚠️ DELETAR TODOS OS USUÁRIOS (cuidado!)
DELETE FROM public.profiles;

-- ⚠️ DELETAR APENAS USUÁRIOS SEM ADMIN
DELETE FROM public.profiles 
WHERE user_id NOT IN (
  SELECT user_id FROM public.user_roles WHERE role = 'admin'
);

-- ⚠️ RESETAR USER_ROLES (deixar todos como user)
DELETE FROM public.user_roles;
```

---

## 🐳 Docker (Se usar)

```bash
# Build imagem Docker
docker build -t academia-accessible .

# Rodar container
docker run -p 8080:8080 academia-accessible

# Ver logs
docker logs <container-id>

# Parar container
docker stop <container-id>
```

---

## 📱 Testing & Debugging

```bash
# Rodar com mode development
npm run build:dev

# Ver output do TypeScript
npx tsc --noEmit

# Verificar tipos
npx tsc --strict --noEmit

# Debug com Node
node --inspect-brk ./node_modules/.bin/vite
```

---

## 🔧 Git & Versionamento

```bash
# Ver status
git status

# Adicionar tudo
git add .

# Commit
git commit -m "Descrição do commit"

# Push
git push origin main

# Ver log
git log --oneline

# Desfazer último commit (local)
git reset --soft HEAD~1

# Criar branch
git checkout -b feature/minha-feature

# Merge branch
git merge feature/minha-feature
```

---

## 📊 Análise de Performance

```bash
# Tamanho do bundle
npm run build -- --report

# Análise de dependências
npm ls

# Ver tamanho de cada arquivo após build
cd dist && du -sh * | sort -hr
```

---

## 🔐 Variáveis de Ambiente

```bash
# Ver variáveis carregadas
console.log(import.meta.env)

# Em um arquivo .ts
if (import.meta.env.DEV) {
  console.log('Modo desenvolvimento')
} else {
  console.log('Modo produção')
}
```

---

## 📈 Deployment

```bash
# Build final para produção
npm run build

# Testar build localmente
npm run preview

# Ver tamanho do build
ls -lh dist/

# Comprimir para upload
tar -czf dist.tar.gz dist/
```

---

## 🆘 Troubleshooting Rápido

```bash
# Limpar tudo e reinstalar
rm -rf node_modules package-lock.json .vite dist
npm install

# Resetar cache npm
npm cache clean --force

# Verificar se node está instalado
node --version
npm --version

# Atualizar npm
npm install -g npm@latest

# Listar portas abertas (Linux/Mac)
lsof -i :8080

# Listar portas abertas (Windows PowerShell)
netstat -ano | findstr :8080

# Matar processo em porta (Windows)
taskkill /PID <PID> /F
```

---

## 🎯 Shortcuts Úteis

### No Terminal
```bash
# Histórico de comandos
history

# Limpar terminal
clear

# Sair (Ctrl+C)
# Autocomplete (Tab)
```

### No VS Code
```
Ctrl+` = Abrir terminal
Ctrl+P = Abrir arquivo rápido
Ctrl+Shift+P = Command palette
Ctrl+F = Buscar
Ctrl+H = Buscar e substituir
```

---

## 📋 Pre-commit Checklist

Antes de fazer commit:

```bash
# 1. Verificar erros
npm run lint

# 2. Verificar build
npm run build

# 3. Verificar se não tem console.logs
grep -r "console.log" src/

# 4. Verificar se não commitou .env
cat .gitignore | grep ".env"

# 5. Fazer commit
git add .
git commit -m "mensagem descritiva"
git push
```

---

## 🚀 Deploy Automático

### Com Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Deploy para produção
vercel --prod
```

### Com Heroku
```bash
# Instalar Heroku CLI
# Fazer login
heroku login

# Criar app
heroku create seu-app-name

# Deploy
git push heroku main
```

---

## 📚 Documentação Rápida

Abrir documentação em navegador:

```bash
# React docs
start https://react.dev

# TypeScript docs
start https://www.typescriptlang.org/docs

# Tailwind docs
start https://tailwindcss.com/docs

# Supabase docs
start https://supabase.com/docs

# shadcn/ui docs
start https://ui.shadcn.com
```

---

## 💡 Dicas

1. **Use `npm list`** para ver todas as dependências instaladas
2. **Ative WSL2** no Windows para melhor performance
3. **Use `nvm`** para gerenciar versões do Node
4. **Configure `.nvmrc`** com versão específica do Node
5. **Use `prettier`** para formatação de código
6. **Use `husky`** para git hooks automáticos
7. **Faça commits pequenos** com mensagens descritivas
8. **Sempre teste localmente** antes de fazer push

---

## 📞 Precisa de Ajuda?

Verificar:
- [DOCUMENTACAO.md](DOCUMENTACAO.md)
- [GUIA_RAPIDO.md](GUIA_RAPIDO.md)
- [SETUP_SUPABASE.md](SETUP_SUPABASE.md)
- [CHECKLIST.md](CHECKLIST.md)
