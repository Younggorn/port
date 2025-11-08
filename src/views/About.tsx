// src/views/About.tsx
import Project from "../components/project";
import Project2 from "../components/project2";

export default function About() {
  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative">
            <h1 className="text-5xl font-bold mb-6 text-gray-200">About Me</h1>
            <div className="absolute -top-2 -left-2 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Hello 👋 I'm a software engineering passionate about building modern
            applications and exploring new technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Frontend */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                Frontend
              </h2>
              <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img
                    src={`${import.meta.env.BASE_URL}imgs/React.svg`}
                    alt="React"
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img src="/imgs/vite.svg" alt="Vite" className="w-10 h-10" />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img
                    src={`${import.meta.env.BASE_URL}imgs/Tailwind_CSS.png`}
                    alt="Tailwind"
                    className="w-10 h-7"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-blue-500/20 rounded-full text-white text-sm border border-blue-400/30">
                  React ⚛️
                </div>
                <div className="px-4 py-2 bg-yellow-500/20 rounded-full text-white text-sm border border-yellow-400/30">
                  Vite ⚡
                </div>
                <div className="px-4 py-2 bg-purple-500/20 rounded-full text-white text-sm border border-purple-400/30">
                  Electron 💻
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 rounded-full text-white text-sm border border-cyan-400/30">
                  TailwindCSS 🎨
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-green-400 transition-colors">
                Backend
              </h2>
              <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img
                    src="/imgs/nodejs.png"
                    alt="Node.js"
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img
                    src="/imgs/Mysql.png"
                    alt="MySQL"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-green-500/20 rounded-full text-white text-sm border border-green-400/30">
                  Node.js 🚀
                </div>

                <div className="px-4 py-2 bg-blue-500/20 rounded-full text-white text-sm border border-blue-400/30">
                  MySQL 🗄️
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">
                Languages
              </h2>
              <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img src="/imgs/Java.png" alt="Java" className="w-10 h-10" />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img
                    src="/imgs/typescript.png"
                    alt="TypeScript"
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <img
                    src="/imgs/Python.png"
                    alt="Python"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-yellow-500/20 rounded-full text-white text-sm border border-yellow-400/30">
                  JavaScript 📜
                </div>
                <div className="px-4 py-2 bg-blue-500/20 rounded-full text-white text-sm border border-blue-400/30">
                  TypeScript 🔒
                </div>
                <div className="px-4 py-2 bg-green-500/20 rounded-full text-white text-sm border border-green-400/30">
                  Python 🐍
                </div>
              </div>
            </div>
          </div>
        </div>
        <Project/>
        <Project2/>

        {/* Goals Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text ">
            Goals 🎯
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            My goal is to become a full-stack developer and work on projects
            that combine frontend and backend technologies seamlessly. I'm
            committed to continuous learning and building innovative solutions
            that make a difference.
          </p>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="fixed top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="fixed bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
}
