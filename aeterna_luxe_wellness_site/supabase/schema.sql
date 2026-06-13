-- Aeterna Supabase Starter Schema
-- Run this in the Supabase SQL Editor.
-- This schema supports lead forms, newsletter subscribers, booking requests, services, products, memberships, gift cards, and purchase records.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  interest text,
  message text not null,
  source text default 'contact_form',
  status text not null default 'new',
  notes text
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  email text not null unique,
  name text,
  source text default 'website',
  status text not null default 'subscribed'
);

create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  service_slug text not null,
  preferred_duration text,
  preferred_date text,
  preferred_time text,
  earliest_available boolean not null default false,
  add_ons text[] default '{}',
  notes text,
  understands_consult_required boolean not null default false,
  status text not null default 'new',
  staff_notes text
);

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  interest text not null,
  service_slug text,
  message text,
  understands_consult_required boolean not null default false,
  status text not null default 'new'
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  category text not null,
  summary text not null,
  description text,
  durations text[] default '{}',
  price_label text,
  starting_price integer,
  consult_required boolean default false,
  featured boolean default false,
  image text,
  active boolean not null default true
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  category text not null,
  summary text not null,
  price_label text,
  unit_amount integer,
  consult_required boolean default false,
  consultation_deposit boolean default false,
  featured boolean default false,
  image text,
  details text[] default '{}',
  benefits text[] default '{}',
  pairings text[] default '{}',
  stripe_price_id text,
  active boolean not null default true
);

create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  price_label text not null,
  monthly_amount integer,
  summary text,
  best_for text,
  value_label text,
  features text[] default '{}',
  popular boolean default false,
  stripe_price_id text,
  active boolean not null default true
);

create table if not exists public.gift_card_purchases (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  buyer_name text,
  buyer_email text,
  recipient_name text,
  recipient_email text,
  amount integer not null,
  message text,
  stripe_checkout_session_id text,
  status text not null default 'pending'
);

create table if not exists public.checkout_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  stripe_event_id text unique,
  type text,
  payload jsonb
);

alter table public.booking_requests
  add column if not exists understands_consult_required boolean not null default false;

alter table public.booking_requests
  add column if not exists preferred_duration text;

alter table public.booking_requests
  add column if not exists earliest_available boolean not null default false;

alter table public.consultation_requests
  add column if not exists service_slug text;

alter table public.products
  add column if not exists featured boolean default false;

alter table public.products
  add column if not exists consultation_deposit boolean default false;

alter table public.products
  add column if not exists image text;

alter table public.products
  add column if not exists details text[] default '{}';

alter table public.products
  add column if not exists benefits text[] default '{}';

alter table public.products
  add column if not exists pairings text[] default '{}';

alter table public.memberships
  add column if not exists best_for text;

alter table public.memberships
  add column if not exists value_label text;

alter table public.memberships
  add column if not exists popular boolean default false;

alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.booking_requests enable row level security;
alter table public.consultation_requests enable row level security;
alter table public.services enable row level security;
alter table public.products enable row level security;
alter table public.memberships enable row level security;
alter table public.gift_card_purchases enable row level security;
alter table public.checkout_events enable row level security;

-- Public insert policies for forms.
drop policy if exists "Public can create leads" on public.leads;
create policy "Public can create leads" on public.leads for insert with check (true);

drop policy if exists "Public can subscribe" on public.newsletter_subscribers;
create policy "Public can subscribe" on public.newsletter_subscribers for insert with check (true);

drop policy if exists "Public can request bookings" on public.booking_requests;
create policy "Public can request bookings" on public.booking_requests for insert with check (true);

drop policy if exists "Public can request consultations" on public.consultation_requests;
create policy "Public can request consultations" on public.consultation_requests for insert with check (true);

drop policy if exists "Public can create gift card purchases" on public.gift_card_purchases;
create policy "Public can create gift card purchases" on public.gift_card_purchases for insert with check (true);

-- Public read policies for public catalog data.
drop policy if exists "Public can read active services" on public.services;
create policy "Public can read active services" on public.services for select using (active = true);

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products" on public.products for select using (active = true);

drop policy if exists "Public can read active memberships" on public.memberships;
create policy "Public can read active memberships" on public.memberships for select using (active = true);

-- Private read/update should be done through server code using SUPABASE_SERVICE_ROLE_KEY only.
