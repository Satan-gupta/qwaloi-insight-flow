
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateStudy from "./pages/dashboard/CreateStudy";
import ResponsesPage from "./pages/dashboard/Responses";
import InsightsPage from "./pages/dashboard/Insights";
import SettingsPage from "./pages/dashboard/Settings";
import { ThemeProvider } from "@/components/theme-provider";

// Create query client outside the component to avoid recreation on renders
const queryClient = new QueryClient();

// Convert App to a function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/create" element={<CreateStudy />} />
              <Route path="/dashboard/responses" element={<ResponsesPage />} />
              <Route path="/dashboard/insights" element={<InsightsPage />} />
              <Route path="/dashboard/settings" element={<SettingsPage />} />
              
              {/* Catch-all Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
