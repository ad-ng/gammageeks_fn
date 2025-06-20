import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "EcoTech Dashboard",
      description: "A comprehensive sustainability tracking platform for enterprise clients.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "Analytics"],
      category: "Web Development"
    },
    {
      title: "FinanceFlow Mobile",
      description: "Next-generation fintech mobile application with AI-powered insights.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      tags: ["React Native", "AI/ML", "Finance"],
      category: "Mobile Development"
    },
    {
      title: "BrandVision Suite",
      description: "Complete brand identity and design system for a tech startup.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Design System", "Branding", "UI/UX"],
      category: "Design"
    },
    {
      title: "CloudScale Architecture",
      description: "Scalable cloud infrastructure for high-traffic e-commerce platform.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["AWS", "Microservices", "DevOps"],
      category: "Cloud Solutions"
    },
    {
      title: "DataInsight Pro",
      description: "Advanced analytics platform with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["Data Science", "Visualization", "Python"],
      category: "Analytics"
    },
    {
      title: "ConnectHub Platform",
      description: "Social networking platform with advanced community features.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Social", "Real-time", "Community"],
      category: "Platform"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Showcasing our latest projects that demonstrate our expertise in creating innovative, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#46eefb] to-[#c775b7] text-black border-0">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-white/10 text-gray-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="ghost" className="text-white hover:bg-white/10 p-0 h-auto font-semibold group-hover:text-[#c775b7] transition-colors">
                  View Project
                  <Link className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
