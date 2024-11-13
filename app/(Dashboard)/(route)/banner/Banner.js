"use client";
import React, { useState } from "react";

const HeroSections = () => {
  const [activeSection, setActiveSection] = useState("modern");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl space-y-8 p-8">
        <div className="border-b border-gray-800 pb-5">
          <h2 className="text-3xl font-semibold">Hero Section Variants</h2>
          <p className="mt-2 text-gray-400">
            Choose from different hero section styles to enhance your user engagement
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          {["modern", "gradient", "image"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveSection(type)}
              className={`rounded-full px-4 py-2 transition-all duration-200 ${
                activeSection === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {activeSection === "modern" && (
          <section className="bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Transform Data into Insights
                  <span className="sm:block">Elevate Your Analytics</span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">
                  Unlock powerful analytics tools that transform complex data into actionable insights.
                  Make informed decisions faster than ever before.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="#"
                  >
                    Start Analysis
                  </a>

                  <a
                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="#"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "gradient" && (
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  Streamline Workflows.
                  <strong className="font-extrabold text-blue-400 sm:block">
                    Boost Productivity.
                  </strong>
                </h1>

                <p className="mt-4 sm:text-xl/relaxed text-gray-300">
                  Automate repetitive tasks and optimize your team's workflow with our
                  intelligent process management tools.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="#"
                  >
                    Try It Free
                  </a>

                  <a
                    className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-400 shadow hover:text-blue-300 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                    href="#"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "image" && (
          <section className="relative bg-gray-900">
            <div className="absolute inset-0 overflow-hidden">
              {/* Using a placeholder image for demo purposes */}
              <img
                src="./heroback.png"
                alt="Background"
                className="h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="max-w-xl text-left">
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                  Build Better
                  <strong className="block font-extrabold text-blue-400">
                    Digital Experiences
                  </strong>
                </h1>

                <p className="mt-4 max-w-lg text-gray-300 sm:text-xl/relaxed">
                  Create engaging user experiences that convert visitors into loyal customers
                  with our comprehensive design tools.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  >
                    Start Creating
                  </a>

                  <a
                    href="#"
                    className="block w-full rounded bg-gray-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-600 sm:w-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default HeroSections;