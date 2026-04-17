-- RUN THIS IN SUPABASE SQL EDITOR TO FIX "42501" ERRORS

-- Option 1: Allow Anonymous Inserts (Easiest for testing)
create policy "Allow anon insert"
  on public.architects for insert
  with check ( true );

-- Option 2: Allow Service Role (Always allowed by default, but ensures no explicit block)
-- (No action needed, Service Role bypasses RLS automatically)
