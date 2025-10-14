import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    period: "2018 - 2022",
    type: "degree"
  },
  {
    degree: "12th Grade",
    institution: "MP Board",
    period: "2017 - 2018",
    type: "school"
  },
  {
    degree: "10th Grade",
    institution: "MP Board",
    period: "2015 - 2016",
    type: "school"
  }
];

const achievements = [
  "Attended AWSome Day Online Conference by Amazon Web Services",
  "Mentored junior engineers on Git, CI/CD, and infrastructure automation",
  "Standardized and secured database environments across Dev, UAT, and Production",
  "Set up secure local infrastructure using Ubuntu Server with self-hosted Git (Gogs) and SVN"
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and professional accomplishments
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
              Education
            </h3>
            
            {educationData.map((edu, index) => (
              <Card 
                key={`${edu.degree}-${index}`}
                className="glass-effect p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                  <p className="text-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Award className="h-7 w-7 text-accent" />
              Achievements & Leadership
            </h3>
            
            <Card className="glass-effect p-6 space-y-4">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-accent text-xl mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="glass-effect p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary">Leadership Highlights</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    Replaced direct IP-based DB connections with domain-based access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    Implemented role-based credentials improving security
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    Streamlined internal systems with unique user IDs and static IPs
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
