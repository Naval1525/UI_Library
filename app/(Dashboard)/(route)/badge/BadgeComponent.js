"use client"
import React, { useState } from 'react';

/**
 * Constants & Badge Types
 */
const BADGE_TYPES = {
  live: {
    title: "Live",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    styles: {
      solid: "bg-purple-100 text-purple-700",
      outlined: "border border-purple-500 text-purple-700"
    }
  },
  euro: {
    title: "Euro",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    styles: {
      solid: "bg-purple-100 text-purple-700",
      outlined: "border border-purple-500 text-purple-700"
    }
  },
  paid: {
    title: "Paid",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    styles: {
      solid: "bg-emerald-100 text-emerald-700",
      outlined: "border border-emerald-500 text-emerald-700"
    }
  },
  refunded: {
    title: "Refunded",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
        />
      </svg>
    ),
    styles: {
      solid: "bg-amber-100 text-amber-700",
      outlined: "border border-amber-500 text-amber-700"
    }
  },
  failed: {
    title: "Failed",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
    styles: {
      solid: "bg-red-100 text-red-700",
      outlined: "border border-red-500 text-red-700"
    }
  }
};

const generateBadgeCode = (badge, variant) => {
  return badge.icon ? `
<span className="inline-flex items-center justify-center rounded-full ${badge.styles[variant]} px-2.5 py-0.5">
  ${badge.icon.type}
  <p className="whitespace-nowrap text-sm">${badge.title}</p>
</span>` : `
<span className="whitespace-nowrap rounded-full ${badge.styles[variant]} px-2.5 py-0.5 text-sm">
  ${badge.title}
</span>`;
};

const Badge = ({ badge, variant }) => (
  <span className={`inline-flex items-center justify-center rounded-full ${badge.styles[variant]} px-2.5 py-0.5`}>
    {badge.icon && <span className="-ms-1 me-1.5">{badge.icon}</span>}
    <p className="whitespace-nowrap text-sm">{badge.title}</p>
  </span>
);

const BadgeLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(BADGE_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(BADGE_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: 'solid'
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const badge = BADGE_TYPES[type];
    const code = generateBadgeCode(badge, selectedVariant[type]);
    navigator.clipboard.writeText(code);
  };

  const toggleCode = (type) => {
    setShowCode(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const toggleVariant = (type) => {
    setSelectedVariant(prev => ({
      ...prev,
      [type]: prev[type] === 'solid' ? 'outlined' : 'solid'
    }));
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Badge Components</h2>
          <p className="text-gray-400 mt-2">Customizable status badges for your application</p>
        </div>

        {/* Badge Previews */}
        {Object.entries(BADGE_TYPES).map(([type, badge]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize flex items-center gap-2">
                <span>{badge.icon}</span>
                {type} Badge
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleVariant(type)}
                  className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                >
                  {selectedVariant[type] === 'solid' ? 'Show Outlined' : 'Show Solid'}
                </button>
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
                <code>{generateBadgeCode(badge, selectedVariant[type])}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <Badge badge={badge} variant={selectedVariant[type]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeLibrary;