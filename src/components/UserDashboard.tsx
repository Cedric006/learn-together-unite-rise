
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, Trophy, BookOpen, Target } from "lucide-react";

export const UserDashboard = () => {
  const userStats = {
    totalHours: 45,
    roomsJoined: 23,
    skillsLearning: 6,
    rank: "Advanced Learner"
  };

  const joinedRooms = [
    {
      id: 1,
      title: "React State Management",
      type: "voice",
      date: "Today, 2:00 PM",
      duration: "1h 30m",
      participants: 24,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Python Data Analysis",
      type: "chat",
      date: "Yesterday",
      duration: "45m",
      participants: 18,
      status: "completed"
    },
    {
      id: 3,
      title: "UI Design Principles",
      type: "voice",
      date: "Dec 3",
      duration: "2h",
      participants: 32,
      status: "completed"
    }
  ];

  const learningProgress = [
    { skill: "React Development", progress: 75, level: "Advanced", hoursSpent: 12 },
    { skill: "Machine Learning", progress: 45, level: "Intermediate", hoursSpent: 8 },
    { skill: "Python Programming", progress: 90, level: "Expert", hoursSpent: 15 },
    { skill: "UI/UX Design", progress: 30, level: "Beginner", hoursSpent: 5 },
  ];

  const achievements = [
    { id: 1, title: "First Room", description: "Joined your first learning room", earned: true },
    { id: 2, title: "Voice Leader", description: "Hosted 5 voice rooms", earned: true },
    { id: 3, title: "Knowledge Seeker", description: "Spent 40+ hours learning", earned: true },
    { id: 4, title: "Community Builder", description: "Helped 10+ learners", earned: false },
  ];

  const upcomingRooms = joinedRooms.filter(room => room.status === "upcoming");
  const completedRooms = joinedRooms.filter(room => room.status === "completed");

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Journey</h2>
        <p className="text-lg text-gray-600">Track your progress and stay motivated</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-learning-purple-600">{userStats.totalHours}</div>
            <p className="text-sm text-gray-600">Hours Learned</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-learning-blue-600">{userStats.roomsJoined}</div>
            <p className="text-sm text-gray-600">Rooms Joined</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">{userStats.skillsLearning}</div>
            <p className="text-sm text-gray-600">Skills Learning</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Badge className="bg-yellow-100 text-yellow-800">{userStats.rank}</Badge>
            <p className="text-sm text-gray-600 mt-1">Current Rank</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="progress">Learning Progress</TabsTrigger>
          <TabsTrigger value="rooms">My Rooms</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-learning-purple-600" />
                Skill Progress
              </CardTitle>
              <CardDescription>
                Your journey across different learning areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {learningProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{skill.skill}</h4>
                      <p className="text-sm text-gray-600">{skill.hoursSpent} hours • {skill.level}</p>
                    </div>
                    <span className="text-sm font-medium">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rooms" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Rooms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingRooms.length > 0 ? (
                  upcomingRooms.map((room) => (
                    <div key={room.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-Medium">{room.title}</h4>
                        <Badge variant={room.type === 'voice' ? 'default' : 'secondary'}>
                          {room.type === 'voice' ? '🎤' : '💬'}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {room.date}
                        </p>
                        <p className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {room.participants} participants
                        </p>
                      </div>
                      <Button size="sm" className="w-full mt-3">
                        Join Room
                      </Button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No upcoming rooms</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {completedRooms.map((room) => (
                  <div key={room.id} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{room.title}</h4>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {room.duration} • {room.date}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-learning-blue-600" />
                Your Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">No scheduled sessions</h3>
                <p className="text-gray-600 mb-4">Schedule your first learning session to see it here</p>
                <Button>Browse Upcoming Rooms</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Achievements
              </CardTitle>
              <CardDescription>
                Celebrate your learning milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`border rounded-lg p-4 ${
                      achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                        🏆
                      </div>
                      <div>
                        <h4 className={`font-medium ${achievement.earned ? 'text-yellow-800' : 'text-gray-600'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${achievement.earned ? 'text-yellow-700' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && (
                          <Badge className="mt-2 bg-yellow-100 text-yellow-800">Earned</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
