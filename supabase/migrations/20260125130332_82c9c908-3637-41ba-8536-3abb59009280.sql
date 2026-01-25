-- Adicionar políticas que negam acesso APENAS para usuários anônimos
-- Usando TO anon sem ser RESTRICTIVE - isso permite que políticas para authenticated funcionem

-- Para profiles: negar SELECT para anon
CREATE POLICY "Anon cannot access profiles"
ON public.profiles
FOR SELECT
TO anon
USING (false);

-- Para user_roles: negar SELECT para anon  
CREATE POLICY "Anon cannot access user_roles"
ON public.user_roles
FOR SELECT
TO anon
USING (false);