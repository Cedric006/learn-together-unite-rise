import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Users } from "lucide-react";

const CommunityCard = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-soft-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-soft-blue-100 text-royal-blue-600 text-sm">JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
        </div>
        <CardTitle className="text-lg text-foreground">Introduction to React Hooks</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-3">
          Just finished learning about React Hooks and wanted to share some insights...
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-soft-blue-100 text-royal-blue-700 text-xs">React</Badge>
          <Badge variant="secondary" className="bg-soft-blue-100 text-royal-blue-700 text-xs">JavaScript</Badge>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="text-xs">12</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">5</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="text-xs">3</span>
            </div>
          </div>
          
          <Button size="sm" variant="outline" className="text-xs">
            Join Discussion
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;