
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 80 },
        { name: "ReactJS", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 75 },
        { name: "Scikit-learn", level: 85 }
      ],
      color: "purple"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "DevOps", level: 70 }
      ],
      color: "green"
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "AWS", level: 75 }
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full skill-bar transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Domains of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Machine Learning", "NLP", "Web Development", "Deep Learning", "RPA (UI Path)"].map((domain, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-slate-700/50 text-blue-400 rounded-full border border-blue-500/30 hover:bg-slate-600/50 transition-colors duration-300"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
