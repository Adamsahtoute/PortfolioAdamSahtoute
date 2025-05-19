
import { useState, useEffect, useRef } from "react";
import { Code, Layout, Database, Cpu, Settings, BarChart } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Define the skill categories
  const skillCategories = [
    {
      icon: <Layout className="h-6 w-6 text-blue" />,
      title: "Web Development",
      skills: [
        { name: "HTML/CSS/JavaScript", level: 90 },
        { name: "PHP", level: 70 },
        { name: "ReactJS", level: 80 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue" />,
      title: "AI Automation",
      skills: [
        { name: "Low-Code Platforms", level: 80 },
        { name: "API Integration", level: 75 },
        { name: "Python", level: 70 }
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-blue" />,
      title: "Other",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "WordPress", level: 85 },
        { name: "SEO", level: 85 },
        { name: "Canva", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
            I've developed expertise across various technologies and tools, 
            specializing in web development and AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-lg p-6 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationPlayState: isVisible ? 'running' : 'paused' }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-muted rounded-lg">{category.icon}</div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-blue">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress bg-gradient-to-r from-blue to-purple"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-blue/5 rounded-lg p-6 text-center animate-fade-in hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
            <Settings className="h-12 w-12 mx-auto mb-4 text-blue" />
            <h3 className="text-xl font-semibold mb-3">Technical Proficiency</h3>
            <p className="text-muted-foreground">
              Strong foundation in multiple programming languages and frameworks for both frontend and backend development.
            </p>
          </div>
          
          <div className="bg-purple/5 rounded-lg p-6 text-center animate-fade-in hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.5s' }}>
            <Cpu className="h-12 w-12 mx-auto mb-4 text-purple" />
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-muted-foreground">
              Experience in implementing AI solutions and automating workflows using various tools and platforms.
            </p>
          </div>
          
          <div className="bg-orange/5 rounded-lg p-6 text-center animate-fade-in hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.6s' }}>
            <BarChart className="h-12 w-12 mx-auto mb-4 text-orange" />
            <h3 className="text-xl font-semibold mb-3">Data-Driven Approach</h3>
            <p className="text-muted-foreground">
              Utilize data analytics to inform design and development decisions, ensuring effective and optimized solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
