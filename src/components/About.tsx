
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive and modern web applications using latest technologies."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end application development from frontend to backend and database."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Designing efficient and scalable database architectures for optimal performance."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Creating applications that work seamlessly across all devices and screen sizes."
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
              Passionate Developer with a Vision
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Full Stack Developer with a strong foundation in modern web technologies. 
              My journey in software development has equipped me with comprehensive skills in both 
              frontend and backend development, allowing me to create complete, scalable solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With expertise in React, Node.js, MongoDB, and cloud technologies, I focus on building 
              applications that not only meet technical requirements but also provide exceptional user 
              experiences. I'm constantly learning and adapting to new technologies to stay at the 
              forefront of web development.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Problem Solving", "Team Collaboration", "Continuous Learning", "Innovation"].map((skill) => (
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
