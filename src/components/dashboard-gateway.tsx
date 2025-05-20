import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

export function DashboardGateway() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/dashboard-login")}
      variant="outline"
      className="flex items-center gap-2 rounded-full border-qwalo-blue hover:bg-qwalo-blue/10 hover:text-qwalo-blue transition-all duration-300"
    >
      <LayoutDashboard className="h-4 w-4" />
      <span className="hidden md:inline">Dashboard</span>
    </Button>
  );
}
