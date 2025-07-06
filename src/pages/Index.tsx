
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Calendar, Clock, Bell, User } from "lucide-react";
import { useState } from "react";
import { SkillLibrary } from "@/components/SkillLibrary";
import { CreateRoomModal } from "@/components/CreateRoomModal";
import { UserDashboard } from "@/components/UserDashboard";

const Index = () => {
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const trendingSkills = [
    { name: "React Development", members: 2341, growth: "+12%" },
    { name: "Machine Learning", members: 1856, growth: "+18%" },
    { name: "Python Programming", members: 3102, growth: "+8%" },
    { name: "UI/UX Design", members: 1453, growth: "+22%" },
  ];

  const liveRooms = [
    {
      id: 1,
      title: "Building React Components",
      category: "Web Development",
      participants: 24,
      type: "voice",
      host: "Sarah Chen",
      duration: "45 min"
    },
    {
      id: 2,
      title: "ML Model Training Best Practices",
      category: "Machine Learning",
      participants: 18,
      type: "chat",
      host: "Alex Kumar",
      duration: "30 min"
    },
    {
      id: 3,
      title: "Design System Workshop",
      category: "UI/UX Design",
      participants: 32,
      type: "voice",
      host: "Maria Garcia",
      duration: "60 min"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced JavaScript Concepts",
      time: "Today, 3:00 PM",
      attendees: 67,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Data Science Career Path",
      time: "Tomorrow, 2:00 PM",
      attendees: 89,
      category: "Data Science"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-learning-purple-600">
                LearnTogether
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCreateRoom(true)}
                className="hidden sm:flex"
              >
                Create Room
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Avatar className="cursor-pointer">
                <AvatarFallback className="bg-learning-purple-100 text-learning-purple-700">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - All sections stacked vertically */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Section */}
        <div className="py-8 space-y-8">
          {/* Hero Section */}
          <div className="gradient-bg rounded-2xl p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Learn Together, Grow Together
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Join a thriving community of learners. Connect, collaborate, and master new skills through live voice rooms and interactive sessions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-learning-purple-600 hover:bg-learning-purple-700"
                onClick={() => setShowCreateRoom(true)}
              >
                Create a Room
              </Button>
              <Button size="lg" variant="outline">
                Explore Skills
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trending Skills */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-learning-purple-500 rounded-full"></div>
                  Trending Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-gray-500">{skill.members.toLocaleString()} members</p>
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-50">
                      {skill.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Live Rooms */}
            <Card className="hover-lift lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Live Learning Rooms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveRooms.map((room) => (
                  <div key={room.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{room.title}</h4>
                        <p className="text-sm text-gray-600">Hosted by {room.host}</p>
                      </div>
                      <Badge variant={room.type === 'voice' ? 'default' : 'secondary'}>
                        {room.type === 'voice' ? '🎤 Voice' : '💬 Chat'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {room.participants} participants
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {room.duration}
                      </span>
                    </div>
                    <Button size="sm" className="mt-3 w-full">
                      Join Room
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-learning-blue-600" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Don't miss these scheduled learning sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{event.time}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees} attending
                      </span>
                      <Badge variant="outline">{event.category}</Badge>
                    </div>
                    <Button size="sm" variant="outline" className="mt-3 w-full">
                      Set Reminder
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="py-8 border-t">
          <SkillLibrary />
        </div>

        {/* Dashboard Section */}
        <div className="py-8 border-t pb-20">
          <UserDashboard />
        </div>
      </main>

      {/* Create Room Modal */}
      {showCreateRoom && (
        <CreateRoomModal onClose={() => setShowCreateRoom(false)} />
      )}

      {/* Mobile Create Room Button - Fixed */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowCreateRoom(true)}
          className="w-14 h-14 rounded-full bg-learning-purple-600 hover:bg-learning-purple-700 shadow-lg"
          size="icon"
        >
          <span className="text-white text-xl">+</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
