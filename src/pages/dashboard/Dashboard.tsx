
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusSquare, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/layout";

// Dummy data for dashboard
const dashboardData = {
  totalStudies: 5,
  totalParticipants: 127,
  responsesInProgress: 43,
};

// Dummy data for activity feed
const activityFeed = [
  {
    id: 1,
    message: "10 responses received for User Experience Study",
    time: "10 minutes ago",
  },
  {
    id: 2,
    message: "Product Feedback Study completed with 87% response rate",
    time: "2 hours ago",
  },
  {
    id: 3,
    message: "New study 'Marketing Campaign Review' created",
    time: "Yesterday",
  },
  {
    id: 4,
    message: "5 responses received for Customer Satisfaction Survey",
    time: "2 days ago",
  },
  {
    id: 5,
    message: "Website Usability Study launched",
    time: "3 days ago",
  },
];

// Dummy data for recent studies
const recentStudies = [
  {
    id: 1,
    title: "User Experience Study",
    participants: 42,
    completionRate: 75,
  },
  {
    id: 2,
    title: "Product Feedback",
    participants: 35,
    completionRate: 87,
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    participants: 28,
    completionRate: 62,
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Overview Cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-foreground">
                {isLoading ? "..." : dashboardData.totalStudies}
              </CardTitle>
              <CardDescription>Total Studies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-qwalo-blue w-2/3 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-foreground">
                {isLoading ? "..." : dashboardData.totalParticipants}
              </CardTitle>
              <CardDescription>Total Participants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-qwalo-orange w-4/5 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-foreground">
                {isLoading ? "..." : dashboardData.responsesInProgress}
              </CardTitle>
              <CardDescription>Responses in Progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-qwalo-darkblue w-1/3 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Create Study Button */}
        <Card className="border-l-4 border-qwalo-orange hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Ready to gather insights?</h3>
              <p className="text-muted-foreground">Create a new research study and start collecting responses.</p>
            </div>
            <Button 
              className="bg-qwalo-blue text-white hover:bg-qwalo-darkblue"
              onClick={() => navigate('/dashboard/create')}
            >
              <PlusSquare className="mr-2 h-5 w-5" />
              Create New Study
            </Button>
          </CardContent>
        </Card>
        
        {/* Recent Studies */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Studies</CardTitle>
            <CardDescription>Your most recently created research studies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="animate-pulse space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-muted rounded-md"></div>
                  ))}
                </div>
              ) : (
                recentStudies.map((study) => (
                  <div
                    key={study.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/dashboard/responses?studyId=${study.id}`)}
                  >
                    <div>
                      <h4 className="font-medium text-foreground">{study.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {study.participants} participants • {study.completionRate}% completion rate
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your research studies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="animate-pulse space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-12 bg-muted rounded-md"></div>
                  ))}
                </div>
              ) : (
                activityFeed.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="h-2 w-2 mt-2 rounded-full bg-qwalo-blue"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
