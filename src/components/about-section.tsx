
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering AI solutions that redefine qualitative research methodology."
    },
    {
      title: "User-Centric",
      description: "Designed with researchers' needs at the forefront, ensuring intuitive experiences."
    },
    {
      title: "Actionable Insights",
      description: "Delivering data that translates directly into strategic business decisions."
    }
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-slate-900/50">
      <div className="container section-padding">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Qwalo.ai</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Qwalo.ai, we're transforming qualitative research through the power of artificial intelligence. Our platform simplifies the complex process of gathering, analyzing, and interpreting qualitative data, empowering businesses to make more informed decisions faster than ever before.
            </p>
            <p className="text-lg text-muted-foreground">
              Founded by a team of researchers and AI specialists, we understand the challenges of traditional qualitative methods. Our vision is to democratize access to high-quality research insights, making them available to businesses of all sizes.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 glass-card animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="text-qwalo-orange">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-lg font-medium mb-1">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
