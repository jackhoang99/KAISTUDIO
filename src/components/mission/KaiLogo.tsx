import React from 'react';

type KaiLogoProps = {
  className?: string;
};

const KaiLogo = ({ className = '' }: KaiLogoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 40" 
      className={className}
      width="60"
    >
      <text
        x="0"
        y="30"
        className="font-display"
        style={{
          fontSize: '40px',
          letterSpacing: '2px',
          fill: 'currentColor'
        }}
      >
        KAI
      </text>
    </svg>
  );
}

export default KaiLogo;