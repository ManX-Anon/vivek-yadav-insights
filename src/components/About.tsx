
import { Shield, Bug, Network, Lock, Terminal, Skull, Eye, Zap } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "System Penetration",
      description: "Deep system infiltration and vulnerability exploitation to test security boundaries."
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Exploit Development",
      description: "Custom exploit creation and payload development for comprehensive security testing."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Digital Surveillance",
      description: "Network monitoring, traffic analysis, and threat detection using advanced techniques."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Response",
      description: "Lightning-fast incident response and forensic analysis for security breaches."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">&gt; </span>
            ABOUT_TARGET
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
              <span className="text-red-400">[CLASSIFIED]</span> Digital Infiltrator
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-mono">
              <span className="text-green-400"># </span>
              I am Vivek Kumar, a cybersecurity specialist operating in the shadows of digital warfare. 
              My mission: to expose vulnerabilities before malicious actors can exploit them. 
              Armed with cutting-edge tools and techniques, I breach systems ethically to fortify defenses.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed font-mono">
              <span className="text-green-400"># </span>
              Proficient in advanced penetration testing methodologies, network infiltration, 
              and security auditing. I specialize in uncovering hidden attack vectors and 
              developing countermeasures against sophisticated cyber threats.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["[STEALTH_MODE]", "[ZERO_DAY_HUNTER]", "[THREAT_ANALYST]", "[DIGITAL_GUARDIAN]"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full text-green-300 text-sm font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl hover:bg-black/50 hover:border-green-400/60 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-green-400 mb-4">{service.icon}</div>
                <h4 className="text-white font-semibold mb-2 font-mono">[{service.title.toUpperCase().replace(' ', '_')}]</h4>
                <p className="text-gray-400 text-sm font-mono">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
