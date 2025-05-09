
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Experience</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional experiences that have shaped my practical knowledge and technical skills.
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <Briefcase className="h-7 w-7 text-navy" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold text-navy">Evfarm India Private Limited</h3>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Jun 26 - Jul 26, 2024</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-1">Internship</p>
                  
                  <div className="mt-4">
                    <p className="text-gray-600 mb-4">
                      As an intern at EV Farm Private Limited, I have gained hands-on experience in the electric vehicle (EV) industry, working on the design, development, and testing of EV components. I have collaborated with various teams to apply both electronics and mechanical engineering principles, contributing to innovative projects that enhance the performance, efficiency, and sustainability of electric vehicles.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-navy/5 text-navy">Circuit Design</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">Battery Management Systems</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">Prototype Development</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">Sustainability</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">Safety Standards</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">Signal Processing</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">IoT Connectivity</Badge>
                      <Badge variant="outline" className="bg-navy/5 text-navy">Power Electronics</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg font-medium text-navy mb-2">Introduction to Packet Tracer</h4>
                <div className="flex gap-2 mb-3">
                  <Badge className="bg-navy text-cream">Networking</Badge>
                  <Badge className="bg-navy text-cream">IoT</Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  This opportunity offers an immersive introduction to the exciting world of packet tracing in the realm of computer networking. As a student, I delved into the critical role of packet tracing, a foundational skill in the field of network administration and cybersecurity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg font-medium text-navy mb-2">Python Programming and SQL</h4>
                <div className="flex gap-2 mb-3">
                  <Badge className="bg-navy text-cream">Python</Badge>
                  <Badge className="bg-navy text-cream">SQL</Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  This comprehensive course equipped me with the essential skills and knowledge needed to become proficient in Python programming and SQL (Structured Query Language). Python is a versatile and widely-used programming language, known for its simplicity and power, while SQL is the standard language for managing and querying relational databases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
