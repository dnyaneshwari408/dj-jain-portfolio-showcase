
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Embedded Systems", level: 85 },
    { name: "C Programming", level: 80 },
    { name: "IoT", level: 75 },
    { name: "Communication Protocols", level: 70 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 65 },
    { name: "Computer Networking", level: 70 },
    { name: "Microsoft Excel", level: 80 },
  ];

  const softSkills = [
    { name: "Project Management", level: 80 },
    { name: "Team Collaboration", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 75 },
    { name: "Adaptability", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Skills</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My technical and soft skills developed through academics, projects, and professional experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy mb-6 text-center">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-navy font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-200">
                      <div 
                        className="h-full bg-navy rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </Progress>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy mb-6 text-center">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-navy font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-200">
                      <div 
                        className="h-full bg-navy rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </Progress>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
