
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Talapalli</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Bhanusree
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-medium">
              AI Enthusiast | Developer | Explorer
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate B.Tech CSE (AI-ML) student crafting intelligent solutions 
              and exploring the frontiers of artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-72 h-72 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center border-2 border-blue-400/30">
                  <div className="text-6xl text-blue-400">👩‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
