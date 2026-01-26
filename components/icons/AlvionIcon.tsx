import React from "react";

export const AlvionIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-500`}
        >
            <style>{`
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.5)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); transform: scale(1.05); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .group:hover .shield-glow {
            animation: pulse-glow 2s ease-in-out infinite;
        }
        .group:hover .orbit-dot {
            animation: orbit 4s linear infinite;
            transform-origin: 32px 32px;
        }
      `}</style>
            
            {/* Outer Ring / Orbit Path */}
            <circle cx="32" cy="32" r="28" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" className="group-hover:opacity-60 transition-opacity duration-500" />
            
            {/* Shield Body */}
            <path 
                d="M32 6L14 14V30C14 42.2 21.6 53.4 32 58C42.4 53.4 50 42.2 50 30V14L32 6Z" 
                fill="url(#paint1_linear)" 
                stroke="#60a5fa" 
                strokeWidth="2"
                className="shield-glow transition-all duration-300"
            />
            
            {/* Checkmark */}
            <path 
                d="M24 32L30 38L40 24" 
                stroke="white" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="shield-glow"
            />

            {/* Orbiting Dot */}
            <g className="orbit-dot">
                <circle cx="32" cy="4" r="3" fill="#60a5fa" filter="url(#glow)" />
            </g>

            <defs>
                <linearGradient id="paint0_linear" x1="4" y1="32" x2="60" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="32" y1="6" x2="32" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1e3a8a" />
                    <stop offset="1" stopColor="#172554" />
                </linearGradient>
                <filter id="glow" x="-2" y="-2" width="12" height="12" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                </filter>
            </defs>
        </svg>
    );
};
