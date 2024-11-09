"use client"
import React, { useState } from 'react';

/**
 * ======================
 * Constants & Alert Types
 * ======================
 * Define all alert configurations and their variants
 */
const ALERT_TYPES = {
  actionable: {
    title: "Changes saved",
    message: "Your product changes have been saved.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    styles: "border-gray-800 bg-gray-900/80",
    iconColor: "text-green-400",
    hasActions: true
  },
  success: {
    title: "Changes saved",
    message: "Your component changes have been successfully deployed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    styles: "border-green-900/50 bg-green-950/30",
    iconColor: "text-green-400",
    hasActions: false
  },
  warning: {
    title: "Component Update Required",
    message: "New version available for this component. Please update to ensure compatibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    styles: "border-yellow-900/50 bg-yellow-950/30",
    iconColor: "text-yellow-400",
    hasActions: false
  },
  error: {
    title: "Build Failed",
    message: "Unable to compile component. Check the console for detailed error messages.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    styles: "border-red-900/50 bg-red-950/30",
    iconColor: "text-red-400",
    hasActions: false
  }
};

/**
 * =================
 * Utility Functions
 * =================
 */
const generateAlertCode = (alert) => {
  return alert.hasActions ? `
<div role="alert" className="rounded-xl border ${alert.styles} p-4">
  <div className="flex items-start gap-4">
    <span className="${alert.iconColor}">${alert.icon.type}</span>
    <div className="flex-1">
      <strong className="block font-medium text-white">${alert.title}</strong>
      <p className="mt-1 text-sm text-gray-300">${alert.message}</p>
      <div className="mt-4 flex gap-2">
        <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 text-white hover:bg-fuchsia-700">
          <span className="text-sm">Preview</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
        <button className="block rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800">
          <span className="text-sm">Revert</span>
        </button>
      </div>
    </div>
    <button className="text-gray-400 transition hover:text-gray-200">
      <span className="sr-only">Dismiss popup</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>` : `
<div role="alert" className="rounded-xl border ${alert.styles} p-4">
  <div className="flex items-start gap-4">
    <span className="${alert.iconColor}">${alert.icon.type}</span>
    <div className="flex-1">
      <strong className="block font-medium text-white">${alert.title}</strong>
      <p className="mt-1 text-sm text-gray-300">${alert.message}</p>
    </div>
    <button className="text-gray-400 transition hover:text-gray-200">
      <span className="sr-only">Dismiss popup</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>`;
};

/**
 * ====================
 * Sub-Components
 * ====================
 */

// Alert Actions Component
const AlertActions = () => (
  <div className="mt-4 flex gap-2">
    <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 text-white hover:bg-fuchsia-700">
      <span className="text-sm">Preview</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a>
    <button className="block rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800">
      <span className="text-sm">Revert</span>
    </button>
  </div>
);

// Dismiss Button Component
const DismissButton = () => (
  <button className="text-gray-400 transition hover:text-gray-200">
    <span className="sr-only">Dismiss popup</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

// Alert Component
const Alert = ({ type, alert }) => (
  <div role="alert" className={`rounded-xl border ${alert.styles} p-4`}>
    <div className="flex items-start gap-4">
      <span className={alert.iconColor}>{alert.icon}</span>
      <div className="flex-1">
        <strong className="block font-medium text-white">{alert.title}</strong>
        <p className="mt-1 text-sm text-gray-300">{alert.message}</p>
        {alert.hasActions && <AlertActions />}
      </div>
      <DismissButton />
    </div>
  </div>
);

/**
 * ======================
 * Main AlertLibrary Component
 * ======================
 * A comprehensive library of alert components with different styles and functionality
 */
const AlertLibrary = () => {
  // State for managing code view toggles
  const [showCode, setShowCode] = useState(
    Object.keys(ALERT_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  // Handle code copy
  const copyCodeToClipboard = (type) => {
    const alert = ALERT_TYPES[type];
    const code = generateAlertCode(alert);
    navigator.clipboard.writeText(code);
  };

  // Toggle code view
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
          <h2 className="text-3xl font-semibold">Alert Components</h2>
          <p className="text-gray-400 mt-2">Customizable alert components for your application</p>
        </div>

        {/* Alert Previews */}
        {Object.entries(ALERT_TYPES).map(([type, alert]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            {/* Preview Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize flex items-center gap-2">
                <span className={alert.iconColor}>{alert.icon}</span>
                {type} Alert
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

            {/* Code or Preview */}
            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-800">
                <code>{generateAlertCode(alert)}</code>
              </pre>
            ) : (
              <Alert type={type} alert={alert} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertLibrary;
