
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 -z-10 animated-gradient"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-30 dark:opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F97316" d="M38.4,-66.2C49.9,-54.3,59.6,-43.5,66.5,-30.6C73.4,-17.7,77.5,-2.8,75.1,11.1C72.8,24.9,63.9,37.8,53.3,48.8C42.8,59.9,30.5,69.2,16.2,74.6C2,80,-14.3,81.6,-27.2,76.1C-40.2,70.5,-49.8,57.9,-59.4,45.2C-68.9,32.5,-78.3,19.6,-79.7,5.1C-81,-9.3,-74.2,-25.3,-64.4,-38.2C-54.6,-51,-41.7,-60.7,-28.5,-71.5C-15.2,-82.2,-1.5,-94,10.3,-89.9C22.2,-85.9,26.9,-78.1,38.4,-66.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container section-padding flex flex-col items-center text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 mb-6 text-sm font-medium rounded-full bg-orange-100 text-qwalo-orange dark:bg-orange-900/30 dark:text-orange-300 animate-slide-up stagger-1">
            Qualitative Research Reimagined
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-up stagger-2">
            Decode Human Insights With
            <span className="block mt-1 bg-gradient-to-br from-qwalo-blue via-purple-600 to-qwalo-orange bg-clip-text text-transparent">AI-Powered Research</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up stagger-3">
            Transform unstructured qualitative data into actionable business intelligence through intelligent, insightful analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3">
            <WaitlistDialog className="bg-gradient-to-r from-qwalo-orange to-red-600 hover:opacity-90 text-white glow-on-hover" />
            <Button 
              variant="outline" 
              className="border-qwalo-blue text-qwalo-blue hover:bg-qwalo-blue/10 dark:border-qwalo-orange dark:text-qwalo-orange dark:hover:bg-qwalo-orange/10"
            >
              Watch Demo
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 w-full max-w-5xl animate-slide-up stagger-3">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            {/* Abstract pattern background for video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-slate-900">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <svg className="h-10 w-10 text-qwalo-orange dark:text-qwalo-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.14v14.72a1 1 0 001.5.86l9.92-7.38a1 1 0 000-1.72L9.5 4.29a1 1 0 00-1.5.85z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
