import React, { useState } from 'react';

const VersionInfo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-fuchsia-950/40 backdrop-blur-md border border-fuchsia-800/30 text-fuchsia-200 px-4 py-2 rounded-lg inline-block shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-fuchsia-900/30 transition-all duration-300 ${
          isHovered
            ? 'opacity-100 animate-[move_2s_linear_infinite]'
            : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'linear-gradient(90deg, transparent, rgb(134,25,143), transparent)',
          backgroundSize: '150% 100%'
        }}
      />
      <span className="relative z-10">v1.0.0</span>
    </div>
  );
};

export default VersionInfo;