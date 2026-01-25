"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            VE
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </button>
            <ThemeToggle />
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Process
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="sm"
                className="w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
