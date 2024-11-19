"use client";
import React, { useState } from "react";

const TEXTAREA_TYPES = {
  default: {
    title: "Default Textarea",
    description: "Basic textarea with dark theme styling",
    code: `const DefaultTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label
        htmlFor="Notes"
        className="block text-sm font-medium text-gray-300"
      >
        Notes
      </label>
      <textarea
        id="Notes"
        className="mt-2 w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
        rows={4}
        placeholder="Enter any additional notes..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};`
  },
  withActions: {
    title: "Textarea with Actions",
    description: "Textarea with clear and submit buttons",
    code: `const TextareaWithActions = () => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  const handleAdd = () => {
    console.log("Submitting:", value);
    // Add your submit logic here
  };

  return (
    <div>
      <label htmlFor="Notes" className="sr-only">
        Notes
      </label>
      <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="Notes"
          className="w-full resize-none border-none bg-transparent text-gray-200 placeholder-gray-500 focus:ring-0 sm:text-sm"
          rows={4}
          placeholder="Enter any additional notes..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center justify-end gap-2 bg-gray-800 p-3 border-t border-gray-700">
          <button
            type="button"
            onClick={handleClear}
            className="rounded bg-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleAdd}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};`
  },
  borderless: {
    title: "Borderless Textarea",
    description: "Minimal textarea with bottom actions",
    code: `const BorderlessTextarea = () => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  const handleAdd = () => {
    console.log("Submitting:", value);
    // Add your submit logic here
  };

  return (
    <div>
      <label htmlFor="Notes" className="sr-only">
        Notes
      </label>
      <div className="overflow-hidden">
        <textarea
          id="Notes"
          className="w-full resize-none border-x-0 border-t-0 border-gray-700 bg-gray-800 px-0 text-gray-200 placeholder-gray-500 focus:ring-0 sm:text-sm"
          rows={4}
          placeholder="Enter any additional notes..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center justify-end gap-2 py-3">
          <button
            type="button"
            onClick={handleClear}
            className="rounded bg-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleAdd}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};`
  }
};

const Textarea = ({
  type = "default",
  placeholder = DEMO_PROPS.placeholder,
  rows = DEMO_PROPS.rows,
  label = DEMO_PROPS.label,
}) => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  const handleAdd = () => {
    console.log("Submitting:", value);
    // Add your submit logic here
  };

  const renderTextarea = () => {
    switch (type) {
      case "default":
        return (
          <div>
            <label
              htmlFor="Notes"
              className="block text-sm font-medium text-gray-300"
            >
              {label}
            </label>
            <textarea
              id="Notes"
              className="mt-2 w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
              rows={rows}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        );

      case "withActions":
        return (
          <div>
            <label htmlFor="Notes" className="sr-only">
              {label}
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <textarea
                id="Notes"
                className="w-full resize-none border-none bg-transparent text-gray-200 placeholder-gray-500 focus:ring-0 sm:text-sm"
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="flex items-center justify-end gap-2 bg-gray-800 p-3 border-t border-gray-700">
                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded bg-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );

      case "borderless":
        return (
          <div>
            <label htmlFor="Notes" className="sr-only">
              {label}
            </label>
            <div className="overflow-hidden">
              <textarea
                id="Notes"
                className="w-full resize-none border-x-0 border-t-0 border-gray-700 bg-gray-800 px-0 text-gray-200 placeholder-gray-500 focus:ring-0 sm:text-sm"
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="flex items-center justify-end gap-2 py-3">
                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded bg-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderTextarea();
};

const DEMO_PROPS = {
  placeholder: "Enter any additional notes...",
  rows: 4,
  label: "Notes",
};

const TextareaLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(TEXTAREA_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Textarea Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable textarea components with dark theme
            styling
          </p>
        </div>

        {Object.entries(TEXTAREA_TYPES).map(([type, config]) => (
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
              <div className="rounded-xl bg-gray-950 p-4">
                <Textarea type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextareaLibrary;