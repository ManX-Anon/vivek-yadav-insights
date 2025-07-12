
import { Shield, Bug, Network, Lock } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Analysis",
      description: "Comprehensive security assessments and vulnerability analysis to protect digital assets."
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Penetration Testing",
      description: "Ethical hacking and penetration testing to identify and address security weaknesses."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security",
      description: "Advanced network security monitoring and threat detection using industry-standard tools."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Incident Response",
      description: "Rapid incident response and cybersecurity awareness training for organizations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Cybersecurity Student & Ethical Hacker
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Vivek Kumar, a dedicated cybersecurity student with a passion for protecting digital 
              infrastructure and data. My expertise spans across penetration testing, ethical hacking, 
              network security, and incident response, utilizing cutting-edge tools and methodologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With hands-on experience in Wireshark, Nmap, Linux systems, and various cybersecurity 
              frameworks, I focus on identifying vulnerabilities, strengthening defenses, and creating 
              robust security solutions. I'm committed to continuous learning in this ever-evolving 
              field of cybersecurity.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Security Research", "Threat Analysis", "Risk Mitigation", "Continuous Learning"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm"
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
                className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
