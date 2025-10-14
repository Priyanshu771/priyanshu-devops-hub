import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in DevOps and cloud infrastructure
          </p>
        </div>
        
        <Card className="glass-effect p-8 hover-lift">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">DevOps Engineer</h3>
                    <p className="text-lg text-primary">Cylsys Software Solution Pvt Ltd.</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Gadarwara, Madhya Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 2023 - Present</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Passionate and results-driven Senior DevOps Engineer with a strong foundation in building, 
                deploying, and maintaining scalable, secure, and automated infrastructure. Progressed from 
                DevOps Engineer to a senior role with hands-on experience managing end-to-end DevOps lifecycles 
                across cloud platforms.
              </p>
              
              <div className="pt-4">
                <h4 className="text-foreground font-semibold mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Managed AWS and Azure cloud infrastructure, ensuring high availability and cost optimization</li>
                  <li>Built and maintained CI/CD pipelines using GitHub Actions and Jenkins</li>
                  <li>Implemented containerization using Docker and orchestration with Kubernetes</li>
                  <li>Automated infrastructure provisioning using Terraform and Ansible</li>
                  <li>Set up comprehensive monitoring and alerting systems with Prometheus and Grafana</li>
                  <li>Contributed to system migrations and production environment setup</li>
                  <li>Reduced manual intervention and improved deployment speed significantly</li>
                  <li>Ensured high system reliability through DevOps best practices</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <h4 className="text-foreground font-semibold mb-3">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Ansible", "Prometheus", "Grafana"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
