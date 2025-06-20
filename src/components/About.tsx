
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We're not just a team – we're a collective of passionate technologists who believe in the power of collaboration and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative</h3>
              <p className="text-gray-300 leading-relaxed">
                We thrive on teamwork, bringing together diverse perspectives to create innovative solutions that exceed expectations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We're committed to delivering high-quality solutions that push boundaries and set new standards in the tech industry.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <p className="text-gray-300 leading-relaxed">
                With years of combined experience, we bring professionalism and expertise to every project we undertake.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
