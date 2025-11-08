import { Github, Linkedin, Mail } from "lucide-react"


const footer = () => {
  return (
    <div>
              <footer className="bg-black/50 backdrop-blur-sm text-white py-12 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Phankorn
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer passionate about creating innovative solutions 
                that make work easier and more efficient.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="about" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Phankorn. All rights reserved. | Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default footer
