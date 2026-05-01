const stats = [
  { value: "10M+", label: "Deployments per month" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "100+", label: "Edge locations" },
  { value: "50ms", label: "Average response time" },
];

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
