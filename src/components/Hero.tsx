
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import MyImage from '../../public/gammageeks.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute top-8 left-8 w-1/6 ">
      <img src={MyImage} alt="app logo" />
     </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#46eefb]/10 via-[#c775b7]/10 to-[#46eefb]/10 animate-pulse" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#46eefb]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#c775b7]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <Badge className="mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] text-black border-0 px-4 py-2 text-sm font-medium animate-fade-in">
          <Star className="w-4 h-4 mr-2" />
          Cutting-Edge Tech Solutions
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#46eefb] to-[#c775b7] bg-clip-text text-transparent animate-fade-in">
          GammaGeeks
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          A vibrant community of developers, designers, and digital strategists united by a shared passion for creating cutting-edge tech solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
        <a href="#portfolio">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#46eefb] to-[#c775b7] hover:from-[#46eefb]/80 hover:to-[#c775b7]/80 text-black border-0 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Our Work
          <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </a>

        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300">Community Members</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
