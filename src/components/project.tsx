import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn} from "lucide-react";
import Pro1_1 from "../assets/Pro1-1.png";
import Pro1_2 from "../assets/Pro1-2.png";
import Pro1_3 from "../assets/Pro1-3.png";
import Pro1_4 from "../assets/Pro1-4.png";
import Pro1_5 from "../assets/Pro1-5.png";
import Pro1_6 from "../assets/Pro1-6.png";
import Pro1_7 from "../assets/Pro1-7.png";
import Pro1_8 from "../assets/Pro1-8.png";
import Pro1_9 from "../assets/Pro1-9.png";

export interface Project {
  img: any;
  title: string;
  desc: string;
  detailDesc: string;
}

const projects : Project[]= [
  {
    img:Pro1_1,
    title: "Worktime Checkin",
    desc: "You can check in this page and OT request",
    detailDesc: "A comprehensive time tracking application that allows employees to check in and out for work shifts. Features include real-time clock-in/out, overtime request submission, and automatic time calculation. The interface is user-friendly with clear visual indicators for different shift statuses."
  },
  {
    img: Pro1_2,
    title: "Menu",
    desc: "Sidebar menu with navigation",
    detailDesc: "Intuitive sidebar navigation system with clean design and smooth transitions. Includes user profile section, quick access to main features, and responsive collapse functionality for mobile devices. Icons and labels provide clear visual hierarchy for easy navigation."
  },
  {
    img:Pro1_3,
    title: "Dashboard",
    desc: "You can see your checkin and edit in this page",
    detailDesc: "Personal dashboard displaying comprehensive work time analytics, including daily check-in history, weekly summaries, and monthly reports. Users can edit their entries, view attendance patterns, and track their work hours with interactive charts and calendars."
  },
  {
    img: Pro1_4,
    title: "Admin Dashboard",
    desc: "Admin dashboard page, it shows everyone's checkin",
    detailDesc: "Administrative overview panel providing real-time monitoring of all employee check-ins and work status. Features include team attendance tracking, department-wise analytics, late arrival notifications, and bulk management tools for efficient workforce monitoring."
  },
  {
    img: Pro1_5,
    title: "Detail",
    desc: "If you click item in day it will show detail",
    detailDesc: "Detailed view modal that expands when clicking on daily entries. Shows comprehensive information including exact check-in/out times, break durations, total work hours, location data, and any special notes or exceptions for that specific day."
  },
  {
    img: Pro1_6,
    title: "Permission Page",
    desc: "Admins can set permissions",
    detailDesc: "Advanced permission management system allowing administrators to configure user roles, access levels, and feature permissions. Includes role-based access control, department-specific settings, and granular permission assignment for different user groups."
  },
  {
    img: Pro1_7,
    title: "OT Request Page",
    desc: "You can create OT requests, choose a senior to approve",
    detailDesc: "Overtime request submission interface with smart approval workflow. Users can specify overtime duration, reason, project details, and select appropriate approvers. Includes automatic calculation of overtime rates and integration with payroll systems."
  },
  {
    img: Pro1_8,
    title: "Approve OT Page",
    desc: "Senior and admin can approve it",
    detailDesc: "Approval interface for senior staff and administrators to review and process overtime requests. Features batch approval options, detailed request information, comment system for feedback, and automatic notification system to keep all parties informed."
  },
  {
    img: Pro1_9,
    title: "Approve by Admin",
    desc: "Only admin can approve it, user will get OT time",
    detailDesc: "Final administrative approval stage with enhanced security and audit trails. Only top-level administrators can process final approvals, ensuring proper oversight. Includes automatic time credit assignment, payroll integration, and comprehensive logging for compliance."
  },

];

export default function Project() {
  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto slide ทุก 4 วิ (เพิ่มเวลาเพื่อให้ดูได้นานขึ้น)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // เมื่อ index เปลี่ยน → scroll ไปตำแหน่งใหม่
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = window.innerWidth < 768 ? 280 : 420; // responsive width
      containerRef.current.scrollTo({
        left: index * (cardWidth + 20), // card width + gap
        behavior: "smooth",
      });
    }
  }, [index]);

  const openModal = (project:Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsImageZoomed(false); // รีเซ็ต zoom state เมื่อปิด modal
  };

  const nextProject = () => {
    const currentIndex = projects.findIndex(p => p === selectedProject);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    setIndex(nextIndex); // อัพเดท carousel index ด้วย
    setIsImageZoomed(false); // รีเซ็ต zoom เมื่อเปลี่ยนโปรเจกต์
  };

  const prevProject = () => {
    const currentIndex = projects.findIndex(p => p === selectedProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
    setIndex(prevIndex); // อัพเดท carousel index ด้วย
    setIsImageZoomed(false); // รีเซ็ต zoom เมื่อเปลี่ยนโปรเจกต์
  };

  const toggleImageZoom = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  return (
    <div className="mb-10 text-gray-200 flex flex-col items-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">My Project</h1>

      {/* Container ที่เลื่อนด้วยเมาส์/นิ้วได้ */}
      <h1 className="text-2xl mb-3">Worktime Project</h1>
      <motion.div
        ref={containerRef}
        className="w-full max-w-6xl overflow-x-auto flex gap-4 md:gap-5 snap-x snap-mandatory px-2 scrollbar-hide cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="min-w-[280px] md:min-w-[400px] lg:min-w-[500px] snap-center flex-shrink-0 flex flex-col items-center text-center bg-gray-800/50 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal(p)}
          >
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">{p.title}</h2>
            <div className="relative overflow-hidden rounded-lg mb-2 bg-black/20">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[160px] md:h-[220px] lg:h-[280px] object-contain bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-gray-400 text-sm md:text-base line-clamp-2">{p.desc}</p>
            <motion.div 
              className="mt-2 text-xs text-blue-400 font-medium"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              Click to view details
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      

      {/* Dots indicator */}
      <div className="flex gap-2 mt-4 md:mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>

      

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2 relative group">
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-lg"
                    onClick={toggleImageZoom}
                  >
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="w-full h-[250px] md:h-[350px] object-contain bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-black/70 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
                        <ZoomIn size={16} />
                        Click to zoom
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2">Overview</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.desc}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2">Detailed Description</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.detailDesc}</p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevProject}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden md:inline">Previous</span>
                </button>

                <div className="text-gray-400 text-sm">
                  {projects.findIndex(p => p === selectedProject) + 1} / {projects.length}
                </div>

                <button
                  onClick={nextProject}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 border border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="hidden md:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isImageZoomed && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
            onClick={() => setIsImageZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[95vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsImageZoomed(false)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              {/* Zoom out hint */}
            

              {/* Full size image */}
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-auto h-auto max-w-full max-h-full object-contain bg-black rounded-lg shadow-2xl"
                style={{ maxWidth: '95vw', maxHeight: '95vh' }}
              />

              {/* Image title */}
              {/* <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg">{selectedProject.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{selectedProject.desc}</p>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}