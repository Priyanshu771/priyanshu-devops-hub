import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Priyanshu Sahu</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
              DevOps Engineer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate DevOps Engineer with 2+ years of hands-on experience building, deploying, 
            and maintaining scalable infrastructure across AWS and Azure. Specializing in automation, 
            CI/CD pipelines, containerization, and infrastructure as code to deliver high-performing, 
            reliable systems.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 glass-effect hover:bg-white/10"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center items-center pt-8">
            <a 
              href="https://github.com/priyanshusahu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/priyanshu-sahu-136751195" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:prayanshu771@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
