import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  MapPin,
  Maximize2
} from 'lucide-react';

// The Official Inauguration Function & Team Photo
import inaugurationTeamImg from '../assets/images/inauguration_team_group.jpg';

export const OurTeamSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  return (
    <section
      id="team"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20 overflow-hidden"
    >
      {/* Decorative Ambient Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs"
        >
          <span>Our Team & Inauguration</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
        >
          Moments of <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Inauguration</span> & The Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          The official inauguration group photo featuring our esteemed faculty patrons, dignitaries, staff, student convenors, and coordinators of Government College of Engineering, Erode.
        </motion.p>
      </div>

      {/* SINGLE COMPLETE MASTER INAUGURATION PHOTO WITH SHADOW & GLOW */}
      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-4">
        {/* Ambient Backlight Halo Glow */}
        <div className="absolute -inset-3 sm:-inset-8 bg-gradient-to-r from-blue-600/30 via-indigo-600/25 to-purple-600/30 rounded-3xl sm:rounded-4xl blur-2xl sm:blur-3xl opacity-85 sm:opacity-100 pointer-events-none -z-10 transition-all duration-500" />

        {/* Master Image Frame Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl transition-all duration-500 hover:border-blue-400 group"
          style={{
            boxShadow: '0 25px 70px -12px rgba(37, 99, 235, 0.35), 0 0 45px 5px rgba(99, 102, 241, 0.22)'
          }}
        >
          {/* Main Official Image - 100% Clean & Completely Unobstructed */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-16/9 w-full overflow-hidden bg-slate-950 cursor-pointer flex items-center justify-center"
          >
            <img
              src={inaugurationTeamImg}
              alt="Bridge Club Inauguration Function Team Photo"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              loading="eager"
            />

            {/* Top of Photo: Bridge-Club Badge */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-none">
              <div className="inline-flex items-center px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white border border-blue-400/50 text-[11px] sm:text-sm font-black shadow-lg shadow-blue-900/50">
                <span className="tracking-wider uppercase font-sans">Bridge-Club</span>
              </div>
            </div>

            {/* Click to Zoom Overlay Indicator on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-950/20 backdrop-blur-xs pointer-events-none">
              <div className="px-5 py-2.5 rounded-full bg-white/95 text-blue-900 font-black text-xs sm:text-sm flex items-center gap-2 shadow-2xl shadow-blue-950/60 transform group-hover:scale-105 transition-transform">
                <Maximize2 className="w-4 h-4 text-blue-600" />
                <span>Click to View Full Resolution</span>
              </div>
            </div>
          </div>

          {/* Details Card Below the Photo - Professional, Clean & Easy to Read on Phone and Windows */}
          <div className="p-5 sm:p-7 lg:p-8 bg-gradient-to-b from-white to-slate-50/60 border-t border-slate-100 space-y-3 sm:space-y-4">
            {/* Clean Metadata Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50/90 text-blue-800 border border-blue-150/70 font-bold text-xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>GCE Erode Main Auditorium</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50/90 text-amber-800 border border-amber-200/70 font-bold text-xs">
                <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Inaugural Ceremony</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              The Bridge Club Inauguration & Executive Team
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl font-normal">
              Grand inauguration commemorative gathering with our Principal, faculty advisors, alumni mentors, student convenors, and coordinators standing united to bridge academics with industry excellence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL FOR FULL RESOLUTION PREVIEW */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-blue-500/20 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image - Natural Fit with Zero Black Gap */}
              <div className="relative w-full flex items-center justify-center overflow-hidden bg-slate-950">
                <img
                  src={inaugurationTeamImg}
                  alt="Bridge Club Inauguration Function Team Photo"
                  className="w-full h-auto max-h-[75vh] object-contain block"
                />
              </div>

              {/* Caption & Metadata in Modal */}
              <div className="p-6 sm:p-8 bg-slate-900/95 space-y-3 border-t border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs font-black tracking-wider uppercase">
                    Bridge-Club
                  </span>

                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      GCE Erode Main Auditorium
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Inaugural Ceremony
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  The Bridge Club Inauguration & Executive Team
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Grand inauguration commemorative gathering with our Principal, faculty advisors, alumni mentors, student convenors, and coordinators standing united to bridge academics with industry excellence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
