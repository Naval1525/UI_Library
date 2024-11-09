"use client"
import React, { useState } from 'react';

/**
 * Filter Menu Types and Constants
 */
const FILTER_TYPES = {
  floating: {
    title: "Floating Filter Menu",
    styles: {
      wrapper: "relative",
      trigger: "flex cursor-pointer items-center gap-2 border-b border-gray-600 pb-1 text-gray-300 transition hover:border-gray-400",
      menu: "z-50 absolute start-0 top-auto mt-2 w-96 rounded border border-gray-700 bg-gray-800"
    }
  },
  bordered: {
    title: "Bordered Filter Menu",
    styles: {
      wrapper: "overflow-hidden rounded border border-gray-700",
      trigger: "flex cursor-pointer items-center justify-between gap-2 bg-gray-800 p-4 text-gray-300 transition",
      menu: "border-t border-gray-700 bg-gray-800"
    }
  }
};

const FILTER_CONFIGS = {
  availability: {
    title: "Availability",
    options: [
      { id: "inStock", label: "In Stock (5+)" },
      { id: "preOrder", label: "Pre Order (3+)" },
      { id: "outOfStock", label: "Out of Stock (10+)" }
    ]
  },
  price: {
    title: "Price",
    range: {
      max: 600,
      placeholder: {
        from: "From",
        to: "To"
      }
    }
  }
};

const FilterMenu = ({ type = "floating", config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const styles = FILTER_TYPES[type].styles;

  const DownArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`size-4 transition ${isOpen ? '-rotate-180' : ''}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <div className={styles.wrapper}>
      <details className="group" open={isOpen} onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}>
        <summary className={styles.trigger}>
          <span className="text-sm font-medium">{config.title}</span>
          <DownArrow />
        </summary>

        <div className={styles.menu}>
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-400">
              {config.range ? `The highest price is $${config.range.max}` : `${selected.length} Selected`}
            </span>

            <button 
              type="button" 
              className="text-sm text-gray-300 underline underline-offset-4 hover:text-white"
              onClick={() => setSelected([])}
            >
              Reset
            </button>
          </header>

          <div className="border-t border-gray-700 p-4">
            {config.options ? (
              <ul className="space-y-1">
                {config.options.map((option) => (
                  <li key={option.id}>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={option.id}
                        className="size-5 rounded border-gray-600 bg-gray-700 text-blue-600"
                        checked={selected.includes(option.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelected([...selected, option.id]);
                          } else {
                            setSelected(selected.filter(id => id !== option.id));
                          }
                        }}
                      />
                      <span className="text-sm font-medium text-gray-300">{option.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex justify-between gap-4">
                <label className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">$</span>
                  <input
                    type="number"
                    placeholder={config.range.placeholder.from}
                    className="w-full rounded-md border-gray-700 bg-gray-700 shadow-sm sm:text-sm text-gray-300 placeholder-gray-500"
                  />
                </label>

                <label className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">$</span>
                  <input
                    type="number"
                    placeholder={config.range.placeholder.to}
                    className="w-full rounded-md border-gray-700 bg-gray-700 shadow-sm sm:text-sm text-gray-300 placeholder-gray-500"
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </details>
    </div>
  );
};

const FilterMenuLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(FILTER_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Filter Menu Components</h2>
          <p className="text-gray-400 mt-2">A collection of customizable filter menu components</p>
        </div>

        {/* Filter Previews */}
        {Object.entries(FILTER_TYPES).map(([type, config]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{config.title}</h3>
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
                  onClick={() => copyCodeToClipboard(`// Example usage for ${type} filter`)}
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-700">
                <code>{`// Example code for ${type} filter`}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl flex gap-8">
                <FilterMenu type={type} config={FILTER_CONFIGS.availability} />
                <FilterMenu type={type} config={FILTER_CONFIGS.price} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMenuLibrary;