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
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md select-none font-sans"
    >
      {/* Ambient background glows */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-100/60 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute w-60 h-60 rounded-full bg-indigo-100/40 blur-2xl pointer-events-none -z-10 translate-y-12" />

      {/* Center Loader Container */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
        
        {/* Custom Animated Pegtop Flow Loader */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="pegtop-loader">
            {/* SVG 1 */}
            <svg
              id="pegtopone"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <defs>
                <filter id="shine-one">
                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                </filter>
                <mask id="mask-one">
                  <path
                    d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                    fill="white"
                  ></path>
                </mask>
                <radialGradient
                  id="gradient-1-one"
                  cx="50"
                  cy="66"
                  fx="50"
                  fy="66"
                  r="30"
                  gradientTransform="translate(0 35) scale(1 0.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="gradient-2-one"
                  cx="55"
                  cy="20"
                  fx="55"
                  fy="20"
                  r="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="gradient-3-one"
                  cx="85"
                  cy="50"
                  fx="85"
                  fy="50"
                  href="#gradient-2-one"
                ></radialGradient>
                <radialGradient
                  id="gradient-4-one"
                  cx="50"
                  cy="58"
                  fx="50"
                  fy="58"
                  r="60"
                  gradientTransform="translate(0 47) scale(1 0.2)"
                  href="#gradient-3-one"
                ></radialGradient>
                <linearGradient
                  id="gradient-5-one"
                  x1="50"
                  y1="90"
                  x2="50"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
                  <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-1-one)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="none"
                  stroke="white"
                  opacity="0.3"
                  strokeWidth="3"
                  filter="url(#shine-one)"
                  mask="url(#mask-one)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-2-one)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-3-one)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-4-one)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-5-one)"
                ></path>
              </g>
            </svg>

            {/* SVG 2 */}
            <svg
              id="pegtoptwo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <defs>
                <filter id="shine-two">
                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                </filter>
                <mask id="mask-two">
                  <path
                    d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                    fill="white"
                  ></path>
                </mask>
                <radialGradient
                  id="gradient-1-two"
                  cx="50"
                  cy="66"
                  fx="50"
                  fy="66"
                  r="30"
                  gradientTransform="translate(0 35) scale(1 0.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="gradient-2-two"
                  cx="55"
                  cy="20"
                  fx="55"
                  fy="20"
                  r="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="gradient-3-two"
                  cx="85"
                  cy="50"
                  fx="85"
                  fy="50"
                  href="#gradient-2-two"
                ></radialGradient>
                <radialGradient
                  id="gradient-4-two"
                  cx="50"
                  cy="58"
                  fx="50"
                  fy="58"
                  r="60"
                  gradientTransform="translate(0 47) scale(1 0.2)"
                  href="#gradient-3-two"
                ></radialGradient>
                <linearGradient
                  id="gradient-5-two"
                  x1="50"
                  y1="90"
                  x2="50"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
                  <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-1-two)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="none"
                  stroke="white"
                  opacity="0.3"
                  strokeWidth="3"
                  filter="url(#shine-two)"
                  mask="url(#mask-two)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-2-two)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-3-two)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-4-two)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-5-two)"
                ></path>
              </g>
            </svg>

            {/* SVG 3 */}
            <svg
              id="pegtopthree"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <defs>
                <filter id="shine-three">
                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                </filter>
                <mask id="mask-three">
                  <path
                    d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                    fill="white"
                  ></path>
                </mask>
                <radialGradient
                  id="gradient-1-three"
                  cx="50"
                  cy="66"
                  fx="50"
                  fy="66"
                  r="30"
                  gradientTransform="translate(0 35) scale(1 0.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="gradient-2-three"
                  cx="55"
                  cy="20"
                  fx="55"
                  fy="20"
                  r="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="gradient-3-three"
                  cx="85"
                  cy="50"
                  fx="85"
                  fy="50"
                  href="#gradient-2-three"
                ></radialGradient>
                <radialGradient
                  id="gradient-4-three"
                  cx="50"
                  cy="58"
                  fx="50"
                  fy="58"
                  r="60"
                  gradientTransform="translate(0 47) scale(1 0.2)"
                  href="#gradient-3-three"
                ></radialGradient>
                <linearGradient
                  id="gradient-5-three"
                  x1="50"
                  y1="90"
                  x2="50"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
                  <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-1-three)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="none"
                  stroke="white"
                  opacity="0.3"
                  strokeWidth="3"
                  filter="url(#shine-three)"
                  mask="url(#mask-three)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-2-three)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-3-three)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-4-three)"
                ></path>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-5-three)"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        {/* Club Emblem & Text */}
        <div className="space-y-2 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <img
              src={officialClubLogo}
              alt="Bridge Club Emblem"
              className="w-4 h-4 rounded-full object-contain"
            />
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 font-sans">
              THE BRIDGE CLUB
            </span>
          </div>

          <p className="text-xs font-bold text-slate-800 tracking-tight font-sans">
            Government College of Engineering, (Formerly IRTT), Erode
          </p>
          <p className="text-[11px] font-semibold text-slate-400 font-sans">
            Learn · Grow · Build Together
          </p>
        </div>

      </div>
    </motion.div>
  );
};
