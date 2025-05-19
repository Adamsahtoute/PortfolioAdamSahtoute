import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "WEB DEVELOPER & AI AUTOMATION SPECIALIST";
  const [isTyping, setIsTyping] = useState(true);
  const [typeIndex, setTypeIndex] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80; // Adjust to your navbar height
    
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isTyping) {
      if (typeIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + fullText[typeIndex]);
          setTypeIndex(typeIndex + 1);
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [typeIndex, isTyping, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue/5 to-purple/5 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute -z-10 top-20 left-10 w-64 h-64 rounded-full bg-purple/10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-80 h-80 rounded-full bg-blue/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute -z-10 top-40 right-40 w-40 h-40 rounded-full bg-orange/10 animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left content with added pl-6 for left spacing */}
          <div className="md:w-1/2 space-y-6 animate-fade-in pl-6">
            <h2 className="text-xl md:text-2xl font-medium text-blue">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">Adam Sahtoute</span>
            </h1>
            <div className="h-8">
              <h2 className="text-xl md:text-2xl font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              Based in Morocco, I create innovative web solutions and automate processes with AI. 
              With a Bachelor's degree in Data Science & AI, I build digital experiences 
              that deliver results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-blue hover:bg-blue/90 text-white" 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue via-purple to-orange rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue to-purple rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                <img 
                  src="/img-uploads/19791b56-6b50-427b-a88d-7d097472dddd.png" 
                  alt="Adam Sahtoute" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;