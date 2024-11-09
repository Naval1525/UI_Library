"use client"
import React, { useState } from 'react';

/**
 * Constants & Button Group Types
 */
const BUTTON_GROUP_TYPES = {
  default: {
    title: "Text Button Group",
    buttons: [
      { label: 'Edit' },
      { label: 'View' },
      { label: 'Delete' }
    ],
    styles: {
      solid: "border bg-white shadow-sm",
      outlined: "border-gray-700 bg-transparent"
    }
  },
  iconOnly: {
    title: "Icon Button Group",
    buttons: [
      { 
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        ),
        title: "Edit Product"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        ),
        title: "Delete Product"
      }
    ],
    styles: {
      solid: "border bg-white shadow-sm",
      outlined: "border-gray-700 bg-transparent"
    }
  },
  mixed: {
    title: "Mixed Button Group",
    buttons: [
      { 
        label: "Create Order",
        border: true
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
        ),
        title: "View Orders"
      }
    ],
    styles: {
      solid: "border bg-white shadow-sm",
      outlined: "border-gray-700 bg-transparent"
    }
  },
  modern: {
    title: "Modern Button Group",
    buttons: [
      { 
        label: "Edit",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        )
      },
      {
        label: "View",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        label: "Delete",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12l-15 6v-12l15 6z" />
          </svg>
        )
      }
    ],
    styles: {
      solid: "border-gray-100 bg-gray-100",
      outlined: "border-gray-700 bg-transparent"
    }
  }
};

const generateButtonGroupCode = (buttonGroup, variant) => {
  const baseGroupStyles = variant === 'solid' ? 
    buttonGroup.styles.solid : 
    buttonGroup.styles.outlined;
    
  return `
<span className="inline-flex overflow-hidden rounded-lg ${baseGroupStyles}">
  ${buttonGroup.buttons.map((button, index) => `
  <button
    ${button.title ? `title="${button.title}"` : ''}
    className="inline-flex items-center gap-2 ${button.border ? 'border-e' : ''} px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
  >
    ${button.icon ? button.icon.type : ''}
    ${button.label ? button.label : ''}
  </button>`).join('')}
</span>`;
};

const ButtonGroup = ({ buttonGroup, variant }) => (
  <span className={`inline-flex overflow-hidden rounded-lg ${buttonGroup.styles[variant]}`}>
    {buttonGroup.buttons.map((button, index) => (
      <button
        key={index}
        title={button.title}
        className={`inline-flex items-center gap-2 ${
          button.border ? 'border-e' : ''
        } px-4 py-2 text-sm font-medium ${
          variant === 'solid' ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-400 hover:text-gray-300'
        } focus:relative`}
      >
        {button.icon}
        {button.label}
      </button>
    ))}
  </span>
);

const ButtonGroupLibrary = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(BUTTON_GROUP_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(BUTTON_GROUP_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: 'solid'
    }), {})
  );

  const copyCodeToClipboard = (type) => {
    const buttonGroup = BUTTON_GROUP_TYPES[type];
    const code = generateButtonGroupCode(buttonGroup, selectedVariant[type]);
    navigator.clipboard.writeText(code);
  };

  const toggleCode = (type) => {
    setShowCode(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const toggleVariant = (type) => {
    setSelectedVariant(prev => ({
      ...prev,
      [type]: prev[type] === 'solid' ? 'outlined' : 'solid'
    }));
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Button Group Components</h2>
          <p className="text-gray-400 mt-2">Customizable button group components for various use cases</p>
        </div>

        {/* Button Group Previews */}
        {Object.entries(BUTTON_GROUP_TYPES).map(([type, buttonGroup]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {buttonGroup.title}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleVariant(type)}
                  className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                >
                  {selectedVariant[type] === 'solid' ? 'Show Outlined' : 'Show Solid'}
                </button>
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
                <code>{generateButtonGroupCode(buttonGroup, selectedVariant[type])}</code>
              </pre>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl">
                <ButtonGroup buttonGroup={buttonGroup} variant={selectedVariant[type]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroupLibrary;