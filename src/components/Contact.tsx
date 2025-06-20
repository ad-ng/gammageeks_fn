
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Star } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] text-black border-0 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Ready to Collaborate?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#46eefb] to-[#c775b7] bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Join our vibrant community or partner with us to bring your next big idea to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#46eefb] to-[#c775b7] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Start a Project</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Have a project in mind? Let's discuss how we can help bring your vision to reality.
              </p>
              <Button className="bg-gradient-to-r from-[#46eefb] to-[#c775b7] hover:from-[#46eefb]/80 hover:to-[#c775b7]/80 text-black border-0">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
          <p className="text-gray-300 mb-6">
            Ready to start your next project or join our community of innovators?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#46eefb] to-[#c775b7] hover:from-[#46eefb]/80 hover:to-[#c775b7]/80 text-black border-0 px-8">
              info@gammaGeeks.dev
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/20 text-center">
        <p className="text-gray-300">
          © 2025 GammaGeeks
        </p>
      </div>
    </section>
  );
};

export default Contact;
