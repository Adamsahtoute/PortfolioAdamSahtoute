
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-blue">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-blue mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to contact me using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Fill out the form, and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 bg-blue/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-muted-foreground">adamsahtoute@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-blue/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-muted-foreground">+212 697568680</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-blue/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">Morocco</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/adamsahtoute/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center hover:bg-blue hover:text-white transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.225 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.27V1.73C24 .773 23.2 0 22.222 0h.003zM7.366 20.27H3.61V8.997h3.756V20.27zM5.488 7.446a2.175 2.175 0 1 1 0-4.352 2.175 2.175 0 0 1 0 4.352zm14.789 12.825h-3.752v-5.872c0-1.402-.027-3.203-1.953-3.203-1.955 0-2.254 1.526-2.254 3.102v5.973H8.57V8.997h3.607v1.65h.05c.5-.95 1.727-1.952 3.555-1.952 3.807 0 4.506 2.504 4.506 5.756v5.82z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-lg shadow-lg border border-border p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send Me A Message</h3>
              <form action="https://formsubmit.co/adamsahtoute@hotmail.com" method="POST" className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium block mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue hover:bg-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
