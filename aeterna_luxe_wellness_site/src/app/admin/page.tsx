import { services } from "@/data/services";
import { products } from "@/data/products";
import { memberships } from "@/data/memberships";
import { supabaseAdmin } from "@/lib/supabase";
import { meta } from "@/lib/seo";

export const metadata = meta({ title:"Admin Preview", path:"/admin" });

type AdminPageProps = {
  searchParams?: Promise<{ synced?: string; sync_error?: string }>;
};

async function getAdminData() {
  const supabase = supabaseAdmin();
  if(!supabase) return null;

  const [leads, bookings, consultations, newsletter, serviceCount, productCount, membershipCount] = await Promise.all([
    supabase.from("leads").select("id,created_at,name,email,interest,status,source").order("created_at", { ascending:false }).limit(5),
    supabase.from("booking_requests").select("id,created_at,name,email,service_slug,preferred_date,preferred_time,earliest_available,status").order("created_at", { ascending:false }).limit(5),
    supabase.from("consultation_requests").select("id,created_at,name,email,interest,service_slug,status").order("created_at", { ascending:false }).limit(5),
    supabase.from("newsletter_subscribers").select("id", { count:"exact", head:true }),
    supabase.from("services").select("id", { count:"exact", head:true }),
    supabase.from("products").select("id", { count:"exact", head:true }),
    supabase.from("memberships").select("id", { count:"exact", head:true })
  ]);

  return {
    leads:leads.data || [],
    bookings:bookings.data || [],
    consultations:consultations.data || [],
    newsletterCount:newsletter.count || 0,
    serviceCount:serviceCount.count || 0,
    productCount:productCount.count || 0,
    membershipCount:membershipCount.count || 0,
    errors:[leads.error, bookings.error, consultations.error, newsletter.error, serviceCount.error, productCount.error, membershipCount.error].map(error => error?.message).filter((message): message is string => Boolean(message))
  };
}

function Field({ label, value }:{label:string; value:string | number | null | undefined}) {
  return <p className="text-sm leading-6 text-cocoa/70"><span className="font-semibold text-espresso">{label}:</span> {value || "—"}</p>;
}

export default async function AdminPage({ searchParams }:AdminPageProps){
  const params = await searchParams;
  const adminConfigured = Boolean(process.env.ADMIN_BASIC_USER && process.env.ADMIN_BASIC_PASSWORD);
  const supabaseConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  const data = adminConfigured && supabaseConfigured ? await getAdminData() : null;

  return <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
    <p className="text-xs uppercase tracking-luxury text-sage">Internal Admin</p>
    <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">Aeterna Admin Preview</h1>
    <p className="mt-4 max-w-3xl text-cocoa/70">Protected operational preview for leads, booking requests, newsletter count, and catalog readiness. Private data is only loaded when admin credentials and Supabase service-role env vars are configured.</p>

    {!adminConfigured && <div className="mt-8 rounded-5xl border border-champagne/30 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">Locked Setup</p>
      <h2 className="mt-3 font-display text-4xl text-espresso">Admin credentials are not configured.</h2>
      <p className="mt-3 text-sm leading-7 text-cocoa/70">Set <code>ADMIN_BASIC_USER</code> and <code>ADMIN_BASIC_PASSWORD</code> in the environment to protect this route with Basic Auth. No private Supabase data is loaded until those values are present.</p>
    </div>}

    {adminConfigured && !supabaseConfigured && <div className="mt-8 rounded-5xl border border-champagne/30 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">Supabase Setup</p>
      <h2 className="mt-3 font-display text-4xl text-espresso">Supabase is not configured.</h2>
      <p className="mt-3 text-sm leading-7 text-cocoa/70">Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code>, then run <code>supabase/schema.sql</code> in the Supabase SQL editor.</p>
    </div>}

    {params?.synced && <p className="mt-8 rounded-3xl border border-sage/20 bg-sage/10 p-4 text-sm text-sage shadow-inset">Catalog synced to Supabase.</p>}
    {params?.sync_error && <p className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 shadow-inset">Catalog sync failed: {params.sync_error}</p>}

    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {[["Local Services",services.length],["Local Products",products.length],["Local Memberships",memberships.length],["Newsletter Subscribers",data?.newsletterCount ?? "Locked"]].map(([t,v])=><div key={t} className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-7 shadow-soft"><p className="text-sm text-cocoa/70">{t}</p><p className="mt-2 font-display text-5xl text-espresso">{v}</p></div>)}
    </div>

    {adminConfigured && supabaseConfigured && <div className="mt-8 rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-luxury text-sage">Catalog Persistence</p>
          <h2 className="mt-3 font-display text-4xl text-espresso">Sync services, products, and memberships.</h2>
          <p className="mt-3 text-sm leading-7 text-cocoa/70">This upserts the local static catalog into Supabase so the project is ready for content/admin workflows.</p>
          <p className="mt-3 text-sm text-cocoa/60">Supabase counts: {data?.serviceCount || 0} services, {data?.productCount || 0} products, {data?.membershipCount || 0} memberships.</p>
        </div>
        <form action="/api/admin/sync-catalog" method="post">
          <button className="rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">Sync Catalog</button>
        </form>
      </div>
    </div>}

    {data?.errors.length ? <div className="mt-8 rounded-4xl border border-red-200 bg-red-50 p-5 text-sm text-red-600 shadow-inset">{data.errors.map(error => <p key={error}>{error}</p>)}</div> : null}

    {data && <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
        <p className="text-xs uppercase tracking-luxury text-sage">Recent Leads</p>
        <div className="mt-5 grid gap-4">{data.leads.length ? data.leads.map(lead => <div key={lead.id} className="rounded-3xl border border-cocoa/10 bg-cream/80 p-4 shadow-inset"><Field label="Name" value={lead.name}/><Field label="Email" value={lead.email}/><Field label="Interest" value={lead.interest}/><Field label="Status" value={lead.status}/></div>) : <p className="text-sm text-cocoa/60">No leads yet.</p>}</div>
      </div>
      <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
        <p className="text-xs uppercase tracking-luxury text-sage">Recent Bookings</p>
        <div className="mt-5 grid gap-4">{data.bookings.length ? data.bookings.map(booking => <div key={booking.id} className="rounded-3xl border border-cocoa/10 bg-cream/80 p-4 shadow-inset"><Field label="Name" value={booking.name}/><Field label="Service" value={booking.service_slug}/><Field label="Date" value={booking.earliest_available ? "Earliest available" : booking.preferred_date}/><Field label="Time" value={booking.preferred_time}/></div>) : <p className="text-sm text-cocoa/60">No bookings yet.</p>}</div>
      </div>
      <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
        <p className="text-xs uppercase tracking-luxury text-sage">Consultations</p>
        <div className="mt-5 grid gap-4">{data.consultations.length ? data.consultations.map(consult => <div key={consult.id} className="rounded-3xl border border-cocoa/10 bg-cream/80 p-4 shadow-inset"><Field label="Name" value={consult.name}/><Field label="Interest" value={consult.interest}/><Field label="Service" value={consult.service_slug}/><Field label="Status" value={consult.status}/></div>) : <p className="text-sm text-cocoa/60">No consultations yet.</p>}</div>
      </div>
    </div>}

    <div className="mt-10 rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">Service/Product Preview</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{[...services.slice(0,3).map(item => ["Service", item.title, item.category]), ...products.slice(0,3).map(item => ["Product", item.title, item.category])].map(([type,title,category]) => <div key={`${type}-${title}`} className="rounded-3xl border border-cocoa/10 bg-cream/80 p-4 shadow-inset"><p className="text-xs uppercase tracking-[.14em] text-sage">{type}</p><p className="mt-2 font-display text-2xl text-espresso">{title}</p><p className="mt-1 text-sm text-cocoa/60">{category}</p></div>)}</div>
    </div>
  </div></section>
}
