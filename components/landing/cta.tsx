import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-12 text-center md:p-20">
          {/* Background effect */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="text-pretty text-3xl font-bold tracking-tight md:text-4xl">
              Ready to ship faster?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join thousands of developers building the future with Flux. Start
              for free, scale when you need to.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" className="px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
