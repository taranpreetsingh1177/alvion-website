import React from "react";

export const TraditionalFirmIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-500`}
        >
            <style>{`
        @keyframes shake-rigid {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(1px, 1px) rotate(1deg); }
          50% { transform: translate(-1px, -1px) rotate(-1deg); }
          75% { transform: translate(1px, -1px) rotate(0deg); }
        }
        @keyframes light-flicker {
          0%, 100% { fill: #fef08a; opacity: 1; } /* Yellow-200ish */
          30% { fill: #facc15; opacity: 0.6; }
          60% { fill: #3b82f6; opacity: 0.3; } /* Flickers cold blue */
          70% { fill: #3b82f6; opacity: 0.9; }
        }
        /* Randomized delays for windows */
        .window-light {
             animation: light-flicker 4s infinite alternate;
        }
        .w-d-1 { animation-delay: 0.1s; }
        .w-d-2 { animation-delay: 0.5s; }
        .w-d-3 { animation-delay: 1.2s; }
        .w-d-4 { animation-delay: 2.0s; }
        
        .group:hover .main-building {
          animation: shake-rigid 0.5s linear infinite;
        }
      `}</style>
            
            {/* Base */}
            <rect x="4" y="56" width="56" height="4" rx="1" fill="#475569" />

            {/* Main Building Body */}
            <rect 
                x="20" y="12" width="24" height="44" 
                fill="#cbd5e1" 
                stroke="#1e293b" 
                strokeWidth="2"
                className="main-building"
            />
             <path d="M20 12 L32 4 L44 12" fill="#94a3b8" stroke="#1e293b" strokeWidth="2" className="main-building" />

            {/* Side Buildings */}
            <rect 
                x="8" y="24" width="12" height="32" 
                fill="#94a3b8" 
                stroke="#1e293b" 
                strokeWidth="2"
            />
             <rect 
                x="44" y="24" width="12" height="32" 
                fill="#94a3b8" 
                stroke="#1e293b" 
                strokeWidth="2"
            />

            {/* Windows (Blue by default per theme, flicker on hover) */}
            <rect x="24" y="18" width="6" height="6" fill="#1e3a8a" className="window-light w-d-1" />
            <rect x="34" y="18" width="6" height="6" fill="#1e3a8a" className="window-light w-d-2" />
            
            <rect x="24" y="28" width="6" height="6" fill="#1e3a8a" className="window-light w-d-3" />
            <rect x="34" y="28" width="6" height="6" fill="#1e3a8a" className="window-light w-d-4" />
            
            <rect x="24" y="38" width="6" height="6" fill="#1e3a8a" className="window-light w-d-1" />
            <rect x="34" y="38" width="6" height="6" fill="#1e3a8a" className="window-light w-d-2" />
            
            <rect x="24" y="48" width="16" height="8" fill="#1e293b" /> {/* Door */}

            {/* Gears/Cogwheels overlaying to show "Structure" */}
            <g className="group-hover:opacity-100 opacity-0 transition-opacity duration-1000 main-building">
                <circle cx="56" cy="16" r="6" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" />
                 <circle cx="8" cy="16" r="4" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" />
            </g>
        </svg>
    );
};
