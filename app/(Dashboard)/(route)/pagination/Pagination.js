"use client"
import React from "react";

const PAGINATION_TYPES = {
  numbered: {
    title: "Numbered Pagination",
    description: "Pagination with numbered pages",
  },
  input: {
    title: "Input Pagination",
    description: "Pagination with number input",
  },
  simple: {
    title: "Simple Pagination",
    description: "Basic prev/next pagination with current page indicator",
  },
};

const PaginationControl = ({
  type = "numbered",
  currentPage = 2,
  totalPages = 12,
}) => {
  const renderPaginationControl = () => {
    switch (type) {
      case "numbered":
        return (
          <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            {[1, 2, 3, 4].map((page) =>
              page === currentPage ? (
                <li
                  key={page}
                  className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                >
                  {page}
                </li>
              ) : (
                <li key={page}>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-700 bg-gray-800 text-center leading-8 text-gray-300 hover:bg-gray-700"
                  >
                    {page}
                  </a>
                </li>
              )
            )}

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        );

      case "input":
        return (
          <div className="inline-flex justify-center gap-1">
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <div>
              <label htmlFor="PaginationPage" className="sr-only">
                Page
              </label>

              <input
                type="number"
                className="h-8 w-12 rounded border border-gray-700 bg-gray-800 p-0 text-center text-xs font-medium text-gray-300 focus:border-blue-500 focus:ring-blue-500 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                min="1"
                value={currentPage}
                id="PaginationPage"
              />
            </div>

            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        );

      case "simple":
        return (
          <div className="inline-flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <p className="text-xs text-gray-300">
              {currentPage}
              <span className="mx-0.25">/</span>
              {totalPages}
            </p>

            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return renderPaginationControl();
};

const PaginationLibrary = () => {
  const [showCode, setShowCode] = React.useState(
    Object.keys(PAGINATION_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Pagination Components</h2>
          <p className="text-gray-400 mt-2">
            A collection of customizable pagination controls
          </p>
        </div>

        {/* Pagination Control Previews */}
        {Object.entries(PAGINATION_TYPES).map(([type, config]) => (
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
                    copyCodeToClipboard(`<PaginationControl type="${type}" />`)
                  }
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-700">
                <code>{`<PaginationControl
  type="${type}"
  currentPage={2}
  totalPages={12}
/>`}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <PaginationControl type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginationLibrary;
