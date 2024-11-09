"use client";
import React, { useState } from "react";

const HEADER_VARIANTS = {
  white: {
    title: "White Header",
    description: "Clean white background with dark text",
    code: `<header className="bg-white">`,
    component: () => (
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Blog Posts
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                recusandae.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium">View Website</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </header>
    ),
  },
  gray: {
    title: "Gray Header",
    description: "Subtle gray background with border",
    code: `<header className="border-b border-gray-600 bg-gray-900">`, // Change bg color to dark
    component: () => (
      <header className="border-b border-gray-600 bg-gray-900">
        {" "}
        {/* Dark background */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl border-b border-gray-600 pb-2">
                Blog Posts
              </h1>{" "}
              {/* White text and dark border */}
              <p className="mt-1.5 text-sm text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                recusandae.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-600 bg-gray-800 px-5 py-3 text-white hover:text-gray-300 transition-all duration-200"
                type="button"
              >
                <span className="text-sm font-medium">View Website</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="inline-block rounded bg-indigo-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-800 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </header>
    ),
  },
};

const HeaderComponentLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(HEADER_VARIANTS).reduce(
      (acc, type) => ({
        ...acc,
        [type]: false,
      }),
      {}
    )
  );

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Library Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Header Components</h2>
          <p className="text-gray-400 mt-2">
            A collection of responsive header layouts with different styles
          </p>
        </div>

        {/* Header Variants */}
        {Object.entries(HEADER_VARIANTS).map(([type, config]) => (
          <div
            key={type}
            className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  {config.description}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setShowCode((prev) => ({
                      ...prev,
                      [type]: !prev[type],
                    }))
                  }
                  className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                >
                  {showCode[type] ? "View Component" : "View Code"}
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
              <div className="p-4 bg-gray-950 rounded-xl overflow-hidden">
                <config.component />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponentLibrary;
