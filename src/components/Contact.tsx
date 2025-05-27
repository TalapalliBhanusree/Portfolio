
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "talapallibhanusree@gmail.com",
      link: "mailto:talapallibhanusree@gmail.com",
      icon: "📧"
    },
    {
      label: "GitHub",
      value: "github.com/TalapalliBhanusree",
      link: "https://github.com/TalapalliBhanusree",
      icon: "💻"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/talapalli-bhanusree",
      link: "https://linkedin.com/in/talapalli-bhanusree-2a3455318",
      icon: "🔗"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Ready to collaborate on exciting AI projects or discuss opportunities? Let's connect!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in AI, machine learning, and web development. Whether you're 
                looking for an intern, have a project idea, or just want to connect, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-600/50 hover:border-blue-500/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="font-semibold">{info.label}</p>
                        <p className="text-sm text-gray-400">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="bg-slate-800/30 border-slate-600/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Looking Forward to Connecting</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Thank you for taking the time to explore my portfolio. I'm excited about the possibility 
              of working together and contributing to innovative projects that push the boundaries of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
