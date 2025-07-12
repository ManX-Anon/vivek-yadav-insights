
import { ArrowDown, Shield, Bug, Network, Terminal, Code, Skull } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [matrixText, setMatrixText] = useState("");
  const [terminalText, setTerminalText] = useState("");

  const matrixChars = "01";
  const hackerTerms = ["SYSTEM_BREACH", "ACCESS_GRANTED", "FIREWALL_DOWN", "ROOT_ACCESS", "EXPLOIT_FOUND", "VULNERABILITY_DETECTED"];

  useEffect(() => {
    // Matrix rain effect
    const matrixInterval = setInterval(() => {
      let result = "";
      for (let i = 0; i < 50; i++) {
        result += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
      }
      setMatrixText(result);
    }, 200);

    // Terminal text effect
    let termIndex = 0;
    const terminalInterval = setInterval(() => {
      setTerminalText(hackerTerms[termIndex % hackerTerms.length]);
      termIndex++;
    }, 2000);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(terminalInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark Matrix Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.1),transparent_70%)]"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute text-green-400 text-xs font-mono whitespace-pre animate-pulse">
          {matrixText}
        </div>
      </div>

      {/* Floating Hacker Icons */}
      <div className="absolute top-20 left-10 text-green-400/30 animate-bounce">
        <Terminal size={40} />
      </div>
      <div className="absolute top-40 right-20 text-red-400/30 animate-pulse">
        <Skull size={35} />
      </div>
      <div className="absolute bottom-40 left-20 text-green-400/30 animate-bounce delay-1000">
        <Code size={45} />
      </div>
      <div className="absolute top-60 right-40 text-cyan-400/20 animate-pulse delay-500">
        <Shield size={30} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal-like header */}
        <div className="mb-4 p-3 bg-black/80 border border-green-400/50 rounded font-mono text-left max-w-md mx-auto">
          <div className="text-green-400 text-sm">
            <span className="text-red-400">root@vivek</span>
            <span className="text-white">:~# </span>
            <span className="text-green-400 animate-pulse">{terminalText}</span>
            <span className="animate-blink">|</span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-green-400 font-mono">&gt; </span>
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Vivek Kumar
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
            <p className="font-semibold text-green-400 font-mono">[CYBERSECURITY_SPECIALIST]</p>
            <p className="text-red-400">Ethical Hacker | Penetration Tester | Digital Guardian</p>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-mono">
            <span className="text-green-400"># </span>
            Infiltrating systems to strengthen defenses. Expert in vulnerability assessment, 
            network penetration, and cyber threat mitigation. Ready to secure your digital fortress.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("skills")}
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105 font-mono"
          >
            [VIEW_ARSENAL]
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300 font-mono"
          >
            [INITIATE_CONTACT]
          </button>
        </div>

        {/* Hacker Skills Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {["PENTEST", "EXPLOIT", "FORENSICS", "DEFENSE"].map((skill, index) => (
            <div
              key={skill}
              className="p-3 bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg hover:border-green-400/60 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-green-400 text-sm font-mono font-medium">[{skill}]</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-green-400 hover:text-white transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Additional CSS for blinking cursor */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
