
import { CheckCircle } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      title: "AI-Driven Innovation",
      description: "Pioneering advanced algorithms that redefine how qualitative insights are extracted and interpreted."
    },
    {
      title: "Human-Centered Design",
      description: "Creating intuitive experiences that amplify human expertise rather than replace it."
    },
    {
      title: "Research Integrity",
      description: "Maintaining the highest standards of methodological rigor while accelerating insight discovery."
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/20 to-transparent dark:from-slate-900/20 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-orange-500/5 dark:bg-orange-500/10 blur-3xl pointer-events-none"></div>
      
      <div className="container section-padding relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block">
            <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-blue-100 text-qwalo-blue dark:bg-blue-900/30 dark:text-blue-300 mb-4">
              Our Vision
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Qualitative Research</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-qwalo-blue to-qwalo-orange mx-auto mb-8 rounded-full"></div>
        </div>
      
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="absolute -z-10 -top-10 -left-10 w-full h-full rounded-2xl border border-blue-200 dark:border-blue-900/30"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">About Qwalo.ai</h3>
              <p className="text-lg text-muted-foreground mb-6">
                At Qwalo.ai, we're challenging the status quo of qualitative research through the thoughtful application of artificial intelligence. Our platform transforms the complex process of gathering, analyzing, and interpreting qualitative data into a seamless experience that empowers decision-makers.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded by a team with deep expertise in both research methodology and machine learning, we understand the nuances of qualitative insight extraction. Our mission is to democratize access to sophisticated research capabilities, making them accessible to businesses of every size.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Our Core Values</h3>
            {values.map((value, index) => (
              <div 
                key={index} 
                className="feature-card p-6 transform hover:-translate-y-1 transition-all"
              >
                <div className="flex gap-4">
                  <span className="text-qwalo-orange dark:text-qwalo-orange shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
