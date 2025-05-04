import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="400" fill="white" />
        
        {/* Camera body */}
        <rect x="100" y="150" width="200" height="120" fill="#888" rx="10" />
        <rect x="120" y="130" width="160" height="30" fill="#777" />
        
        {/* Lens */}
        <circle cx="200" cy="210" r="50" fill="#444" />
        <circle cx="200" cy="210" r="40" fill="#333" />
        <circle cx="200" cy="210" r="30" fill="#222" />
        <circle cx="200" cy="210" r="15" fill="#111" />
        
        {/* Grape clusters */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(${80 + i * 60}, 60)`}>
            {Array.from({ length: 5 }).map((_, j) => (
              <circle 
                key={j} 
                cx={Math.sin(j * 0.8) * 15} 
                cy={j * 12} 
                r="10" 
                fill="#9370DB" 
              />
            ))}
          </g>
        ))}
        
        {/* Text */}
        <text 
          x="200" 
          y="310" 
          fontFamily="sans-serif" 
          fontSize="36" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill="#9370DB"
        >
          Da GRAPE VINE
        </text>
      </svg>
    </div>
  );
};

export default Logo; 