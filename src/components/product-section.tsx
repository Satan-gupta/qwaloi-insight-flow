
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
import { CheckCircle } from "lucide-react";

export function ProductSection() {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      title: "AI-Powered Interviews",
      description: "Conduct in-depth qualitative interviews using our advanced AI interviewer that adapts and responds to participant answers."
    },
    {
      title: "Real-time Analysis",
      description: "Watch insights emerge as interviews happen, with immediate thematic analysis and sentiment detection."
    },
    {
      title: "Comprehensive Reporting",
      description: "Generate beautiful, actionable reports that highlight key findings, patterns, and recommendations."
    }
  ];

  return (
    <section id="product" className="bg-white dark:bg-black py-24">
      <div className="container section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Qwalo.ai</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-qwalo-blue to-qwalo-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Our platform transforms qualitative research from a time-consuming, manual process into an efficient, insightful experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-3 animate-fade-in">
            <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl aspect-[4/3] overflow-hidden relative shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Product Screenshot</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in animate-delay-300">
            <Tabs defaultValue="features" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="audience">Who It's For</TabsTrigger>
                <TabsTrigger value="solution">Problem Solved</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/50 dark:bg-gray-900/50 animate-fade-in hover:shadow-md transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-qwalo-blue dark:text-qwalo-orange" />
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="audience" className="mt-6">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/50 dark:bg-gray-900/50 shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Who is Qwalo.ai for?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-qwalo-blue dark:text-qwalo-orange mt-1">•</span>
                      <span><strong>Marketing Teams</strong> seeking deeper customer insights and feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-qwalo-blue dark:text-qwalo-orange mt-1">•</span>
                      <span><strong>Product Teams</strong> needing user research to guide development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-qwalo-blue dark:text-qwalo-orange mt-1">•</span>
                      <span><strong>Research Departments</strong> wanting to scale qualitative studies efficiently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-qwalo-blue dark:text-qwalo-orange mt-1">•</span>
                      <span><strong>Consultancies</strong> delivering insights to multiple clients</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="solution" className="mt-6">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/50 dark:bg-gray-900/50 shadow-sm">
                  <h3 className="text-xl font-medium mb-4">What problems does Qwalo.ai solve?</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Time Efficiency</AccordionTrigger>
                      <AccordionContent>
                        Reduces research time from weeks to days by automating interviews, transcription, and preliminary analysis.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Data Quality</AccordionTrigger>
                      <AccordionContent>
                        Standardizes interview approaches while maintaining the flexibility to explore unexpected insights, improving data consistency and quality.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Analysis Depth</AccordionTrigger>
                      <AccordionContent>
                        Identifies patterns and connections that human analysis might miss, giving your research unprecedented depth.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Decision Making</AccordionTrigger>
                      <AccordionContent>
                        Transforms raw qualitative data into actionable insights that directly inform business strategy and product decisions.
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
