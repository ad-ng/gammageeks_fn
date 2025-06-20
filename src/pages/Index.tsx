
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1d1a] to-[#f0bd7e]">
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
