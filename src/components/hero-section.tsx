"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              Available for Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            Crafting Visual <span className="text-gradient">Stories</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Professional video editor specializing in DaVinci Resolve,
            transforming raw footage into compelling narratives that captivate
            audiences and elevate brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto group cursor-pointer"
            >
              View My Work
              <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto cursor-pointer"
            >
              Let's Collaborate
            </Button>
          </div>

          <div className="mt-16 sm:mt-24 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
