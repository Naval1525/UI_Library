"use client"
import React, { useState } from 'react';

const TABLE_TYPES = {
  default: {
    title: "Default Table",
    description: "Basic table with clean styling",
  },
  bordered: {
    title: "Bordered Table",
    description: "Table with border and rounded corners",
  },
  striped: {
    title: "Striped Table",
    description: "Table with alternating row colors",
  },
  interactive: {
    title: "Interactive Table",
    description: "Table with view actions for each row",
  },
  selectable: {
    title: "Selectable Table",
    description: "Table with row selection capabilities",
  },
  paginated: {
    title: "Paginated Table",
    description: "Table with pagination controls",
  }
};

const DEMO_DATA = {
  headers: ["Name", "Date of Birth", "Role", "Salary"],
  rows: [
    ["John Doe", "24/05/1995", "Web Developer", "$120,000"],
    ["Jane Doe", "04/11/1980", "Web Designer", "$100,000"],
    ["Gary Barlow", "24/05/1995", "Singer", "$20,000"]
  ]
};

const Table = ({ 
  type = "default",
  headers = DEMO_DATA.headers,
  rows = DEMO_DATA.rows
}) => {

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    if (selectedRows.size === rows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(rows.map((_, i) => i)));
    }
  };

  const toggleRowSelect = (index) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
  };

  const renderTable = () => {
    const baseTable = (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 text-sm">
          <thead className="bg-gray-800">
            <tr>
              {type === "selectable" && (
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    className="size-5 rounded border-gray-600 bg-gray-700"
                    checked={selectedRows.size === rows.length}
                    onChange={toggleSelectAll}
                  />
                </th>
              )}
              {headers.map((header, index) => (
                <th key={index} className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-300">
                  {header}
                </th>
              ))}
              {type === "interactive" && <th className="px-4 py-2"></th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={`${
                  type === "striped" && rowIndex % 2 === 0 ? "bg-gray-800/50" : ""
                }`}
              >
                {type === "selectable" && (
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      className="size-5 rounded border-gray-600 bg-gray-700"
                      checked={selectedRows.has(rowIndex)}
                      onChange={() => toggleRowSelect(rowIndex)}
                    />
                  </td>
                )}
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`whitespace-nowrap px-4 py-2 ${
                      cellIndex === 0 ? "font-medium text-gray-300" : "text-gray-400"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
                {type === "interactive" && (
                  <td className="whitespace-nowrap px-4 py-2">
                    <button className="rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
                      View
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    if (type === "paginated") {
      return (
        <div className="rounded-lg border border-gray-700">
          {baseTable}
          <div className="border-t border-gray-700 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <button className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                  <span className="sr-only">Prev Page</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
              {[1, 2, 3, 4].map((page) => (
                <li key={page}>
                  <button
                    className={`block size-8 rounded text-center leading-8 ${
                      currentPage === page
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li>
                <button className="inline-flex size-8 items-center justify-center rounded border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                  <span className="sr-only">Next Page</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            </ol>
          </div>
        </div>
      );
    }

    if (type === "bordered") {
      return (
        <div className="rounded-lg border border-gray-700">
          {baseTable}
        </div>
      );
    }

    return baseTable;
  };

  return renderTable();
};

const TableLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(TABLE_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Table Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable table components for displaying data
          </p>
        </div>

        {Object.entries(TABLE_TYPES).map(([type, config]) => (
          <div
            key={type}
            className="space-y-4 rounded-xl border border-gray-800 bg-gray-800/30 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{config.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCode((prev) => ({ ...prev, [type]: !prev[type] }))}
                  className="rounded-full bg-gray-700 px-4 py-2 text-gray-300 transition-all duration-200 hover:bg-gray-600 hover:text-white"
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(`<Table type="${type}" />`)}
                  className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400 transition-all duration-200 hover:bg-blue-600/20"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="overflow-x-auto rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-300">
                <code>{`<Table
  type="${type}"
  headers={["Name", "Date of Birth", "Role", "Salary"]}
  rows={[
    ["John Doe", "24/05/1995", "Web Developer", "$120,000"],
    ["Jane Doe", "04/11/1980", "Web Designer", "$100,000"],
    ["Gary Barlow", "24/05/1995", "Singer", "$20,000"]
  ]}
/>`}</code>
              </pre>
            ) : (
              <div className="rounded-xl bg-gray-950 p-4">
                <Table type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLibrary;