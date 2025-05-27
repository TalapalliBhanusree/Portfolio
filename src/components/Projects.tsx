import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Medi-Risk-Indicator",
      description: "AI-powered health risk prediction system using Support Vector Machine (SVM) algorithm to assess and predict potential health risks.",
      tech: ["Python", "SVM", "Machine Learning", "Healthcare AI"],
      github: "https://github.com/TalapalliBhanusree",
      features: ["Predictive Analytics", "Health Risk Assessment", "AI-driven Insights"]
    },
    {
      title: "Skin Cancer Diagnosis",
      description: "Advanced skin lesion classification system combining CNN and Vision Transformer (ViT) architectures, achieving 90%+ accuracy.",
      tech: ["CNN", "Vision Transformer", "Deep Learning", "Medical AI"],
      github: "https://github.com/TalapalliBhanusree",
      features: ["90%+ Accuracy", "CNN + ViT Architecture", "Medical Image Analysis"]
    },
    {
      title: "Real-Time Collaborative Code Editor",
      description: "Live code editing platform with multi-user support, enabling real-time collaboration for development teams.",
      tech: ["ReactJS", "WebSocket", "Real-time", "Collaboration"],
      github: "https://github.com/TalapalliBhanusree",
      features: ["Live Collaboration", "Multi-user Support", "Real-time Sync"]
    },
    {
      title: "Hostel Management System",
      description: "Comprehensive full-stack web application for hostel room allocation, fee management, and student administration.",
      tech: ["Full-stack", "Web Development", "Database", "Management"],
      github: "https://github.com/TalapalliBhanusree",
      features: ["Room Allocation", "Fee Management", "Student Portal"]
    },
    {
      title: "EMusic Web App",
      description: "Django-based music platform with Spotify integration, featuring personalized music dashboard and recommendations.",
      tech: ["Django", "Spotify API", "Web Development", "Python"],
      github: "https://github.com/TalapalliBhanusree",
      features: ["Spotify Integration", "Personalized Dashboard", "Music Recommendations"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, machine learning, and web technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-slate-700/30 border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm">• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-600/50 text-gray-300 rounded text-xs border border-slate-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
