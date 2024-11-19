"use client"
import React, { useState } from 'react';

const NAV_TYPES = {
  basic: {
    title: "Basic Navigation",
    description: "Simple vertical navigation with hover states",
    code: `<ul className="space-y-1">
  <li>
    <a href="#" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
      General
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Teams
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Billing
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Invoices
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Account
    </a>
  </li>
</ul>`
  },
  withIcons: {
    title: "Navigation with Icons",
    description: "Navigation menu with leading icons and active states",
    code: `<ul className="space-y-1">
  <li>
    <a href="#" className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      <span className="text-sm font-medium"> General </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      <span className="text-sm font-medium"> Teams </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
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

      <span className="text-sm font-medium"> Billing </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>

      <span className="text-sm font-medium"> Invoices </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>

      <span className="text-sm font-medium"> Account </span>
    </a>
  </li>
</ul>`
  },
  withSubmenus: {
    title: "Collapsible Navigation",
    description: "Navigation with expandable submenus",
    code: `<ul className="space-y-1">
  <li>
    <a href="#" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
      General
    </a>
  </li>

  <li>
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium"> Teams </span>

        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <ul className="mt-2 space-y-1 px-4">
        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Banned Users
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Calendar
          </a>
        </li>
      </ul>
    </details>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Billing
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Invoices
    </a>
  </li>

  <li>
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium"> Account </span>

        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <ul className="mt-2 space-y-1 px-4">
        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Details
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Security
          </a>
        </li>

        <li>
          <form action="#">
            <button
              type="submit"
              className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
            >
              Logout
            </button>
          </form>
        </li>
      </ul>
    </details>
  </li>
</ul>`
  },
  withBorders: {
    title: "Bordered Navigation",
    description: "Navigation with border indicators",
    code: `<ul>
  <li>
    <a
      href="#"
      className="flex items-center gap-2 border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      <span className="text-sm font-medium"> General </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      <span className="text-sm font-medium"> Teams </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
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

      <span className="text-sm font-medium"> Billing </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>

      <span className="text-sm font-medium"> Invoices </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>

      <span className="text-sm font-medium"> Account </span>
    </a>
  </li>
</ul>`
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