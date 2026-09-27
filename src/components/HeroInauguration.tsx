import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Eye, X, ArrowRight, ChevronDown, Handshake, TrendingUp, Network, CheckCircle2, Award, Bookmark, Calendar, Clock, MapPin } from 'lucide-react';
import { OFFICIAL_POSTER_INFO, SURVEY_DATA } from '../data/bridgeClubData';

const ROTATING_CLUB_TITLES = [
  { text: 'Bridge Club', highlight: 'from-blue-600 via-blue-500 to-indigo-600', tag: 'Official Name' },
  { text: 'Alumni Network', highlight: 'from-blue-600 via-indigo-600 to-purple-600', tag: 'Alumni-Student Nexus' },
  { text: 'Mentorship Hub', highlight: 'from-blue-600 via-sky-600 to-indigo-600', tag: '1-on-1 Guidance' },
  { text: 'Career Gateway', highlight: 'from-indigo-600 via-blue-600 to-teal-600', tag: 'Placements & Future' },
  { text: 'Innovation Circle', highlight: 'from-blue-600 via-indigo-500 to-blue-700', tag: 'Industry Readiness' },
];

interface HeroInaugurationProps {
  onNavigateToFlow: () => void;
  onNavigateToRoles: () => void;
  onNavigateToCoordinators: () => void;
  onNavigateToSurvey: () => void;
  posterLightboxOpen: boolean;
  setPosterLightboxOpen: (open: boolean) => void;
}

export const HeroInauguration: React.FC<HeroInaugurationProps> = ({
  onNavigateToFlow,
  onNavigateToRoles,
  onNavigateToCoordinators,
  onNavigateToSurvey,
  posterLightboxOpen,
  setPosterLightboxOpen
}) => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_CLUB_TITLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const whyIcons = [Users, Handshake, TrendingUp, Network];

  return (
    <div className="space-y-16 sm:space-y-24 pt-4 sm:pt-8 pb-8 overflow-hidden scroll-mt-24" id="about">

      {/* ========================================================================= */}
      {/* HERO SECTION - THE BRIDGE CLUB */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Soft Ambient Pastel Glows in Background */}
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Floating 3D Pastel Spheres */}
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          className="hidden sm:block absolute bottom-10 left-4 w-9 h-9 rounded-full sphere-3d-purple -z-10 opacity-90"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
          className="hidden sm:block absolute top-8 left-1/2 -translate-x-16 w-7 h-7 rounded-full sphere-3d-blue -z-10 opacity-80"
        />

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* LEFT COLUMN: Typography & CTAs with Staggered Motion */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5 sm:space-y-7 text-left w-full"
          >
            {/* Kicker Tag with Official Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 max-w-full"
            >
              <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-blue-600 to-indigo-700 shadow-sm shrink-0 overflow-hidden">
                <img
                  src={OFFICIAL_POSTER_INFO.logoImage}
                  alt="Official Bridge Club Logo"
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.14em] sm:tracking-[0.18em] text-blue-600 uppercase font-sans break-words">
                GOVERNMENT COLLEGE OF ENGINEERING, ERODE
              </span>
            </motion.div>

            {/* Dynamic Headline with Animated Professional Club Titles */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="text-3xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans"
              >
                THE <br />
                <span className="relative inline-flex items-center min-h-[1.2em] sm:min-h-[1.25em] overflow-visible">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIndex}
                      initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -24, opacity: 0, filter: 'blur(8px)' }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${ROTATING_CLUB_TITLES[titleIndex].highlight} drop-shadow-xs pb-1`}
                    >
                      {ROTATING_CLUB_TITLES[titleIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              {/* Interactive micro-indicators for rotating title */}
              <div className="flex items-center gap-2 pt-0.5">
                <div className="flex items-center gap-1.5">
                  {ROTATING_CLUB_TITLES.map((item, idx) => (
                    <button
                      key={item.text}
                      onClick={() => setTitleIndex(idx)}
                      title={`Switch title to: THE ${item.text}`}
                      aria-label={`Switch title to THE ${item.text}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === titleIndex
                        ? 'w-7 bg-blue-600'
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400 font-sans tracking-wide">
                  • {ROTATING_CLUB_TITLES[titleIndex].tag}
                </span>
              </div>
            </div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed font-sans break-words"
            >
              {OFFICIAL_POSTER_INFO.mission}
            </motion.p>

            {/* Motto Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 w-full sm:w-auto"
            >
              <div className="flex items-center gap-1.5 text-blue-600 font-bold font-sans">
                <Bookmark className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Motto: {OFFICIAL_POSTER_INFO.motto}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <div className="text-slate-500 font-medium font-sans text-[11px] sm:text-xs">
                {OFFICIAL_POSTER_INFO.subMotto}
              </div>
            </motion.div>

            {/* Action Buttons - 2-Column on Mobile, Inline on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto pt-1"
            >
              <button
                onClick={onNavigateToFlow}
                className="btn-pill-primary text-xs sm:text-sm tracking-wide cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-8 py-3.5 shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto font-sans font-bold"
              >
                <span>How It Works</span>
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={onNavigateToCoordinators}
                className="btn-pill-outline text-xs sm:text-sm tracking-wide cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-7 py-3.5 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto font-sans font-bold"
              >
                <span>Coordinators</span>
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
              </button>
            </motion.div>

            {/* Event Details Quick Strip - Stacked on Mobile with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-slate-50 border border-blue-150/80 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 sm:gap-4 text-xs font-sans w-full"
            >
              <div className="flex items-center gap-2 font-bold text-blue-900">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <span>28th Sep (Monday)</span>
              </div>
              <span className="text-blue-200 hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>9.30 AM – 12.30 PM</span>
              </div>
              <span className="text-blue-200 hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="truncate">AUDITORIUM, GCE Erode</span>
              </div>
            </motion.div>

            {/* Trust Badges - 3 Equal Balanced Columns on Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-1 grid grid-cols-3 gap-1.5 sm:gap-3 sm:flex sm:flex-wrap text-[11px] sm:text-xs font-semibold text-slate-600 font-sans w-full"
            >
              <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 py-1.5 px-2 rounded-xl bg-slate-100/60 sm:bg-transparent border border-slate-200/60 sm:border-0 text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">Students Lead</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 py-1.5 px-2 rounded-xl bg-slate-100/60 sm:bg-transparent border border-slate-200/60 sm:border-0 text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="truncate">Staff Support</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 py-1.5 px-2 rounded-xl bg-slate-100/60 sm:bg-transparent border border-slate-200/60 sm:border-0 text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                <span className="truncate">Alumni Doors</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Official Poster Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col justify-center items-center relative w-full pt-4 lg:pt-0"
          >
            {/* Official Poster Card */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border-2 border-blue-100 shadow-[0_15px_40px_rgba(37,99,235,0.12)]">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50">
                  <img
                    src={OFFICIAL_POSTER_INFO.posterImage}
                    alt="Official Bridge Club Event Poster"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Poster Caption Label */}
                <div className="pt-2.5 px-1 text-center text-xs font-bold text-slate-600 font-sans tracking-wide">
                  Official Club Event Poster
                </div>
              </div>

              {/* Floating Glassmorphic Pill Badges (hidden on small mobile to prevent any overflow) */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 z-20 bg-white/95 backdrop-blur-md border border-blue-200/90 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-2 hidden sm:flex"
              >
                <span className="text-base">🎉</span>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 font-sans">Official Inauguration</div>
                  <div className="text-[9px] text-blue-600 font-semibold font-sans">28th Sep (Mon)</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-3 -left-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-2 hidden sm:flex"
              >
                <span className="text-base">📍</span>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 font-sans">Auditorium</div>
                  <div className="text-[9px] text-slate-500 font-sans">GCE Erode</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* WHY THIS CLUB - 4 PILLARS */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OFFICIAL_POSTER_INFO.whyThisClub.map((item, idx) => {
            const Icon = whyIcons[idx] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={onNavigateToFlow}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all cursor-pointer space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-sans">
                  {item.title}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {item.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  <span>Learn how it works</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* STUDENT VOICE SURVEY HIGHLIGHT */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24"
        id="survey-highlight"
      >
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider font-sans">
                <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Student Voice Survey Insights</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Driven by 555+ Student Responses
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-sans">
                The Bridge Club programs are built on empirical feedback gathered directly from undergraduate students across all engineering branches.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">51.5%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold font-sans">Career Direction</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">41.4%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold font-sans">1:1 Mock Interviews</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">41.1%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold font-sans">Job Referrals</div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onNavigateToSurvey}
                  className="px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 font-sans w-full sm:w-auto"
                >
                  <span>Explore Full Survey Data</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 space-y-3">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-wider font-sans">
                  Top Student Priorities
                </div>
                {SURVEY_DATA.slice(0, 4).map((item, idx) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="font-semibold text-slate-200">{item.shortTitle}</span>
                      <span className="font-mono text-amber-400">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-blue-400 to-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* OFFICIAL POSTER LIGHTBOX */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {posterLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 relative max-h-[92vh] overflow-y-auto shadow-2xl space-y-4"
            >
              <button
                onClick={() => setPosterLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1">
                <div className="text-xs font-bold tracking-widest text-blue-600 uppercase font-sans">
                  Government College of Engineering Erode
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans">
                  Official Bridge Club Event Poster
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                <img
                  src={OFFICIAL_POSTER_INFO.posterImage}
                  alt="Official Bridge Club Event Poster"
                  className="w-full h-auto object-contain max-h-[70vh] mx-auto"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-500 font-sans">Government College of Engineering, Erode</span>
                <button
                  onClick={() => setPosterLightboxOpen(false)}
                  className="btn-pill-primary text-xs tracking-wider uppercase px-6 py-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
