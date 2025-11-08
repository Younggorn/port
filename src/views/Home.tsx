
import { Mail,Github, Linkedin, Phone } from 'lucide-react';

// Placeholder images - replace with your actual imports

import Me from "../assets/Me.png"

const Home = () => {




  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen text-white flex items-center justify-center">
       
        <div className="z-10 text-center px-4">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={Me} 
                alt="Phankorn Profile"
                className="w-75 h-100  object-cover   shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Hello, I'm Phankorn
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer & SmartWork Creator
          </p>
          <div className="flex justify-center space-x-6">
            <a href="Work" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-purple-400 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            SmartWork Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-6 h-6 text-white hover:text-purple-400 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Let's Work Together
          </h2>
          
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">p.phetnoi9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+66 (0) 92 271 4117</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6 pt-6">
                <Github className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting || !email || !message}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 transform hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div> */}
          
        </div>
      </section>

      

    </div>
  );
};

export default Home;
