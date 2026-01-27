"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Image, Sliders } from "lucide-react";

export function PhotoSection() {
  const projects = [
    {
      title: "Portrait Series - Fashion Shoot",
      category: "Photography",
      description:
        "High-end portrait retouching and color grading for editorial use.",
      tags: ["Photoshop", "Lightroom", "Retouching"],
      thumbnail: "/portrait-fashion.jpg",
      duration: "—",
    },
    {
      title: "Product Photography - E‑Commerce",
      category: "Commercial",
      description:
        "Clean, consistent product retouching optimized for online stores.",
      tags: ["Studio", "Color Correction", "Clipping Path"],
      thumbnail: "/product-photography.jpg",
      duration: "—",
    },
  ];

  return (
    <section id="photo" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Photo <span className="text-gradient">Editing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional photo retouching, color grading, and image optimization
              for editorial, commercial, and social media use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Camera className="h-4 w-4" />
                      <Sliders className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
