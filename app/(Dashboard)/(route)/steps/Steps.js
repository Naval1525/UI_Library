"use client"
import React, { useState } from "react";

const STEP_TYPES = {
  default: {
    title: "Default Step Indicator",
    description: "Basic step indicator with progress bar",
  },
  numbered: {
    title: "Numbered Step Indicator",
    description: "Steps with numbered circles and labels",
  },
  iconBased: {
    title: "Icon Based Steps",
    description: "Steps with descriptive icons and labels",
  },
  checkmarks: {
    title: "Checkmark Steps",
    description: "Steps with completion checkmarks",
  },
  compact: {
    title: "Compact Steps",
    description: "Minimal step indicator with current step highlight",
  }
};

const DEMO_DATA = {
  steps: [
    { label: "Details", description: "Some info about you" },
    { label: "Address", description: "Where we sending it?" },
    { label: "Payment", description: "Show us the money" }
  ],
  currentStep: 1
};

const StepIndicator = ({ 
  type = "default",
  steps = DEMO_DATA.steps,
  currentStep = DEMO_DATA.currentStep
}) => {
  const IconDetails = () => (
    <svg
      className="size-6 sm:size-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
      />
    </svg>
  );

  const IconLocation = () => (
    <svg
      className="size-6 sm:size-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const IconPayment = () => (
    <svg
      className="size-6 sm:size-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );

  const Checkmark = () => (
    <svg
      className="size-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const renderStepIcon = (index) => {
    switch (index) {
      case 0:
        return <IconDetails />;
      case 1:
        return <IconLocation />;
      case 2:
        return <IconPayment />;
      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    switch (type) {
      case "default":
        return (
          <div className="w-full">
            <div className="overflow-hidden rounded-full bg-gray-700">
              <div 
                className="h-2 rounded-full bg-blue-600" 
                style={{ width: `${(currentStep + 1) * (100 / steps.length)}%` }}
              />
            </div>

            <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-400">
              {steps.map((step, index) => (
                <li key={index} className={`flex items-center justify-start ${index <= currentStep ? 'text-blue-400' : ''}`}>
                  {renderStepIcon(index)}
                  <span className="ml-2 hidden sm:inline">{step.label}</span>
                </li>
              ))}
            </ol>
          </div>
        );

      case "numbered":
        return (
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-700">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-400">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center gap-2 bg-gray-900 p-2">
                  <span className={`size-6 rounded-full ${index === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-700'} text-center text-[10px]/6 font-bold`}>
                    {index + 1}
                  </span>
                  <span className="hidden sm:block">{step.label}</span>
                </li>
              ))}
            </ol>
          </div>
        );

      case "iconBased":
        return (
          <ol className="grid grid-cols-1 divide-x divide-gray-700 overflow-hidden rounded-lg border border-gray-700 text-sm text-gray-400 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={index} className={`flex items-center justify-center gap-2 p-4 ${index === currentStep ? 'bg-gray-800' : ''}`}>
                {renderStepIcon(index)}
                <p className="leading-none">
                  <strong className="block font-medium">{step.label}</strong>
                  <small className="mt-1">{step.description}</small>
                </p>
              </li>
            ))}
          </ol>
        );

      case "checkmarks":
        return (
          <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-700">
            <ol className="grid grid-cols-3 text-sm font-medium text-gray-400">
              {steps.map((step, index) => (
                <li key={index} className={`relative flex justify-start ${index <= currentStep ? 'text-blue-400' : ''}`}>
                  <span className={`absolute -bottom-[1.75rem] start-0 rounded-full ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-700'} text-white`}>
                    {index < currentStep ? <Checkmark /> : <span className="block size-5" />}
                  </span>
                  <span className="hidden sm:block">{step.label}</span>
                </li>
              ))}
            </ol>
          </div>
        );

      case "compact":
        return (
          <ol className="flex items-center gap-2 text-xs font-medium text-gray-400">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center gap-2">
                {index <= currentStep ? (
                  <span className="rounded bg-blue-600/10 p-1.5 text-blue-400">
                    <Checkmark />
                  </span>
                ) : (
                  <span className="size-6 rounded bg-gray-700 text-center text-[10px]/6 font-bold">
                    {index + 1}
                  </span>
                )}
                <span>{step.label}</span>
              </li>
            ))}
          </ol>
        );

      default:
        return null;
    }
  };

  return renderStepIndicator();
};

const StepIndicatorLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(STEP_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Step Indicator Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable step indicator components for multi-step processes
          </p>
        </div>

        {Object.entries(STEP_TYPES).map(([type, config]) => (
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
                  onClick={() =>
                    copyCodeToClipboard(
                      `<StepIndicator
  type="${type}"
  steps={[
    { label: "Details", description: "Some info about you" },
    { label: "Address", description: "Where we sending it?" },
    { label: "Payment", description: "Show us the money" }
  ]}
  currentStep={1}
/>`
                    )
                  }
                  className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400 transition-all duration-200 hover:bg-blue-600/20"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-300 overflow-x-auto">
                <code>{`<StepIndicator
  type="${type}"
  steps={[
    { label: "Details", description: "Some info about you" },
    { label: "Address", description: "Where we sending it?" },
    { label: "Payment", description: "Show us the money" }
  ]}
  currentStep={1}
/>`}</code>
              </pre>
            ) : (
              <div className="rounded-xl bg-gray-950 p-4">
                <StepIndicator type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicatorLibrary;