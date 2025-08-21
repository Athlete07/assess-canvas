import { Button } from "@/components/ui/button";
import { Menu, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AssessmentPro
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/categories" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Categories
            </Link>
            <Link to="/popular" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Popular
            </Link>
            <Link to="/new" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              New
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}