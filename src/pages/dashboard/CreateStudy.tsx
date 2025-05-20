
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Mic,
  FileText, 
  Send
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Dummy AI generated questions for Step 2
const aiSuggestedQuestions = [
  "How would you rate the ease of use of our product on a scale of 1-10?",
  "What features do you find most valuable in our product?",
  "What improvements or new features would you like to see?",
  "How likely are you to recommend our product to a friend or colleague?",
  "How does our product compare to alternatives you've used?",
];

const CreateStudy = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [studyData, setStudyData] = useState({
    title: "",
    objective: "",
    questions: [...aiSuggestedQuestions],
    demographics: {
      age: true,
      gender: true,
      location: false,
      income: false,
      education: false,
    },
    responseMode: "text"
  });

  const handleNext = () => {
    if (step === 1 && !studyData.title) {
      toast.error("Please enter a study title");
      return;
    }
    
    if (step === 1 && !studyData.objective) {
      toast.error("Please enter a research objective");
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Launch study
      toast.success("Study launched successfully!");
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenerateQuestions = () => {
    if (!studyData.objective) {
      toast.error("Please enter a research objective first");
      return;
    }
    
    setIsGeneratingQuestions(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGeneratingQuestions(false);
      toast.success("AI questions generated");
      // The questions are already set in the initial state
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Step {step} of 4</span>
            <span className="text-sm text-muted-foreground">{step === 4 ? "Ready to launch" : `${step * 25}% Complete`}</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-qwalo-blue rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${step * 25}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Research Objective */}
        {step === 1 && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Study Details</CardTitle>
              <CardDescription>
                Start by naming your study and defining your research objective
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Study Title</Label>
                <Input
                  id="title"
                  placeholder="E.g., Product Feedback Survey"
                  value={studyData.title}
                  onChange={(e) => setStudyData({ ...studyData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="objective">Research Objective</Label>
                <Textarea
                  id="objective"
                  placeholder="What insights are you looking to gather from this study?"
                  className="min-h-[120px]"
                  value={studyData.objective}
                  onChange={(e) => setStudyData({ ...studyData, objective: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext}>
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: AI Suggested Questions */}
        {step === 2 && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Study Questions</CardTitle>
              <CardDescription>
                Review and customize AI-suggested questions based on your objective
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold">Your Research Objective:</h3>
                  <p className="text-sm text-muted-foreground">{studyData.objective}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={handleGenerateQuestions}
                  disabled={isGeneratingQuestions}
                >
                  <Sparkles className="mr-2 h-4 w-4 text-qwalo-orange" />
                  {isGeneratingQuestions ? "Generating..." : "Regenerate Questions"}
                </Button>
              </div>
              
              <div className="space-y-3">
                {studyData.questions.map((question, index) => (
                  <div key={index} className="flex items-start p-3 rounded-lg border">
                    <div className="flex-1">
                      <Textarea
                        value={question}
                        onChange={(e) => {
                          const newQuestions = [...studyData.questions];
                          newQuestions[index] = e.target.value;
                          setStudyData({ ...studyData, questions: newQuestions });
                        }}
                        className="w-full resize-none border-0 focus-visible:ring-0 p-0"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newQuestions = studyData.questions.filter((_, i) => i !== index);
                        setStudyData({ ...studyData, questions: newQuestions });
                      }}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-dashed"
                onClick={() => {
                  setStudyData({
                    ...studyData,
                    questions: [...studyData.questions, ""]
                  });
                }}
              >
                + Add Custom Question
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext}>
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Demographics */}
        {step === 3 && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Target Demographics</CardTitle>
              <CardDescription>
                Choose the demographic data you want to collect from participants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="age" 
                    checked={studyData.demographics.age}
                    onCheckedChange={(checked) => 
                      setStudyData({ 
                        ...studyData, 
                        demographics: {
                          ...studyData.demographics,
                          age: checked === true
                        }
                      })
                    }
                  />
                  <Label htmlFor="age">Age Group</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="gender"
                    checked={studyData.demographics.gender}
                    onCheckedChange={(checked) => 
                      setStudyData({ 
                        ...studyData, 
                        demographics: {
                          ...studyData.demographics,
                          gender: checked === true
                        }
                      })
                    }
                  />
                  <Label htmlFor="gender">Gender</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="location"
                    checked={studyData.demographics.location}
                    onCheckedChange={(checked) => 
                      setStudyData({ 
                        ...studyData, 
                        demographics: {
                          ...studyData.demographics,
                          location: checked === true
                        }
                      })
                    }
                  />
                  <Label htmlFor="location">Location (City/Country)</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="income"
                    checked={studyData.demographics.income}
                    onCheckedChange={(checked) => 
                      setStudyData({ 
                        ...studyData, 
                        demographics: {
                          ...studyData.demographics,
                          income: checked === true
                        }
                      })
                    }
                  />
                  <Label htmlFor="income">Income Bracket</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="education"
                    checked={studyData.demographics.education}
                    onCheckedChange={(checked) => 
                      setStudyData({ 
                        ...studyData, 
                        demographics: {
                          ...studyData.demographics,
                          education: checked === true
                        }
                      })
                    }
                  />
                  <Label htmlFor="education">Education Level</Label>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium mb-2">Target Sample Size</h3>
                <Select defaultValue="50">
                  <SelectTrigger>
                    <SelectValue placeholder="Select sample size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 participants</SelectItem>
                    <SelectItem value="25">25 participants</SelectItem>
                    <SelectItem value="50">50 participants</SelectItem>
                    <SelectItem value="100">100 participants</SelectItem>
                    <SelectItem value="250">250 participants</SelectItem>
                    <SelectItem value="500">500 participants</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext}>
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 4: Response Mode */}
        {step === 4 && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Response Mode</CardTitle>
              <CardDescription>
                Choose how participants will provide their responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    studyData.responseMode === 'text' ? 'border-primary ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => setStudyData({ ...studyData, responseMode: "text" })}
                >
                  <div className="flex justify-between items-start mb-4">
                    <FileText className="h-8 w-8 text-qwalo-blue" />
                    {studyData.responseMode === 'text' && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <h3 className="font-medium mb-2">Text Responses</h3>
                  <p className="text-sm text-muted-foreground">
                    Participants type their answers to your questions
                  </p>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    studyData.responseMode === 'voice' ? 'border-primary ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => setStudyData({ ...studyData, responseMode: "voice" })}
                >
                  <div className="flex justify-between items-start mb-4">
                    <Mic className="h-8 w-8 text-qwalo-orange" />
                    {studyData.responseMode === 'voice' && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <h3 className="font-medium mb-2">Voice Responses</h3>
                  <p className="text-sm text-muted-foreground">
                    Participants record spoken answers to your questions
                  </p>
                </div>
                
                <div className="col-span-1 md:col-span-2">
                  <div className="border rounded-lg p-4 bg-secondary/30 cursor-not-allowed">
                    <div className="flex justify-between items-start mb-4 opacity-50">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-2 text-muted-foreground">Video Responses</h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="bg-secondary px-2 py-1 rounded text-xs mr-2">Coming Soon</span>
                      Participants record video answers to your questions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                className="bg-qwalo-blue text-white hover:bg-qwalo-darkblue"
                onClick={handleNext}
              >
                <Send className="mr-2 h-4 w-4" /> Launch Study
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CreateStudy;
