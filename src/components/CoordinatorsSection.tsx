import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';
import { CLUB_COORDINATORS } from '../data/bridgeClubData';

export const CoordinatorsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Executive Council', 'Technical Lead', 'Operations Lead', 'Outreach Lead', 'Media & Comms'];

  const filteredCoordinators = selectedFilter === 'All'
    ? CLUB_COORDINATORS
    : CLUB_COORDINATORS.filter(c => c.category === selectedFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24" id="coordinators">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-600 text-xs font-extrabold uppercase tracking-wider font-sans">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>STUDENT COORDINATORS & EXECUTIVE COUNCIL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
          Meet Our <span className="text-emerald-600">Student Coordinators</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
          The elected student executive committee and department coordinators driving The Bridge Club initiatives across all engineering branches.
        </p>
      </div>

      {/* Filter Tabs - Horizontally Scrollable on Mobile */}
      <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap font-sans shrink-0 ${
              selectedFilter === cat
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Coordinators Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCoordinators.map((coord, idx) => (
          <motion.div
            key={coord.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200/80 hover:border-emerald-400 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all group"
          >
            <div className="space-y-4">
              {/* Top Header - Pure Typography & Initials Badge (No Photos) */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm border border-blue-200/50 group-hover:scale-105 transition-transform font-sans">
                  {coord.initials}
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 font-sans tracking-wide">
                      STUDENT LEAD
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 font-sans truncate">
                      {coord.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-sans truncate">
                    {coord.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 font-sans truncate">
                    {coord.role}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-medium font-sans">
                📍 {coord.department}
              </div>

              {/* Responsibilities */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                  Key Responsibilities
                </span>
                <ul className="space-y-1.5">
                  {coord.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed font-sans">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-sans">
              <a
                href={`mailto:${coord.email}`}
                className="text-xs text-slate-500 hover:text-emerald-600 flex items-center gap-1 font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>

              {coord.linkedin && (
                <a
                  href={coord.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-semibold transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
