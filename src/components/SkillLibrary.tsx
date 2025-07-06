
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";
import { useState } from "react";

export const SkillLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "web-dev",
      name: "Web Development",
      color: "bg-blue-100 text-blue-800",
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
      color: "bg-purple-100 text-purple-800",
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
      color: "bg-green-100 text-green-800",
      skills: [
        { name: "Python for Data Science", members: 2890, level: "Beginner to Advanced", rooms: 22 },
        { name: "Data Visualization", members: 1560, level: "Beginner to Intermediate", rooms: 11 },
        { name: "Statistics", members: 1340, level: "Beginner to Advanced", rooms: 8 },
        { name: "SQL", members: 3210, level: "Beginner to Advanced", rooms: 19 }
      ]
    },
    {
      id: "design",
      name: "UI/UX Design",
      color: "bg-pink-100 text-pink-800",
      skills: [
        { name: "Figma", members: 2340, level: "Beginner to Advanced", rooms: 14 },
        { name: "User Research", members: 890, level: "Intermediate", rooms: 5 },
        { name: "Prototyping", members: 1230, level: "Beginner to Intermediate", rooms: 8 },
        { name: "Design Systems", members: 670, level: "Advanced", rooms: 4 }
      ]
    },
    {
      id: "mobile",
      name: "Mobile Development",
      color: "bg-orange-100 text-orange-800",
      skills: [
        { name: "React Native", members: 1890, level: "Intermediate", rooms: 12 },
        { name: "Flutter", members: 1560, level: "Beginner to Advanced", rooms: 9 },
        { name: "iOS Development", members: 1340, level: "Intermediate to Advanced", rooms: 7 },
        { name: "Android Development", members: 1670, level: "Beginner to Advanced", rooms: 10 }
      ]
    },
    {
      id: "cloud",
      name: "Cloud Computing",
      color: "bg-cyan-100 text-cyan-800",
      skills: [
        { name: "AWS", members: 2100, level: "Beginner to Advanced", rooms: 16 },
        { name: "Docker", members: 1890, level: "Intermediate", rooms: 11 },
        { name: "Kubernetes", members: 1230, level: "Advanced", rooms: 8 },
        { name: "Azure", members: 1450, level: "Beginner to Advanced", rooms: 9 }
      ]
    }
  ];

  const filteredCategories = categories.filter(category =>
    selectedCategory === "all" || category.id === selectedCategory
  ).map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skill Library</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive collection of skills and join communities of learners passionate about the same topics.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold text-gray-900">{category.name}</h3>
              <Badge className={category.color}>{category.skills.length} skills</Badge>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <Card key={index} className="hover-lift cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <CardDescription>{skill.level}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          {skill.members.toLocaleString()} members
                        </span>
                        <span className="text-learning-purple-600 font-medium">
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

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No skills found matching your search.</p>
          <Button variant="outline" className="mt-4" onClick={() => {setSearchTerm(""); setSelectedCategory("all");}}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};
