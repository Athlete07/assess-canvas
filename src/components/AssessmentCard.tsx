import { Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssessmentCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  participants: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  onClick: () => void;
}

const difficultyColors = {
  Beginner: "bg-success text-success-foreground",
  Intermediate: "bg-warning text-warning-foreground", 
  Advanced: "bg-destructive text-destructive-foreground"
};

const categoryColors = {
  Education: "category-education",
  Health: "category-health",
  Business: "category-business",
  "Personal Development": "category-personal"
};

export function AssessmentCard({ 
  title, 
  description, 
  category, 
  duration, 
  participants, 
  difficulty,
  featured = false,
  onClick 
}: AssessmentCardProps) {
  return (
    <div className={`assessment-card group cursor-pointer ${featured ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`category-badge ${categoryColors[category as keyof typeof categoryColors] || 'category-education'}`}>
            {category}
          </span>
          {featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
              Featured
            </span>
          )}
        </div>
        <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
        {description}
      </p>

      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {participants.toLocaleString()}
          </span>
        </div>
      </div>

      <Button 
        onClick={onClick}
        variant="default" 
        className="w-full group-hover:bg-primary-light"
      >
        Start Assessment
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
      </Button>
    </div>
  );
}