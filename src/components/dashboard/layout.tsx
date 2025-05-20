
import { useState, ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Home,
  PlusSquare,
  Search,
  Settings,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    title: "Create Study",
    icon: PlusSquare,
    path: "/dashboard/create",
  },
  {
    title: "Responses",
    icon: FileText,
    path: "/dashboard/responses",
  },
  {
    title: "Insights",
    icon: BarChart3,
    path: "/dashboard/insights",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <ThemeProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-sidebar shadow-lg transition-transform duration-200 ease-in-out md:relative",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold qwalo-gradient-text">Qwalo.ai</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto md:hidden"
              onClick={toggleSidebar}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-left font-medium",
                  location.pathname === item.path
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => navigate(item.path)}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.title}
              </Button>
            ))}
          </nav>
          
          {/* Theme Toggle in Sidebar */}
          <div className="border-t border-border p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Dark Mode</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-16 items-center border-b border-border px-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="ml-4 md:ml-0">
              <h1 className="text-lg font-semibold text-foreground">
                {navItems.find((item) => item.path === location.pathname)?.title || "Dashboard"}
              </h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="rounded-full bg-muted pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </header>
          
          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
