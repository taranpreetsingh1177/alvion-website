import React from "react";

export const InternshipIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-500`}
        >
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(2deg); }
        }
        @keyframes tassel-swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-5deg); }
        }
        .group:hover .cap-body {
          animation: float 2s ease-in-out infinite;
        }
        .group:hover .tassel-string {
          animation: tassel-swing 1s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
            
            {/* Cap Top (Diamond) */}
            <path 
                d="M32 10L6 24L32 38L58 24L32 10Z" 
                fill="#1e293b" 
                stroke="#475569" 
                strokeWidth="2"
                className="cap-body transition-colors duration-300 group-hover:fill-[#0f172a] group-hover:stroke-blue-500/50"
            />
            
            {/* Cap Side */}
            <path 
                d="M58 24V28C58 28 58 46 32 46C6 46 6 28 6 28V24" 
                fill="#1e293b" 
                stroke="#475569" 
                strokeWidth="2"
                className="cap-body transition-colors duration-300 group-hover:fill-[#0f172a] group-hover:stroke-blue-500/50"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} // Simple clip
            />

            {/* Cap Bottom Rim Highlight (depth) */}
             <path 
                d="M32 38L6 24M32 38L58 24" 
                stroke="#334155" 
                strokeWidth="1"
                className="cap-body opacity-50"
            />

            {/* Tassel Button */}
            <circle cx="32" cy="24" r="3" fill="#3b82f6" className="cap-body" />

            {/* Tassel */}
            <g className="tassel-string" style={{ transformOrigin: "32px 24px" }}>
                <path d="M32 24L50 36" stroke="#fbbf24" strokeWidth="2" />
                <circle cx="50" cy="36" r="3" fill="#fbbf24" />
                {/* Tassel Threads */}
                <path d="M50 36L46 44" stroke="#fbbf24" strokeWidth="1.5" />
                <path d="M50 36L50 45" stroke="#fbbf24" strokeWidth="1.5" />
                <path d="M50 36L54 44" stroke="#fbbf24" strokeWidth="1.5" />
            </g>

            {/* "Loading" / "Temporary" Indicator dots below */}
            <g className="group-hover:opacity-100 opacity-60 transition-opacity duration-300">
                <circle cx="24" cy="56" r="2" fill="#475569" className="group-hover:fill-blue-500 animate-pulse" style={{ animationDelay: '0s' }} />
                <circle cx="32" cy="56" r="2" fill="#475569" className="group-hover:fill-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <circle cx="40" cy="56" r="2" fill="#475569" className="group-hover:fill-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </g>
        </svg>
    );
};
