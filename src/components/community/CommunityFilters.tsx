import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const CommunityFilters = () => {
  const categories = ["All", "React", "JavaScript", "Python", "Design", "Career"];
  const sortOptions = ["Latest", "Popular", "Most Discussed"];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input 
            placeholder="Search discussions..." 
            className="w-full"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
            >
              {category}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {sortOptions.map((option) => (
            <Button
              key={option}
              variant={option === "Latest" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
            >
              {option}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["react", "javascript", "css", "nodejs", "python"].map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="cursor-pointer bg-soft-blue-100 text-royal-blue-700 hover:bg-soft-blue-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityFilters;