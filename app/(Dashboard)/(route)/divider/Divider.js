"use client";
import React, { useState } from 'react';

const DIVIDER_TYPES = {
  centered: {
    title: "Centered Divider",
    description: "A divider with centered text",
    variant: "flex items-center",
    innerClass: "shrink-0 px-6 text-gray-300"
  },
  gradient: {
    title: "Gradient Divider",
    description: "A divider with gradient and floating text",
    variant: "relative flex justify-center",
    innerClass: "relative z-10 bg-white/50 px-6 text-gray-300"
  },
  rightAlign: {
    title: "Right-Aligned Divider",
    description: "A divider with text aligned to the right",
    variant: "flex items-center",
    innerClass: "pl-6 text-gray-300"
  },
  leftAlign: {
    title: "Left-Aligned Divider",
    description: "A divider with text aligned to the left",
    variant: "flex items-center",
    innerClass: "pr-6 text-gray-300"
  }
};

const generateDividerCode = (type) => {
  const divider = DIVIDER_TYPES[type];
  let code = '';
  
  switch(type) {
    case 'centered':
      code = `
<div className="${divider.variant}">
  <span className="h-px flex-1 bg-white"></span>
  <span className="${divider.innerClass}">Lorem, ipsum dolor</span>
  <span className="h-px flex-1 bg-white"></span>
</div>`;
      break;
    case 'gradient':
      code = `
<div className="${divider.variant}">
  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-75"></div>
  <span className="${divider.innerClass}">Lorem, ipsum dolor</span>
</div>`;
      break;
    case 'rightAlign':
      code = `
<div className="${divider.variant}">
  <span className="h-px flex-1 bg-white"></span>
  <span className="${divider.innerClass}">Lorem, ipsum dolor</span>
</div>`;
      break;
    case 'leftAlign':
      code = `
<div className="${divider.variant}">
  <span className="${divider.innerClass}">Lorem, ipsum dolor</span>
  <span className="h-px flex-1 bg-white"></span>
</div>`;
      break;
    default:
      break;
  }
  return code;
};

const Divider = ({ type, text = "Lorem, ipsum dolor" }) => {
  const divider = DIVIDER_TYPES[type];

  switch(type) {
    case 'centered':
      return (
        <div className={divider.variant}>
          <span className="h-px flex-1 bg-white"></span>
          <span className={divider.innerClass}>{text}</span>
          <span className="h-px flex-1 bg-white"></span>
        </div>
      );
    case 'gradient':
      return (
        <div className={divider.variant}>
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-75"></div>
          <span className={divider.innerClass}>{text}</span>
        </div>
      );
    case 'rightAlign':
      return (
        <div className={divider.variant}>
          <span className="h-px flex-1 bg-white"></span>
          <span className={divider.innerClass}>{text}</span>
        </div>
      );
    case 'leftAlign':
      return (
        <div className={divider.variant}>
          <span className={divider.innerClass}>{text}</span>
          <span className="h-px flex-1 bg-white"></span>
        </div>
      );
    default:
      return null;
  }
};

const DividerLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(DIVIDER_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const code = generateDividerCode(type);
    navigator.clipboard.writeText(code);
  };

  const toggleCode = (type) => {
    setShowCode(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Divider Components</h2>
          <p className="text-gray-400 mt-2">Customizable divider components for various layouts</p>
        </div>

        {/* Divider Previews */}
        {Object.entries(DIVIDER_TYPES).map(([type, divider]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {divider.title}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleCode(type)}
                  className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(type)}
                  className="px-4 py-2 rounded-full bg-fuchsia-600/10 text-fuchsia-400 hover:bg-fuchsia-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-800">
                <code>{generateDividerCode(type)}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <Divider type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DividerLibrary;
