
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a motivated and passionate B.Tech (CSE - AI & ML) student with hands-on experience in AI, ML, and web technologies. 
              I thrive on adapting to new challenges, exploring innovative domains, and delivering real-world solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in Python, machine learning, web development, and deep learning, I am actively seeking 
              internship and job opportunities to further enhance my skills and gain industrial exposure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors duration-300">
                <h4 className="text-blue-400 font-semibold mb-2">Soft Skills</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Communication</li>
                  <li>• Adaptability</li>
                  <li>• Team Work</li>
                  <li>• Self-learning</li>
                </ul>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors duration-300">
                <h4 className="text-purple-400 font-semibold mb-2">Focus Areas</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Artificial Intelligence</li>
                  <li>• Machine Learning</li>
                  <li>• Web Development</li>
                  <li>• Deep Learning</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-blue-400">B.Tech CSE (AI-ML)</h4>
                  <p className="text-gray-300">Vardhaman College of Engineering</p>
                  <p className="text-gray-400">2022 – 2026 | CGPA: 8.9</p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-purple-400">Intermediate (MPC)</h4>
                  <p className="text-gray-300">Narayana Jr. College</p>
                  <p className="text-gray-400">98.2%</p>
                </div>
                
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-semibold text-green-400">SSC</h4>
                  <p className="text-gray-300">Brilliant Grammar High School</p>
                  <p className="text-gray-400">CGPA: 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
