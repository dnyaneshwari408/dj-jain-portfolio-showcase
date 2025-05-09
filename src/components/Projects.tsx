
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Projects</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Showcasing my technical skills through practical academic and personal projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-navy/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-navy" />
                  </div>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Aug 2023 - Dec 2024</span>
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-2">Diabetic Retinopathy Detection using ML</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Users className="h-5 w-5" />
                  <span>Team Size: 4</span>
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  The project aims to develop a system that can assist in the early diagnosis and monitoring of diabetic retinopathy, a common and potentially sight-threatening complication of diabetes. Diabetic retinopathy is a condition where high levels of blood sugar damage the blood vessels in the retina, leading to vision problems and, if left untreated, blindness.
                </p>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-700 mb-2">Mentor: Prof. Pushpmala Shinde</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-navy text-cream">Machine Learning</Badge>
                    <Badge className="bg-navy text-cream">Deep Learning</Badge>
                    <Badge className="bg-navy text-cream">Python</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-navy/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-navy" />
                  </div>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Aug 2022 - Mar 2023</span>
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-2">Speed Detection GUN</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Users className="h-5 w-5" />
                  <span>Team Size: 4</span>
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  The Speed Detection Gun Project represents a cutting-edge technological solution designed to enhance road safety and promote responsible driving habits. This innovative device, often referred to as a Speed Detection Gun or Speed Radar Gun, combines advanced engineering and data analytics to detect and monitor the speed of vehicles on roadways.
                </p>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-700 mb-2">Mentor: Prof. Vaishali Katkar</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-navy text-cream">IoT</Badge>
                    <Badge className="bg-navy text-cream">Sensors</Badge>
                    <Badge className="bg-navy text-cream">C</Badge>
                    <Badge className="bg-navy text-cream">Controllers</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
