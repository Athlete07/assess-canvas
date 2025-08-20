import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import categoryEducation from "@/assets/category-education.jpg";
import categoryHealth from "@/assets/category-health.jpg";
import categoryBusiness from "@/assets/category-business.jpg";
import categoryPersonal from "@/assets/category-personal.jpg";

const categories = [
  {
    title: "Education",
    description: "Learning assessments, skill tests, and educational tools",
    count: 89,
    image: categoryEducation,
    color: "education" as const
  },
  {
    title: "Health & Wellness",
    description: "Health calculators, fitness assessments, and wellness tools",
    count: 76,
    image: categoryHealth,
    color: "health" as const
  },
  {
    title: "Business",
    description: "Professional development, finance calculators, and business tools",
    count: 95,
    image: categoryBusiness,
    color: "business" as const
  },
  {
    title: "Personal Development",
    description: "Self-improvement tools, personality tests, and growth assessments",
    count: 62,
    image: categoryPersonal,
    color: "personal" as const
  }
];

const featuredAssessments = [
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
    title: "Career Personality Match",
    description: "Find careers that align with your personality traits, values, and interests for long-term satisfaction.",
    category: "Business",
    duration: "15 min",
    participants: 89000,
    difficulty: "Intermediate" as const
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
    title: "Financial Wellness Score",
    description: "Evaluate your financial health across multiple dimensions and get actionable insights for improvement.",
    category: "Business",
    duration: "12 min",
    participants: 67000,
    difficulty: "Advanced" as const
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category);
  };

  const handleAssessmentClick = (title: string) => {
    console.log("Assessment clicked:", title);
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Insights About
              <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Yourself & Your World
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Access 300+ professional assessments, calculators, and tools designed to help you learn, 
              grow, and make informed decisions across all aspects of life.
            </p>
            
            <div className="mb-12">
              <SearchBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onFilterClick={handleFilterClick}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Explore Assessments
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-light">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">300+</h3>
              <p className="text-muted-foreground">Assessment Tools</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">1M+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">4.8/5</h3>
              <p className="text-muted-foreground">User Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect assessment for your needs across our comprehensive categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                count={category.count}
                image={category.image}
                color={category.color}
                onClick={() => handleCategoryClick(category.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Assessments */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Assessments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Popular and trending assessments chosen by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAssessments.map((assessment) => (
              <AssessmentCard
                key={assessment.title}
                title={assessment.title}
                description={assessment.description}
                category={assessment.category}
                duration={assessment.duration}
                participants={assessment.participants}
                difficulty={assessment.difficulty}
                featured={assessment.featured}
                onClick={() => handleAssessmentClick(assessment.title)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Assessments
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20">
                  <span className="text-lg font-bold text-white">A</span>
                </div>
                <span className="text-xl font-bold text-white">AssessmentPro</span>
              </div>
              <p className="text-primary-foreground/80">
                Empowering personal and professional growth through intelligent assessments.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Personal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 AssessmentPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
