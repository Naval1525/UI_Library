'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Image from "next/image";

const DocsNavigation = ({ activeSection, onSectionChange }) => {
  const sections = {
    'Form Elements': ['Alert', 'Badge', 'Button', 'Checkbox', 'Input', 'RadioGroup', 'Select', 'TextArea', 'Toggle', 'QuantityInput', 'AuthForm'],
    'Navigation': ['Breadcrumb', 'Dropdown', 'Header', 'Pagination', 'SideMenu', 'VerticalMenu', 'Steps', 'Tabs'],
    'Data Display': ['DetailsList', 'Divider', 'Grid', 'Media', 'Progress', 'Stats', 'Table'],
    'Feedback': ['ErrorPage', 'Filter', 'Popup'],
    'Marketing': ['Announcement', 'Banner', 'Block Cart', 'Card', 'Cart', 'CTA', 'FAQ', 'Footer', 'Form', 'Pricing', 'Product Card', 'Product Collection', 'Testimonial']
  };

  return (
    <div className="w-64 bg-zinc-900 h-screen fixed left-0 top-0 overflow-y-auto border-r border-zinc-800">
       <div className="flex items-center">
              <a href="/" title="Home" className="flex items-center">
                <Image
                  className="w-24 h-16"
                  src="/logo2.png"
                  alt="Company Logo"
                  width={144}
                  height={36}
                  priority
                />
                <span className="text-4xl font-extrabold r-2">Tech.UI</span>
              </a>
            </div>
      {Object.entries(sections).map(([section, items]) => (
        <div key={section} className="mb-6">
          <h2 className="px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            {section}
          </h2>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => onSectionChange(item)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    activeSection === item
                      ? 'bg-pink-500/10 text-pink-500 border-r-2 border-pink-500'
                      : 'text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const ComponentDocumentation = ({ component }) => {
  const componentData = {
    Alert: {
      description: "A versatile alert component for displaying important messages or notifications.",
      props: [
        { name: "type", type: "'success' | 'error' | 'warning' | 'info'", required: true, description: "Determines the style and icon of the alert" },
        { name: "message", type: "string", required: true, description: "The main message to display" },
        { name: "title", type: "string", required: false, description: "Optional title for the alert" }
      ],
      examples: [
        {
          title: "Basic Usage",
          code: `<Alert type="success" message="Operation completed successfully" />`
        },
        {
          title: "With Title",
          code: `<Alert
  type="error"
  title="Error Occurred"
  message="Please check your input and try again"
/>`
        }
      ]
    }
    // Add more component documentation as needed
  };

  const data = componentData[component] || {
    description: "Documentation coming soon",
    props: [],
    examples: []
  };

  return (
    <div className="py-8 px-6">
      <h1 className="text-3xl font-bold text-pink-500 mb-2">{component}</h1>
      <p className="text-zinc-300 mb-8">{data.description}</p>

      {data.props.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-pink-400 mb-4">Props</h2>
          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-pink-500">Prop</th>
                  <th className="px-6 py-3 text-sm font-semibold text-pink-500">Type</th>
                  <th className="px-6 py-3 text-sm font-semibold text-pink-500">Required</th>
                  <th className="px-6 py-3 text-sm font-semibold text-pink-500">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {data.props.map((prop) => (
                  <tr key={prop.name}>
                    <td className="px-6 py-4 text-sm font-mono text-zinc-300">{prop.name}</td>
                    <td className="px-6 py-4 text-sm font-mono text-zinc-400">{prop.type}</td>
                    <td className="px-6 py-4 text-sm text-zinc-300">{prop.required ? "Yes" : "No"}</td>
                    <td className="px-6 py-4 text-sm text-zinc-300">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {data.examples.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-pink-400 mb-4">Examples</h2>
          {data.examples.map((example, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium text-pink-300 mb-2">{example.title}</h3>
              <div className="bg-zinc-900 rounded-lg p-4">
                <pre className="text-sm font-mono text-zinc-300 whitespace-pre-wrap">
                  {example.code}
                </pre>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('Alert');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <DocsNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="ml-64">
        <ComponentDocumentation component={activeSection} />
      </div>
    </div>
  );
};

export default DocumentationPage;