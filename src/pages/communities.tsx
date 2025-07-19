import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Trophy, 
  Target,
  BookOpen,
  Plus,
  TrendingUp,
  Video,
  Star,
  ChevronRight
} from "lucide-react";

const Communities = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [roomType, setRoomType] = useState<"voice" | "chat" | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    maxParticipants: "",
    isScheduled: false,
    scheduledDate: "",
    scheduledTime: ""
  });

  // Data structures
  const trendingSkills = [
    { name: "React", growth: "+25%", members: 3420, color: "bg-primary" },
    { name: "Python", growth: "+18%", members: 4200, color: "bg-secondary" },
    { name: "Machine Learning", growth: "+32%", members: 2100, color: "bg-accent" },
    { name: "TypeScript", growth: "+15%", members: 2870, color: "bg-primary" },
    { name: "Next.js", growth: "+28%", members: 1890, color: "bg-secondary" }
  ];

  const liveRooms = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      host: "Sarah Chen",
      participants: 24,
      maxParticipants: 30,
      category: "Web Development",
      type: "voice",
      duration: "45m",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Python Data Analysis Workshop",
      host: "Alex Johnson",
      participants: 18,
      maxParticipants: 25,
      category: "Data Science",
      type: "chat",
      duration: "1h 30m",
      level: "Beginner"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      host: "Maria Rodriguez",
      participants: 32,
      maxParticipants: 50,
      category: "Design",
      type: "voice",
      duration: "2h",
      level: "Advanced"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly JavaScript Q&A",
      date: "Today, 6:00 PM",
      attendees: 156,
      host: "CodeMaster Academy"
    },
    {
      id: 2,
      title: "Machine Learning Bootcamp",
      date: "Tomorrow, 2:00 PM",
      attendees: 89,
      host: "AI Learning Hub"
    },
    {
      id: 3,
      title: "Open Source Contribution Workshop",
      date: "Friday, 4:00 PM",
      attendees: 67,
      host: "DevCommunity"
    }
  ];

  const skillCategories = [
    {
      id: "web-dev",
      name: "Web Development",
      skills: [
        { name: "React", members: 3420, level: "Beginner to Advanced", rooms: 12 },
        { name: "Vue.js", members: 1890, level: "Intermediate", rooms: 8 },
        { name: "Node.js", members: 2340, level: "Beginner to Advanced", rooms: 15 },
        { name: "TypeScript", members: 2870, level: "Intermediate to Advanced", rooms: 10 }
      ]
    },
    {
      id: "ai-ml",
      name: "Artificial Intelligence",
      skills: [
        { name: "Machine Learning", members: 2100, level: "Beginner to Advanced", rooms: 18 },
        { name: "Deep Learning", members: 1650, level: "Advanced", rooms: 9 },
        { name: "Natural Language Processing", members: 980, level: "Intermediate", rooms: 6 },
        { name: "Computer Vision", members: 1230, level: "Intermediate to Advanced", rooms: 7 }
      ]
    },
    {
      id: "data-science",
      name: "Data Science",
      skills: [
        { name: "Python for Data Science", members: 2890, level: "Beginner to Advanced", rooms: 22 },
        { name: "Data Visualization", members: 1560, level: "Beginner to Intermediate", rooms: 11 },
        { name: "Statistics", members: 1340, level: "Beginner to Advanced", rooms: 8 },
        { name: "SQL", members: 3210, level: "Beginner to Advanced", rooms: 19 }
      ]
    }
  ];

  const communityPosts = [
    {
      id: 1,
      author: "John Doe",
      avatar: "JD",
      title: "Introduction to React Hooks",
      content: "Just finished learning about React Hooks and wanted to share some insights...",
      tags: ["React", "JavaScript"],
      likes: 12,
      comments: 5,
      shares: 3,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "JS",
      title: "Python Data Visualization Tips",
      content: "Here are some advanced matplotlib techniques I've discovered...",
      tags: ["Python", "Data Science"],
      likes: 28,
      comments: 8,
      shares: 6,
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      author: "Mike Chen",
      avatar: "MC",
      title: "Machine Learning Best Practices",
      content: "After working on several ML projects, here's what I've learned...",
      tags: ["ML", "AI"],
      likes: 45,
      comments: 12,
      shares: 15,
      timeAgo: "1 day ago"
    }
  ];

  const learningProgress = [
    { skill: "React Development", progress: 75, level: "Advanced", hoursSpent: 12 },
    { skill: "Machine Learning", progress: 45, level: "Intermediate", hoursSpent: 8 },
    { skill: "Python Programming", progress: 90, level: "Expert", hoursSpent: 15 },
    { skill: "UI/UX Design", progress: 30, level: "Beginner", hoursSpent: 5 }
  ];

  const categories = [
    "Web Development",
    "Machine Learning",
    "Data Science",
    "UI/UX Design",
    "Mobile Development",
    "Cloud Computing",
    "Artificial Intelligence",
    "Cybersecurity",
    "Game Development",
    "DevOps"
  ];

  // Filter functions
  const filteredSkillCategories = skillCategories.filter(category =>
    selectedCategory === "all" || category.id === selectedCategory
  ).map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  // Event handlers
  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating room:", { ...formData, roomType });
    setShowCreateModal(false);
    setRoomType(null);
    setFormData({
      title: "",
      description: "",
      category: "",
      maxParticipants: "",
      isScheduled: false,
      scheduledDate: "",
      scheduledTime: ""
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Learn Together, Grow Together
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a vibrant community of learners, share knowledge, and accelerate your growth through collaborative learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowCreateModal(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Room
            </Button>
            <Button size="lg" variant="outline">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Skills
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Trending Skills */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trending Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                      <div>
                        <p className="font-medium text-sm">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.members.toLocaleString()} members</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Quick Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Categories
                </Button>
                {skillCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Live Learning Rooms */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Live Learning Rooms</h2>
                <Button variant="outline" size="sm">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {liveRooms.map((room) => (
                  <Card key={room.id} className="hover:shadow-lg transition-all duration-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={room.type === "voice" ? "default" : "secondary"}>
                          {room.type === "voice" ? "🎤 Voice" : "💬 Chat"}
                        </Badge>
                        <Badge variant="outline">{room.level}</Badge>
                      </div>
                      <CardTitle className="text-lg">{room.title}</CardTitle>
                      <CardDescription>{room.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{room.host.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-muted-foreground">Hosted by {room.host}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{room.participants}/{room.maxParticipants} participants</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {room.duration}
                          </span>
                        </div>
                        <Progress value={(room.participants / room.maxParticipants) * 100} className="h-2" />
                      </div>
                      
                      <Button className="w-full">
                        <Video className="w-4 h-4 mr-2" />
                        Join Room
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.date} • {event.host}</p>
                            <p className="text-sm text-muted-foreground">{event.attendees} attending</p>
                          </div>
                        </div>
                        <Button variant="outline">
                          Join Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skill Library Section */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Skill Library</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {filteredSkillCategories.map((category) => (
                  <div key={category.id} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                      <Badge variant="secondary">{category.skills.length} skills</Badge>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, index) => (
                        <Card key={index} className="hover:shadow-md transition-all duration-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            <CardDescription>{skill.level}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                  <Users className="w-4 h-4" />
                                  {skill.members.toLocaleString()} members
                                </span>
                                <span className="text-primary font-medium">
                                  {skill.rooms} active rooms
                                </span>
                              </div>
                              <Button className="w-full" size="sm">
                                Join Community
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Posts */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Community Discussions</h2>
              <div className="space-y-6">
                {communityPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-all duration-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">{post.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.content}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span className="text-xs">{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-xs">{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-xs">{post.shares}</span>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="text-xs">
                          Join Discussion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Learning Journey Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Learning Journey</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Skill Progress
                  </CardTitle>
                  <CardDescription>
                    Track your journey across different learning areas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {learningProgress.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{skill.skill}</h4>
                          <p className="text-sm text-muted-foreground">{skill.hoursSpent} hours • {skill.level}</p>
                        </div>
                        <span className="text-sm font-medium">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Create Room Modal */}
      {showCreateModal && (
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Create a Learning Room</DialogTitle>
              <DialogDescription>
                Start a new learning session and invite others to join your journey
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreateRoom} className="space-y-6">
              {/* Room Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Choose Room Type</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Card 
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      roomType === "voice" ? "ring-2 ring-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setRoomType("voice")}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2">🎤</div>
                      <h3 className="font-semibold">Voice Room</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Real-time voice discussions and live presentations
                      </p>
                      {roomType === "voice" && (
                        <Badge className="mt-3">Selected</Badge>
                      )}
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      roomType === "chat" ? "ring-2 ring-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setRoomType("chat")}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2">💬</div>
                      <h3 className="font-semibold">Chat Room</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Text-based discussions and collaborative problem solving
                      </p>
                      {roomType === "chat" && (
                        <Badge className="mt-3">Selected</Badge>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {roomType && (
                <div className="space-y-4 animate-fade-in">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Room Title *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., React Hooks Deep Dive"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="What will you be learning or discussing?"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="maxParticipants">Max Participants</Label>
                        <Select 
                          value={formData.maxParticipants} 
                          onValueChange={(value) => handleInputChange("maxParticipants", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select limit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10 people</SelectItem>
                            <SelectItem value="25">25 people</SelectItem>
                            <SelectItem value="50">50 people</SelectItem>
                            <SelectItem value="100">100 people</SelectItem>
                            <SelectItem value="unlimited">Unlimited</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Scheduling Options */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant={!formData.isScheduled ? "default" : "outline"}
                        onClick={() => handleInputChange("isScheduled", false)}
                        className="flex items-center gap-2"
                      >
                        <Users className="w-4 h-4" />
                        Start Now
                      </Button>
                      <Button
                        type="button"
                        variant={formData.isScheduled ? "default" : "outline"}
                        onClick={() => handleInputChange("isScheduled", true)}
                        className="flex items-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        Schedule for Later
                      </Button>
                    </div>

                    {formData.isScheduled && (
                      <div className="grid grid-cols-2 gap-4 animate-fade-in">
                        <div>
                          <Label htmlFor="scheduledDate">Date</Label>
                          <Input
                            id="scheduledDate"
                            type="date"
                            value={formData.scheduledDate}
                            onChange={(e) => handleInputChange("scheduledDate", e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <Label htmlFor="scheduledTime">Time</Label>
                          <Input
                            id="scheduledTime"
                            type="time"
                            value={formData.scheduledTime}
                            onChange={(e) => handleInputChange("scheduledTime", e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowCreateModal(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1"
                      disabled={!formData.title || !formData.category}
                    >
                      {formData.isScheduled ? "Schedule Room" : "Create & Start Room"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Communities;