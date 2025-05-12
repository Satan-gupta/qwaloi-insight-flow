
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Search, FileText, BarChart as BarChartIcon, PieChart as PieChartIcon } from "lucide-react";

// Sample data for the dashboard
const researchProgress = [
  { name: "Research Questions", progress: 100 },
  { name: "Data Collection", progress: 80 },
  { name: "Analysis", progress: 60 },
  { name: "Insights", progress: 40 },
];

const sentimentData = [
  { name: "Positive", value: 65, color: "#4ade80" },
  { name: "Neutral", value: 25, color: "#94a3b8" },
  { name: "Negative", value: 10, color: "#f87171" },
];

const trendData = [
  { month: "Jan", trend: 30 },
  { month: "Feb", trend: 40 },
  { month: "Mar", trend: 35 },
  { month: "Apr", trend: 50 },
  { month: "May", trend: 45 },
  { month: "Jun", trend: 60 },
];

const themeData = [
  { theme: "User Experience", count: 45 },
  { theme: "Pricing", count: 28 },
  { theme: "Features", count: 35 },
  { theme: "Support", count: 22 },
  { theme: "Reliability", count: 18 },
];

export function DashboardSection() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Dashboard</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From research questions to actionable insights, our platform streamlines the entire process
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Research workflow visualization */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Research Workflow</h3>
            <div className="grid gap-6">
              {researchProgress.map((item, index) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      {index === 0 && <Search className="h-5 w-5 text-primary" />}
                      {index === 1 && <FileText className="h-5 w-5 text-primary" />}
                      {index === 2 && <BarChartIcon className="h-5 w-5 text-primary" />}
                      {index === 3 && <PieChartIcon className="h-5 w-5 text-primary" />}
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard tabs */}
          <Tabs defaultValue="insights" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="insights">Key Insights</TabsTrigger>
              <TabsTrigger value="sentiments">Sentiment Analysis</TabsTrigger>
              <TabsTrigger value="trends">Trends & Themes</TabsTrigger>
            </TabsList>
            
            {/* Key Insights Tab */}
            <TabsContent value="insights" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium mb-4">Customer Sentiment</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sentimentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {sentimentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                      {sentimentData.map((entry) => (
                        <div key={entry.name} className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                          <span className="text-sm">{entry.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium mb-4">Key Themes Identified</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={themeData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="theme" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="count" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sentiment Analysis Tab */}
            <TabsContent value="sentiments" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium mb-4">Sentiment Analysis</h4>
                  <p className="mb-6">Our AI identifies patterns in customer feedback and categorizes sentiments to help you understand what drives satisfaction and areas for improvement.</p>
                  
                  <div className="space-y-6">
                    <div className="glass-card p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Positive Feedback</span>
                        <span className="text-green-500">65%</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        "The platform is intuitive and helped us discover insights we would have missed."
                      </p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Neutral Feedback</span>
                        <span className="text-gray-500">25%</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        "Works as expected. Would like to see more customization options."
                      </p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Negative Feedback</span>
                        <span className="text-red-500">10%</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        "Initial setup was more complex than anticipated."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Trends Tab */}
            <TabsContent value="trends" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium mb-4">Trend Analysis</h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="trend" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6">
                    <h5 className="font-medium mb-2">Key Takeaways</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>User satisfaction has increased 20% over the last quarter</li>
                      <li>Feature adoption shows strongest growth in data visualization tools</li>
                      <li>Support response time has decreased by 15%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick explanation of the process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Define Research Goals</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Set clear objectives and research questions to guide your data collection
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="bg-green-100 dark:bg-green-900/30 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Collect & Analyze</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our AI processes qualitative and quantitative data to identify patterns
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <BarChartIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Actionable Insights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Transform data into clear, actionable recommendations for your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom tooltip component for charts
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md">
        <p className="text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
}
