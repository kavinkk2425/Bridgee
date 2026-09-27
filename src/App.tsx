import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroInauguration } from './components/HeroInauguration';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RolesResponsibilitiesSection } from './components/RolesResponsibilitiesSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { SurveyAnalytics } from './components/SurveyAnalytics';
import { Footer } from './components/Footer';
import { ArrowLeft, Compass, BarChart2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [posterLightboxOpen, setPosterLightboxOpen] = useState(false);

  // Lightweight scroll progress bar
  const { scrollYProgress } = useScroll();

  // Scroll spy for overview sections
  useEffect(() => {
    if (activeTab === 'survey') return;

    const sectionIds = ['about', 'flow', 'roles', 'coordinators'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 220;
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveTab(sectionIds[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleNavClick = (tabId: string) => {
    if (tabId === 'survey') {
      setActiveTab('survey');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (activeTab === 'survey') {
      // Switching from survey view back to main overview
      setActiveTab(tabId === 'about' ? 'about' : tabId);
      if (tabId === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.getElementById(tabId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      setActiveTab(tabId);
      if (tabId === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(tabId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Page changing animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' as const }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: 'easeIn' as const }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between relative">
      
      {/* Lightweight GPU-Accelerated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 origin-left z-50 shadow-xs gpu-layer"
        style={{ scaleX: scrollYProgress }}
      />

      <div>
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleNavClick}
          onOpenPoster={() => setPosterLightboxOpen(true)}
        />

        {/* Main Body View with Smooth Page Changing Effects */}
        <main className="space-y-12 pb-16">
          <AnimatePresence mode="wait">
            {activeTab !== 'survey' ? (
              <motion.div
                key="overview-page"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-12 sm:space-y-20 gpu-layer"
              >
                {/* 1. Club Hero & Mission Statement */}
                <HeroInauguration
                  onNavigateToFlow={() => handleNavClick('flow')}
                  onNavigateToRoles={() => handleNavClick('roles')}
                  onNavigateToCoordinators={() => handleNavClick('coordinators')}
                  onNavigateToSurvey={() => handleNavClick('survey')}
                  posterLightboxOpen={posterLightboxOpen}
                  setPosterLightboxOpen={setPosterLightboxOpen}
                />

                {/* 2. Operational Flow & How It Works */}
                <HowItWorksSection />

                {/* 3. Roles & Responsibilities */}
                <RolesResponsibilitiesSection />

                {/* 4. Leadership & Coordinators */}
                <CoordinatorsSection />
              </motion.div>
            ) : (
              <motion.div
                key="survey-page"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8 gpu-layer"
              >
                {/* Breadcrumbs & Back Navigation Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="btn-pill-outline text-xs cursor-pointer flex items-center gap-2 font-bold px-4 py-2 hover:scale-105 active:scale-95 transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Club Overview</span>
                    </button>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span>The Bridge Club</span>
                      <span>›</span>
                      <span className="text-blue-600 font-bold">Student Voice Survey & Data</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleNavClick('flow')}
                      className="text-xs font-bold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5 text-blue-500" />
                      <span>View Operational Flow</span>
                    </button>
                  </div>
                </div>

                {/* Dedicated Student Survey & Analytics Component */}
                <SurveyAnalytics
                  onSelectProgram={() => handleNavClick('flow')}
                  onNavigateToMentors={() => handleNavClick('coordinators')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <Footer
        setActiveTab={handleNavClick}
      />
    </div>
  );
}
