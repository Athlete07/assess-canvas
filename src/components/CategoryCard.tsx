import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  count: number;
  image: string;
  color: "education" | "health" | "business" | "personal";
  onClick: () => void;
}

const colorClasses = {
  education: "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
  health: "from-green-50 to-green-100 hover:from-green-100 hover:to-green-200", 
  business: "from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
  personal: "from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200"
};

export function CategoryCard({ title, description, count, image, color, onClick }: CategoryCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer p-6 rounded-xl bg-gradient-to-br ${colorClasses[color]} border border-border transition-smooth hover:shadow-elegant hover:-translate-y-2`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md bg-white">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth group-hover:translate-x-1" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{description}</p>
      <p className="text-sm font-medium text-primary">{count} assessments</p>
    </div>
  );
}