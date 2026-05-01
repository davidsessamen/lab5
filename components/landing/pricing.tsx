import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Hobby",
    price: "Free",
    description: "Perfect for side projects and learning.",
    features: [
      "Up to 3 projects",
      "Automatic HTTPS",
      "Global CDN",
      "Community support",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For professional developers and small teams.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Team collaboration",
      "Priority support",
      "Custom domains",
      "99.9% SLA",
    ],
    cta: "Start Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Audit logs",
      "Dedicated support",
      "Custom contracts",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade at any
            time.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border p-8 ${
                tier.featured
                  ? "border-foreground/20 bg-card"
                  : "border-border/50 bg-card/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-muted-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={tier.featured ? "default" : "secondary"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
