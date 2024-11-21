"use client"
import React, { useState } from 'react';

/**
 * Constants for Description List Types
 */
const DESCRIPTION_LIST_TYPES = {
  default: {
    title: "Default Description List",
    items: [
      { label: "Title", value: "Mr" },
      { label: "Name", value: "John Frusciante" },
      { label: "Occupation", value: "Guitarist" },
      { label: "Salary", value: "$1,000,000+" },
      {
        label: "Bio",
        value:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?",
      },
    ],
    styles: {
      container: "flow-root",
      row: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4",
      label: "font-medium text-gray-200", // Light gray for dark background
      value: "text-gray-400 sm:col-span-2", // Slightly darker for value
    },
  },
  alternating: {
    title: "Alternating Description List",
    items: [
      { label: "Title", value: "Mr" },
      { label: "Name", value: "John Frusciante" },
      { label: "Occupation", value: "Guitarist" },
      { label: "Salary", value: "$1,000,000+" },
      {
        label: "Bio",
        value:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?",
      },
    ],
    styles: {
      container: "flow-root",
      row: "grid grid-cols-1 gap-1 py-3 even:bg-gray-800/30 sm:grid-cols-3 sm:gap-4",
      label: "font-medium text-gray-200",
      value: "text-gray-400 sm:col-span-2",
    },
  },
  bordered: {
    title: "Bordered Description List",
    items: [
      { label: "Title", value: "Mr" },
      { label: "Name", value: "John Frusciante" },
      { label: "Occupation", value: "Guitarist" },
      { label: "Salary", value: "$1,000,000+" },
      {
        label: "Bio",
        value:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?",
      },
    ],
    styles: {
      container: "flow-root rounded-lg border border-gray-700 py-3 shadow-sm",
      row: "grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4",
      label: "font-medium text-gray-200",
      value: "text-gray-400 sm:col-span-2",
    },
  },
  borderedAlternating: {
    title: "Bordered Alternating Description List",
    items: [
      { label: "Title", value: "Mr" },
      { label: "Name", value: "John Frusciante" },
      { label: "Occupation", value: "Guitarist" },
      { label: "Salary", value: "$1,000,000+" },
      {
        label: "Bio",
        value:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?",
      },
    ],
    styles: {
      container: "flow-root rounded-lg border border-gray-700 py-3 shadow-sm",
      row: "grid grid-cols-1 gap-1 p-3 even:bg-gray-800/30 sm:grid-cols-3 sm:gap-4",
      label: "font-medium text-gray-200",
      value: "text-gray-400 sm:col-span-2",
    },
  },
};

const generateDescriptionListCode = (descriptionList, variant) => {
  const styles = descriptionList.styles;
  
  return `
<div className="${styles.container}">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    ${descriptionList.items.map((item, index) => `
    <div className="${styles.row}">
      <dt className="${styles.label}">${item.label}</dt>
      <dd className="${styles.value}">${item.value}</dd>
    </div>`).join('')}
  </dl>
</div>`;
};

const DescriptionList = ({ descriptionList, variant }) => (
  <div className={descriptionList.styles.container}>
    <dl className="-my-3 divide-y divide-gray-100 text-sm">
      {descriptionList.items.map((item, index) => (
        <div key={index} className={descriptionList.styles.row}>
          <dt className={descriptionList.styles.label}>{item.label}</dt>
          <dd className={descriptionList.styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const DescriptionListLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(DESCRIPTION_LIST_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(DESCRIPTION_LIST_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: 'default'
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const descriptionList = DESCRIPTION_LIST_TYPES[type];
    const code = generateDescriptionListCode(descriptionList, selectedVariant[type]);
    navigator.clipboard.writeText(code);
  };

  const toggleCode = (type) => {
    setShowCode(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Description List Components</h2>
          <p className="text-gray-400 mt-2">Customizable description list components for various use cases</p>
        </div>

        {/* Description List Previews */}
        {Object.entries(DESCRIPTION_LIST_TYPES).map(([type, descriptionList]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {descriptionList.title}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleCode(type)}
                  className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(type)}
                  className="px-4 py-2 rounded-full bg-fuchsia-600/10 text-fuchsia-400 hover:bg-fuchsia-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-800">
                <code>{generateDescriptionListCode(descriptionList, selectedVariant[type])}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <DescriptionList descriptionList={descriptionList} variant={selectedVariant[type]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionListLibrary;