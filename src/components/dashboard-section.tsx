
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Search, FileText, BarChart as BarChartIcon, PieChart as PieChartIcon, Sparkles, Wand } from "lucide-react";

// Updated sample data for more relevance to market research
const researchProgress = [
  { name: "Define Objectives", progress: 100 },
  { name: "Gather Research", progress: 85 },
  { name: "Analyze Results", progress: 70 },
  { name: "Extract Insights", progress: 55 },
];

const sentimentData = [
  { name: "Positive", value: 58, color: "#4ade80" },
  { name: "Neutral", value: 29, color: "#94a3b8" },
  { name: "Negative", value: 13, color: "#f87171" },
];

const trendData = [
  { month: "Jan", trend: 32, users: 120 },
  { month: "Feb", trend: 45, users: 152 },
  { month: "Mar", trend: 43, users: 169 },
  { month: "Apr", trend: 50, users: 201 },
  { month: "May", trend: 65, users: 250 },
  { month: "Jun", trend: 78, users: 305 },
];

const themeData = [
  { theme: "Ease of Use", count: 42, percentage: 28 },
  { theme: "Value for Money", count: 36, percentage: 24 },
  { theme: "Feature Set", count: 32, percentage: 21 },
  { theme: "Customer Support", count: 24, percentage: 16 },
  { theme: "Integration", count: 16, percentage: 11 },
];

const insightItems = [
  {
    title: "Voice of Customer",
    description: "87% of customers mentioned ease of use as their top priority",
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    title: "Competitor Analysis",
    description: "Your product rated 32% higher on user satisfaction than competitors",
    icon: <BarChartIcon className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    title: "Market Trend",
    description: "Growing demand (28% YoY) for seamless integration capabilities",
    icon: <Wand className="h-6 w-6 text-amber-500" />,
    color: "bg-amber-100 dark:bg-amber-900/30"
  },
];

export function DashboardSection() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            Research Intelligence Dashboard
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform raw data into actionable insights with our AI-powered research platform
          </p>
        </div>

        {/* Main carousel of dashboard views */}
        <Carousel className="w-full mb-12">
          <CarouselContent>
            {/* Dashboard View 1: Research Process */}
            <CarouselItem>
              <div className="p-1">
                <div className="glass-card p-6 md:p-8 border-t-4 border-blue-500 dark:border-blue-400">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </span>
                    Research Workflow
                  </h3>
                  <div className="grid gap-6">
                    {researchProgress.map((item, index) => (
                      <div key={item.name} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-3">
                            {index === 0 && <Search className="h-5 w-5 text-primary" />}
                            {index === 1 && <FileText className="h-5 w-5 text-primary" />}
                            {index === 2 && <BarChartIcon className="h-5 w-5 text-primary" />}
                            {index === 3 && <PieChartIcon className="h-5 w-5 text-primary" />}
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="font-semibold">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" 
                          style={{background: `linear-gradient(90deg, ${getProgressColor(item.progress)} ${item.progress}%, #e5e7eb ${item.progress}%)`}} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insightItems.map((item, index) => (
                      <div key={index} className="glass-card p-4 text-center hover:shadow-md transition-all hover:-translate-y-1">
                        <div className={`${item.color} h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-3`}>
                          {item.icon}
                        </div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Dashboard View 2: Interactive Analysis */}
            <CarouselItem>
              <div className="p-1">
                <div className="glass-card p-6 md:p-8 border-t-4 border-purple-500 dark:border-purple-400">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                      <PieChartIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </span>
                    Interactive Analysis
                  </h3>
                  
                  <Tabs defaultValue="insights" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="insights">Key Insights</TabsTrigger>
                      <TabsTrigger value="sentiments">Sentiment</TabsTrigger>
                      <TabsTrigger value="trends">Trends</TabsTrigger>
                    </TabsList>
                    
                    {/* Key Insights Tab */}
                    <TabsContent value="insights" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-t-2 border-blue-500">
                          <CardContent className="pt-6">
                            <h4 className="text-lg font-medium mb-4 flex items-center">
                              <PieChartIcon className="h-5 w-5 mr-2 text-blue-600" /> 
                              Customer Sentiment
                            </h4>
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
                                  <span className="text-sm font-medium">{entry.name}: {entry.value}%</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border-t-2 border-amber-500">
                          <CardContent className="pt-6">
                            <h4 className="text-lg font-medium mb-4 flex items-center">
                              <BarChartIcon className="h-5 w-5 mr-2 text-amber-600" />
                              Key Themes
                            </h4>
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={themeData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="theme" />
                                  <YAxis />
                                  <Tooltip formatter={(value, name) => [`${value}%`, 'Percentage']} />
                                  <Bar dataKey="percentage" fill="#8884d8" radius={[4, 4, 0, 0]} />
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
                          <h4 className="text-lg font-medium mb-4">Voice of Customer Analysis</h4>
                          <p className="mb-6">Our AI identifies patterns in customer feedback from surveys, interviews, and social media to deliver actionable insights:</p>
                          
                          <div className="space-y-5">
                            <div className="glass-card p-4 rounded-lg border-l-4 border-green-500">
                              <div className="flex justify-between mb-2">
                                <span className="font-medium flex items-center">
                                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                  Positive Sentiment (58%)
                                </span>
                                <span className="text-green-500 font-semibold">↑ 12%</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                "The data visualization tools are intuitive and helped us discover insights we would have missed with our previous solution."
                              </p>
                            </div>
                            
                            <div className="glass-card p-4 rounded-lg border-l-4 border-gray-400">
                              <div className="flex justify-between mb-2">
                                <span className="font-medium flex items-center">
                                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                  Neutral Sentiment (29%)
                                </span>
                                <span className="text-gray-500 font-semibold">↓ 5%</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                "The platform meets our basic needs but we would like to see more customization options for research templates."
                              </p>
                            </div>
                            
                            <div className="glass-card p-4 rounded-lg border-l-4 border-red-500">
                              <div className="flex justify-between mb-2">
                                <span className="font-medium flex items-center">
                                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                  Negative Sentiment (13%)
                                </span>
                                <span className="text-red-500 font-semibold">↓ 7%</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                "The initial learning curve was steeper than expected. Better onboarding tutorials would help new users."
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
                          <h4 className="text-lg font-medium mb-4 flex items-center">
                            <span className="bg-violet-100 dark:bg-violet-900/30 p-1.5 rounded-full mr-2">
                              <BarChartIcon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                            </span>
                            6-Month Trend Analysis
                          </h4>
                          <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={trendData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Line yAxisId="left" type="monotone" dataKey="trend" name="Satisfaction Score" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                                <Line yAxisId="right" type="monotone" dataKey="users" name="Active Users" stroke="#82ca9d" strokeWidth={2} />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="mt-6 glass-card p-4">
                            <h5 className="font-medium mb-3">Key Insights</h5>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                              <li className="flex items-start gap-2">
                                <span className="text-green-500">↑</span>
                                <span>User satisfaction increased 42% after introducing AI-powered analysis tools</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-500">↑</span>
                                <span>155% growth in active users over the last 6 months</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-amber-500">→</span>
                                <span>Strongest feature engagement: Interactive visualization tools (78% usage)</span>
                              </li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CarouselItem>
            
            {/* Dashboard View 3: Research Process */}
            <CarouselItem>
              <div className="p-1">
                <div className="glass-card p-6 md:p-8 border-t-4 border-emerald-500 dark:border-emerald-400">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </span>
                    Research Process
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="glass-card p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className="absolute -right-10 -top-10 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
                      <div className="relative z-10">
                        <div className="bg-blue-100 dark:bg-blue-900/30 h-14 w-14 flex items-center justify-center rounded-xl mx-auto mb-4 shadow-sm">
                          <Search className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-lg">Define Research Goals</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                          Set clear objectives and research questions to guide your data collection efforts
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Target audience identification
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Research methodology selection
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className="absolute -right-10 -top-10 w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
                      <div className="relative z-10">
                        <div className="bg-green-100 dark:bg-green-900/30 h-14 w-14 flex items-center justify-center rounded-xl mx-auto mb-4 shadow-sm">
                          <FileText className="h-7 w-7 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-lg">AI-Powered Analysis</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                          Our AI processes qualitative and quantitative data to identify meaningful patterns
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Natural language processing
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Theme extraction & clustering
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className="absolute -right-10 -top-10 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
                      <div className="relative z-10">
                        <div className="bg-purple-100 dark:bg-purple-900/30 h-14 w-14 flex items-center justify-center rounded-xl mx-auto mb-4 shadow-sm">
                          <Wand className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-lg">Actionable Insights</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                          Transform data into clear, actionable recommendations for your business
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Priority recommendations
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Implementation roadmaps
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <div className="flex items-center justify-center mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 mr-2" />
            <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 ml-2" />
          </div>
        </Carousel>

        {/* Add a route reference for "/research-dashboard" to make it clear this would be available at that URL */}
        <div className="text-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            View the full dashboard at <span className="font-mono text-primary">qwalo.ai/research-dashboard</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Helper function for progress bar colors
function getProgressColor(progress: number) {
  if (progress >= 80) return '#4ade80';
  if (progress >= 60) return '#22d3ee';
  if (progress >= 40) return '#facc15';
  return '#f87171';
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
