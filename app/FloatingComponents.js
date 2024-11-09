import React, { useState, useEffect } from 'react';
import { AlertCircle, Layout, Box, Type, Menu, Settings, Bell, Search, Mail, User } from 'lucide-react';

const FloatingComponents = () => {
  const [offset, setOffset] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);

  // Component sets that will alternate
  const componentSets = [
    [
      { icon: <AlertCircle className="w-6 h-6 text-rose-500" />, name: "Alert", description: "Feedback" },
      { icon: <Layout className="w-6 h-6 text-blue-500" />, name: "Grid", description: "Layout" },
      { icon: <Box className="w-6 h-6 text-purple-500" />, name: "Card", description: "Display" },
      { icon: <Type className="w-6 h-6 text-green-500" />, name: "Typography", description: "Text" },
      { icon: <Menu className="w-6 h-6 text-yellow-500" />, name: "Navigation", description: "Menu" }
    ],
    [
      { icon: <Settings className="w-6 h-6 text-emerald-500" />, name: "Settings", description: "Configure" },
      { icon: <Bell className="w-6 h-6 text-pink-500" />, name: "Notifications", description: "Updates" },
      { icon: <Search className="w-6 h-6 text-cyan-500" />, name: "Search", description: "Find" },
      { icon: <Mail className="w-6 h-6 text-amber-500" />, name: "Messages", description: "Communicate" },
      { icon: <User className="w-6 h-6 text-indigo-500" />, name: "Profile", description: "Account" }
    ]
  ];

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 20; // Increased speed by reducing divisor
      setOffset(progress % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Change component set every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % componentSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentComponents = componentSets[currentSet];

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {currentComponents.map((component, index) => {
        const angleOffset = (index * 72 + offset) * (Math.PI / 180);
        const radius = 150;
        const x = Math.cos(angleOffset) * radius;
        const y = Math.sin(angleOffset) * radius;

        return (
          <div
            key={`${component.name}-${index}`}
            style={{
              position: 'absolute',
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              transition: 'opacity 0.3s ease-in-out'
            }}
            className="transition-all duration-300 ease-in-out floating-card"
          >
            <div
              className="w-48 bg-gray-900/90 border border-gray-800 rounded-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 ease-out hover:bg-gray-800/90 hover:border-gray-700 shadow-lg hover:shadow-xl"
            >
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="transform transition-transform duration-300 hover:rotate-12">
                    {component.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{component.name}</h3>
                    <p className="text-sm text-gray-400">{component.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
        onClick={() => setCurrentSet((prev) => (prev + 1) % componentSets.length)}
      >
        <span className="sr-only">Change Components</span>
        <Box className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-90" />
      </button>

      <style jsx>{`
        .floating-card {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }

        /* Add staggered delays for each card */
        .floating-card:nth-child(1) { animation-delay: 0s; }
        .floating-card:nth-child(2) { animation-delay: 0.2s; }
        .floating-card:nth-child(3) { animation-delay: 0.4s; }
        .floating-card:nth-child(4) { animation-delay: 0.6s; }
        .floating-card:nth-child(5) { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

export default FloatingComponents;