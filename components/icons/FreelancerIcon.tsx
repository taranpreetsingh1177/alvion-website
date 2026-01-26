import React from "react";

export const FreelancerIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-500`}
        >
             <style>{`
        @keyframes typing {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes flicker {
           0%, 100% { opacity: 1; }
           50% { opacity: 0.3; }
           70% { opacity: 1; }
           80% { opacity: 0.5; }
        }
        .group:hover .key-1 { animation: typing 0.5s infinite; animation-delay: 0s; }
        .group:hover .key-2 { animation: typing 0.6s infinite; animation-delay: 0.1s; }
        .group:hover .key-3 { animation: typing 0.4s infinite; animation-delay: 0.2s; }
        
        .group:hover .wifi-bar { animation: flicker 2s infinite; }
      `}</style>

            {/* Laptop Base */}
            <path 
                d="M4 52H60C61.1046 52 62 52.8954 62 54V56H2V54C2 52.8954 2.89543 52 4 52Z" 
                fill="#334155" 
                className="group-hover:fill-slate-600 transition-colors"
            />
            
            {/* Screen Bezel */}
            <rect 
                x="8" y="10" width="48" height="38" rx="2" 
                fill="#1e293b" 
                stroke="#334155" 
                strokeWidth="2" 
            />

            {/* Screen Content Area */}
            <rect 
                x="11" y="13" width="42" height="32" 
                fill="#0f172a" 
                className="group-hover:fill-[#020617] transition-colors"
            />

            {/* Webcam */}
            <circle cx="32" cy="11.5" r="1" fill="#475569" />

            {/* Coffee Cup (Freelancer vibe) */}
            <path 
                d="M54 50V46C54 46 58 46 58 48C58 50 54 50 54 50Z" 
                fill="#cbd5e1" 
                className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
             <path 
                d="M48 46H54V52H48V46Z" 
                fill="#e2e8f0" 
                className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Steam */}
            <path d="M50 42C50 42 52 40 50 38" stroke="white" strokeWidth="1" strokeLinecap="round" className="opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />


            {/* Code Lines on Screen */}
            <rect x="14" y="18" width="16" height="2" rx="1" fill="#3b82f6" opacity="0.8" />
            <rect x="14" y="24" width="24" height="2" rx="1" fill="#475569" opacity="0.6" />
            <rect x="14" y="28" width="20" height="2" rx="1" fill="#475569" opacity="0.6" />
            <rect x="14" y="32" width="10" height="2" rx="1" fill="#475569" opacity="0.6" />
            
            {/* "Typing" keys activity visualization (floating above keyboard area implicity or on screen) */}
            <rect x="16" y="24" width="2" height="2" fill="white" className="key-1 opacity-0" />
            <rect x="22" y="24" width="2" height="2" fill="white" className="key-2 opacity-0" />
            <rect x="28" y="24" width="2" height="2" fill="white" className="key-3 opacity-0" />

            {/* Unstable Connection Symbol */}
            <g transform="translate(44, 18)" className="wifi-bar">
                 <path d="M0 8 L2 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                 <path d="M4 8 L6 4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                 <path d="M8 8 L10 2" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            </g>
        </svg>
    );
};
