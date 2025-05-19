
import { Book, Award, Map } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">
              Web Developer & <span className="text-blue">AI Specialist</span>
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate web developer and AI automation specialist with a strong 
              background in data science. My mission is to create elegant, functional 
              digital solutions that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              With expertise in frontend and backend technologies, I build responsive
              websites, develop AI-powered tools, and implement automation systems
              that drive business efficiency and growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Book className="text-blue" />
                <span>Bachelor in Data Science & AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="text-blue" />
                <span>Based in Morocco</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-blue" />
                <span>2+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue to-purple rounded-lg blur-xl opacity-20"></div>
            <div className="bg-card rounded-lg shadow-lg p-6 border border-border relative z-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mr-2 text-sm">1</span>
                    Education
                  </h4>
                  <div className="ml-8">
                    <h5 className="font-medium">Bachelor in Data Science & AI</h5>
                    <p className="text-muted-foreground text-sm">Focusing on data analysis, machine learning, and statistical modeling</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mr-2 text-sm">2</span>
                    Work Philosophy
                  </h4>
                  <div className="ml-8">
                    <p className="text-muted-foreground">
                      I believe in creating intuitive, user-centered solutions that leverage the power of 
                      modern technologies while maintaining clean, efficient code.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mr-2 text-sm">3</span>
                    Goals
                  </h4>
                  <div className="ml-8">
                    <p className="text-muted-foreground">
                      My aim is to continue exploring the intersection of web development and AI, 
                      creating innovative solutions that help businesses succeed in the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
