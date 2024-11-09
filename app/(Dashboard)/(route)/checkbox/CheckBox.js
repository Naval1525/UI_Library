"use client"
import React, { useState } from 'react';

const CHECKBOX_GROUP_TYPES = {
  simple: {
    title: "Simple Checkbox Group",
    description: null,
    items: [
      { id: "1", name: "John Clapton" },
      { id: "2", name: "Peter Mayer" },
      { id: "3", name: "Eric King" }
    ]
  },
  withHeader: {
    title: "Checkbox Group with Header",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa.",
    items: [
      { id: "4", name: "John Clapton" },
      { id: "5", name: "Peter Mayer" },
      { id: "6", name: "Eric King" }
    ]
  },
  withDescription: {
    title: "Checkbox Group with Descriptions",
    description: null,
    items: [
      { 
        id: "7", 
        name: "John Clapton",
        description: "Lorem ipsum dolor sit amet consectetur."
      },
      { 
        id: "8", 
        name: "Peter Mayer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto!"
      },
      { 
        id: "9", 
        name: "Eric King",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia."
      }
    ]
  },
  withHighlight: {
    title: "Checkbox Group with Highlight",
    description: null,
    items: [
      { 
        id: "10", 
        name: "John Clapton",
        description: "Lorem ipsum dolor sit amet consectetur."
      },
      { 
        id: "11", 
        name: "Peter Mayer",
        description: "Lorem ipsum dolor sit amet consectetur."
      },
      { 
        id: "12", 
        name: "Eric King",
        description: "Lorem ipsum dolor sit amet consectetur."
      }
    ]
  },
  bordered: {
    title: "Bordered Checkbox Group with Highlight",
    description: null,
    items: [
      { 
        id: "13", 
        name: "John Clapton",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      { 
        id: "14", 
        name: "Peter Mayer",
        description: "Lorem ipsum dolor sit amet consectetur."
      },
      { 
        id: "15", 
        name: "Eric King",
        description: "Lorem ipsum dolor sit amet consectetur."
      }
    ]
  }
};

const generateCheckboxGroupCode = (groupType, variant) => {
  const group = CHECKBOX_GROUP_TYPES[groupType];
  
  let className = variant;
  if (groupType === 'withHighlight') {
    className += ' data-[checked=true]:bg-fuchsia-500/10 data-[checked=true]:border-fuchsia-500/20';
  }
  
  return `
<fieldset>
  ${group.title && !variant.includes('sr-only') ? 
    `<legend className="text-lg font-medium text-gray-300">${group.title}</legend>` : 
    `<legend className="sr-only">Checkboxes</legend>`}
  ${group.description ? 
    `<p className="mt-1 text-pretty text-sm text-gray-400">${group.description}</p>` : ''}
  <div className="${variant.includes('divide') ? 'divide-y divide-gray-800' : 'space-y-2'} ${variant.includes('mt') ? 'mt-4' : ''}">
    ${group.items.map(item => `
    <label
      htmlFor="${item.id}"
      className="${className}"
      data-checked="false"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="size-4 rounded border-gray-700 bg-gray-900 text-fuchsia-500"
          id="${item.id}"
        />
      </div>
      <div>
        <strong className="font-medium text-gray-300">${item.name}</strong>
        ${item.description ? `
        <p className="mt-1 text-pretty text-sm text-gray-400">
          ${item.description}
        </p>` : ''}
      </div>
    </label>`).join('')}
  </div>
</fieldset>`;
};

const CheckboxGroup = ({ group, variant }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleChange = (id) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <fieldset>
      {group.title && !variant.includes('sr-only') && (
        <legend className="text-lg font-medium text-gray-300">{group.title}</legend>
      )}
      {group.title && variant.includes('sr-only') && (
        <legend className="sr-only">Checkboxes</legend>
      )}
      {group.description && (
        <p className="mt-1 text-pretty text-sm text-gray-400">{group.description}</p>
      )}
      <div className={`${variant.includes('divide') ? 'divide-y divide-gray-800' : 'space-y-2'} ${variant.includes('mt') ? 'mt-4' : ''}`}>
        {group.items.map((item) => (
          <label
            key={item.id}
            htmlFor={item.id}
            className={`${variant} ${selectedItems.has(item.id) && variant.includes('highlight') ? 'bg-fuchsia-500/10 border-fuchsia-500/20' : ''}`}
            data-checked={selectedItems.has(item.id)}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-700 bg-gray-900 text-fuchsia-500"
                id={item.id}
                checked={selectedItems.has(item.id)}
                onChange={() => handleChange(item.id)}
              />
            </div>
            <div>
              <strong className="font-medium text-gray-300">{item.name}</strong>
              {item.description && (
                <p className="mt-1 text-pretty text-sm text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

const CheckboxGroupLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(CHECKBOX_GROUP_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const variants = {
    simple: "flex cursor-pointer items-start gap-4",
    withHeader: "flex cursor-pointer items-start gap-4",
    withDescription: "flex cursor-pointer items-start gap-4 py-4",
    withHighlight: "-mx-4 flex cursor-pointer items-start gap-4 p-4 hover:bg-gray-800/50 border border-transparent transition-colors duration-200",
    bordered: "flex cursor-pointer items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-800/50"
  };

  const copyCodeToClipboard = (type) => {
    const code = generateCheckboxGroupCode(type, variants[type]);
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
          <h2 className="text-3xl font-semibold">Checkbox Group Components</h2>
          <p className="text-gray-400 mt-2">Customizable checkbox group components for various use cases</p>
        </div>

        {/* Checkbox Group Previews */}
        {Object.entries(CHECKBOX_GROUP_TYPES).map(([type, group]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {group.title}
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
                <code>{generateCheckboxGroupCode(type, variants[type])}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <CheckboxGroup group={group} variant={variants[type]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroupLibrary;