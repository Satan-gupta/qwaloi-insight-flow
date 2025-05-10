
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { WaitlistDialog } from "./waitlist-dialog";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll with offset for fixed header
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-qwalo-blue to-qwalo-orange bg-clip-text text-transparent">
            Qwalo.ai
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-foreground/80 hover:text-qwalo-blue dark:hover:text-qwalo-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <WaitlistDialog buttonVariant="default" buttonText="Join the Waitlist" className="bg-qwalo-orange hover:bg-qwalo-orange/90 text-white" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-background">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-2xl font-bold bg-gradient-to-r from-qwalo-blue to-qwalo-orange bg-clip-text text-transparent">
                  Qwalo.ai
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-6 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 hover:text-qwalo-blue dark:hover:text-qwalo-orange transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <WaitlistDialog 
                  buttonVariant="default" 
                  buttonText="Join the Waitlist" 
                  className="mt-6 bg-qwalo-orange hover:bg-qwalo-orange/90 text-white w-full"
                />
              </nav>
            </div>
          </div>
        </Dialog>
      </div>
    </header>
  );
}
