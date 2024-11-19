"use client"
import React, { useState } from 'react';

const INPUT_FIELD_TYPES = {
  simple: {
    title: "Simple Input Field",
    description: "Clean and minimal input design",
    placeholder: "john@rhcp.com",
    label: "Email",
    code: `<div>
  <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-300">
    {field.label}
  </label>
  <input
    type="email"
    id="UserEmail"
    placeholder={field.placeholder}
    className="mt-1 w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
  />
</div>`
  },
  withIcon: {
    title: "Input Field with Icon",
    description: "Input field with a decorative icon",
    placeholder: "flea@rhcp.com",
    label: "Email",
    code: `<div className="relative">
  <label htmlFor="UserEmail" className="sr-only">{field.label}</label>
  <input
    type="email"
    id="UserEmail"
    placeholder={field.placeholder}
    className="w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 pe-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
  />
  <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path
        fillRule="evenodd"
        d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
        clipRule="evenodd"
      />
    </svg>
  </span>
</div>`
  },
  search: {
    title: "Search Input Field",
    description: "Input field with search functionality",
    placeholder: "Search for...",
    label: "Search",
    code: `<div className="relative">
  <label htmlFor="Search" className="sr-only">{field.label}</label>
  <input
    type="text"
    id="Search"
    placeholder={field.placeholder}
    className="w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 py-2.5 pe-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
  />
  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" className="text-gray-500 hover:text-gray-400">
      <span className="sr-only">Search</span>
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>`
  },
  floating: {
    title: "Floating Label Input",
    description: "Input field with animated floating label",
    placeholder: "anthony@rhcp.com",
    label: "Email",
    code: `<label
  htmlFor="UserEmail"
  className="relative block overflow-hidden rounded-md border border-gray-700 bg-gray-800 px-3 pt-3 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
>
  <input
    type="email"
    id="UserEmail"
    placeholder={field.placeholder}
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-gray-300 sm:text-sm"
  />
  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-blue-500"
  >
    {field.label}
  </span>
</label>`
  },
  underlined: {
    title: "Underlined Input Field",
    description: "Minimalist underlined input design",
    placeholder: "chad@rhcp.com",
    label: "Email",
    code: `<label
  htmlFor="UserEmail"
  className="relative block overflow-hidden border-b border-gray-700 bg-transparent pt-3 focus-within:border-blue-500"
>
  <input
    type="email"
    id="UserEmail"
    placeholder={field.placeholder}
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-gray-300 sm:text-sm"
  />
  <span
    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
  >
    {field.label}
  </span>
</label>`
  }
};

const InputField = ({ type }) => {
  const field = INPUT_FIELD_TYPES[type];
  
  const renderInput = () => {
    switch(type) {
      case 'simple':
        return (
          <div>
            <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-300">
              {field.label}
            </label>
            <input
              type="email"
              id="UserEmail"
              placeholder={field.placeholder}
              className="mt-1 w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        );

      case 'withIcon':
        return (
          <div className="relative">
            <label htmlFor="UserEmail" className="sr-only">{field.label}</label>
            <input
              type="email"
              id="UserEmail"
              placeholder={field.placeholder}
              className="w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 pe-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path
                  fillRule="evenodd"
                  d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        );

      case 'search':
        return (
          <div className="relative">
            <label htmlFor="Search" className="sr-only">{field.label}</label>
            <input
              type="text"
              id="Search"
              placeholder={field.placeholder}
              className="w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 py-2.5 pe-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Search</span>
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        );

      case 'floating':
        return (
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden rounded-md border border-gray-700 bg-gray-800 px-3 pt-3 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder={field.placeholder}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-gray-300 sm:text-sm"
            />
            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-blue-500"
            >
              {field.label}
            </span>
          </label>
        );

      case 'underlined':
        return (
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden border-b border-gray-700 bg-transparent pt-3 focus-within:border-blue-500"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder={field.placeholder}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-gray-300 sm:text-sm"
            />
            <span
              className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
            >
              {field.label}
            </span>
          </label>
        );
      default:
        return null;
    }
  };

  return renderInput();
};

const InputFieldLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(INPUT_FIELD_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim());
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Input Field Components</h2>
          <p className="text-gray-400 mt-2">A collection of customizable input field components</p>
        </div>

        {/* Input Field Previews */}
        {Object.entries(INPUT_FIELD_TYPES).map(([type, config]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                {config.description && (
                  <p className="text-gray-400 mt-1 text-sm">{config.description}</p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCode(prev => ({
                    ...prev,
                    [type]: !prev[type]
                  }))}
                  className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                >
                  {showCode[type] ? "View UI" : "View Code"}
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
                <code>{config.code.trim()}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <div className="max-w-sm">
                  <InputField type={type} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputFieldLibrary;