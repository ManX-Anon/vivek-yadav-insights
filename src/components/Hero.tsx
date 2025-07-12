
import { ArrowDown, Shield, Bug, Network } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-cyan-400/20 animate-bounce">
        <Shield size={40} />
      </div>
      <div className="absolute top-40 right-20 text-blue-400/20 animate-pulse">
        <Bug size={35} />
      </div>
      <div className="absolute bottom-40 left-20 text-cyan-400/20 animate-bounce delay-1000">
        <Network size={45} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Vivek Kumar
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
            <p className="font-semibold text-cyan-400">Cybersecurity Student</p>
            <p>Ethical Hacker | Penetration Tester | Security Analyst</p>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about protecting digital infrastructure through ethical hacking, 
            penetration testing, and comprehensive security analysis. Skilled in network security, 
            incident response, and cybersecurity awareness.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Skills Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {["Penetration Testing", "Network Security", "Wireshark", "Linux"].map((skill, index) => (
            <div
              key={skill}
              className="p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-300 text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-cyan-400 hover:text-white transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
