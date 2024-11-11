"use client";

import React, { useState } from "react";

const STATS_TYPES = {
  default: {
    title: "Default Stats Card",
    description: "Basic stats card with top-right trend indicator",
  },
  horizontal: {
    title: "Horizontal Stats Card",
    description: "Stats card with side-by-side layout",
  },
  compact: {
    title: "Compact Stats Card",
    description: "Minimal stats card with bottom trend",
  },
  iconLeft: {
    title: "Icon Left Stats Card",
    description: "Stats card with left-aligned icon",
  },
  iconRight: {
    title: "Icon Right Stats Card",
    description: "Stats card with right-aligned icon",
  },
};

const DEMO_DATA = {
  profit: {
    label: "Profit",
    value: "$240.94",
    trend: 67.81,
    previousValue: "$404.32",
  },
  loss: {
    label: "Loss",
    value: "-$156.24",
    trend: -45.92,
    previousValue: "$284.67",
  }
};

const StatsCard = ({ 
  type = "default", 
  label = "Profit",
  value = "$240.94",
  trend = 67.81,
  previousValue = "$404.32",
  icon = "wallet" 
}) => {
  const isPositiveTrend = trend > 0;
  
  const TrendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isPositiveTrend 
          ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        }
      />
    </svg>
  );

  const WalletIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );

  const TrendBadge = () => (
    <div className={`inline-flex gap-2 rounded ${isPositiveTrend ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} p-1`}>
      <TrendIcon />
      <span className="text-xs font-medium">{Math.abs(trend)}%</span>
    </div>
  );

  const renderStatsCard = () => {
    switch (type) {
      case "default":
        return (
          <article className="flex flex-col gap-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
            <div className="inline-flex gap-2 self-end">
              <TrendBadge />
            </div>

            <div>
              <strong className="block text-sm font-medium text-gray-400">{label}</strong>
              <p>
                <span className={`text-2xl font-medium ${isPositiveTrend ? 'text-green-400' : 'text-red-400'}`}>
                  {value}
                </span>
                <span className="text-xs text-gray-400"> from {previousValue}</span>
              </p>
            </div>
          </article>
        );

      case "horizontal":
        return (
          <article className="flex items-end justify-between rounded-lg border border-gray-700 bg-gray-800 p-6">
            <div className="flex items-center gap-4">
              <span className={`hidden rounded-full ${isPositiveTrend ? 'bg-green-100/10 text-green-400' : 'bg-red-100/10 text-red-400'} p-2 sm:block`}>
                <WalletIcon />
              </span>

              <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className={`text-2xl font-medium ${isPositiveTrend ? 'text-green-400' : 'text-red-400'}`}>
                  {value}
                </p>
              </div>
            </div>

            <TrendBadge />
          </article>
        );

      case "compact":
        return (
          <article className="rounded-lg border border-gray-700 bg-gray-800 p-6">
            <div>
              <p className="text-sm text-gray-400">{label}</p>
              <p className={`text-2xl font-medium ${isPositiveTrend ? 'text-green-400' : 'text-red-400'}`}>
                {value}
              </p>
            </div>

            <div className={`mt-1 flex gap-1 ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`}>
              <TrendIcon />
              <p className="flex gap-2 text-xs">
                <span className="font-medium">{Math.abs(trend)}%</span>
                <span className="text-gray-400">Since last week</span>
              </p>
            </div>
          </article>
        );

      case "iconLeft":
        return (
          <article className="flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
            <span className={`rounded-full ${isPositiveTrend ? 'bg-green-100/10 text-green-400' : 'bg-red-100/10 text-red-400'} p-3`}>
              <WalletIcon />
            </span>

            <div>
              <p className={`text-2xl font-medium ${isPositiveTrend ? 'text-green-400' : 'text-red-400'}`}>
                {value}
              </p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          </article>
        );

      case "iconRight":
        return (
          <article className="rounded-lg border border-gray-700 bg-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className={`text-2xl font-medium ${isPositiveTrend ? 'text-green-400' : 'text-red-400'}`}>
                  {value}
                </p>
              </div>

              <span className={`rounded-full ${isPositiveTrend ? 'bg-green-100/10 text-green-400' : 'bg-red-100/10 text-red-400'} p-3`}>
                <WalletIcon />
              </span>
            </div>

            <div className={`mt-1 flex gap-1 ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`}>
              <TrendIcon />
              <p className="flex gap-2 text-xs">
                <span className="font-medium">{Math.abs(trend)}%</span>
                <span className="text-gray-400">Since last week</span>
              </p>
            </div>
          </article>
        );

      default:
        return null;
    }
  };

  return renderStatsCard();
};

const StatsCardLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(STATS_TYPES).reduce(
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
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Stats Card Components</h2>
          <p className="text-gray-400 mt-2">
            A collection of customizable statistics card components for profit and loss scenarios
          </p>
        </div>

        {Object.entries(STATS_TYPES).map(([type, config]) => (
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
                      `<StatsCard
  type="${type}"
  label="${DEMO_DATA.profit.label}"
  value="${DEMO_DATA.profit.value}"
  trend={${DEMO_DATA.profit.trend}}
  previousValue="${DEMO_DATA.profit.previousValue}"
/>`
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
                <code>{`<StatsCard
  type="${type}"
  label="${DEMO_DATA.profit.label}"
  value="${DEMO_DATA.profit.value}"
  trend={${DEMO_DATA.profit.trend}}
  previousValue="${DEMO_DATA.profit.previousValue}"
/>`}</code>
              </pre>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-950 rounded-xl">
                <StatsCard type={type} {...DEMO_DATA.profit} />
                <StatsCard type={type} {...DEMO_DATA.loss} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCardLibrary;