#Body segment of the landing page
  
import { Zap, Shield, Globe, Layers, GitBranch, BarChart3 } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description:
      "Optimized for speed with edge computing and smart caching. Your users get instant responses, every time.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description:
      "Built-in security features including SSO, audit logs, and compliance certifications for peace of mind.",
    icon: Shield,
  },
  {
    name: "Global Scale",
    description:
      "Deploy to over 100 edge locations worldwide. Automatically route users to the nearest server.",
    icon: Globe,
  },
  {
    name: "Full Stack Support",
    description:
      "Support for all major frameworks and languages. From React to Go, we&apos;ve got you covered.",
    icon: Layers,
  },
  {
    name: "Git Integration",
    description:
      "Push to deploy with seamless GitHub, GitLab, and Bitbucket integration. Preview every branch.",
    icon: GitBranch,
  },
  {
    name: "Real-time Analytics",
    description:
      "Monitor performance, track errors, and understand your users with built-in observability tools.",
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete platform with all the tools developers need to build
            production-ready applications.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
