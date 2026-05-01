import { Button } from "@/components/ui/button";
import { ArrowRight, Command } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background grid effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-pretty text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            The Modern Platform
            <br />
            <span className="text-muted-foreground">for Developers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Build, deploy, and scale your applications with the most powerful
            developer platform. Ship faster, iterate smarter.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-6">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" className="gap-2 px-6">
              Learn More
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 rounded-md bg-secondary/50 px-3 py-1.5 font-mono text-xs">
              <Command className="h-3 w-3" />
              <span>npx create-flux-app@latest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
