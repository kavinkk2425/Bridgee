import React from 'react';
import { motion } from 'motion/react';

interface AnnouncementProps {
  children: React.ReactNode;
  movingBorder?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Announcement: React.FC<AnnouncementProps> = ({
  children,
  movingBorder = true,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#07172b]/90 backdrop-blur-md border border-white/20 shadow-xl cursor-pointer group overflow-hidden ${className}`}
    >
      {movingBorder && (
        <span className="absolute inset-0 rounded-full p-[1px] overflow-hidden pointer-events-none">
          <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#f59e0b_0deg,#3b82f6_180deg,#f59e0b_360deg)] opacity-70 animate-[spin_4s_linear_infinite]" />
        </span>
      )}
      <div className="relative z-10 flex items-center gap-2 sm:gap-3 text-xs">
        {children}
      </div>
    </div>
  );
};

export const AnnouncementTag: React.FC<{ children: React.ReactNode; lustre?: boolean }> = ({
  children,
  lustre = true
}) => {
  return (
    <span className="relative inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] tracking-wider uppercase shrink-0 shadow-xs">
      {lustre && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
      )}
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export const AnnouncementTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="font-bold text-slate-100 group-hover:text-amber-300 transition-colors flex items-center gap-1.5 text-[10px] sm:text-xs">
      {children}
    </span>
  );
};
