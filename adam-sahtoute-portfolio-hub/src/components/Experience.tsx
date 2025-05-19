import { Briefcase } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string[];
  active?: boolean;
}

const Experience = () => {
  const [experiences] = useState<ExperienceItem[]>([
    {
      id: 1,
      title: "SEO Specialist",
      company: "Freelance",
      date: "April 2025 - May 2025",
      description: [
        "Conducted comprehensive SEO audits for clients across various industries",
        "Implemented technical SEO improvements resulting in improved search rankings",
        "Developed content strategies to increase organic traffic and engagement"
      ]
    },
    {
      id: 2,
      title: "WordPress Developer & Digital Marketer",
      company: "Ecommay",
      date: "February 2024 - October 2024",
      description: [
        "Designed and developed responsive WordPress websites for e-commerce clients",
        "Implemented digital marketing strategies to increase online visibility and sales",
        "Integrated payment gateways and optimized website performance"
      ]
    }
  ]);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-blue">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-blue mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
            My professional journey through various roles in web development and digital marketing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-muted"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`mb-12 relative animate-fade-in ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-auto md:pl-0' : 'md:pl-12 md:ml-auto md:mr-auto md:pr-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-blue border-4 border-background"></div>
                
                {/* Content */}
                <div className={`bg-card rounded-lg shadow-md p-6 border border-border ml-6 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                }`}>
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-blue mr-2" />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-blue font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.active && (
                    <div className="mt-4 flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-500 text-sm ml-2">Current Position</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
