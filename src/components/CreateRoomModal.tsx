
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";
import { useState } from "react";

interface CreateRoomModalProps {
  onClose: () => void;
}

export const CreateRoomModal = ({ onClose }: CreateRoomModalProps) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the room creation
    console.log("Creating room:", { ...formData, roomType });
    onClose();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create a Learning Room</DialogTitle>
          <DialogDescription>
            Start a new learning session and invite others to join your journey
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Choose Room Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <Card 
                className={`cursor-pointer transition-all hover:scale-105 ${
                  roomType === "voice" ? "ring-2 ring-learning-purple-500 bg-learning-purple-50" : ""
                }`}
                onClick={() => setRoomType("voice")}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🎤</div>
                  <h3 className="font-semibold">Voice Room</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Real-time voice discussions and live presentations
                  </p>
                  {roomType === "voice" && (
                    <Badge className="mt-3 bg-learning-purple-500">Selected</Badge>
                  )}
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all hover:scale-105 ${
                  roomType === "chat" ? "ring-2 ring-learning-purple-500 bg-learning-purple-50" : ""
                }`}
                onClick={() => setRoomType("chat")}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className="font-semibold">Chat Room</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Text-based discussions and collaborative problem solving
                  </p>
                  {roomType === "chat" && (
                    <Badge className="mt-3 bg-learning-purple-500">Selected</Badge>
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
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-learning-purple-600 hover:bg-learning-purple-700"
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
  );
};
