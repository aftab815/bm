import { Link, useLocation } from "react-router";
import { Menu, X, Home, Info, Briefcase, Mail, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import logo from "../../imports/image-2.png";
import chairmanAvatar from "../../imports/chairman.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Info },
    { path: "/practice-areas", label: "Practice Areas", icon: Briefcase },
    { path: "/chairman", label: "Chairman", icon: User },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xl border-b-2 border-accent/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <motion.img
              src={logo}
              alt="BM Solicitor"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <div className="text-lg font-bold tracking-tight text-primary">BM SOLICITOR</div>
              <div className="text-xs text-accent tracking-wider">(PVT) LIMITED</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition-all hover:text-accent relative group ${
                    isActive(link.path) ? "text-accent" : "text-primary"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="px-4 py-2 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-colors"
              >
                Get a Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/chairman" className="ml-4 inline-flex items-center">
                <img src={chairmanAvatar} alt="Chairman" className="h-10 w-10 rounded-full ring-2 ring-amber-200 object-cover" />
              </Link>
            </motion.div>
          </nav>

          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            
            {/* Drawer Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-72 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-b from-white to-white/95 px-6 py-4 border-b border-accent/20 flex justify-between items-center">
                <h3 className="text-lg font-bold text-primary">Menu</h3>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>
              
              <div className="px-6 py-6 space-y-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all group ${
                          isActive(link.path)
                            ? "bg-accent text-white shadow-md"
                            : "text-primary hover:bg-primary/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-semibold text-sm">{link.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isActive(link.path) ? "translate-x-1" : "group-hover:translate-x-1"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="border-t border-accent/20 my-6"></div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 shadow-lg transition-all active:scale-95"
                  >
                    <span>Get a Consultation</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </div>
    </motion.header>
  );
}
