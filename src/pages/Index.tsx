
import { ThemeProvider } from "@/components/theme-provider";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductSection } from "@/components/product-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ProductSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
