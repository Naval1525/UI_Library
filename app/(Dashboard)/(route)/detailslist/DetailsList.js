"use client"
import React, { useState } from 'react';

/**
 * Constants & Description List Types
 *  <!-- iska alternating theek karna hai --!>
 */
const DESCRIPTION_LIST_TYPES = {
  basic: {
    title: "Basic Description List",
    styles: {
      solid: "divide-gray-100"
    }
  },
  alternating: {
    title: "Alternating Description List",
    styles: {
      solid: "divide-gray-100"
    }
  },
  bordered: {
    title: "Bordered Description List",
    styles: {
      solid: "border-gray-100"
    }
  },
  borderedAlternating: {
    title: "Bordered Alternating Description List",
    styles: {
      solid: "border-gray-100"
    }
  }
};

const SAMPLE_DATA = [
  { label: "Title", value: "Mr" },
  { label: "Name", value: "John Frusciante" },
  { label: "Occupation", value: "Guitarist" },
  { label: "Salary", value: "$1,000,000+" },
  { label: "Bio", value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?" }
];

const generateDescriptionListCode = (type) => {
    const isBordered = type.includes('bordered');
    const isAlternating = type.includes('alternating');
    
    const wrapperClasses = [
      "flow-root",
      isBordered && "rounded-lg border border-gray-800 shadow-sm",
      isBordered && "py-3"
    ].filter(Boolean).join(" ");
  
    const dlClasses = [
      "-my-3",
      "divide-y",
      "divide-gray-800",
      "text-sm"
    ].filter(Boolean).join(" ");
  
    const itemClasses = [
      "grid grid-cols-1 gap-1",
      isBordered ? "p-3" : "py-3",  // Adds padding for bordered lists
      isAlternating && "even:bg-gray-800", // Alternates background color for even rows
      isAlternating && "odd:bg-gray-900", // Adds a darker background for odd rows if alternating
      "sm:grid-cols-3 sm:gap-4"
    ].filter(Boolean).join(" ");
  
    // Extra features for bordered and alternating lists:
    const extraFeatures = `
      // Bordered Style:
      ${isBordered ? `
        // Each item is separated by a border with padding
        <div className="rounded-lg border border-gray-800 shadow-sm p-3">  
      ` : ""}
      
      // Alternating Style:
      ${isAlternating ? `
        // Alternating background colors for items
        <div className="even:bg-gray-800 odd:bg-gray-900">
      ` : ""}
    `;
  
    return `
  <div className="${wrapperClasses}">
    <dl className="${dlClasses}">
      {items.map((item, index) => (
        <div key={index} className="${itemClasses}">
          <dt className="font-medium text-gray-100">{item.label}</dt>
          <dd className="text-gray-400 sm:col-span-2">{item.value}</dd>
        </div>
      ))}
    </dl>
  </div>
  ${extraFeatures}
  `;
  };
  

const DescriptionList = ({ type }) => {
  const isBordered = type.includes('bordered');
  const isAlternating = type.includes('alternating');
  
  const wrapperClasses = [
    "flow-root",
    isBordered && "rounded-lg border border-gray-800 shadow-sm",
    isBordered && "py-3"
  ].filter(Boolean).join(" ");

  const dlClasses = [
    "-my-3",
    "divide-y",
    "divide-gray-800",
    "text-sm"
  ].filter(Boolean).join(" ");

  const itemClasses = [
    "grid grid-cols-1 gap-1",
    isBordered ? "p-3" : "py-3",
    isAlternating && "even:bg-gray-800", // Ensure alternating rows have the background color
    "sm:grid-cols-3 sm:gap-4"
  ].filter(Boolean).join(" ");

  return (
    <div className={wrapperClasses}>
      <dl className={dlClasses}>
        {SAMPLE_DATA.map((item, index) => (
          <div key={index} className={itemClasses}>
            <dt className="font-medium text-gray-100">
              {item.label}
            </dt>
            <dd className="text-gray-400 sm:col-span-2">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const DescriptionListLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(DESCRIPTION_LIST_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const code = generateDescriptionListCode(type);
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
          <h2 className="text-3xl font-semibold">Description List Components</h2>
          <p className="text-gray-400 mt-2">Customizable description list components for displaying key-value data</p>
        </div>

        {/* Description List Previews */}
        {Object.entries(DESCRIPTION_LIST_TYPES).map(([type, config]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {config.title}
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
                <code>{generateDescriptionListCode(type)}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <DescriptionList type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionListLibrary;
