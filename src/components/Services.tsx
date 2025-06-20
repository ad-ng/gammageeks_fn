
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, LayoutDashboard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Web & Mobile Apps Development",
      description: "Full-stack development solutions using cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Node.js & Nestjs","UI/UX", "Flutter", "API Development", "AWS", "Deployment"],
      gradient: "from-[#46eefb] to-[#c775b7]"
    },
    {
      icon: LayoutDashboard,
      title: "Digital Presence Consultancy",
      description: "User-centered design that combines aesthetics with exceptional user experience.",
      features: ["Social Network", "SEO", "Paid Marketing", "Email Marketing", "Blog", "Forum"],
      gradient: "from-[#46eefb] to-[#c775b7]"
    },
    {
      icon: Users,
      title: "Creative Design & MultiMedia Services",
      description: "Strategic consulting to help businesses thrive in the digital landscape.",
      features: ["Videography", "Photography", "Animation", "Editing"],
      gradient: "from-[#46eefb] to-[#c775b7]"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive tech solutions across three core areas, each powered by our community's collective expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
