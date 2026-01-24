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
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .group:hover .antenna {
          animation: wiggle 0.5s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .group:hover .side-building {
          animation: subtle-bounce 1s ease-in-out infinite;
        }
        /* Stagger side buildings */
        .group:hover .side-building-left { animation-delay: 0s; }
        .group:hover .side-building-right { animation-delay: 0.1s; }
      `}</style>

            {/* Base - Anchored */}
            <path
                d="M4 56H60C61.1046 56 62 56.8954 62 58V60C62 61.1046 61.1046 62 60 62H4C2.89543 62 2 61.1046 2 60V58C2 56.8954 2.89543 56 4 56Z"
                fill="#BBE6F6"
                stroke="#234B76"
                strokeWidth="3"
                strokeLinejoin="round"
            />

            {/* Center Building */}
            <rect
                x="20"
                y="12"
                width="24"
                height="44"
                fill="#BBE6F6"
                stroke="#234B76"
                strokeWidth="3"
                className="group-hover:fill-[#dbeff9] transition-colors duration-300"
            />

            {/* Roof Detail */}
            <path
                d="M26 12V8C26 6.89543 26.8954 6 28 6H36C37.1046 6 38 6.89543 38 8V12"
                fill="#BBE6F6"
                stroke="#234B76"
                strokeWidth="3"
            />
            {/* Antenna */}
            <line x1="32" y1="6" x2="32" y2="2" stroke="#234B76" strokeWidth="3" strokeLinecap="round" className="antenna origin-bottom" />


            {/* Side Buildings */}
            <rect
                x="8"
                y="20"
                width="12"
                height="36"
                fill="#BBE6F6"
                stroke="#234B76"
                strokeWidth="3"
                className="side-building side-building-left group-hover:fill-[#dbeff9] transition-colors duration-300"
            />
            <rect
                x="44"
                y="20"
                width="12"
                height="36"
                fill="#BBE6F6"
                stroke="#234B76"
                strokeWidth="3"
                className="side-building side-building-right group-hover:fill-[#dbeff9] transition-colors duration-300"
            />

            {/* Side Building Windows (Left) - Lights turn on top to bottom */}
            <g className="side-building side-building-left">
                <rect x="11" y="24" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[100ms]" />
                <rect x="11" y="33" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[200ms]" />
                <rect x="11" y="42" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[300ms]" />
                <rect x="11" y="51" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[400ms]" />
            </g>

            {/* Side Building Windows (Right) - Lights turn on bottom to top */}
            <g className="side-building side-building-right">
                <rect x="47" y="24" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[400ms]" />
                <rect x="47" y="33" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[300ms]" />
                <rect x="47" y="42" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[200ms]" />
                <rect x="47" y="51" width="6" height="6" stroke="#234B76" strokeWidth="2.5" fill="#8ACFF2" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[100ms]" />
            </g>

            {/* Center Building Windows - Random lights */}
            <rect x="24" y="17" width="16" height="5" stroke="#234B76" strokeWidth="2.5" fill="#FFFFFF" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[150ms]" />
            <rect x="24" y="27" width="16" height="5" stroke="#234B76" strokeWidth="2.5" fill="#FFFFFF" />
            <rect x="24" y="37" width="16" height="5" stroke="#234B76" strokeWidth="2.5" fill="#FFFFFF" className="group-hover:fill-[#FFD700] transition-colors duration-300 delay-[350ms]" />
            <rect x="24" y="47" width="16" height="5" stroke="#234B76" strokeWidth="2.5" fill="#FFFFFF" />

            {/* Door */}
            <path d="M26 56H38V50C38 48.8954 37.1046 48 36 48H28C26.8954 48 26 48.8954 26 50V56Z" fill="#FFFFFF" stroke="#234B76" strokeWidth="2.5" />
            <line x1="32" y1="48" x2="32" y2="56" stroke="#234B76" strokeWidth="2.5" />
        </svg>
    );
};

