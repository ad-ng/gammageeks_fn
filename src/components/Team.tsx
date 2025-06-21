
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "MUSANGAMFURA Vincent",
      role: "CEO",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQFC3t5cyDD_gA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1580390126451?e=1755734400&v=beta&t=dtgSoaGaBCD_yr8tcKe28mMZNDeunZ-xcx26jtednIw",
      skills: ["React", "Node.js", "TypeScript", "Cloud Architecture"],
      bio: "Full-stack developer with 8+ years of experience building scalable web applications."
    },
    {
      name: "Sarah Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1d2?w=400&h=400&fit=crop&crop=face",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      bio: "Creative designer passionate about crafting intuitive user experiences and beautiful interfaces."
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      bio: "Infrastructure specialist focused on building reliable, scalable deployment pipelines."
    },
    {
      name: "NGOGA Adolphe",
      role: "Software Engineer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGsvWpE2W_dMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723027703094?e=1755734400&v=beta&t=TjaUM9aQoxnc47IMB3NjoVCGmAZZ_s0VTuUO15vWoCs",
      skills: ["Node js", "Flutter", "AWS", "Docker", "Kubernetes", "CI/CD"],
      bio: "Backend & Mobile specialist creating seamless cross-platform experiences for iOS and Android."
    },
    {
      name: "MBONIMPA Jean Claude",
      role: "Software Engineer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFYWAFF1plb0Q/profile-displayphoto-scale_400_400/B4DZeNAs5NH4Ag-/0/1750417461537?e=1755734400&v=beta&t=-_0pVJX4Od8YKbPKGENOjQ0YB6gYL5lpONFe7_RTbtE",
      skills: ["React", "Node js","Html","CSS","Javascript", "git"],
      bio: "Expert in building scalable, high-performance web apps with modern frameworks"
    },
    {
      name: "Serge RWOGERA",
      role: "Graphic Designer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHP0oq5kwUrJA/profile-displayphoto-scale_400_400/B4DZeM0WjUGgAg-/0/1750414226347?e=1755734400&v=beta&t=8xsqtKOJwIMLYCmAFZr8szCVYRvYb1XcYI1h9dpnwVM",
      skills: ["UI/UX Specialist ", "Video Creator", "Video & Photo Editing","Figma", "Photoshop", "Illustrator"],
      bio: "I design bold visuals, intuitive interfaces, and dynamic videos that tell powerful stories. From branding to user flows to motion content. I bring ideas to life with creativity and clarity."
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            The talented individuals behind GammaGeeks, each bringing unique expertise and passion to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group rounded-3xl">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-gradient-to-r from-[#46eefb] to-[#c775b7] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <Badge className="bg-gradient-to-r from-[#46eefb] to-[#c775b7] text-black border-0 mb-3">
                    {member.role}
                  </Badge>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-gray-300 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Github className="w-4 h-4 text-black" />
                  </button>
                  <button className="w-8 h-8 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Linkedin className="w-4 h-4 text-black" />
                  </button>
                  <button className="w-8 h-8 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Twitter className="w-4 h-4 text-black" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
