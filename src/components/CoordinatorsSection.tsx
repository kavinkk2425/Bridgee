import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, GraduationCap, Search, CheckCircle2, ChevronDown, ChevronUp, Users, Filter } from 'lucide-react';
import { CLUB_COORDINATORS } from '../data/bridgeClubData';

export const CoordinatorsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCoordinatorId, setSelectedCoordinatorId] = useState<string>('default');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    'All',
    'Convenors',
    'Operations & Comms',
    'Career & Placement',
    'Learning & Activities',
    'Finance & Budget',
    'Department Coordinators'
  ];

  // Group coordinators for the options dropdown
  const groupedCoordinators = useMemo(() => {
    const groups: { [cat: string]: typeof CLUB_COORDINATORS } = {};
    CLUB_COORDINATORS.forEach(c => {
      if (!groups[c.category]) groups[c.category] = [];
      groups[c.category].push(c);
    });
    return groups;
  }, []);

  const filteredCoordinators = useMemo(() => {
    // If a specific coordinator is picked from dropdown options
    if (selectedCoordinatorId !== 'default' && selectedCoordinatorId !== 'all') {
      return CLUB_COORDINATORS.filter(c => c.id === selectedCoordinatorId);
    }

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
  }, [selectedFilter, searchQuery, selectedCoordinatorId]);

  // Determine what to display: show top 3 by default unless showAll is true, or a category/search/specific option is active
  const isDefaultView = selectedFilter === 'All' && !searchQuery && selectedCoordinatorId === 'default' && !showAll;
  const displayedCoordinators = isDefaultView ? filteredCoordinators.slice(0, 3) : filteredCoordinators;

  const handleDropdownChange = (value: string) => {
    setSelectedCoordinatorId(value);
    if (value === 'all') {
      setShowAll(true);
      setSelectedFilter('All');
    } else if (value === 'default') {
      setShowAll(false);
      setSelectedFilter('All');
    } else {
      setShowAll(false);
      // Auto switch filter or keep
    }
  };

  const handleCategoryClick = (cat: string) => {
    setSelectedFilter(cat);
    setSelectedCoordinatorId('default');
    setShowAll(true); // show all within that category
  };

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

      {/* Controls: Search, Select Options Dropdown & Category Filter Tabs */}
      <div className="space-y-4 mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto">
          {/* Options Dropdown: Select all coordinators or teams directly */}
          <div className="relative w-full sm:w-72">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
              <Users className="w-4 h-4" />
            </div>
            <select
              value={selectedCoordinatorId}
              onChange={(e) => handleDropdownChange(e.target.value)}
              className="w-full bg-white border border-slate-200/90 rounded-full pl-10 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 font-bold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-2xs font-sans cursor-pointer appearance-none"
              title="Select Coordinator from Options"
            >
              <option value="default">Show Top 3 Convenors (Default)</option>
              <option value="all">View All 24 Coordinators</option>
              {Object.entries(groupedCoordinators).map(([category, coords]) => (
                <optgroup key={category} label={`── ${category} ──`}>
                  {coords.map(coord => (
                    <option key={coord.id} value={coord.id}>
                      {coord.sNo}. {coord.name} ({coord.role})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedCoordinatorId('default');
              }}
              placeholder="Search by name, department, or role..."
              className="w-full bg-white border border-slate-200/90 rounded-full pl-11 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-2xs font-sans transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs - Horizontally Scrollable on Mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? CLUB_COORDINATORS.length 
              : CLUB_COORDINATORS.filter(c => c.category === cat).length;
            const isActive = selectedFilter === cat && selectedCoordinatorId !== 'default' ? false : selectedFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
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
        <AnimatePresence>
          {displayedCoordinators.map((coord, idx) => (
            <motion.div
              key={coord.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: (idx % 6) * 0.04 }}
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
                        No. {coord.sNo}
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
        </AnimatePresence>
      </div>

      {/* Expand / View All Options Button */}
      {selectedFilter === 'All' && !searchQuery && selectedCoordinatorId === 'default' && (
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer font-sans"
          >
            <span>{showAll ? 'Show Less (Top 3)' : 'View All 24 Coordinators in Options'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <span className="text-[11px] text-slate-500 font-medium font-sans">
            {showAll ? 'Showing all 24 student coordinators' : 'Currently showing the 3 Lead & Deputy Convenors'}
          </span>
        </div>
      )}

      {/* Reset Filter Button if a single coordinator was selected */}
      {selectedCoordinatorId !== 'default' && selectedCoordinatorId !== 'all' && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setSelectedCoordinatorId('default')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Show Top 3 Convenors / Reset Selection</span>
          </button>
        </div>
      )}

      {/* Empty State */}
      {displayedCoordinators.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-slate-500 text-sm font-sans">No student coordinators found matching "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedFilter('All'); setSelectedCoordinatorId('default'); }}
            className="mt-3 text-xs text-blue-600 font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

