
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, File } from "lucide-react";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">
          <a href="#home" className="text-navy hover:text-navy/80 transition-colors">
            DNYANESHWARI JAIN
          </a>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-navy hover:text-navy/80 transition-colors">Home</a>
          <a href="#about" className="text-navy hover:text-navy/80 transition-colors">About</a>
          <a href="#education" className="text-navy hover:text-navy/80 transition-colors">Education</a>
          <a href="#experience" className="text-navy hover:text-navy/80 transition-colors">Experience</a>
          <a href="#projects" className="text-navy hover:text-navy/80 transition-colors">Projects</a>
          <a href="#skills" className="text-navy hover:text-navy/80 transition-colors">Skills</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-navy border-navy hover:bg-navy hover:text-cream">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button size="sm" className="bg-navy hover:bg-navy/80 text-cream">
            <File className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
