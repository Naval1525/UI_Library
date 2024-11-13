"use client"
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = {
  "Form Elements": ["Alert","Badge", "Button", "Checkbox", "Input", "RadioGroup", "Select", "TextArea", "Toggle", "QuantityInput","AuthForm"],
  "Navigation": ["Breadcrumb", "Dropdown", "Header", "Pagination", "SideMenu", "Vertical Menu", "Steps", "Tabs"],
  "Data Display": ["DetailsList", "Divider", "Grid", "Media", "Progress", "Stats", "Table"],
  "Feedback": ["ErrorPage", "Filter", "Popup"],
  "Marketing": ["Announcement", "Banner", "Block Cart", "Card", "Cart", "CTA", "FAQ", "Footer", "Form", "Pricing", "Product Card", "Product Collection", "Testimonial"]
};

const ComponentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const allComponents = Object.values(categories).flat();

  const filteredComponents = allComponents.filter(component => {
    const matchesSearch = component.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" ||
      Object.entries(categories).find(([cat, items]) =>
        cat === selectedCategory && items.includes(component)
      );
    return matchesSearch && matchesCategory;
  });

  const handleComponentClick = (component) => {
    const route = component.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${route}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Component Library
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Browse and discover our beautifully designed UI components. Get inspired and use them in your projects.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <div className="relative">
              <div className="absolute rounded-full -inset-px bg-gradient-to-r from-white to-fuchsia-600" />
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search components..."
                  className="w-full pl-14 pr-4 py-4 sm:py-5 rounded-full border border-transparent focus:ring-2 focus:ring-fuchsia-600 bg-gray-800 text-white placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute rounded-full -inset-px bg-gradient-to-r from-white to-fuchsia-600" />
            <div className="relative flex items-center gap-2 bg-gray-800 rounded-full">
              <Filter className="text-gray-500 w-5 h-5 ml-6" />
              <select
                className="px-4 py-4 sm:py-5 rounded-full border-0 focus:ring-2 focus:ring-fuchsia-600 bg-gray-800 text-white appearance-none pr-12"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {Object.keys(categories).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredComponents.map((component) => (
            <div
              key={component}
              onClick={() => handleComponentClick(component)}
              className="relative group cursor-pointer transition-all transform hover:scale-105"
            >
              <div className="absolute rounded-lg -inset-px bg-gradient-to-r from-pink-500 to-purple-600 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-white mb-2">{component}</h3>
                <p className="text-gray-400 text-sm">
                  Click to view {component.toLowerCase()} documentation and examples
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No components found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentLibrary;
