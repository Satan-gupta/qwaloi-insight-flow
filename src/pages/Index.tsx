
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductSection } from "@/components/product-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-grow mt-20">
          {activeTab === "home" && <HeroSection />}
          {activeTab === "about" && <AboutSection />}
          {activeTab === "product" && <ProductSection />}
          {activeTab === "contact" && <ContactSection />}
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
