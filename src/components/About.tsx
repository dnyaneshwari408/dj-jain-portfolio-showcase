
import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            An aspiring Electronics and Telecommunication Engineering student with a passion for embedded systems, IoT and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-navy/10 p-3 rounded-full mb-4">
                  <User className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">Personal Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Name:</span> Dnyaneshwari Jain</li>
                  <li><span className="font-medium">Gender:</span> Female</li>
                  <li><span className="font-medium">DOB:</span> April 17, 2004</li>
                  <li><span className="font-medium">Languages:</span> English, Hindi, Marathi</li>
                  <li><span className="font-medium">Location:</span> Pune, Maharashtra</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-navy/10 p-3 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">Key Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Embedded Systems</li>
                  <li>Internet of Things (IoT)</li>
                  <li>Communication Protocols</li>
                  <li>Computer Networking</li>
                  <li>Signal Processing</li>
                  <li>Python Programming</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-navy/10 p-3 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">Interests & Activities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Dance</li>
                  <li>Trekking</li>
                  <li>NSS (National Service Scheme)</li>
                  <li>Project Management</li>
                  <li>Prototype Development</li>
                  <li>Sustainability Awareness</li>
                  <li>Collaborative Problem-Solving</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
