
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(30,64,175,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.1),transparent_60%)]"></div>
      <div className="container section-padding flex flex-col items-center text-center">
        <div className="animate-fade-in max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Revolutionize Your 
            <span className="bg-gradient-to-r from-qwalo-blue to-qwalo-orange bg-clip-text text-transparent"> Qualitative Research </span> 
            with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Empowering your business with intelligent, insightful, and effortless qualitative data analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistDialog />
            <Button variant="outline" className="border-qwalo-blue text-qwalo-blue hover:bg-qwalo-blue/10 dark:border-qwalo-orange dark:text-qwalo-orange dark:hover:bg-qwalo-orange/10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-16 w-full max-w-4xl animate-fade-in animate-delay-300">
          <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="h-24 w-24 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
