
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductSection } from "@/components/product-section";
import { ContactSection } from "@/components/contact-section";
import { DashboardSection } from "@/components/dashboard-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-background/95 backdrop-blur-md sticky top-20 z-40 border-b border-border py-2">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
              <TabsList className="w-full bg-transparent justify-start overflow-x-auto">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <main className="flex-grow">
            <TabsContent value="home" className="m-0">
              <HeroSection />
            </TabsContent>
            <TabsContent value="about" className="m-0">
              <AboutSection />
            </TabsContent>
            <TabsContent value="product" className="m-0">
              <ProductSection />
            </TabsContent>
            <TabsContent value="dashboard" className="m-0">
              <DashboardSection />
            </TabsContent>
            <TabsContent value="contact" className="m-0">
              <ContactSection />
            </TabsContent>
          </main>
        </Tabs>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
