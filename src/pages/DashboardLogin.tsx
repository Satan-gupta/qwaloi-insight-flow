
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const DashboardLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // This is a mock login function
  // In a real application, you would connect this to your authentication system
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Mock authentication - for demo purposes only
    setTimeout(() => {
      // For this demo, we'll accept any non-empty email and password
      if (email.trim() && password.trim()) {
        // Set some mock user info in local storage
        localStorage.setItem("dashboardUser", JSON.stringify({ email, isAuthenticated: true }));
        navigate("/dashboard");
      } else {
        setError("Please enter both email and password");
      }
      setIsLoading(false);
    }, 1000);
  };
  
  const handleGuestAccess = () => {
    localStorage.setItem("dashboardUser", JSON.stringify({ email: "guest", isGuest: true }));
    navigate("/dashboard");
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar activeTab="" setActiveTab={() => {}} />
        
        <main className="flex-grow flex items-center justify-center px-4 py-24">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Dashboard Login</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access the dashboard or continue as a guest
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm dark:bg-red-900/30 dark:text-red-300">
                  {error}
                </div>
              )}
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a className="text-sm text-qwalo-blue hover:text-qwalo-blue/80 dark:text-qwalo-orange dark:hover:text-qwalo-orange/80">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-qwalo-blue hover:bg-qwalo-blue/90 dark:bg-qwalo-orange dark:hover:bg-qwalo-orange/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Button 
                variant="outline"
                className="mt-4 w-full"
                onClick={handleGuestAccess}
              >
                View as Guest
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLogin;
