
import { useState, ReactNode, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Create Study",
    path: "/dashboard/create",
  },
  {
    title: "Responses",
    path: "/dashboard/responses",
  },
  {
    title: "Insights",
    path: "/dashboard/insights",
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
  },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  
  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabChange = (path: string) => {
    navigate(path);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen w-full overflow-hidden bg-background">
        {/* Top Navigation Bar */}
        <header className="border-b border-border bg-background sticky top-0 z-10">
          <div className="container px-4 mx-auto">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-qwalo-blue to-qwalo-orange bg-clip-text text-transparent">
                    Qwalo.ai
                  </span>
                </a>
              </div>

              {/* Right side items */}
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="rounded-full bg-muted pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <ThemeToggle />
              </div>
            </div>

            {/* Tabs Navigation */}
            <Tabs value={activeTab} className="w-full mt-2 mb-1">
              <TabsList className="w-full justify-start bg-transparent h-auto p-0 border-b border-border">
                {navItems.map((item) => (
                  <TabsTrigger
                    key={item.path}
                    value={item.path}
                    onClick={() => handleTabChange(item.path)}
                    className={cn(
                      "px-6 py-2 text-sm font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-qwalo-blue data-[state=active]:text-foreground",
                      "transition-colors hover:text-qwalo-blue"
                    )}
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </header>
          
        {/* Page Content */}
        <main className="flex-1 overflow-auto px-4 py-6">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
