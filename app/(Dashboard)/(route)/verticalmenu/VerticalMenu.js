"use client"
import React, { useState } from 'react';

const NAV_TYPES = {
  basic: {
    title: "Basic Navigation",
    description: "Simple vertical navigation with hover states",
  },
  withIcons: {
    title: "Navigation with Icons",
    description: "Navigation menu with leading icons and active states",
  },
  withSubmenus: {
    title: "Collapsible Navigation",
    description: "Navigation with expandable submenus",
  },
  withBorders: {
    title: "Bordered Navigation",
    description: "Navigation with border indicators",
  }
};

const Navigation = ({ type = "basic", activeItem = "General" }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const commonItemClasses = "block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200";
  const activeClasses = "bg-blue-600 text-white";
  const inactiveClasses = "text-gray-400 hover:bg-gray-800 hover:text-white";

  const renderNav = () => {
    switch (type) {
      case "basic":
        return (
          <ul className="space-y-1">
            {["General", "Teams", "Projects", "Billing", "Account"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`${commonItemClasses} ${
                    activeItem === item ? activeClasses : inactiveClasses
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        );

      case "withIcons":
        return (
          <ul className="space-y-1">
            {[
              { name: "General", icon: "⚙️" },
              { name: "Teams", icon: "👥" },
              { name: "Projects", icon: "📁" },
              { name: "Billing", icon: "💳" },
              { name: "Account", icon: "👤" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`${commonItemClasses} flex items-center gap-3 ${
                    activeItem === item.name ? activeClasses : inactiveClasses
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        );

      case "withSubmenus":
        return (
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className={`${commonItemClasses} ${
                  activeItem === "General" ? activeClasses : inactiveClasses
                }`}
              >
                General
              </a>
            </li>
            <li>
              <button
                onClick={() => setOpenSubmenu(!openSubmenu)}
                className={`${commonItemClasses} w-full flex items-center justify-between ${
                  activeItem === "Teams" ? activeClasses : inactiveClasses
                }`}
              >
                <span>Teams</span>
                <span className={`transition-transform duration-200 ${openSubmenu ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openSubmenu && (
                <ul className="mt-1 ml-4 space-y-1">
                  <li>
                    <a href="#" className={`${commonItemClasses} ${inactiveClasses}`}>
                      Team Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${commonItemClasses} ${inactiveClasses}`}>
                      Members
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {["Projects", "Billing", "Account"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`${commonItemClasses} ${
                    activeItem === item ? activeClasses : inactiveClasses
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        );

      case "withBorders":
        return (
          <ul className="space-y-1">
            {["General", "Teams", "Projects", "Billing", "Account"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`flex items-center border-l-4 px-4 py-3 transition-colors duration-200 ${
                    activeItem === item
                      ? "border-blue-500 bg-gray-800 text-white"
                      : "border-transparent text-gray-400 hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return renderNav();
};

const NavigationLibrary = () => {
  const [activeStates, setActiveStates] = useState(
    Object.keys(NAV_TYPES).reduce(
      (acc, type) => ({
        ...acc,
        [type]: "General",
      }),
      {}
    )
  );

  const [showCode, setShowCode] = useState(
    Object.keys(NAV_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Navigation Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable navigation components with dark theme styling
          </p>
        </div>

        {Object.entries(NAV_TYPES).map(([type, config]) => (
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
                      `<Navigation
  type="${type}"
  activeItem={activeItem}
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
                <code>{`<Navigation
  type="${type}"
  activeItem={activeItem}
/>`}</code>
              </pre>
            ) : (
              <div className="rounded-xl bg-gray-950 p-4">
                <Navigation
                  type={type}
                  activeItem={activeStates[type]}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationLibrary;