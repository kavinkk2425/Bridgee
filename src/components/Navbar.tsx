import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import officialClubLogo from '../assets/images/official_club_logo.jpg';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPoster?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About Club' },
    { id: 'flow', label: 'How It Works' },
    { id: 'roles', label: 'Roles & Governance' },
    { id: 'coordinators', label: 'Coordinators' },
    { id: 'survey', label: 'Student Survey' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Left Brand Area */}
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={() => handleNavClick('about')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none cursor-pointer text-left min-w-0"
            >
              {/* Official Club Logo Emblem */}
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-blue-600 to-indigo-700 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
                <img
                  src={officialClubLogo}
                  alt="The Bridge Club Official Logo"
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-lg font-black tracking-tight text-slate-900 font-sans truncate">
                  THE BRIDGE CLUB
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase block leading-none mt-0.5 font-sans truncate">
                  Learn · Grow · Build Together
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-3 px-4">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 xl:px-4 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap relative font-sans ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-extrabold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-4 shadow-xl"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`py-2.5 px-4 text-left rounded-xl text-xs font-bold tracking-wide transition-colors font-sans flex items-center justify-between ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 font-extrabold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
