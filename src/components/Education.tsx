
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Education</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My academic journey has equipped me with both theoretical knowledge and practical skills.
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-7 w-7 text-navy" />
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold text-navy">MIT Academy of Engineering, Pune</h3>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">2021 - 2025</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-1">B.Tech. - Electronics and Telecommunication Engineering</p>
                  <p className="text-gray-600 mt-2">CGPA: 7.55 / 10</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-600 italic">
                      Studying advanced concepts in electronics, communication systems, signal processing, and embedded systems.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-7 w-7 text-navy" />
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold text-navy">St. Ursula Junior College, Pune</h3>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">2021</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-1">12th | HSC</p>
                  <p className="text-gray-600 mt-2">Percentage: 72 / 100</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-7 w-7 text-navy" />
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold text-navy">Chatrapati Shivaji Raje High School, Pune</h3>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">2019</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-1">10th | SSC</p>
                  <p className="text-gray-600 mt-2">Percentage: 93 / 100</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
