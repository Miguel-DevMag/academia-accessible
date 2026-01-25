-- Remove as políticas restritivas que bloqueiam TODO o acesso
DROP POLICY IF EXISTS "Deny anonymous access to profiles" ON public.profiles;
DROP POLICY IF EXISTS "Deny anonymous access to user_roles" ON public.user_roles;

-- As políticas existentes já protegem adequadamente:
-- profiles: "Users can view their own profile" usa auth.uid() = user_id
-- profiles: "Admins can view all profiles" usa has_role()
-- user_roles: "Users can view their own role" usa auth.uid() = user_id
-- user_roles: "Admins can view all roles" usa has_role()
-- Usuários anônimos (sem auth.uid()) automaticamente falham nessas verificações