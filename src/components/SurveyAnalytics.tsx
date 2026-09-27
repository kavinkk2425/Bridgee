import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SURVEY_DATA, SurveyOption } from '../data/bridgeClubData';
import { BarChart3, Compass, Video, Briefcase, FileText, GraduationCap, MessageSquare, Target, ArrowRight, Award } from 'lucide-react';

interface SurveyAnalyticsProps {
  onSelectProgram: (programId: string) => void;
  onNavigateToMentors: () => void;
}

export const SurveyAnalytics: React.FC<SurveyAnalyticsProps> = ({
  onSelectProgram,
  onNavigateToMentors
}) => {
  const [selectedOption, setSelectedOption] = useState<SurveyOption>(SURVEY_DATA[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Video': return <Video className="w-5 h-5 text-blue-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-blue-600" />;
      default: return <Target className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="space-y-8 sm:space-y-12 py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24" id="survey">
      
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-12 shadow-sm"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 font-sans">
            <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
            <span>Official Survey Insights · Student Voice Data</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Student Voice Survey Insights
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-500 leading-relaxed font-sans">
            Prior to launching Bridge Club, an in-depth survey was conducted with undergraduate engineering students. These empirical results form the strategic baseline for our inaugural programs.
          </p>
        </div>

        {/* Unboxed Metadata Row */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-500 pt-4 sm:pt-6 border-t border-slate-150 font-sans">
          <span>Focus: <strong className="text-slate-900 font-semibold">Student Career Priorities</strong></span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>#1 Ranked Choice: <strong className="text-blue-600 font-bold">Career Direction (51.5%)</strong></span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Audience: <strong className="text-slate-800">Undergraduate Engineering</strong></span>
        </div>
      </motion.div>

      {/* Main Responsive Grid with Scroll Animation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Chart Bar List */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-sm font-sans"
        >
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-150">
            <h3 className="text-xs font-bold tracking-wider text-slate-700 uppercase">
              Survey Results Breakdown
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">Select item to view program plan</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {SURVEY_DATA.map((item, idx) => {
              const isSelected = selectedOption.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedOption(item)}
                  className={`cursor-pointer p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-blue-50/50 border-blue-500 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs sm:text-sm">
                    <span className={`font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                      {item.title}
                    </span>
                    <span className="font-mono font-bold text-slate-900 shrink-0">
                      {item.votes} <span className="text-slate-500 font-normal">({item.percentage}%)</span>
                    </span>
                  </div>

                  <div className="w-full bg-slate-150 rounded-full h-3 overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.05 }}
                      className={`h-full rounded-full ${
                        isSelected ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-400'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-150 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Qualitative feedback received:</p>
            <p>Clear milestones, industry mentorship, off-campus interview guidance, ATS resume reviews, GATE and higher studies prep.</p>
          </div>
        </motion.div>

        {/* Right Deep-Dive Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-sm lg:sticky lg:top-28 font-sans"
        >
          <div className="flex items-center gap-3 pb-3 sm:pb-4 border-b border-slate-150">
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 shrink-0">
              {getIcon(selectedOption.iconName)}
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase font-sans">
                Inaugural Solution
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-sans">
                {selectedOption.shortTitle}
              </h3>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 flex items-center justify-between font-sans">
            <div>
              <div className="text-2xl font-extrabold font-mono text-blue-600">
                {selectedOption.votes}
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Student Votes</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold font-mono text-slate-900">
                {selectedOption.percentage}%
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Preference Share</div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1 font-sans">
              Survey Analysis
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {selectedOption.description}
            </p>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-2xl font-sans">
            <div className="text-[10px] font-bold tracking-wider text-blue-700 uppercase mb-1 flex items-center gap-1.5 font-sans">
              <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              Bridge Club Action Plan
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 font-sans">
              {selectedOption.actionableProgram}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => onSelectProgram(selectedOption.id)}
              className="flex-1 py-3 px-4 rounded-full text-xs font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 uppercase cursor-pointer shadow-md shadow-blue-500/20 font-sans"
            >
              <span>Explore Operational Flow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNavigateToMentors}
              className="py-3 px-4 rounded-full text-xs font-bold tracking-wider text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-sans"
            >
              <span>Coordinators</span>
            </button>
          </div>

        </motion.div>

      </div>

    </section>
  );
};
