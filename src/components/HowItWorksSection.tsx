import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ClipboardCheck, UserCheck, Video, Award, ArrowRight } from 'lucide-react';
import { OFFICIAL_POSTER_INFO } from '../data/bridgeClubData';

const stepIcons = [HelpCircle, ClipboardCheck, UserCheck, Video, Award];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 scroll-mt-24" id="flow">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-150 text-blue-600 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
          <span>OPERATIONAL FLOW & PROCESS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
          How <span className="text-blue-600">The Bridge Club</span> Works
        </h2>
        <p className="text-xs sm:text-base text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
          From identifying student needs to 1:1 alumni mentorship and placement referrals — a structured journey designed for maximum career impact.
        </p>
      </div>

      {/* Official Poster 3-Stage Engagement Model */}
      <div className="mb-10 sm:mb-12 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/70 to-indigo-50/80 border border-blue-100 shadow-2xs">
        <div className="text-center md:text-left mb-5 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2.5 border-b border-blue-150/70 pb-3 sm:pb-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-blue-600 font-sans">
              Official Club Framework
            </span>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 font-sans">
              Core 3-Step Engagement Model
            </h3>
          </div>
          <div className="text-[11px] sm:text-xs font-semibold text-slate-600 italic bg-white/80 px-3.5 py-1.5 rounded-full border border-blue-100 font-sans self-center md:self-auto">
            ✨ "Ideas, questions, connect and support — let's build our future together!"
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
              1
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 font-sans">Prepare</h4>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Students identify a real need, career gap, or skill target.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
              2
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 font-sans">Connect</h4>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Bring it to the club through student leaders and the digital portal.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
              3
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 font-sans">Guide</h4>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Staff and alumni support and point outward toward industry excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Step Connected Flow Cards */}
      <div className="relative">
        {/* Connecting Line (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300 -translate-y-12 -z-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {OFFICIAL_POSTER_INFO.howItWorks.map((item, idx) => {
            const Icon = stepIcons[idx] || HelpCircle;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200/80 hover:border-blue-400 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all relative group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    0{item.step}
                  </span>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-blue-600">
                  <span>Step {item.step} Goal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
