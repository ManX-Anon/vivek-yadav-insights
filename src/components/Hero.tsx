
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const techStack = ["React", "Node.js", "MongoDB", "TypeScript", "Python", "AWS"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Vivek</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            {displayText}<span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative web solutions with modern technologies. 
            I build scalable applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <p className="text-gray-400 mb-4">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-cyan-400 text-sm font-medium hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-yadav-b05244292"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
