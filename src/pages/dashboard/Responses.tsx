
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  Download,
} from "lucide-react";

// Dummy participant data
const participants = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: "25-34",
    gender: "Female",
    city: "New York",
    status: "Complete",
    date: "2023-05-15",
    responseType: "Text",
    sentiment: "Positive",
  },
  {
    id: 2,
    name: "Michael Chen",
    age: "35-44",
    gender: "Male",
    city: "San Francisco",
    status: "Complete",
    date: "2023-05-14",
    responseType: "Voice",
    sentiment: "Neutral",
  },
  {
    id: 3,
    name: "Emily Davis",
    age: "18-24",
    gender: "Female",
    city: "Chicago",
    status: "Complete",
    date: "2023-05-14",
    responseType: "Text",
    sentiment: "Negative",
  },
  {
    id: 4,
    name: "James Wilson",
    age: "45-54",
    gender: "Male",
    city: "Austin",
    status: "In-progress",
    date: "2023-05-13",
    responseType: "Voice",
    sentiment: "Neutral",
  },
  {
    id: 5,
    name: "Maria Garcia",
    age: "25-34",
    gender: "Female",
    city: "Miami",
    status: "Complete",
    date: "2023-05-12",
    responseType: "Text",
    sentiment: "Positive",
  },
  {
    id: 6,
    name: "David Kim",
    age: "35-44",
    gender: "Male",
    city: "Seattle",
    status: "In-progress",
    date: "2023-05-12",
    responseType: "Voice",
    sentiment: "Neutral",
  },
  {
    id: 7,
    name: "Alexandra Smith",
    age: "18-24",
    gender: "Female",
    city: "Boston",
    status: "Complete",
    date: "2023-05-11",
    responseType: "Text",
    sentiment: "Positive",
  },
];

// Dummy response data for the selected participant
const dummyResponses = {
  1: {
    text: "I found the product very intuitive and easy to use right from the start. The onboarding process was smooth, and I particularly liked the personalized recommendations feature. The customer support was also excellent when I had questions. If there's one thing I'd improve, it would be adding more customization options for the dashboard view.",
    keywords: ["intuitive", "easy to use", "onboarding", "personalized", "customer support", "customization"],
    sentiment: "Positive"
  },
  2: {
    text: "The voice assistant functionality works relatively well, though there are occasional misunderstandings with more complex commands. The interface is clean but sometimes finding specific settings requires too many clicks. Performance is generally good, but I've noticed some slowdowns when processing larger files.",
    keywords: ["voice assistant", "complex commands", "clean interface", "settings", "performance", "slowdowns"],
    sentiment: "Neutral"
  },
  3: {
    text: "I'm disappointed with several aspects of the product. It crashed multiple times during my testing, and I lost work as a result. The pricing model feels deceptive, with many essential features behind additional paywalls not clearly indicated during signup. The learning curve is also steeper than advertised.",
    keywords: ["crashed", "lost work", "deceptive", "pricing", "paywalls", "steep learning curve"],
    sentiment: "Negative"
  },
  4: {
    text: "The mobile version needs significant improvement. While the desktop experience is decent, the mobile app feels like an afterthought. Some features are completely missing, and the layout doesn't adapt well to smaller screens. I do appreciate the cross-platform syncing though.",
    keywords: ["mobile version", "desktop experience", "missing features", "layout", "smaller screens", "cross-platform"],
    sentiment: "Neutral"
  },
  5: {
    text: "I'm impressed with how much thought went into the user experience. The product anticipates my needs before I even realize them. The integration with other tools I use daily is seamless, and the regular feature updates show the company is listening to user feedback. Definitely worth the subscription price.",
    keywords: ["user experience", "anticipates needs", "integration", "seamless", "feature updates", "worth the price"],
    sentiment: "Positive"
  },
  6: {
    text: "I have mixed feelings about the product. On one hand, the core functionality works as advertised. On the other hand, there are occasional bugs and the interface could be more intuitive in certain areas. Customer service is responsive but sometimes takes too long to resolve issues.",
    keywords: ["mixed feelings", "core functionality", "bugs", "interface", "customer service", "resolution time"],
    sentiment: "Neutral"
  },
  7: {
    text: "The product has exceeded my expectations in almost every way. It's incredibly fast, the design is beautiful yet functional, and I've become much more productive since adopting it. The collaborator features are particularly impressive. I've already recommended it to several colleagues.",
    keywords: ["exceeded expectations", "fast", "beautiful design", "productive", "collaborator features", "recommended"],
    sentiment: "Positive"
  },
};

const ResponsesPage = () => {
  const [selectedParticipant, setSelectedParticipant] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState({
    age: "",
    gender: "",
    city: "",
    status: "",
  });
  const [sortColumn, setSortColumn] = useState<string | null>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return null;
    }
    return sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  const filteredParticipants = participants.filter((participant) => {
    return (
      (filterValue.age ? participant.age === filterValue.age : true) &&
      (filterValue.gender ? participant.gender === filterValue.gender : true) &&
      (filterValue.city ? participant.city === filterValue.city : true) &&
      (filterValue.status ? participant.status === filterValue.status : true) &&
      (searchQuery
        ? participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          participant.city.toLowerCase().includes(searchQuery.toLowerCase())
        : true)
    );
  });

  const sortedParticipants = [...filteredParticipants].sort((a, b) => {
    if (!sortColumn) return 0;
    
    let aValue = a[sortColumn as keyof typeof a];
    let bValue = b[sortColumn as keyof typeof b];
    
    // Special handling for date strings
    if (sortColumn === "date") {
      return sortDirection === "asc"
        ? new Date(aValue).getTime() - new Date(bValue).getTime()
        : new Date(bValue).getTime() - new Date(aValue).getTime();
    }
    
    // General case for string comparisons
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });

  // Get unique values for filters
  const uniqueAges = [...new Set(participants.map((p) => p.age))];
  const uniqueGenders = [...new Set(participants.map((p) => p.gender))];
  const uniqueCities = [...new Set(participants.map((p) => p.city))];
  const uniqueStatuses = [...new Set(participants.map((p) => p.status))];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <Card>
          <CardHeader className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
            <div>
              <CardTitle>Participant Responses</CardTitle>
              <CardDescription>
                View and analyze responses from study participants
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="h-9">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search participants..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center whitespace-nowrap"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {Object.values(filterValue).some(Boolean) ? "Filters Applied" : "Filter"}
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select value={filterValue.age} onValueChange={(value) => setFilterValue({ ...filterValue, age: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-ages">All Ages</SelectItem>
                  {uniqueAges.map((age) => (
                    <SelectItem key={age} value={age}>
                      {age}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterValue.gender} onValueChange={(value) => setFilterValue({ ...filterValue, gender: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-genders">All Genders</SelectItem>
                  {uniqueGenders.map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterValue.city} onValueChange={(value) => setFilterValue({ ...filterValue, city: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-cities">All Cities</SelectItem>
                  {uniqueCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterValue.status} onValueChange={(value) => setFilterValue({ ...filterValue, status: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-statuses">All Statuses</SelectItem>
                  {uniqueStatuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Participants Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px] cursor-pointer" onClick={() => handleSort("name")}>
                      <div className="flex items-center">
                        Participant {getSortIcon("name")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("age")}>
                      <div className="flex items-center">
                        Age {getSortIcon("age")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("gender")}>
                      <div className="flex items-center">
                        Gender {getSortIcon("gender")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("city")}>
                      <div className="flex items-center">
                        City {getSortIcon("city")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                      <div className="flex items-center">
                        Status {getSortIcon("status")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                      <div className="flex items-center">
                        Date {getSortIcon("date")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("responseType")}>
                      <div className="flex items-center">
                        Type {getSortIcon("responseType")}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("sentiment")}>
                      <div className="flex items-center">
                        Sentiment {getSortIcon("sentiment")}
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedParticipants.length > 0 ? (
                    sortedParticipants.map((participant) => (
                      <TableRow key={participant.id}>
                        <TableCell className="font-medium">{participant.name}</TableCell>
                        <TableCell>{participant.age}</TableCell>
                        <TableCell>{participant.gender}</TableCell>
                        <TableCell>{participant.city}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div
                              className={`h-2 w-2 rounded-full mr-2 ${
                                participant.status === "Complete" ? "bg-green-500" : "bg-amber-500"
                              }`}
                            />
                            {participant.status}
                          </div>
                        </TableCell>
                        <TableCell>{participant.date}</TableCell>
                        <TableCell>{participant.responseType}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div
                              className={`h-2 w-2 rounded-full mr-2 ${
                                participant.sentiment === "Positive"
                                  ? "bg-green-500"
                                  : participant.sentiment === "Neutral"
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              }`}
                            />
                            {participant.sentiment}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedParticipant(participant.id)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                        No participants found matching your filters
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Viewer Dialog */}
      <Dialog open={selectedParticipant !== null} onOpenChange={() => setSelectedParticipant(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Participant Response</DialogTitle>
            <DialogDescription>
              {selectedParticipant
                ? `${participants.find(p => p.id === selectedParticipant)?.name} - ${participants.find(p => p.id === selectedParticipant)?.responseType} Response`
                : ""}
            </DialogDescription>
          </DialogHeader>
          
          {selectedParticipant && (
            <div className="space-y-6">
              {/* Sentiment Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`h-3 w-3 rounded-full mr-2 ${
                      dummyResponses[selectedParticipant as keyof typeof dummyResponses].sentiment === "Positive"
                        ? "bg-green-500"
                        : dummyResponses[selectedParticipant as keyof typeof dummyResponses].sentiment === "Neutral"
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                  />
                  <span className="font-medium">
                    {dummyResponses[selectedParticipant as keyof typeof dummyResponses].sentiment} Sentiment
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {participants.find(p => p.id === selectedParticipant)?.date}
                </span>
              </div>
              
              {/* Response Text */}
              <div className="border rounded-lg p-4 bg-muted/30">
                <p className="whitespace-pre-wrap">
                  {dummyResponses[selectedParticipant as keyof typeof dummyResponses].text}
                </p>
              </div>
              
              {/* Keywords/Tags */}
              <div>
                <h4 className="text-sm font-medium mb-2">Key Themes & Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {dummyResponses[selectedParticipant as keyof typeof dummyResponses].keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedParticipant(null)}>
              Close
            </Button>
            <Button>Add to Insights</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default ResponsesPage;
