import { Cloud, Code, Database, Server, GitBranch, Container } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Heroku", "Cloudflare"],
  },
  {
    title: "DevOps Tools",
    icon: Server,
    skills: ["Docker", "Kubernetes", "Ansible", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Gogs", "SVN"],
  },
  {
    title: "Monitoring & Observability",
    icon: Container,
    skills: ["Prometheus", "Grafana", "System Monitoring", "Alert Management"],
  },
  {
    title: "Programming & Scripting",
    icon: Code,
    skills: ["Bash Scripting", "JavaScript", "Web Programming", "Automation Scripts"],
  },
  {
    title: "Databases & Servers",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQL Server", "NGINX", "IIS", "Database Management"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with to build reliable, scalable infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="glass-effect hover-lift p-6 space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-accent/20 text-accent border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
