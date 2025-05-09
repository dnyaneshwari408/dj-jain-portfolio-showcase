
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent",
      description: "Thank you for contacting me. I'll get back to you soon!",
      variant: "default"
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-navy/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">Email</h3>
                    <a href="mailto:dnyaneshwari.jain@mitaoe.ac.in" className="text-gray-600 hover:text-navy transition-colors">
                      dnyaneshwari.jain@mitaoe.ac.in
                    </a>
                    <br />
                    <a href="mailto:dnyanjain17@gmail.com" className="text-gray-600 hover:text-navy transition-colors">
                      dnyanjain17@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-navy/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">Phone</h3>
                    <a href="tel:+917219670015" className="text-gray-600 hover:text-navy transition-colors">
                      +91-7219670015
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-navy/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">Address</h3>
                    <p className="text-gray-600">
                      Sant Tukaram Nagar, Pimpri, Pune,
                      <br />
                      Maharashtra, India - 411018
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="md:col-span-2 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy mb-6">Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">Your Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="subject" className="text-gray-700">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-gray-700">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                    rows={6}
                  />
                </div>
                
                <Button type="submit" className="bg-navy hover:bg-navy/80 text-cream">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
