"use client"
import React from "react";

const PROGRESS_TYPES = {
  simple: {
    title: "Simple Progress Bar",
    description: "Basic progress bar with solid fill",
    code: `const SimpleProgressBar = ({ progress = 75 }) => (
  <div>
    <span id="ProgressLabel" className="sr-only">
      Loading
    </span>
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow={progress}
      className="block rounded-full bg-gray-700"
    >
      <span
        className="block h-3 rounded-full bg-blue-600"
        style={{ width: \`\${progress}%\` }}
      />
    </span>
  </div>
);`
  },
  labeled: {
    title: "Labeled Progress Bar",
    description: "Progress bar with percentage label",
    code: `const LabeledProgressBar = ({ progress = 75 }) => (
  <div>
    <span id="ProgressLabel" className="sr-only">
      Loading
    </span>
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow={progress}
      className="block rounded-full bg-gray-700"
    >
      <span
        className="block h-4 rounded-full bg-blue-600 text-center text-[10px]/4"
        style={{ width: \`\${progress}%\` }}
      >
        <span className="font-bold text-white">{progress}%</span>
      </span>
    </span>
  </div>
);`
  },
  overlay: {
    title: "Overlay Label Progress Bar",
    description: "Progress bar with centered overlay label",
    code: `const OverlayProgressBar = ({ progress = 75 }) => (
  <div>
    <span id="ProgressLabel" className="sr-only">
      Loading
    </span>
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow={progress}
      className="relative block rounded-full bg-gray-700"
    >
      <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
        <span className="font-bold text-white">{progress}%</span>
      </span>
      <span
        className="block h-4 rounded-full bg-blue-600 text-center"
        style={{ width: \`\${progress}%\` }}
      />
    </span>
  </div>
);`
  },
  striped: {
    title: "Striped Progress Bar",
    description: "Progress bar with striped pattern animation",
    code: `const StripedProgressBar = ({ progress = 75 }) => (
  <div>
    <span id="ProgressLabel" className="sr-only">
      Loading
    </span>
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow={progress}
      className="block rounded-full bg-gray-700"
    >
      <span
        className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-blue-500 to-blue-600"
        style={{ width: \`\${progress}%\` }}
      />
    </span>
  </div>
);`
  }
};

const ProgressBar = ({ type = "simple", progress = 75 }) => {
  const renderProgressBar = () => {
    switch (type) {
      case "simple":
        return (
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={progress}
              className="block rounded-full bg-gray-700"
            >
              <span
                className="block h-3 rounded-full bg-blue-600"
                style={{ width: `${progress}%` }}
              />
            </span>
          </div>
        );

      case "labeled":
        return (
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={progress}
              className="block rounded-full bg-gray-700"
            >
              <span
                className="block h-4 rounded-full bg-blue-600 text-center text-[10px]/4"
                style={{ width: `${progress}%` }}
              >
                <span className="font-bold text-white">{progress}%</span>
              </span>
            </span>
          </div>
        );

      case "overlay":
        return (
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={progress}
              className="relative block rounded-full bg-gray-700"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                <span className="font-bold text-white">{progress}%</span>
              </span>
              <span
                className="block h-4 rounded-full bg-blue-600 text-center"
                style={{ width: `${progress}%` }}
              />
            </span>
          </div>
        );

      case "striped":
        return (
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={progress}
              className="block rounded-full bg-gray-700"
            >
              <span
                className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-blue-500 to-blue-600"
                style={{ width: `${progress}%` }}
              />
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  return renderProgressBar();
};

const ProgressBarLibrary = () => {
  const [showCode, setShowCode] = React.useState(
    Object.keys(PROGRESS_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Progress Bar Components</h2>
          <p className="text-gray-400 mt-2">
            A collection of customizable progress indicators
          </p>
        </div>

        {/* Progress Bar Previews */}
        {Object.entries(PROGRESS_TYPES).map(([type, config]) => (
          <div 
            key={type} 
            className="border border-gray-800 rounded-xl p-6 bg-gray-800/30 space-y-4"
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
                  className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                  onClick={() =>
                    setShowCode((prev) => ({
                      ...prev,
                      [type]: !prev[type],
                    }))
                  }
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                  onClick={() => copyCodeToClipboard(config.code)}
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
              <div className="p-4 bg-gray-950 rounded-xl">
                <ProgressBar type={type} progress={75} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBarLibrary;