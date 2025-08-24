import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Button } from "@/components/ui/button";
import { TrendingUp, Crown, Flame } from "lucide-react";

const popularAssessments = [
  {
    title: "Learning Style Assessment",
    description: "Discover your unique learning preferences and optimize your study methods for better retention and understanding.",
    category: "Education",
    duration: "10 min",
    participants: 125000,
    difficulty: "Beginner" as const,
    featured: true
  },
  {
    title: "BMI & Health Risk Calculator",
    description: "Calculate your body mass index and understand associated health risks with personalized recommendations.",
    category: "Health",
    duration: "5 min",
    participants: 203000,
    difficulty: "Beginner" as const
  },
  {
    title: "Career Personality Match",
    description: "Find careers that align with your personality traits, values, and interests for long-term satisfaction.",
    category: "Business",
    duration: "15 min",
    participants: 89000,
    difficulty: "Intermediate" as const
  },
  {
    title: "Financial Wellness Score",
    description: "Evaluate your financial health across multiple dimensions and get actionable insights for improvement.",
    category: "Business",
    duration: "12 min",
    participants: 67000,
    difficulty: "Advanced" as const
  },
  {
    title: "Stress Level Evaluation",
    description: "Assess your current stress levels and receive personalized coping strategies and recommendations.",
    category: "Health",
    duration: "8 min",
    participants: 156000,
    difficulty: "Beginner" as const
  },
  {
    title: "Communication Style Profile",
    description: "Understand your communication preferences and learn to adapt your style for better relationships.",
    category: "Personal",
    duration: "12 min",
    participants: 98000,
    difficulty: "Intermediate" as const
  }
];

const Popular = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeframe, setTimeframe] = useState("all-time");

  const handleAssessmentClick = (title: string) => {
    // Create a URL-friendly slug from the title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    // In a real app, this would navigate to /assessment/[slug]
    window.open(`/assessment/${slug}`, '_blank');
  };

  const handleFilterClick = () => {
    // Cycle through timeframe options
    const timeframes = ["all-time", "this-month", "this-week"];
    const currentIndex = timeframes.indexOf(timeframe);
    const nextIndex = (currentIndex + 1) % timeframes.length;
    setTimeframe(timeframes[nextIndex]);
  };

  const filteredAssessments = popularAssessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (timeframe === "all-time") return matchesSearch;
    if (timeframe === "this-month") return matchesSearch && assessment.participants > 100000;
    if (timeframe === "this-week") return matchesSearch && assessment.participants > 150000;
    
    return matchesSearch;
  }).sort((a, b) => {
    if (timeframe === "all-time") return b.participants - a.participants;
    if (timeframe === "this-month") return b.participants - a.participants;
    if (timeframe === "this-week") return b.participants - a.participants;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-subtle">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Popular
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Assessments
                </span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the most popular assessments chosen by our community of over 1 million users.
            </p>
            
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onFilterClick={handleFilterClick}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              variant={timeframe === "all-time" ? "default" : "outline"}
              onClick={() => setTimeframe("all-time")}
            >
              <Crown className="w-4 h-4" />
              All Time
            </Button>
            <Button
              variant={timeframe === "this-month" ? "default" : "outline"}
              onClick={() => setTimeframe("this-month")}
            >
              <Flame className="w-4 h-4" />
              This Month
            </Button>
            <Button
              variant={timeframe === "this-week" ? "default" : "outline"}
              onClick={() => setTimeframe("this-week")}
            >
              <TrendingUp className="w-4 h-4" />
              This Week
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">2.5M+</h3>
              <p className="text-muted-foreground">Assessments Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">4.9/5</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">94%</h3>
              <p className="text-muted-foreground">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessments Grid */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssessments.map((assessment, index) => (
              <div key={assessment.title} className="relative">
                {index < 3 && (
                  <div className="absolute -top-2 -right-2 z-10 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    #{index + 1}
                  </div>
                )}
                <AssessmentCard
                  title={assessment.title}
                  description={assessment.description}
                  category={assessment.category}
                  duration={assessment.duration}
                  participants={assessment.participants}
                  difficulty={assessment.difficulty}
                  featured={assessment.featured}
                  onClick={() => handleAssessmentClick(assessment.title)}
                />
              </div>
            ))}
          </div>

          {filteredAssessments.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No assessments found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search terms</p>
              <Button onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Popular;