import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skills = [
    {
      category: "Primary Software",
      level: "Expert",
      tools: ["DaVinci Resolve"],
      description:
        "Professional color grading, advanced editing, and Fusion VFX",
    },
    {
      category: "Advanced Tools",
      level: "Proficient",
      tools: ["Adobe Premiere Pro", "CapCut Pro"],
      description:
        "Multi-platform editing, quick turnarounds, and social media optimization",
    },
    {
      category: "Motion Graphics",
      level: "Intermediate",
      tools: ["Adobe After Effects"],
      description:
        "Animation, compositing, and visual effects for enhanced storytelling",
    },
  ];

  const specializations = [
    "Color Grading",
    "Video Compositing",
    "Storytelling",
    "Transitions & Effects",
    "Multi-Cam Editing",
    "Speed Ramping",
    "Green Screen",
    "Title Design",
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Mastering industry-leading tools to deliver professional-grade
              video content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                  <Badge variant="secondary">{skill.level}</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="outline"
                        className="font-mono text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6 text-center">
              Specializations
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {specializations.map((spec, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {spec}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
