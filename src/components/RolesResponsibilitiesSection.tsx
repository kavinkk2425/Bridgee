import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Award, Compass, CheckCircle2 } from 'lucide-react';
import { CLUB_ROLES_RESPONSIBILITIES } from '../data/bridgeClubData';

const roleIcons: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  Award,
  Compass
};

export const RolesResponsibilitiesSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 scroll-mt-24" id="roles">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-150 text-violet-600 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
          <span>GOVERNANCE & RESPONSIBILITIES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
          Roles & <span className="text-violet-600">Responsibilities</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
          Four interconnected pillars working in synergy to govern, mentor, and empower the student body at GCE Erode.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {CLUB_ROLES_RESPONSIBILITIES.map((item, idx) => {
          const Icon = roleIcons[item.iconName] || Users;
          return (
            <motion.div
              key={item.roleGroup}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200/80 hover:border-violet-300 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all group relative overflow-hidden"
            >
              {/* Background gradient accent */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-violet-100/50 rounded-full blur-2xl group-hover:bg-blue-100/60 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold shadow-xs group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-violet-600 uppercase">
                      {item.roleGroup}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Points */}
                <div className="pt-2 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Pillar 0{idx + 1} Governance</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
