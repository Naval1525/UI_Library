"use client";

import React, { useState } from "react";

const QUANTITY_TYPES = {
  default: {
    title: "Default Quantity Input",
    description: "Basic quantity input with separated controls",
  },
  compact: {
    title: "Compact Quantity Input",
    description: "Narrow width quantity input",
  },
  centered: {
    title: "Centered Quantity Input",
    description: "Center-aligned quantity input",
  },
  unified: {
    title: "Unified Quantity Input",
    description: "Combined controls with shared border",
  },
};

const QuantityInput = ({ type = "default", initialValue = 1, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value) || 1;
    setValue(newValue);
    onChange?.(newValue);
  };

  const renderQuantityInput = () => {
    const baseInputClasses =
      "h-10 rounded border-gray-700 bg-gray-800 text-gray-300 focus:border-blue-500 focus:ring-blue-500 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none sm:text-sm";
    const baseButtonClasses =
      "size-10 leading-10 text-gray-300 transition hover:text-white hover:bg-gray-700 rounded";

    switch (type) {
      case "default":
        return (
          <div>
            <label htmlFor="Quantity" className="sr-only">
              Quantity
            </label>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleDecrement}
                className={baseButtonClasses}
              >
                −
              </button>

              <input
                type="number"
                id="Quantity"
                value={value}
                onChange={handleChange}
                min="1"
                className={`${baseInputClasses} w-24`}
              />

              <button
                type="button"
                onClick={handleIncrement}
                className={baseButtonClasses}
              >
                +
              </button>
            </div>
          </div>
        );

      case "compact":
        return (
          <div>
            <label htmlFor="Quantity" className="sr-only">
              Quantity
            </label>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleDecrement}
                className={baseButtonClasses}
              >
                −
              </button>

              <input
                type="number"
                id="Quantity"
                value={value}
                onChange={handleChange}
                min="1"
                className={`${baseInputClasses} w-16`}
              />

              <button
                type="button"
                onClick={handleIncrement}
                className={baseButtonClasses}
              >
                +
              </button>
            </div>
          </div>
        );

      case "centered":
        return (
          <div>
            <label htmlFor="Quantity" className="sr-only">
              Quantity
            </label>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleDecrement}
                className={baseButtonClasses}
              >
                −
              </button>

              <input
                type="number"
                id="Quantity"
                value={value}
                onChange={handleChange}
                min="1"
                className={`${baseInputClasses} w-16 text-center`}
              />

              <button
                type="button"
                onClick={handleIncrement}
                className={baseButtonClasses}
              >
                +
              </button>
            </div>
          </div>
        );

      case "unified":
        return (
          <div>
            <label htmlFor="Quantity" className="sr-only">
              Quantity
            </label>
            <div className="flex items-center rounded border border-gray-700 bg-gray-800">
              <button
                type="button"
                onClick={handleDecrement}
                className="size-10 leading-10 text-gray-300 transition hover:text-white hover:bg-gray-700"
              >
                −
              </button>

              <input
                type="number"
                id="Quantity"
                value={value}
                onChange={handleChange}
                min="1"
                className="h-10 w-16 border-transparent bg-transparent text-center text-gray-300 [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />

              <button
                type="button"
                onClick={handleIncrement}
                className="size-10 leading-10 text-gray-300 transition hover:text-white hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderQuantityInput();
};

const QuantityInputLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(QUANTITY_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Quantity Input Components</h2>
          <p className="text-gray-400 mt-2">
            A collection of customizable quantity input controls
          </p>
        </div>

        {/* Quantity Input Previews */}
        {Object.entries(QUANTITY_TYPES).map(([type, config]) => (
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
                      `<QuantityInput type="${type}" initialValue={1} />`
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
                <code>{`<QuantityInput
  type="${type}"
  initialValue={1}
  onChange={(value) => console.log(value)}
/>`}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <QuantityInput type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuantityInputLibrary;
