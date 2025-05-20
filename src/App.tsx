
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLogin from "./pages/DashboardLogin";
import CreateStudy from "./pages/dashboard/CreateStudy";
import ResponsesPage from "./pages/dashboard/Responses";
import InsightsPage from "./pages/dashboard/Insights";
import SettingsPage from "./pages/dashboard/Settings";
import { ThemeProvider } from "@/components/theme-provider";

// Create query client outside the component to avoid recreation on renders
const queryClient = new QueryClient();

// Protected route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const userJson = localStorage.getItem("dashboardUser");
  const user = userJson ? JSON.parse(userJson) : null;
  
  if (!user || (!user.isAuthenticated && !user.isGuest)) {
    return <Navigate to="/dashboard-login" replace />;
  }
  
  return children;
};

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
              <Route path="/dashboard-login" element={<DashboardLogin />} />
              
              {/* Protected Dashboard Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/create" element={
                <ProtectedRoute>
                  <CreateStudy />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/responses" element={
                <ProtectedRoute>
                  <ResponsesPage />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/insights" element={
                <ProtectedRoute>
                  <InsightsPage />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/settings" element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              } />
              
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
