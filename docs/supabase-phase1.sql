create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('hekfield', 'contact')),
  name text not null,
  email text,
  phone text,
  payment_preference text,
  tier_of_interest text,
  subject text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  notes text
);

create index if not exists leads_created_at_desc_idx on public.leads (created_at desc);
create index if not exists leads_source_created_at_idx on public.leads (source, created_at desc);
create index if not exists leads_status_created_at_idx on public.leads (status, created_at desc);
create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_phone_idx on public.leads (phone);

alter table public.leads enable row level security;

create policy "service role can manage leads"
on public.leads
as permissive
for all
to service_role
using (true)
with check (true);
