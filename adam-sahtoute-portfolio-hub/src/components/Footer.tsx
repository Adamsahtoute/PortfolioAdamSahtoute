
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-blue-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-poppins">
              Adam<span className="text-orange">.dev</span>
            </h3>
            <p className="mt-2 text-white/70">
              Web Developer & AI Automation Specialist
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-medium mb-2">Let's Connect</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/adamsahtoute/" target="_blank" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.225 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.27V1.73C24 .773 23.2 0 22.222 0h.003zM7.366 20.27H3.61V8.997h3.756V20.27zM5.488 7.446a2.175 2.175 0 1 1 0-4.352 2.175 2.175 0 0 1 0 4.352zm14.789 12.825h-3.752v-5.872c0-1.402-.027-3.203-1.953-3.203-1.955 0-2.254 1.526-2.254 3.102v5.973H8.57V8.997h3.607v1.65h.05c.5-.95 1.727-1.952 3.555-1.952 3.807 0 4.506 2.504 4.506 5.756v5.82z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-medium mb-2">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
                <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Adam Sahtoute. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
