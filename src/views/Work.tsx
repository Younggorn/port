
import MutLogo from "../assets/MUT.png"
import GmrLogo from "../assets/GMR.png"

const Work = () => {
  return (
    <div className="min-h-screen mt-24 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Experience & Education
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            My journey in technology and learning
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 rounded-full"></div>
          
          {/* Mobile Timeline Line - Left aligned */}
          <div className="md:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            
            {/* Education Card */}
            <div className="relative">
              {/* Desktop Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10"></div>
              
              {/* Card - Mobile: Full width, Desktop: Right Side */}
              <div className="md:w-1/2  md:pl-12 ml-16 md:ml-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform">
                        <img src={MutLogo} alt="MUT Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3">
                        <span className="px-3 md:px-4 py-1 bg-blue-500/20 text-blue-300 text-xs md:text-sm font-medium rounded-full border border-blue-400/30">
                          🎓 Education
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full">
                          2022-2026
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
                        Bachelor of Engineering
                      </h3>
                      
                      <p className="text-gray-300 text-base md:text-lg mb-2">
                        Computer Engineering
                      </p>
                      
                      <p className="text-gray-400 text-sm md:text-base">
                        Mahanakorn University of Technology
                        <br />
                        <span className="text-xs md:text-sm">Bangkok, Thailand</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship Card */}
            <div className="relative">
              {/* Desktop Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute left-6 top-6 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg z-10"></div>
              
              {/* Card - Mobile: Full width, Desktop: Left Side */}
              <div className="md:w-1/2 md:pr-12 ml-16 md:ml-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 md:text-right">
                    {/* Content - Mobile: normal order, Desktop: reverse order */}
                    <div className="flex-1 text-center sm:text-left md:text-right order-2 sm:order-1 md:order-1">
                      <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center sm:justify-start md:justify-end gap-2 sm:gap-3 mb-3">
                        <span className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full order-2 md:order-1">
                          2025
                        </span>
                        <span className="px-3 md:px-4 py-1 bg-green-500/20 text-green-300 text-xs md:text-sm font-medium rounded-full border border-green-400/30 order-1 md:order-2">
                          💼 Internship
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-3 group-hover:text-green-400 transition-colors">
                        Software Engineer
                      </h3>
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-green-400 transition-colors">
                        (Group Maker Company)
                      </h3>
                      
                      <p className="text-gray-300 text-base md:text-lg mb-2">
                        Full-time Internship Position
                      </p>
                      
                      <p className="text-gray-400 mb-3 text-sm md:text-base">
                        9 months experience in software development
                        <br />
                        <span className="text-xs md:text-sm">Professional industry exposure</span>
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap justify-center sm:justify-start md:justify-end gap-2 mt-4">
                        <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30">
                          Development
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                          Problem Solving
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-400/30">
                          Team Work
                        </span>
                      </div>
                    </div>
                    
                    {/* Logo */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0 order-1 sm:order-2 md:order-2">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform">
                        <img src={GmrLogo} alt="GMR Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>



        {/* Background Decorations - Responsive positioning */}
        <div className="fixed top-10 md:top-20 right-4 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="fixed bottom-10 md:bottom-20 left-4 md:left-20 w-24 h-24 md:w-40 md:h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  )
}

export default Work