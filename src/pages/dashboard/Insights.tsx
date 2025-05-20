
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Download, Send, Image, Search } from "lucide-react";
import { toast } from "sonner";

// Dummy data for word cloud
const wordCloudData = [
  { text: "User Experience", value: 64 },
  { text: "Interface", value: 42 },
  { text: "Onboarding", value: 36 },
  { text: "Features", value: 55 },
  { text: "Performance", value: 28 },
  { text: "Design", value: 48 },
  { text: "Intuitive", value: 40 },
  { text: "Customer Support", value: 32 },
  { text: "Usability", value: 45 },
  { text: "Navigation", value: 38 },
  { text: "Customization", value: 25 },
  { text: "Reliability", value: 30 },
  { text: "Updates", value: 22 },
  { text: "Mobile", value: 34 },
  { text: "Pricing", value: 27 },
  { text: "Learning Curve", value: 20 },
  { text: "Recommendations", value: 18 },
  { text: "Integrations", value: 24 },
];

// Dummy data for bar chart
const satisfactionData = [
  { name: "Very Satisfied", value: 45 },
  { name: "Satisfied", value: 32 },
  { name: "Neutral", value: 15 },
  { name: "Dissatisfied", value: 5 },
  { name: "Very Dissatisfied", value: 3 },
];

// Dummy data for pie chart
const demographicData = [
  { name: "18-24", value: 15 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

// Colors for charts
const COLORS = ["#0069DC", "#FF7A00", "#002351", "#E0F2FF", "#91caff"];

// Predefined AI answers to common queries
const aiAnswers = {
  "what are the main themes": "The main themes emerging from the feedback are User Experience (mentioned in 64% of responses), Features (55%), and Design (48%). Users particularly appreciate the intuitive interface and onboarding process but would like to see more customization options.",
  "which features are most liked": "The most appreciated features are the personalized recommendations (mentioned positively in 78% of responses), the clean interface design (65%), and the cross-platform synchronization (62%).",
  "what needs improvement": "Areas identified for improvement include mobile responsiveness (mentioned in 34% of responses), pricing transparency (27%), and adding more customization options (25%).",
  "satisfaction by age group": "The 25-34 age group shows the highest satisfaction (92% satisfied or very satisfied), followed by the 35-44 age group (85%). The 55+ age group has the lowest satisfaction at 68%, primarily citing learning curve challenges.",
  "most common complaints": "The most common complaints relate to occasional performance issues (28% of responses), limited customization options (25%), and the learning curve for advanced features (20%).",
};

// Simple function to find the best matching predefined query
const findBestMatch = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  
  // First check for exact key match
  if (aiAnswers[lowercaseQuery as keyof typeof aiAnswers]) {
    return aiAnswers[lowercaseQuery as keyof typeof aiAnswers];
  }
  
  // Then check for partial matches
  for (const key of Object.keys(aiAnswers)) {
    if (lowercaseQuery.includes(key) || key.includes(lowercaseQuery)) {
      return aiAnswers[key as keyof typeof aiAnswers];
    }
  }
  
  // If all else fails
  return "I don't have enough data to answer that specific question. Try asking about main themes, most liked features, improvement areas, age group satisfaction, or common complaints.";
};

const InsightsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState("all");

  const handleAiQuery = () => {
    if (!aiQuery.trim()) {
      toast.error("Please enter a question to ask");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const response = findBestMatch(aiQuery);
      setAiResponse(response);
      setIsProcessing(false);
    }, 1200);
  };

  const handleDownloadPNG = () => {
    toast.success("Chart downloaded as PNG");
  };

  const handleExportCSV = () => {
    toast.success("Data exported as CSV");
  };

  // Render Word Cloud (simulated with flex boxes for lack of proper word cloud component)
  const renderWordCloud = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-center p-4 min-h-[300px]">
        {wordCloudData.map((word, index) => {
          const fontSize = 10 + (word.value / 10);
          const color = COLORS[index % COLORS.length];
          
          return (
            <div 
              key={index}
              style={{ 
                fontSize: `${fontSize}px`,
                color: color,
                fontWeight: fontSize > 15 ? "bold" : "normal",
              }}
              className="p-1"
            >
              {word.text}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in space-y-6">
        {/* AI Query Section */}
        <Card className="border-l-4 border-qwalo-orange">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-qwalo-blue flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold">Ask Your Data</h2>
              </div>
              
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Ask a question about your insights... (e.g., 'What are the main themes?')"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAiQuery();
                    }
                  }}
                />
                <Button 
                  onClick={handleAiQuery}
                  disabled={isProcessing}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isProcessing ? "Processing..." : "Ask"}
                </Button>
              </div>
              
              {aiResponse && (
                <div className="bg-muted/30 p-4 rounded-lg border mt-2">
                  <p className="whitespace-pre-wrap">{aiResponse}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Study Selector and Export Options */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center space-x-2 min-w-[200px]">
            <Select value={selectedStudy} onValueChange={setSelectedStudy}>
              <SelectTrigger>
                <SelectValue placeholder="Select study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Studies</SelectItem>
                <SelectItem value="user-experience">User Experience Study</SelectItem>
                <SelectItem value="product-feedback">Product Feedback</SelectItem>
                <SelectItem value="customer-satisfaction">Customer Satisfaction</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownloadPNG}>
              <Image className="h-4 w-4 mr-2" />
              Download Charts
            </Button>
          </div>
        </div>

        {/* Data Visualization Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4 w-full sm:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab with Word Cloud */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Themes</CardTitle>
                <CardDescription>
                  Word cloud showing the most frequently mentioned topics in responses
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {renderWordCloud()}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Satisfaction Distribution</CardTitle>
                <CardDescription>
                  Overall satisfaction levels across all participants
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 min-h-[300px]">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={satisfactionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Participants">
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Demographics Tab with Pie Charts */}
          <TabsContent value="demographics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>
                  Breakdown of participants by age group
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 min-h-[300px] flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} participants`, "Count"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Gender Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of participants by gender
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 min-h-[250px]">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Male", value: 45 },
                          { name: "Female", value: 52 },
                          { name: "Non-binary", value: 3 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        <Cell fill={COLORS[0]} />
                        <Cell fill={COLORS[1]} />
                        <Cell fill={COLORS[2]} />
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} participants`, "Count"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Location Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of participants by location
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 min-h-[250px]">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "North America", value: 58 },
                          { name: "Europe", value: 24 },
                          { name: "Asia", value: 12 },
                          { name: "Other", value: 6 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        <Cell fill={COLORS[0]} />
                        <Cell fill={COLORS[1]} />
                        <Cell fill={COLORS[2]} />
                        <Cell fill={COLORS[3]} />
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} participants`, "Count"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Sentiment Tab */}
          <TabsContent value="sentiment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis</CardTitle>
                <CardDescription>
                  Distribution of positive, neutral, and negative sentiment in responses
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 min-h-[300px]">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { name: "Positive", value: 62 },
                      { name: "Neutral", value: 25 },
                      { name: "Negative", value: 13 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Responses">
                      <Cell fill="#4CAF50" />
                      <Cell fill="#FFC107" />
                      <Cell fill="#F44336" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sentiment by Question</CardTitle>
                <CardDescription>
                  Sentiment breakdown for each question in the study
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 min-h-[350px]">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart
                    data={[
                      { name: "Q1", positive: 42, neutral: 13, negative: 5 },
                      { name: "Q2", positive: 35, neutral: 18, negative: 7 },
                      { name: "Q3", positive: 28, neutral: 22, negative: 10 },
                      { name: "Q4", positive: 48, neutral: 7, negative: 5 },
                      { name: "Q5", positive: 37, neutral: 16, negative: 7 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="positive" name="Positive" fill="#4CAF50" />
                    <Bar dataKey="neutral" name="Neutral" fill="#FFC107" />
                    <Bar dataKey="negative" name="Negative" fill="#F44336" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InsightsPage;
