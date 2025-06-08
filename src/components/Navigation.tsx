import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ isDarkMode, toggleDarkMode }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img className="w-9 rounded-full" src="/Logo.png" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-accent"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
