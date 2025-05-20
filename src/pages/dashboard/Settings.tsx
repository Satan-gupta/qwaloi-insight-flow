
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  FileText,
  Image,
  FileUp,
  UserPlus,
  Save,
  Mail,
  X,
  AlertCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "sonner";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("export");
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Smith", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
  ]);
  const [newTeamMember, setNewTeamMember] = useState({ name: "", email: "", role: "Viewer" });
  const [apiKey, setApiKey] = useState("qwl_sk_1234567890abcdefghijklmn");
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);

  const handleAddTeamMember = () => {
    if (!newTeamMember.name || !newTeamMember.email) {
      toast.error("Please enter both name and email");
      return;
    }
    
    setTeamMembers([
      ...teamMembers,
      {
        id: teamMembers.length + 1,
        ...newTeamMember,
      },
    ]);
    setNewTeamMember({ name: "", email: "", role: "Viewer" });
    toast.success("Team member added successfully");
  };

  const handleRemoveTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
    toast.success("Team member removed");
  };

  const handleExport = (type: string) => {
    toast.success(`Data exported as ${type}`);
  };

  const handleSaveSettings = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in space-y-6">
        <Tabs defaultValue="export" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6 w-full sm:w-auto">
            <TabsTrigger value="export">Export & Data</TabsTrigger>
            <TabsTrigger value="team">Team Members</TabsTrigger>
            <TabsTrigger value="account">Account Settings</TabsTrigger>
          </TabsList>
          
          {/* Export & Data Tab */}
          <TabsContent value="export" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Export Data</CardTitle>
                <CardDescription>
                  Download your study data and visualizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-qwalo-blue" />
                      <div>
                        <h3 className="font-medium">Export Response Data</h3>
                        <p className="text-sm text-muted-foreground">
                          Download all responses and participant data
                        </p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleExport("CSV")}>
                        <FileUp className="mr-2 h-4 w-4" />
                        CSV
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleExport("Excel")}>
                        <FileUp className="mr-2 h-4 w-4" />
                        Excel
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image className="h-8 w-8 text-qwalo-blue" />
                      <div>
                        <h3 className="font-medium">Export Visualizations</h3>
                        <p className="text-sm text-muted-foreground">
                          Download charts and word clouds as image files
                        </p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleExport("PNG")}>
                        <FileUp className="mr-2 h-4 w-4" />
                        PNG
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleExport("SVG")}>
                        <FileUp className="mr-2 h-4 w-4" />
                        SVG
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Download className="h-8 w-8 text-qwalo-blue" />
                      <div>
                        <h3 className="font-medium">Export Analysis Report</h3>
                        <p className="text-sm text-muted-foreground">
                          Download complete analysis with insights and recommendations
                        </p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleExport("PDF")}>
                        <FileUp className="mr-2 h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
                <CardDescription>
                  Configure how long your data is stored
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Store Response Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep participant response data in our system
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="store-data">Enabled</Label>
                    <Switch id="store-data" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Auto-delete After</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically delete data after specified period
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="never">Never</option>
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                      <option value="180">6 months</option>
                      <option value="365">1 year</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button onClick={handleSaveSettings}>Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Team Members Tab */}
          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Manage who has access to your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg divide-y">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-qwalo-blue/20 flex items-center justify-center">
                          <span className="font-medium text-qwalo-blue">
                            {member.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 text-muted-foreground mr-1" />
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm bg-muted px-2 py-1 rounded">
                          {member.role}
                        </span>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleRemoveTeamMember(member.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Add Team Member</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter name"
                          value={newTeamMember.name}
                          onChange={(e) => setNewTeamMember({ ...newTeamMember, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter email"
                          value={newTeamMember.email}
                          onChange={(e) => setNewTeamMember({ ...newTeamMember, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="role">Role</Label>
                        <select 
                          id="role"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={newTeamMember.role}
                          onChange={(e) => setNewTeamMember({ ...newTeamMember, role: e.target.value })}
                        >
                          <option value="Admin">Admin</option>
                          <option value="Editor">Editor</option>
                          <option value="Viewer">Viewer</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <Button onClick={handleAddTeamMember} className="w-full md:w-auto">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Add Member
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Account Settings Tab */}
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Theme Preference</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Toggle between light and dark mode</span>
                    <ThemeToggle />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Notification Settings</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="completion-alerts">Study Completion Alerts</Label>
                      <Switch id="completion-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="weekly-summary">Weekly Summary Reports</Label>
                      <Switch id="weekly-summary" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 border-t pt-4">
                  <h3 className="font-medium">API Access</h3>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Input
                          id="api-key"
                          type={isApiKeyVisible ? "text" : "password"}
                          value={apiKey}
                          readOnly
                          className="font-mono"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setIsApiKeyVisible(!isApiKeyVisible)}
                        >
                          {isApiKeyVisible ? "Hide" : "Show"}
                        </Button>
                      </div>
                      <Button variant="outline" onClick={() => {
                        navigator.clipboard.writeText(apiKey);
                        toast.success("API key copied to clipboard");
                      }}>
                        Copy
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use this API key to access your data programmatically. Keep it secure and do not share it publicly.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-between">
                <div className="flex items-center text-sm text-yellow-600 dark:text-yellow-400">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Changes are saved automatically
                </div>
                <Button onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" />
                  Save All Settings
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage & Billing</CardTitle>
                <CardDescription>
                  View your current plan and usage statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Current Plan</h3>
                      <p className="text-sm text-muted-foreground">Professional Plan</p>
                    </div>
                    <Button variant="outline">Manage Plan</Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Usage Statistics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Studies</span>
                          <span>5 / 10</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full mt-1">
                          <div className="h-full bg-qwalo-blue rounded-full" style={{ width: "50%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Participants</span>
                          <span>127 / 500</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full mt-1">
                          <div className="h-full bg-qwalo-orange rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Storage</span>
                          <span>1.2GB / 5GB</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full mt-1">
                          <div className="h-full bg-qwalo-darkblue rounded-full" style={{ width: "24%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
