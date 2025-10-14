import { Card } from "@/components/ui/card";
import { GitBranch, Activity, Database, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CI/CD Pipeline for Node.js and Web App",
    description: "Built an automated deployment pipeline using Git webhooks, shell scripts, and Docker. Every code push triggers automated build and deployment to AWS EC2 with PM2, ensuring zero downtime deployment.",
    icon: GitBranch,
    tags: ["Git Webhooks", "Shell Scripts", "Docker", "AWS EC2", "PM2", "Zero Downtime"],
    highlights: [
      "Automated build and deployment process",
      "Zero downtime deployments",
      "Integration with Git version control",
      "Production-ready deployment pipeline"
    ]
  },
  {
    title: "Monitoring Infrastructure with Prometheus and Grafana",
    description: "Implemented comprehensive monitoring of system and application performance. Set up custom dashboards, alert rules, and integrated exporters for CPU, memory, and disk usage metrics.",
    icon: Activity,
    tags: ["Prometheus", "Grafana", "Monitoring", "Alerting", "Dashboards"],
    highlights: [
      "Custom performance dashboards",
      "Real-time alerting system",
      "CPU, memory, and disk monitoring",
      "Reduced debugging time by 50%"
    ]
  },
  {
    title: "Automated Multi-Database Backup and Restore",
    description: "Developed shell scripts and scheduled cron jobs to automate daily backups for MySQL, PostgreSQL, and SQL Server databases. Configured uploads to AWS S3 with one-click restore functionality.",
    icon: Database,
    tags: ["MySQL", "PostgreSQL", "SQL Server", "AWS S3", "Cron", "Bash"],
    highlights: [
      "Automated daily database backups",
      "Multi-database support",
      "S3 integration for secure storage",
      "One-click restore functionality",
      "Robust disaster recovery"
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world DevOps solutions that deliver measurable impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="glass-effect hover-lift p-6 space-y-4 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors cursor-pointer" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 flex-grow flex flex-col justify-end">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-accent">Key Highlights:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
