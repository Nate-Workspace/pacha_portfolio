"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Basic client-side validation
      if (!formData.name || !formData.email || !formData.project || !formData.message) {
        setSubmitStatus({ type: "error", message: "Please fill in all fields." });
        setIsLoading(false);
        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        type: formData.project,
      };

      // Env vars for EmailJS must be exposed to the client using NEXT_PUBLIC_ prefix
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setSubmitStatus({
          type: "error",
          message:
            "Email service not configured. Set NEXT_PUBLIC_EMAILJS_* env variables.",
        });
        setIsLoading(false);
        return;
      }
      try {
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        console.log("EmailJS response:", response);
        setSubmitStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", project: "", message: "" });
      } catch (err) {
        console.error("EmailJS error:", err);
        const errMsg = (err as any)?.text || (err as any)?.message || "Failed to send message.";
        setSubmitStatus({ type: "error", message: `Send failed: ${errMsg}` });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch (e) {
        // ignore initialization errors here; send will still accept publicKey
        console.warn("EmailJS init failed:", e);
      }
    }
  }, []);

  return (
    <section id="contact" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Let's Create Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:ntpacha3365@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      ntpacha3365@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <h3 className="font-semibold mb-2">Quick Quote</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need a fast estimate? Include your project details and
                  timeline in the message.
                </p>
              </Card>
            </div>

            <Card className="lg:col-span-2 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-900 border border-green-200"
                        : "bg-red-50 text-red-900 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    placeholder="e.g., Commercial, Music Video, Documentary"
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
