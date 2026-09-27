import React from 'react';
import { motion } from 'motion/react';

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md select-none font-sans px-4"
    >
      {/* Soft Ambient Pastel Glows in Background */}
      <div className="absolute w-80 h-80 rounded-full bg-blue-100/60 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-100/40 blur-2xl pointer-events-none -z-10 translate-y-16" />

      {/* Center Loader Content - Pure Typography & Cyber Monospace Loader (No Images) */}
      <div className="flex flex-col items-center justify-center text-center max-w-lg w-full space-y-7">

        {/* Bridge Club Badge & Institution Text */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-3 px-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-blue-600 font-sans">
              THE BRIDGE CLUB
            </span>
          </div>

          <h2 className="text-base sm:text-xl font-black text-slate-900 tracking-tight font-sans leading-snug">
            GOVERNMENT COLLEGE OF ENGINEERING, <br className="hidden sm:inline" />
            <span className="text-blue-600">(Formerly IRTT)</span>, ERODE
          </h2>

          <p className="text-xs font-semibold text-slate-500 font-sans">
            Students · Staff · Alumni | Learn · Grow · Build Together
          </p>
        </motion.div>

        {/* The Cyber Glyph Decoding Loader (No Images) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="py-3 px-7 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs flex items-center justify-center"
        >
          <div className="cyber-glyph-loader"></div>
        </motion.div>

        {/* Bottom subtle progress line */}
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
