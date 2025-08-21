import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Filter, ArrowRight } from "lucide-react";
import categoryEducation from "@/assets/category-education.jpg";
import categoryHealth from "@/assets/category-health.jpg";
import categoryBusiness from "@/assets/category-business.jpg";
import categoryPersonal from "@/assets/category-personal.jpg";

const allCategories = [
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
  },
  {
    title: "Technology",
    description: "Technical assessments, coding challenges, and IT tools",
    count: 45,
    image: categoryEducation,
    color: "education" as const
  },
  {
    title: "Finance",
    description: "Financial planning, investment tools, and economic calculators",
    count: 38,
    image: categoryBusiness,
    color: "business" as const
  }
];

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category);
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
  };

  const filteredCategories = allCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-subtle">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Browse All
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Categories
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our comprehensive collection of assessment categories to find exactly what you're looking for.
            </p>
            
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onFilterClick={handleFilterClick}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilter("all")}
            >
              All Categories
            </Button>
            <Button
              variant={selectedFilter === "popular" ? "default" : "outline"}
              onClick={() => setSelectedFilter("popular")}
            >
              Most Popular
            </Button>
            <Button
              variant={selectedFilter === "newest" ? "default" : "outline"}
              onClick={() => setSelectedFilter("newest")}
            >
              Newest
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
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

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No categories found</h3>
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

export default Categories;