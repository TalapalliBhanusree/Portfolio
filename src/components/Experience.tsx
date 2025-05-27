
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Infosys Springboard",
      duration: "Nov 2024 – Jan 2025",
      description: "Built EMusic web application using Django framework with Spotify API integration, creating a personalized music dashboard with advanced recommendation features.",
      achievements: [
        "Developed full-stack web application with Django",
        "Integrated Spotify API for music streaming",
        "Implemented personalized recommendation system",
        "Created responsive user interface"
      ],
      tech: ["Django", "Python", "Spotify API", "Web Development"]
    },
    {
      title: "Web Development Intern",
      company: "Nexzone",
      duration: "Aug – Oct 2024",
      description: "Specialized in portfolio website development using core web technologies, focusing on responsive design and modern user experience.",
      achievements: [
        "Developed responsive portfolio websites",
        "Implemented modern UI/UX principles",
        "Optimized website performance",
        "Enhanced user engagement"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "RPA Training Program",
      company: "Mass Mutual",
      duration: "2024",
      description: "Completed comprehensive training in Robotic Process Automation using UI Path platform, focusing on business process automation and case studies.",
      achievements: [
        "Mastered UI Path automation platform",
        "Developed RPA case study solutions",
        "Automated business processes",
        "Gained industry-standard RPA skills"
      ],
      tech: ["UI Path", "RPA", "Process Automation", "Business Intelligence"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Building expertise through hands-on internships and industry training programs
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/30 border-slate-600/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-1">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-blue-400 font-semibold text-lg">{exp.company}</CardDescription>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </CardHeader>
                </div>
                
                <div className="lg:col-span-2">
                  <CardContent className="p-0 space-y-6">
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-purple-400 font-semibold">Key Achievements</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-green-400 font-semibold">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
