import React from 'react';
import { motion } from 'motion/react';
import officialClubLogo from '../assets/images/official_club_logo.jpg';

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md select-none font-sans px-4"
    >
      {/* Soft Ambient Pastel Glows in Background */}
      <div className="absolute w-80 h-80 rounded-full bg-blue-100/60 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-100/40 blur-2xl pointer-events-none -z-10 translate-y-16" />

      {/* Center Loader Card */}
      <div className="flex flex-col items-center justify-center text-center max-w-lg w-full space-y-6">
        
        {/* Official Bridge Club Seal with Glowing Border */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-blue-600 to-indigo-700 shadow-xl shadow-blue-500/25 shrink-0 overflow-hidden ring-4 ring-blue-100/80">
            <img
              src={officialClubLogo}
              alt="The Bridge Club Official Emblem"
              className="w-full h-full object-contain rounded-full bg-white"
            />
          </div>
          {/* Subtle live radar ping */}
          <div className="absolute -inset-1 rounded-full border border-blue-400/40 animate-ping pointer-events-none" />
        </motion.div>

        {/* Bridge Club Title & Large College Name */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-2.5 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/90 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-blue-600 font-sans">
              THE BRIDGE CLUB
            </span>
          </div>

          {/* Enlarge College Name for Eye-Catching Mobile Display */}
          <h2 className="text-base sm:text-xl font-black text-slate-900 tracking-tight font-sans leading-snug">
            GOVERNMENT COLLEGE OF ENGINEERING, <br className="hidden sm:inline" />
            <span className="text-blue-600">(Formerly IRTT)</span>, ERODE
          </h2>

          <p className="text-xs font-semibold text-slate-500 font-sans">
            Students · Staff · Alumni | Learn · Grow · Build Together
          </p>
        </motion.div>

        {/* The Cyber Glyph Decoding Loader requested by user */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="py-2.5 px-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs flex flex-col items-center justify-center gap-1.5"
        >
          <div className="cyber-glyph-loader"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
            Initializing Portal
          </span>
        </motion.div>

        {/* Bottom subtle progress indicator line */}
        <div className="w-52 h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
          />
        </div>

      </div>
    </motion.div>
  );
};
