"use client";
import React, { useState } from "react";

// Icon components
const SettingsIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const MessagesIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
    />
  </svg>
);

const ArchiveIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </svg>
);

const NotificationsIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
    />
  </svg>
);

const TAB_TYPES = {
  default: {
    title: "Default Tabs",
    description: "Simple, clean tab design with hover effects",
    code: `
<div>
  <div className="sm:hidden">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option select>Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <nav className="flex gap-6" aria-label="Tabs">
      <a
        href="#"
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Settings
      </a>

      <a
        href="#"
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Messages
      </a>

      <a
        href="#"
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Archive
      </a>

      <a
        href="#"
        className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
        aria-current="page"
      >
        Notifications
      </a>
    </nav>
  </div>
</div>`,
  },
  underlined: {
    title: "Underlined Tabs",
    description: "Tabs with bottom border indicators",
    code: `
<div>
  <div className="sm:hidden">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option select>Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          Settings
        </a>

        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
            />
          </svg>

          Messages
        </a>

        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>

          Archive
        </a>

        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-2 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
          aria-current="page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>

          Notifications
        </a>
      </nav>
    </div>
  </div>
</div>`,
  },
  contained: {
    title: "Contained Tabs",
    description: "Tabs with background highlight",
    code: `
<div>
  <div className="sm:hidden">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option select>Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Settings
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Messages
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Archive
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
          aria-current="page"
        >
          Notifications
        </a>
      </nav>
    </div>
  </div>
</div>`,
  },
  boxed: {
    title: "Boxed Tabs",
    description: "Tabs with border and active state",
    code: `
<div>
  <div className="sm:hidden">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option select>Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6">
        <a
          href="#"
          className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Settings
        </a>

        <a
          href="#"
          className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Messages
        </a>

        <a
          href="#"
          className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Archive
        </a>

        <a
          href="#"
          className="shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600"
        >
          Notifications
        </a>
      </nav>
    </div>
  </div>
</div>`,
  },
};

const DEMO_DATA = {
  tabs: [
    { label: "Settings", icon: SettingsIcon },
    { label: "Messages", icon: MessagesIcon },
    { label: "Archive", icon: ArchiveIcon },
    { label: "Notifications", icon: NotificationsIcon },
  ],
  currentTab: 3,
};

const TabComponent = ({
  type = "default",
  tabs = DEMO_DATA.tabs,
  currentTab = DEMO_DATA.currentTab,
}) => {
  const renderMobileSelect = () => (
    <div className="sm:hidden">
      <label htmlFor="Tab" className="sr-only">
        Tab
      </label>
      <select
        id="Tab"
        className="w-full rounded-md border-gray-700 bg-gray-800 text-gray-300"
      >
        {tabs.map((tab, index) => (
          <option key={index} selected={index === currentTab}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>
  );

  const renderTabs = () => {
    switch (type) {
      case "default":
        return (
          <nav className="hidden sm:flex gap-6" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`inline-flex shrink-0 items-center gap-2 rounded-lg p-2 text-sm font-medium
                  ${
                    index === currentTab
                      ? "bg-blue-600/10 text-blue-400"
                      : "text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                  }`}
                aria-current={index === currentTab ? "page" : undefined}
              >
                <tab.icon className="size-5" />
                {tab.label}
              </a>
            ))}
          </nav>
        );

      case "underlined":
        return (
          <nav
            className="hidden sm:flex gap-6 border-b border-gray-700"
            aria-label="Tabs"
          >
            {tabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium
                  ${
                    index === currentTab
                      ? "border-blue-400 text-blue-400"
                      : "border-transparent text-gray-400 hover:border-gray-700 hover:text-gray-300"
                  }`}
                aria-current={index === currentTab ? "page" : undefined}
              >
                <tab.icon className="size-5" />
                {tab.label}
              </a>
            ))}
          </nav>
        );

      case "contained":
        return (
          <nav
            className="hidden sm:flex gap-1 rounded-lg bg-gray-800 p-1"
            aria-label="Tabs"
          >
            {tabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
                  ${
                    index === currentTab
                      ? "bg-gray-900 text-blue-400"
                      : "text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                  }`}
                aria-current={index === currentTab ? "page" : undefined}
              >
                <tab.icon className="size-5" />
                {tab.label}
              </a>
            ))}
          </nav>
        );

      case "boxed":
        return (
          <nav
            className="hidden sm:flex border-b border-gray-700"
            aria-label="Tabs"
          >
            {tabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`inline-flex shrink-0 items-center gap-2 border-x border-t px-4 py-2 text-sm font-medium
                  ${
                    index === currentTab
                      ? "rounded-t-lg border-gray-700 border-b-gray-900 bg-gray-900 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
                aria-current={index === currentTab ? "page" : undefined}
              >
                <tab.icon className="size-5" />
                {tab.label}
              </a>
            ))}
          </nav>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {renderMobileSelect()}
      <div className="hidden sm:block">{renderTabs()}</div>
    </div>
  );
};

const TabComponentLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(TAB_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Tab Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable tab components for navigation and
            content organization
          </p>
        </div>

        {Object.entries(TAB_TYPES).map(([type, config]) => (
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
                  className="rounded-full bg-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white"
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
                <TabComponent type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponentLibrary;
