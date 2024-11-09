"use client"
import React, { useState } from 'react';

/**
 * Dropdown Menu Types and Constants
 */
const DROPDOWN_TYPES = {
  basic: {
    title: "Basic Dropdown",
    styles: {
      wrapper: "bg-white border rounded-md",
      menu: "bg-white border border-gray-100 rounded-md shadow-lg"
    }
  },
  divided: {
    title: "Divided Dropdown",
    styles: {
      wrapper: "bg-white border rounded-md",
      menu: "bg-white border border-gray-100 rounded-md shadow-lg divide-y divide-gray-100"
    }
  },
  withHeader: {
    title: "Dropdown with Headers",
    styles: {
      wrapper: "bg-white border rounded-md",
      menu: "bg-white border border-gray-100 rounded-md shadow-lg divide-y divide-gray-100"
    }
  }
};

const SAMPLE_ITEMS = {
  basic: [
    { label: "View on Storefront", href: "#" },
    { label: "View Warehouse Info", href: "#" },
    { label: "Duplicate Product", href: "#" },
    { label: "Unpublish Product", href: "#" },
    { label: "Delete Product", href: "#", danger: true }
  ],
  divided: [
    { label: "View on Storefront", href: "#" },
    { label: "View Warehouse Info", href: "#" },
    { label: "Duplicate Product", href: "#" },
    { label: "Unpublish Product", href: "#" },
    { type: "divider" },
    { label: "Delete Product", href: "#", danger: true }
  ],
  withHeader: [
    { type: "header", label: "General" },
    { label: "View on Storefront", href: "#" },
    { label: "View Warehouse Info", href: "#" },
    { label: "Duplicate Product", href: "#" },
    { label: "Unpublish Product", href: "#" },
    { type: "header", label: "Danger Zone" },
    { label: "Delete Product", href: "#", danger: true }
  ]
};

const DropdownMenu = ({ type = "basic" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = SAMPLE_ITEMS[type];
  const styles = DROPDOWN_TYPES[type].styles;

  return (
    <div className="relative">
      <div className={`inline-flex items-center overflow-hidden ${styles.wrapper}`}>
        <a
          href="#"
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          Edit
        </a>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute end-0 z-10 mt-2 w-56 ${styles.menu}`}
          role="menu"
        >
          <div className="p-2">
            {items.map((item, index) => {
              if (item.type === "divider") {
                return <hr key={index} className="my-2 border-gray-100" />;
              }

              if (item.type === "header") {
                return (
                  <strong
                    key={index}
                    className="block p-2 text-xs font-medium uppercase text-gray-400"
                  >
                    {item.label}
                  </strong>
                );
              }

              if (item.danger) {
                return (
                  <button
                    key={index}
                    type="button"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {item.label}
                  </button>
                );
              }

              return (
                <a
                  key={index}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const generateDropdownCode = (type) => {
  const items = SAMPLE_ITEMS[type];
  return `
// ${DROPDOWN_TYPES[type].title} Example
const ${type}Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <a href="#" className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50">Edit</a>
        <button onClick={() => setIsOpen(!isOpen)} className="h-full p-2 text-gray-600 hover:bg-gray-50">
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
          <div className="p-2">
            ${items.map(item => {
              if (item.type === "divider") return "<hr className='my-2 border-gray-100' />";
              if (item.type === "header") return `<strong className="block p-2 text-xs font-medium uppercase text-gray-400">${item.label}</strong>`;
              if (item.danger) {
                return `
            <button className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              ${item.label}
            </button>`;
              }
              return `<a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">${item.label}</a>`;
            }).join('\n            ')}
          </div>
        </div>
      )}
    </div>
  );
};`;
};

const DropdownMenuLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(DROPDOWN_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const code = generateDropdownCode(type);
    navigator.clipboard.writeText(code);
  };

  const toggleCode = (type) => {
    setShowCode(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Dropdown Menu Components</h2>
          <p className="text-gray-400 mt-2">A collection of customizable dropdown menu components</p>
        </div>

        {/* Dropdown Previews */}
        {Object.entries(DROPDOWN_TYPES).map(([type, config]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {config.title}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleCode(type)}
                  className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(type)}
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-700">
                <code>{generateDropdownCode(type)}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <DropdownMenu type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenuLibrary;