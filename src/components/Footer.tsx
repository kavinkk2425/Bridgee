import React from 'react';
import officialClubLogo from '../assets/images/official_club_logo.jpg';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab
}) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-600 text-xs pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-blue-600 to-indigo-700 shadow-md shadow-blue-500/25 shrink-0 overflow-hidden">
                <img
                  src={officialClubLogo}
                  alt="The Bridge Club Official Logo"
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">
                THE BRIDGE <span className="text-blue-600">CLUB</span>
              </span>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm font-sans">
              Government College of Engineering (Formerly IRTT), Erode. A student-led club connecting students, staff, and global alumni to accelerate technical learning, career development, and placements.
            </p>
          </div>

          {/* Column 1: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
              Club Navigation
            </div>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  About Bridge Club
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('flow')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  How It Works & Flow
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('roles')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Roles & Governance
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('team')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Our Team & Inauguration Gallery
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('coordinators')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Leadership & Coordinators
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('survey')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Student Voice Survey
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Governance */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
              Governance Pillars
            </div>
            <ul className="space-y-2 text-xs text-slate-500 font-sans">
              <li>Student Executive Council</li>
              <li>Faculty Patrons & Staff Advisors</li>
              <li>Alumni Mentors & Industry Advisors</li>
              <li>Undergraduate Student Members</li>
              <li>1:1 Mentorship Cohorts</li>
            </ul>
          </div>

          {/* Column 3: Institution */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
              Institution
            </div>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <span className="text-slate-700 font-semibold">
                  Govt. College of Engineering, Erode
                </span>
              </li>
              <li>
                <span className="text-slate-500">
                  (Formerly IRTT Erode)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-150 flex items-center justify-center text-center text-[11px] text-slate-400 font-sans">
          <div>
            © 2026 The Bridge Club — Government College of Engineering, (Formerly IRTT), Erode.
          </div>
        </div>

      </div>
    </footer>
  );
};
