"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Brand Commercial - Tech Startup",
      category: "Commercial",
      description:
        "High-energy product launch video with dynamic transitions and color grading",
      tags: ["DaVinci Resolve", "Color Grading", "Motion Graphics"],
      thumbnail: "/modern-tech-commercial-video-editing.jpg",
      duration: "1:30",
    },
    {
      title: "Music Video - Indie Artist",
      category: "Music Video",
      description:
        "Cinematic storytelling with creative effects and seamless beat synchronization",
      tags: ["Premiere Pro", "After Effects", "VFX"],
      thumbnail: "/cinematic-music-video-production.jpg",
      duration: "3:45",
    },
    {
      title: "Documentary Short",
      category: "Documentary",
      description:
        "Emotional narrative with interview cuts and atmospheric B-roll sequences",
      tags: ["DaVinci Resolve", "Sound Design", "Storytelling"],
      thumbnail: "/documentary-film-editing.jpg",
      duration: "12:20",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      description:
        "Fast-paced vertical content optimized for Instagram and TikTok engagement",
      tags: ["CapCut Pro", "Quick Edits", "Trending"],
      thumbnail: "/social-media-video.png",
      duration: "0:45",
    },
    {
      title: "Corporate Training Video",
      category: "Corporate",
      description:
        "Professional training content with graphics, captions, and clear messaging",
      tags: ["Premiere Pro", "Graphics", "Captions"],
      thumbnail: "/corporate-training-video.jpg",
      duration: "8:15",
    },
    {
      title: "Event Highlight Reel",
      category: "Event",
      description:
        "Multi-camera edit capturing the energy and emotion of a live conference",
      tags: ["DaVinci Resolve", "Multi-Cam", "Color Matching"],
      thumbnail: "/event-videography-editing.jpg",
      duration: "5:30",
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
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-4 rounded-full bg-primary text-primary-foreground">
                        <Play className="h-6 w-6" fill="currentColor" />
                      </div>
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                    {project.duration}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
