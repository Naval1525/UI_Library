"use client"
import React, { useState } from "react";

const TOGGLE_TYPES = {
  basic: {
    title: "Basic Toggle",
    description: "Simple sliding toggle switch",
    code: `const BasicToggle = ({ checked, onChange }) => {
  return (
    <label
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
      />
    </label>
  );
};`
  },
  withIcons: {
    title: "Toggle with Icons",
    description: "Toggle switch with check/cross indicators",
    code: `const ToggleWithIcons = ({ checked, onChange }) => {
  return (
    <label
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
    >
      <input
        type="checkbox"
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
        checked={checked}
        onChange={onChange}
      />
      <span
        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-500 transition-all peer-checked:start-6 peer-checked:text-blue-600"
      >
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden size-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </label>
  );
};`
  },
  minimal: {
    title: "Minimal Toggle",
    description: "Compact toggle with center track",
    code: `const MinimalToggle = ({ checked, onChange }) => {
  return (
    <label
      className="relative inline-block h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-700" />
      <span
        className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-600 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
      >
        <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-400 transition" />
      </span>
    </label>
  );
};`
  },
  pill: {
    title: "Pill Toggle",
    description: "Toggle with animated pill transition",
    code: `const PillToggle = ({ checked, onChange }) => {
  return (
    <label
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-500 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
      />
    </label>
  );
};`
  }
};

const Toggle = ({ type = "basic", checked = false, onChange }) => {
  const renderToggle = () => {
    switch (type) {
      case "basic":
        return (
          <label
            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
          >
            <input
              type="checkbox"
              className="peer sr-only"
              checked={checked}
              onChange={onChange}
            />
            <span
              className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
            />
          </label>
        );

      case "withIcons":
        return (
          <label
            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
          >
            <input
              type="checkbox"
              className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
              checked={checked}
              onChange={onChange}
            />
            <span
              className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-500 transition-all peer-checked:start-6 peer-checked:text-blue-600"
            >
              <svg
                data-unchecked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                data-checked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
        );

      case "minimal":
        return (
          <label
            className="relative inline-block h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
          >
            <input
              type="checkbox"
              className="peer sr-only"
              checked={checked}
              onChange={onChange}
            />
            <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-700" />
            <span
              className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-600 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
            >
              <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-400 transition" />
            </span>
          </label>
        );

      case "pill":
        return (
          <label
            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
          >
            <input
              type="checkbox"
              className="peer sr-only"
              checked={checked}
              onChange={onChange}
            />
            <span
              className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-500 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
            />
          </label>
        );

      default:
        return null;
    }
  };

  return renderToggle();
};

const ToggleSwitchLibrary = () => {
  const [toggleStates, setToggleStates] = useState(
    Object.keys(TOGGLE_TYPES).reduce(
      (acc, type) => ({
        ...acc,
        [type]: false,
      }),
      {}
    )
  );

  const [showCode, setShowCode] = useState(
    Object.keys(TOGGLE_TYPES).reduce(
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
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Toggle Switch Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable toggle switch components with dark theme styling
          </p>
        </div>

        {Object.entries(TOGGLE_TYPES).map(([type, config]) => (
          <div
            key={type}
            className="space-y-4 rounded-xl border border-gray-800 bg-gray-800/30 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                <p className="mt-1 text-sm text-gray-400">
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
                  className="rounded-full bg-gray-700 px-4 py-2 text-gray-300 transition-all duration-200 hover:bg-gray-600 hover:text-white"
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(config.code)}
                  className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400 transition-all duration-200 hover:bg-blue-600/20"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-300 overflow-x-auto">
                <code>{config.code}</code>
              </pre>
            ) : (
              <div className="rounded-xl bg-gray-950 p-4 flex items-center justify-center">
                <Toggle
                  type={type}
                  checked={toggleStates[type]}
                  onChange={() =>
                    setToggleStates((prev) => ({
                      ...prev,
                      [type]: !prev[type],
                    }))
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleSwitchLibrary;