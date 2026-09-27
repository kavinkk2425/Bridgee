import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroInauguration } from './components/HeroInauguration';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RolesResponsibilitiesSection } from './components/RolesResponsibilitiesSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { SurveyAnalytics } from './components/SurveyAnalytics';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [posterLightboxOpen, setPosterLightboxOpen] = useState(false);

  // Lightweight scroll progress bar
  const { scrollYProgress } = useScroll();

  // Scroll spy for all 5 portal sections
  useEffect(() => {
    const sectionIds = ['about', 'flow', 'roles', 'coordinators', 'survey'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 180;
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
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(tabId);
    if (el) {
      const navOffset = 76;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: 'smooth'
      });
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

        {/* Main Continuous Single-Page Flow */}
        <main className="space-y-12 sm:space-y-20 pb-16">
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

          {/* 5. Student Survey & Full Empirical Analytics */}
          <SurveyAnalytics
            onSelectProgram={() => handleNavClick('flow')}
            onNavigateToMentors={() => handleNavClick('coordinators')}
          />
        </main>
      </div>

      {/* Footer */}
      <Footer
        setActiveTab={handleNavClick}
      />
    </div>
  );
}
