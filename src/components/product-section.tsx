
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CheckCircle, ArrowRight } from "lucide-react";

export function ProductSection() {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      title: "AI-Driven Interview Analysis",
      description: "Our advanced AI conducts and analyzes qualitative interviews, identifying key themes and sentiments that humans might miss."
    },
    {
      title: "Real-time Insight Generation",
      description: "Watch patterns emerge in real-time as our system processes responses, helping you pivot your research direction on the fly."
    },
    {
      title: "Interactive Visualization",
      description: "Transform complex qualitative data into intuitive visual representations that make findings accessible to all stakeholders."
    }
  ];

  return (
    <section id="product" className="relative py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Discover Qwalo.ai</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-qwalo-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Our innovative platform transforms qualitative research from an art form into a precise science without losing the human touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Product preview */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-xl aspect-[4/3] overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 dark:bg-slate-700 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto px-4 py-1 rounded-md bg-white/80 dark:bg-slate-800/80 text-xs font-mono">
                    qwalo.ai/research-dashboard
                  </div>
                </div>
                
                <div className="p-6 pt-16">
                  {/* Mock UI elements */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg h-20"></div>
                    <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg h-20"></div>
                  </div>
                  <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg h-40 mb-4"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg h-24"></div>
                    <div className="col-span-2 bg-gray-100 dark:bg-slate-800 p-4 rounded-lg h-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="features" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="audience">Who It's For</TabsTrigger>
                <TabsTrigger value="solution">Problems Solved</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card p-6" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-qwalo-orange" />
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="audience">
                <div className="feature-card p-6">
                  <h3 className="text-xl font-medium mb-5">Perfect for:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-qwalo-orange mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Marketing Teams</h4>
                        <p className="text-sm text-muted-foreground">Who need deeper customer insights to guide brand positioning and campaign development.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-qwalo-orange mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Product Teams</h4>
                        <p className="text-sm text-muted-foreground">Looking to understand user needs and validate concepts through qualitative feedback.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-qwalo-orange mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Research Departments</h4>
                        <p className="text-sm text-muted-foreground">Seeking to scale their qualitative methods while maintaining methodological rigor.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-qwalo-orange mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Strategy Consultants</h4>
                        <p className="text-sm text-muted-foreground">Who need to deliver evidence-based recommendations backed by qualitative insights.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="solution">
                <div className="feature-card p-6">
                  <h3 className="text-xl font-medium mb-4">Problems We Solve:</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-gray-200 dark:border-gray-800">
                      <AccordionTrigger className="hover:text-qwalo-orange">Efficiency Challenges</AccordionTrigger>
                      <AccordionContent>
                        Our AI-powered platform reduces research cycles from weeks to days by automating interview processes, transcription, and preliminary analysis.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-b border-gray-200 dark:border-gray-800">
                      <AccordionTrigger className="hover:text-qwalo-orange">Inconsistent Qualitative Analysis</AccordionTrigger>
                      <AccordionContent>
                        We standardize qualitative analysis while preserving the ability to explore unexpected insights, ensuring consistent high-quality results.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-b border-gray-200 dark:border-gray-800">
                      <AccordionTrigger className="hover:text-qwalo-orange">Insight Discovery</AccordionTrigger>
                      <AccordionContent>
                        Our system uncovers patterns and connections that human analysis might overlook, providing deeper insights from your qualitative data.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="hover:text-qwalo-orange">Action Translation</AccordionTrigger>
                      <AccordionContent>
                        We bridge the gap between raw qualitative data and actionable business strategy with clear, practical recommendations.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
