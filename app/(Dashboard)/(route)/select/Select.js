"use client";

import React, { useState } from "react";

const SELECT_TYPES = {
  default: {
    title: "Default Select Input",
    description: "Basic select input with standard dropdown",
  },
  grouped: {
    title: "Grouped Select Input",
    description: "Select input with grouped options",
  },
  datalist: {
    title: "Datalist Select Input",
    description: "Searchable select input with datalist",
  },
};

const guitarists = [
  { value: "JM", label: "John Mayer" },
  { value: "SRV", label: "Stevie Ray Vaughn" },
  { value: "JH", label: "Jimi Hendrix" },
  { value: "BBK", label: "B.B King" },
  { value: "AK", label: "Albert King" },
  { value: "BG", label: "Buddy Guy" },
  { value: "EC", label: "Eric Clapton" },
];

const groupedGuitarists = {
  A: [{ value: "AK", label: "Albert King" }],
  B: [
    { value: "BBK", label: "B.B King" },
    { value: "BG", label: "Buddy Guy" },
  ],
  E: [{ value: "EC", label: "Eric Clapton" }],
  J: [
    { value: "JM", label: "John Mayer" },
    { value: "JH", label: "Jimi Hendrix" },
  ],
  S: [{ value: "SRV", label: "Stevie Ray Vaughn" }],
};

const SelectInput = ({ type = "default", onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  const baseSelectClasses =
    "mt-1.5 w-full rounded-lg border-gray-700 bg-gray-800 text-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm";
  const baseInputClasses =
    "w-full rounded-lg border-gray-700 bg-gray-800 text-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm pe-10";

  const renderSelect = () => {
    switch (type) {
      case "default":
        return (
          <div>
            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-300">
              Headliner
            </label>
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className={baseSelectClasses}
              value={value}
              onChange={handleChange}
            >
              <option value="">Please select</option>
              {guitarists.map((guitarist) => (
                <option key={guitarist.value} value={guitarist.value}>
                  {guitarist.label}
                </option>
              ))}
            </select>
          </div>
        );

      case "grouped":
        return (
          <div>
            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-300">
              Headliner
            </label>
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className={baseSelectClasses}
              value={value}
              onChange={handleChange}
            >
              <option value="">Please select</option>
              {Object.entries(groupedGuitarists).map(([group, options]) => (
                <optgroup key={group} label={group}>
                  {options.map((guitarist) => (
                    <option key={guitarist.value} value={guitarist.value}>
                      {guitarist.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        );

      case "datalist":
        return (
          <div>
            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-300">
              Headliner
            </label>
            <div className="relative mt-1.5">
              <input
                type="text"
                list="HeadlineActArtist"
                id="HeadlineAct"
                className={baseInputClasses}
                placeholder="Please select"
                value={value}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </span>
              <datalist id="HeadlineActArtist">
                {guitarists.map((guitarist) => (
                  <option key={guitarist.value} value={guitarist.label} />
                ))}
              </datalist>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderSelect();
};

const SelectInputLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(SELECT_TYPES).reduce(
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
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Select Input Components</h2>
          <p className="text-gray-400 mt-2">
            A collection of customizable select input controls
          </p>
        </div>

        {/* Select Input Previews */}
        {Object.entries(SELECT_TYPES).map(([type, config]) => (
          <div
            key={type}
            className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                <p className="text-gray-400 mt-1 text-sm">
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
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() =>
                    copyCodeToClipboard(
                      `<SelectInput type="${type}" onChange={(value) => console.log(value)} />`
                    )
                  }
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-700">
                <code>{`<SelectInput
  type="${type}"
  onChange={(value) => console.log(value)}
/>`}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <SelectInput type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInputLibrary;