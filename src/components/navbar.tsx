import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

// Mock NavLink component for demo purposes


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    // { label: "Blog", path: "/blog" },
    // { label: "More", path: "/more" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md text-white rounded-full px-6 py-2 shadow-lg gap-4 items-center border border-white/20">
        <div className="flex space-x-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-1 text-sm font-medium rounded-full transition duration-200 ${
                  isActive ? "bg-white/20 text-white" : "hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>


      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-md text-white rounded-2xl px-4 py-3 shadow-lg border border-white/20 w-fit">
        <div className="">
          {/* Logo/Brand */}


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 pt-4 border-t border-white/20 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm font-medium rounded-xl transition duration-200 ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "hover:bg-white/10 text-gray-200"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              

            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Tablet Navbar */}
      <nav className="hidden sm:flex md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md text-white rounded-2xl px-4 py-2 shadow-lg border border-white/20">
        <div className="flex items-center gap-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-medium rounded-xl transition duration-200 ${
                  isActive ? "bg-white/20 text-white" : "hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          

        </div>
      </nav>

      <style>{`
        @keyframes slide-in-from-top-2 {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-in {
          animation-duration: 200ms;
          animation-fill-mode: both;
        }
        
        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
        }
      `}</style>
    </>
  );
};

export default Navbar;