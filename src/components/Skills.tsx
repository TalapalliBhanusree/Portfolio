
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C", level: "Intermediate" },
        { name: "HTML/CSS", level: "Expert" }
      ],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: "Advanced" },
        { name: "Flask", level: "Intermediate" },
        { name: "ReactJS", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Keras", level: "Intermediate" },
        { name: "Scikit-learn", level: "Advanced" }
      ],
      color: "purple"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Expert" },
        { name: "VS Code", level: "Expert" },
        { name: "DevOps", level: "Beginner" }
      ],
      color: "green"
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" }
      ],
      color: "orange"
    }
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      Expert: "bg-emerald-500 text-emerald-100 border-emerald-400",
      Advanced: "bg-blue-500 text-blue-100 border-blue-400",
      Intermediate: "bg-amber-500 text-amber-100 border-amber-400",
      Beginner: "bg-gray-500 text-gray-100 border-gray-400"
    };
    return colors[level as keyof typeof colors] || colors.Beginner;
  };

  const getLevelDots = (level: string) => {
    const dots = {
      Expert: 5,
      Advanced: 4,
      Intermediate: 3,
      Beginner: 2
    };
    return dots[level as keyof typeof dots] || 2;
  };

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
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i < getLevelDots(skill.level)
                              ? `bg-gradient-to-r ${getColorClasses(category.color)} shadow-lg`
                              : 'bg-slate-700'
                          }`}
                        />
                      ))}
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
