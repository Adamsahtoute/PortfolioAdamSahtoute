import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const smoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-blue-dark/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("#home");
          }}
          className="text-2xl font-bold font-poppins text-blue"
        >
          Adam<span className="text-orange">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(link.href);
                  }}
                  className={`font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue after:transition-all hover:after:w-full ${
                    activeSection === link.href.substring(1)
                      ? "text-blue after:w-full"
                      : "text-foreground hover:text-blue"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="/img-uploads/AdamsahtouteCvAng.pdf" download="AdamSahtoute-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue hover:bg-blue/90">Resume</Button>
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-background dark:bg-blue-dark shadow-md p-4 transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{
          height: isOpen ? "calc(100vh - 72px)" : "0",
          overflow: "hidden"
        }}
      >
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(link.href);
                }}
                className={`block py-2 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-blue"
                    : "text-foreground hover:text-blue"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="/img-uploads/AdamsahtouteCvAng.pdf" download="AdamSahtoute-Resume.pdf" target="_blank" rel="noopener noreferrer" className="block mt-4">
          <Button className="bg-blue hover:bg-blue/90 w-full">Resume</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;