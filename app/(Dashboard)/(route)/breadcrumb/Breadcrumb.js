"use client"
import React, { useState } from 'react';

/**
 * Constants & Breadcrumb Types
 */
const BREADCRUMB_TYPES = {
  default: {
    title: "Default Breadcrumb",
    items: [
      { label: 'Home', icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      )},
      { label: 'Shirts' },
      { label: 'Plain Tee' }
    ],
    styles: {
      solid: "border-gray-200 text-gray-600 bg-gray-100",
      outlined: "border-gray-700 text-gray-400 bg-transparent"
    }
  },
  ecommerce: {
    title: "E-commerce Breadcrumb",
    items: [
      { label: 'Shop', icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )},
      { label: 'Categories' },
      { label: 'Electronics' }
    ],
    styles: {
      solid: "border-gray-200 text-gray-600 bg-gray-100",
      outlined: "border-gray-700 text-gray-400 bg-transparent"
    }
  }
};

const Separator = () => (
  <li className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </li>
);

const generateBreadcrumbCode = (breadcrumb, variant) => {
  const baseStyles = variant === 'solid' ? 
    'bg-gray-100 hover:text-gray-900' : 
    'bg-transparent hover:text-gray-300';
    
  return `
<nav aria-label="Breadcrumb" className="flex">
  <ol className="flex overflow-hidden rounded-lg border ${breadcrumb.styles[variant]}">
    ${breadcrumb.items.map((item, index) => `
    ${index > 0 ? `<li className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </li>` : ''}
    <li className="flex items-center">
      ${index === 0 ? `
      <a href="#" className="flex h-10 items-center gap-1.5 ${baseStyles} px-4 transition">
        ${item.icon ? item.icon.type : ''}
        <span className="ms-1.5 text-xs font-medium">${item.label}</span>
      </a>
      ` : `
      <a href="#" className="flex h-10 items-center ${baseStyles} px-4 text-xs font-medium transition">
        ${item.label}
      </a>
      `}
    </li>`).join('')}
  </ol>
</nav>`;
};

const Breadcrumb = ({ breadcrumb, variant }) => (
  <nav aria-label="Breadcrumb" className="flex">
    <ol className={`flex overflow-hidden rounded-lg border ${breadcrumb.styles[variant]}`}>
      {breadcrumb.items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator />}
          <li className="flex items-center">
            <a
              href="#"
              className={`flex h-10 items-center ${
                variant === 'solid' ? 'hover:text-gray-900' : 'hover:text-gray-300'
              } ${index === 0 ? 'gap-1.5' : ''} ${
                variant === 'solid' ? 'bg-gray-100' : 'bg-transparent'
              } px-4 transition`}
            >
              {item.icon && index === 0 && item.icon}
              <span className={`${index === 0 ? 'ms-1.5' : ''} text-xs font-medium`}>
                {item.label}
              </span>
            </a>
          </li>
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

const BreadcrumbLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(BREADCRUMB_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(BREADCRUMB_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: 'solid'
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const breadcrumb = BREADCRUMB_TYPES[type];
    const code = generateBreadcrumbCode(breadcrumb, selectedVariant[type]);
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
          <h2 className="text-3xl font-semibold">Breadcrumb Components</h2>
          <p className="text-gray-400 mt-2">Customizable breadcrumb navigation components</p>
        </div>

        {/* Breadcrumb Previews */}
        {Object.entries(BREADCRUMB_TYPES).map(([type, breadcrumb]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {breadcrumb.title}
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
                <code>{generateBreadcrumbCode(breadcrumb, selectedVariant[type])}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <Breadcrumb breadcrumb={breadcrumb} variant={selectedVariant[type]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadcrumbLibrary;