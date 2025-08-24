import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Clock } from "lucide-react";

const newAssessments = [
  {
    title: "AI Learning Readiness Test",
    description: "Evaluate your readiness to work with AI tools and understand your learning curve for new technologies.",
    category: "Technology",
    duration: "12 min",
    participants: 2400,
    difficulty: "Intermediate" as const,
    featured: true,
    isNew: true
  },
  {
    title: "Remote Work Effectiveness",
    description: "Assess your remote work skills and discover strategies to maximize productivity from home.",
    category: "Business",
    duration: "10 min",
    participants: 5600,
    difficulty: "Beginner" as const,
    isNew: true
  },
  {
    title: "Digital Wellness Checkup",
    description: "Evaluate your relationship with technology and create a healthier digital lifestyle plan.",
    category: "Health",
    duration: "15 min",
    participants: 3200,
    difficulty: "Beginner" as const,
    isNew: true
  },
  {
    title: "Emotional Intelligence 2.0",
    description: "Advanced assessment of emotional intelligence with updated frameworks and personalized insights.",
    category: "Personal",
    duration: "18 min",
    participants: 1800,
    difficulty: "Advanced" as const,
    isNew: true
  },
  {
    title: "Sustainability Mindset",
    description: "Discover your environmental consciousness level and get actionable steps for sustainable living.",
    category: "Personal",
    duration: "8 min",
    participants: 4100,
    difficulty: "Beginner" as const,
    isNew: true
  },
  {
    title: "Leadership Style Evolution",
    description: "Next-generation leadership assessment incorporating modern management theories and practices.",
    category: "Business",
    duration: "20 min",
    participants: 2900,
    difficulty: "Advanced" as const,
    isNew: true
  }
];

const New = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const handleAssessmentClick = (title: string) => {
    // Create a URL-friendly slug from the title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    // In a real app, this would navigate to /assessment/[slug]
    window.open(`/assessment/${slug}`, '_blank');
  };

  const handleFilterClick = () => {
    // Cycle through sort options
    const sortOptions = ["newest", "trending"];
    const currentIndex = sortOptions.indexOf(sortBy);
    const nextIndex = (currentIndex + 1) % sortOptions.length;
    setSortBy(sortOptions[nextIndex]);
  };

  const filteredAssessments = newAssessments.filter(assessment =>
    assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assessment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assessment.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === "newest") return b.participants - a.participants; // Simulate newest by participants
    if (sortBy === "trending") return a.participants - b.participants; // Reverse for trending
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
              <Sparkles className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                New
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Assessments
                </span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our latest assessments featuring cutting-edge research and innovative approaches to personal growth.
            </p>
            
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onFilterClick={handleFilterClick}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              variant={sortBy === "newest" ? "default" : "outline"}
              onClick={() => setSortBy("newest")}
            >
              <Calendar className="w-4 h-4" />
              Newest First
            </Button>
            <Button
              variant={sortBy === "trending" ? "default" : "outline"}
              onClick={() => setSortBy("trending")}
            >
              <Clock className="w-4 h-4" />
              Recently Added
            </Button>
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What's New This Month</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI-Powered Insights</h3>
              <p className="text-muted-foreground">Enhanced personalization with machine learning</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Results</h3>
              <p className="text-muted-foreground">Dynamic visualizations and actionable recommendations</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Optimized</h3>
              <p className="text-muted-foreground">Seamless experience across all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessments Grid */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssessments.map((assessment) => (
              <div key={assessment.title} className="relative">
                <div className="absolute -top-2 -right-2 z-10 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-elegant">
                  NEW
                </div>
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

export default New;