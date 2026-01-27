import { Card } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Bringing Ideas to Life Through{" "}
                <span className="text-gradient">Motion & Imagery</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in video and photo editing,
                  I've had the privilege of working with brands, content
                  creators, and agencies to create visually stunning content
                  and imagery that resonates with audiences.
                </p>
                <p>
                  My expertise lies in color grading, motion graphics,
                  retouching, and storytelling through both video and photo
                  editing. I believe every frame and image matters, and I'm
                  passionate about crafting visuals that not only look
                  beautiful but also communicate powerful messages.
                </p>
                <p>
                  Whether it's a commercial, documentary, music video, or social
                  media content, I bring technical precision and creative vision
                  to every project.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Deliver perfect results
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Excellence in video editing and
                      post-production across multiple client works.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      35+ Happy Clients
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Delivered exceptional results for brands, agencies, and
                      individual creators worldwide with a 98% client
                      satisfaction rate.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Fast Turnaround
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Efficient workflow and project management ensuring timely
                      delivery without compromising on quality or creative
                      vision.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
