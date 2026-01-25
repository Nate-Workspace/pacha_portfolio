import { Card } from "@/components/ui/card";
import { FileVideo, Palette, Sparkles, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: FileVideo,
      title: "Discovery & Planning",
      description:
        "Understanding your vision, target audience, and project goals. We discuss style, tone, and deliverables to ensure alignment.",
    },
    {
      icon: Palette,
      title: "Editing & Assembly",
      description:
        "Crafting the narrative structure, selecting the best takes, and building the initial cut with attention to pacing and flow.",
    },
    {
      icon: Sparkles,
      title: "Enhancement & Polish",
      description:
        "Adding color grading, motion graphics, sound design, and visual effects to elevate the production value.",
    },
    {
      icon: Rocket,
      title: "Review & Delivery",
      description:
        "Collaborative revision process followed by final export in your preferred format, optimized for your distribution platform.",
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A streamlined workflow designed to bring your vision to life
              efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 text-[120px] font-bold text-muted/5 leading-none">
                    {index + 1}
                  </div>
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
