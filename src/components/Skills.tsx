
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      category: "Cybersecurity Core",
      skills: [
        { name: "Cybersecurity", level: 92 },
        { name: "Penetration Testing", level: 88 },
        { name: "Ethical Hacking", level: 85 },
        { name: "Network Security", level: 87 },
        { name: "Cyber Defense", level: 83 }
      ]
    },
    {
      category: "Security Tools",
      skills: [
        { name: "Wireshark", level: 85 },
        { name: "Nmap", level: 88 },
        { name: "Linux", level: 90 },
        { name: "CompTIA", level: 80 },
        { name: "Programming Languages", level: 82 }
      ]
    },
    {
      category: "Incident Response",
      skills: [
        { name: "Cybersecurity Incident Response", level: 78 },
        { name: "Cybersecurity Awareness", level: 85 },
        { name: "Threat Analysis", level: 80 },
        { name: "Risk Assessment", level: 82 },
        { name: "Security Auditing", level: 79 }
      ]
    },
    {
      category: "Technical Skills",
      skills: [
        { name: "Network Analysis", level: 86 },
        { name: "Vulnerability Assessment", level: 83 },
        { name: "Digital Forensics", level: 75 },
        { name: "Malware Analysis", level: 78 },
        { name: "Security Protocols", level: 84 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Cybersecurity Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity skills across penetration testing, ethical hacking, network security, 
            and incident response. Proficient in industry-standard tools and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
