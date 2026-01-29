"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Client Advertisement",
      category: "video",
      description:
        "High-quality advertisement video with dynamic transitions and color grading",
      tags: ["DaVinci Resolve", "Color Grading", "Motion Graphics"],
      thumbnail: "/advertisement.png",
      link: "https://drive.google.com/drive/folders/1f82mErsHPtwhkBEA7VQQwrHz2pcMA1fA?usp=sharing",
    },
    {
      title: "Sports - Basketball edits",
      category: "video",
      description:
        "Cinematic storytelling with creative effects and seamless beat synchronization",
      tags: ["Premiere Pro", "After Effects", "VFX"],
      thumbnail: "/sports.jpeg",
      link: "https://drive.google.com/drive/folders/1iPhSysmrpBmK3PoMm39EWu63jAN1zAcS?usp=sharing",
    },
    {
      title: "Gym social media videos",
      category: "video",
      description:
        "Transitional, beat synchronized promo videos for social media marketing",
      tags: ["DaVinci Resolve", "Sound Design", "Storytelling"],
      thumbnail: "/gym.png",
      link: "https://drive.google.com/drive/folders/1BFLqSergMIutKpDUGlRuSlC-7pKWwlA_?usp=sharing",
    },
    {
      title: "Promotional Videos",
      category: "video",
      description:
        "Fast-paced vertical content optimized for Instagram and TikTok engagement",
      tags: ["CapCut Pro", "Quick Edits", "Trending"],
      thumbnail: "/promotional.jpg",
      link: "https://drive.google.com/drive/folders/1xNY1vHDUdQE9ya9kdUrY1b9y-AbnpnhR?usp=sharing",
    },
    {
      title: "Wedding and graduation photos",
      category: "photo",
      description:
        "High-end professional photography for weddings and graduations",
      tags: ["Premiere Pro", "Graphics", "Captions"],
      thumbnail: "/wedding.png",
      link: "https://drive.google.com/drive/folders/1fNHRzaaZBQpjXMqu5cbzoYoA667xTPCB?usp=sharing",
    },
    {
      title: "Street Photography Series",
      category: "photo",
      description:
        "Clean and creative photo captures with professional retouching",
      tags: ["DaVinci Resolve", "Multi-Cam", "Color Matching"],
      thumbnail: "/street.png",
      link: "https://drive.google.com/drive/folders/1mlpp8ucJ07inm9le4toufDGNvKFYsOwQ?usp=sharing",
    },
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A showcase of my recent work across various formats and styles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                <Card
                  className="group overflow-hidden hover:shadow-sm transition-all duration-300 cursor-pointer pt-0 h-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-70" : "opacity-0"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
