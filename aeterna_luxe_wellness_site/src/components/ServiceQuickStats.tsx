type Stat = { label: string; value: string; highlight?: boolean };

export function ServiceQuickStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-espressoGlow px-6 pb-5 pt-1 md:px-8">
      <div className="mx-auto max-w-7xl border-t border-cream/10 pt-4">
        <div className="flex flex-wrap gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs ${
                stat.highlight
                  ? "border-champagne/40 bg-champagne/10 text-champagne"
                  : "border-cream/10 bg-cream/5 text-cream/85"
              }`}
            >
              <span className="font-medium opacity-60">{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
