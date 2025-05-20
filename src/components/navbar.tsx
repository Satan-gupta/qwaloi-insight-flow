
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { WaitlistDialog } from "./waitlist-dialog";
import { Link } from "react-router-dom";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Product", value: "product" },
    { name: "Contact", value: "contact" },
  ];

  const handleNavClick = (value: string) => {
    setMobileMenuOpen(false);
    setActiveTab(value);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a 
              onClick={() => setActiveTab("home")} 
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-qwalo-blue to-qwalo-orange bg-clip-text text-transparent">
                Qwalo.ai
              </span>
            </a>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center">
              <div className="flex space-x-1">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant={activeTab === link.value ? "default" : "ghost"}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      activeTab === link.value 
                        ? "bg-qwalo-blue/10 text-qwalo-blue dark:bg-qwalo-orange/10 dark:text-qwalo-orange" 
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleNavClick(link.value)}
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </nav>
          </div>

          {/* Right side - Theme toggle, Dashboard, and Waitlist */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/dashboard-login">
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-qwalo-blue hover:bg-qwalo-blue/10 hover:text-qwalo-blue transition-all duration-300"
              >
                Dashboard
              </Button>
            </Link>
            <WaitlistDialog className="bg-qwalo-orange hover:bg-qwalo-orange/90 text-white" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <Link to="/dashboard-login">
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-qwalo-blue hover:bg-qwalo-blue/10 hover:text-qwalo-blue transition-all duration-300"
              >
                Dashboard
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
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
                  className={`text-lg font-medium py-2 cursor-pointer ${
                    activeTab === link.value 
                      ? "text-qwalo-blue dark:text-qwalo-orange" 
                      : "text-foreground/80 hover:text-qwalo-blue dark:hover:text-qwalo-orange transition-colors"
                  }`}
                  onClick={() => handleNavClick(link.value)}
                >
                  {link.name}
                </a>
              ))}
              <WaitlistDialog className="mt-6 bg-qwalo-orange hover:bg-qwalo-orange/90 text-white w-full" />
            </nav>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
