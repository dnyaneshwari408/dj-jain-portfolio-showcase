
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-cream py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Dnyaneshwari Jain</h2>
            <p className="text-cream/80">
              B.Tech. - Electronics and Telecommunication Engineering
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#home" className="text-cream/80 hover:text-cream transition-colors">Home</a>
            <a href="#about" className="text-cream/80 hover:text-cream transition-colors">About</a>
            <a href="#education" className="text-cream/80 hover:text-cream transition-colors">Education</a>
            <a href="#experience" className="text-cream/80 hover:text-cream transition-colors">Experience</a>
            <a href="#projects" className="text-cream/80 hover:text-cream transition-colors">Projects</a>
            <a href="#skills" className="text-cream/80 hover:text-cream transition-colors">Skills</a>
            <a href="#contact" className="text-cream/80 hover:text-cream transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/20">
          <p className="text-cream/80 mb-4 md:mb-0">
            © {currentYear} Dnyaneshwari Jain. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="mailto:dnyaneshwari.jain@mitaoe.ac.in" className="text-cream/80 hover:text-cream transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+917219670015" className="text-cream/80 hover:text-cream transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" className="text-cream/80 hover:text-cream transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/" className="text-cream/80 hover:text-cream transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
