
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      year: "2024",
      category: "Data Science",
      color: "blue"
    },
    {
      title: "RPA Case Study Certification",
      issuer: "Mass Mutual",
      year: "2024",
      category: "Automation",
      color: "purple"
    },
    {
      title: "Python Programming",
      issuer: "Infosys",
      year: "2024",
      category: "Programming",
      color: "green"
    },
    {
      title: "Full Stack Software Development",
      issuer: "VCE (Vardhaman College of Engineering)",
      year: "2024",
      category: "Web Development",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500/30 hover:border-blue-400/50 bg-blue-900/10",
      purple: "border-purple-500/30 hover:border-purple-400/50 bg-purple-900/10",
      green: "border-green-500/30 hover:border-green-400/50 bg-green-900/10",
      orange: "border-orange-500/30 hover:border-orange-400/50 bg-orange-900/10"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      green: "text-green-400",
      orange: "text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`${getColorClasses(cert.color)} border transition-all duration-300 hover:transform hover:scale-105`}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <CardTitle className="text-white text-lg leading-tight">{cert.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-3">
                <p className="text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(cert.color)} bg-slate-700/30 border border-current/20`}>
                  {cert.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">Commitment to Excellence</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These certifications represent my dedication to staying current with industry trends and 
              continuously expanding my technical expertise across multiple domains including AI, web development, 
              and automation technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
