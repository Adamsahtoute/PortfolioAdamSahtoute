
import { useState, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "AI Chatbot",
      description: "An intelligent chatbot built with Python leveraging Natural Language Processing, tokenization, and classification for understanding user queries",
      image: "/img-uploads/d1816b37-0ae6-4d68-b512-02600a5b6dfd.png",
      category: "ai",
      tags: ["Python", "NLP", "AI"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "To-Do List App",
      description: "A responsive task management application built with Spring Boot, REST API, and React with modern UI components",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "webdev",
      tags: ["Spring Boot", "REST API", "React"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "BESTRONG - Supplements Website",
      description: "A fully responsive e-commerce platform for gym supplements and products",
      image: "/img-uploads/244d4c14-3b1d-442e-97c2-a37479ca24a8.png",
      category: "webdev",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  const handleFilter = (category: string) => {
    setFilter(category);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
            Here are some of my notable projects that demonstrate my skills in web development and AI automation.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "bg-blue" : ""}
            onClick={() => handleFilter("all")}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "webdev" ? "default" : "outline"}
            className={filter === "webdev" ? "bg-blue" : ""}
            onClick={() => handleFilter("webdev")}
          >
            Web Development
          </Button>
          <Button
            variant={filter === "ai" ? "default" : "outline"}
            className={filter === "ai" ? "bg-blue" : ""}
            onClick={() => handleFilter("ai")}
          >
            AI & Automation
          </Button>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card bg-card rounded-lg overflow-hidden border border-border shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-blue/10 text-blue border-blue/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    className="flex items-center text-sm text-blue hover:text-blue/80 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                  <a 
                    href={project.link} 
                    className="flex items-center text-sm text-blue hover:text-blue/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
            View More Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
