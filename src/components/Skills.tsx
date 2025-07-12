
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      category: "OFFENSIVE_SECURITY",
      skills: [
        { name: "Penetration Testing", level: 88 },
        { name: "Ethical Hacking", level: 85 },
        { name: "Exploit Development", level: 82 },
        { name: "Social Engineering", level: 78 },
        { name: "Web App Security", level: 86 }
      ]
    },
    {
      category: "RECONNAISSANCE_TOOLS",
      skills: [
        { name: "Nmap", level: 88 },
        { name: "Wireshark", level: 85 },
        { name: "Metasploit", level: 83 },
        { name: "Burp Suite", level: 87 },
        { name: "OWASP ZAP", level: 80 }
      ]
    },
    {
      category: "DEFENSIVE_OPERATIONS",
      skills: [
        { name: "Incident Response", level: 84 },
        { name: "Malware Analysis", level: 78 },
        { name: "Digital Forensics", level: 81 },
        { name: "Threat Hunting", level: 85 },
        { name: "SIEM Management", level: 79 }
      ]
    },
    {
      category: "SYSTEM_EXPLOITATION",
      skills: [
        { name: "Linux Systems", level: 90 },
        { name: "Windows Security", level: 84 },
        { name: "Network Security", level: 87 },
        { name: "Cryptography", level: 82 },
        { name: "Reverse Engineering", level: 76 }
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
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">&gt; </span>
            ARSENAL_INVENTORY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            <span className="text-green-400"># </span>
            Advanced weaponry for digital warfare. Mastery across offensive and defensive cybersecurity domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 hover:bg-black/50 hover:border-green-400/60 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center font-mono">
                <span className="text-red-400">[</span>
                <span className="text-green-400">{category.category}</span>
                <span className="text-red-400">]</span>
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium font-mono">{skill.name}</span>
                      <span className="text-green-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 border border-gray-700">
                      <div
                        className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
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
