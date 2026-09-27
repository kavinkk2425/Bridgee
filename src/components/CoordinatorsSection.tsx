import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Search, CheckCircle2 } from 'lucide-react';
import { CLUB_COORDINATORS } from '../data/bridgeClubData';

export const CoordinatorsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Convenors',
    'Operations & Comms',
    'Career & Placement',
    'Learning & Activities',
    'Finance & Budget',
    'Department Coordinators'
  ];

  const filteredCoordinators = useMemo(() => {
    return CLUB_COORDINATORS.filter(c => {
      const matchesCategory = selectedFilter === 'All' || c.category === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.year.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24" id="coordinators">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-150 text-blue-600 text-xs font-extrabold uppercase tracking-wider font-sans">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>STUDENT EXECUTIVE COUNCIL · 24 COORDINATORS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
          Meet Our <span className="text-blue-600">Student Coordinators</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
          The 24 student leaders, convenors, and department representatives driving The Bridge Club initiatives across Government College of Engineering, Erode.
        </p>
      </div>

      {/* Controls: Search & Category Filter Tabs */}
      <div className="space-y-4 mb-8 sm:mb-10">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search coordinators by name, department, or role..."
            className="w-full bg-white border border-slate-200/90 rounded-full pl-11 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-2xs font-sans transition-all"
          />
        </div>

        {/* Filter Tabs - Horizontally Scrollable on Mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? CLUB_COORDINATORS.length 
              : CLUB_COORDINATORS.filter(c => c.category === cat).length;
            const isActive = selectedFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap font-sans shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Coordinators Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCoordinators.map((coord, idx) => (
          <motion.div
            key={coord.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-200/80 hover:border-blue-400 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all group"
          >
            <div className="space-y-4">
              {/* Top Header - Pure Typography & Initials Badge (No Photos) */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm border border-blue-200/50 group-hover:scale-105 transition-transform font-sans">
                  {coord.initials}
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 font-sans tracking-wide">
                      #{coord.sNo}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 font-sans truncate">
                      {coord.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-sans truncate">
                    {coord.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 font-sans truncate">
                    {coord.role}
                  </p>
                </div>
              </div>

              {/* Department & Year Info */}
              <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-150/70 text-xs font-medium text-slate-700 space-y-1 font-sans">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{coord.department}</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold pl-5">
                  {coord.year} · Government College of Engineering, Erode
                </div>
              </div>
            </div>

            {/* Email Contact Action */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between font-sans">
              <a
                href={`mailto:${coord.email}`}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1.5 font-bold transition-colors truncate max-w-full"
                title={`Email ${coord.name}`}
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{coord.email}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCoordinators.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-slate-500 text-sm font-sans">No student coordinators found matching "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedFilter('All'); }}
            className="mt-3 text-xs text-blue-600 font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
