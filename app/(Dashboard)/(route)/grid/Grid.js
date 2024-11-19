"use client"
import React, { useState } from 'react';

const GRID_LAYOUTS = {
  twoEvenColumns: {
    title: "Two Even Columns",
    description: "Basic two-column grid with equal widths",
    code: `<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>`,
    component: () => (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Even Column 1</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Even Column 2</p>
        </div>
      </div>
    )
  },
  smallLargeColumns: {
    title: "Small + Large Columns",
    description: "One-third and two-thirds column layout",
    code: `<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
</div>`,
    component: () => (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Small Column</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center lg:col-span-2">
          <p className="text-center font-bold text-gray-300">Large Column</p>
        </div>
      </div>
    )
  },
  threeColumns: {
    title: "Three Even Columns",
    description: "Equal width three-column layout",
    code: `<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>`,
    component: () => (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Column 1</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Column 2</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Column 3</p>
        </div>
      </div>
    )
  },
  sidebarLeft: {
    title: "Left Sidebar Layout",
    description: "Fixed-width sidebar with flexible main content",
    code: `<div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>`,
    component: () => (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Sidebar</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Main Content</p>
        </div>
      </div>
    )
  },
  expandableSidebar: {
    title: "Expandable Sidebar",
    description: "Sidebar that expands on hover",
    code: `<div
  className="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(>*:first-child:hover)]:grid-cols-[160px_1fr]"
>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>`,
    component: () => (
      <div className="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(>:first-child:hover)]:grid-cols-[160px_1fr]">
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Expandable Sidebar</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
          <p className="text-center font-bold text-gray-300">Main Content</p>
        </div>
      </div>
    )
  }
};

const GridLayoutLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(GRID_LAYOUTS).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Grid Layout Components</h2>
          <p className="text-gray-400 mt-2">A collection of responsive grid layouts built with Tailwind CSS</p>
        </div>

        {/* Grid Layout Previews */}
        {Object.entries(GRID_LAYOUTS).map(([type, config]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{config.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCode(prev => ({
                    ...prev,
                    [type]: !prev[type]
                  }))}
                  className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                >
                  {showCode[type] ? "View Layout" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(config.code)}
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-700">
                <code>{config.code}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <config.component />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayoutLibrary;