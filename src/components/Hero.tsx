import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Server, Cloud, Code } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[90vh] sm:min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background elements - responsive sizes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl z-10 px-4 sm:px-6">
        <div className={`text-center space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Floating tech icons - hidden on very small screens */}
          <div className="relative h-10 sm:h-16 md:h-20 mb-4 sm:mb-6 md:mb-8 hidden xs:block">
            <div className="absolute left-1/4 top-0 animate-float-slow opacity-20">
              <Server className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </div>
            <div className="absolute right-1/4 top-5 animate-float opacity-20">
              <Cloud className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </div>
            <div className="absolute left-1/3 bottom-0 animate-float-medium opacity-20">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Priyanshu Sahu</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              DevOps Engineer
            </h2>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-background/30 p-3 sm:p-4 rounded-lg">
            Passionate DevOps Engineer with 2+ years of hands-on experience building, deploying, 
            and maintaining scalable infrastructure across AWS and Azure. Specializing in automation, 
            CI/CD pipelines, containerization, and infrastructure as code to deliver high-performing, 
            reliable systems.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
            <Button 
              size="default"
              className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all text-sm sm:text-base"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Me
            </Button>
            
            <Button 
              size="default" 
              variant="outline"
              className="gap-2 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm sm:text-base"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1-Iuoh_BVD4hqMBFTOZ-AE8lcOYCUs-Ij/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-center pt-4 sm:pt-6 md:pt-8">
            <a 
              href="https://github.com/Priyanshu771" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </a>
            <a 
              href="https://linkedin.com/in/priyanshu-sahu-136751195" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </a>
            <a 
              href="mailto:prayanshu771@gmail.com"
              className="text-muted-foreground hover:text-red-500 transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
