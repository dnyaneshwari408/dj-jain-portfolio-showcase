
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, File, Calendar } from "lucide-react";
import profileImage from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="pt-28 md:pt-32 min-h-screen flex items-center bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
              Dnyaneshwari Jain
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
              B.Tech. - Electronics and Telecommunication Engineering
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              An aspiring engineer with experience in embedded systems, IoT, and machine learning. Currently pursuing my bachelor's degree at MIT Academy of Engineering, Pune.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" className="bg-transparent border-navy text-navy hover:bg-navy hover:text-cream">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button className="bg-navy text-cream hover:bg-navy/80">
                <File className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Email</span>
                <a href="mailto:dnyaneshwari.jain@mitaoe.ac.in" className="text-navy hover:underline">
                  dnyaneshwari.jain@mitaoe.ac.in
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Phone</span>
                <a href="tel:+917219670015" className="text-navy hover:underline">
                  +91-7219670015
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-navy text-cream p-2.5 rounded-full hover:bg-navy/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-navy text-cream p-2.5 rounded-full hover:bg-navy/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <div className="ml-4 flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <img 
              src="public/lovable-uploads/1779aae5-541c-4dad-b7fd-77c5070e642b.png" 
              alt="Dnyaneshwari Jain" 
              className="rounded-full border-4 border-navy shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
