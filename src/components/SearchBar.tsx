import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterClick: () => void;
}

export function SearchBar({ searchQuery, onSearchChange, onFilterClick }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="Search assessments, tools, and calculators..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-16 py-4 text-lg rounded-xl border-2 focus:border-primary transition-smooth shadow-sm hover:shadow-md"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={onFilterClick}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}