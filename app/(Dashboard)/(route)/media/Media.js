"use client"
import React from 'react';

const CARD_TYPES = {
  imageLeft: {
    title: "Left-aligned Media Card",
    description: "Media card with image on the left"
  },
  imageRight: {
    title: "Right-aligned Media Card",
    description: "Media card with image on the right"
  }
};

const MediaCard = ({ type = 'imageLeft', title, description, imageSrc, imageAlt }) => {
  const isRightAligned = type === 'imageRight';
  
  return (
    <div className={`flex ${isRightAligned ? 'flex-row-reverse' : ''} items-stretch gap-4`}>
      <img
        src={imageSrc || "/api/placeholder/80/80"}
        alt={imageAlt || ""}
        className="aspect-square w-20 rounded-lg object-cover border border-gray-700"
      />

      <div>
        <h3 className="text-lg/tight font-medium text-gray-300">
          {title || "Title goes here"}
        </h3>

        <p className="mt-0.5 text-gray-400">
          {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."}
        </p>
      </div>
    </div>
  );
};

const MediaCardLibrary = () => {
  const [showCode, setShowCode] = React.useState(
    Object.keys(CARD_TYPES).reduce((acc, type) => ({
      ...acc,
      [type]: false
    }), {})
  );

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Media Card Components</h2>
          <p className="text-gray-400 mt-2">A collection of customizable media card components</p>
        </div>

        {/* Media Card Previews */}
        {Object.entries(CARD_TYPES).map(([type, config]) => (
          <div key={type} className="space-y-4 border border-gray-800 rounded-xl p-6 bg-gray-800/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{config.title}</h3>
                <p className="text-gray-400 mt-1 text-sm">{config.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCode(prev => ({
                    ...prev,
                    [type]: !prev[type]
                  }))}
                  className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                >
                  {showCode[type] ? "View UI" : "View Code"}
                </button>
                <button
                  onClick={() => copyCodeToClipboard(`<MediaCard type="${type}" />`)}
                  className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all duration-200"
                >
                  Copy Code
                </button>
              </div>
            </div>

            {showCode[type] ? (
              <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto border border-gray-700">
                <code>{`<MediaCard
  type="${type}"
  title="Custom Title"
  description="Custom description text goes here"
  imageSrc="/api/placeholder/80/80"
  imageAlt="Media description"
/>`}</code>
              </pre>
            ) : (
              <div className="p-4 bg-gray-950 rounded-xl">
                <MediaCard type={type} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCardLibrary;