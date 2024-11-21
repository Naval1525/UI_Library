"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const BANNER_TYPES = {
  simple: {
    title: "Simple Banner",
    description: "Basic notification banner with centered text",
    code: `<Banner type="simple" />`,
    fullCode: `const Banner = ({ type = "simple" }) => {
  return (
    <div className="bg-blue-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        Love React? <a href="#" className="inline-block underline">
          Check out this new course!
        </a>
      </p>
    </div>
  );
};`
  },
  dismissable: {
    title: "Dismissable Banner",
    description: "Banner with close button functionality",
    code: `<Banner type="dismissable" onDismiss={() => {}} />`,
    fullCode: `const Banner = ({ type = "dismissable", onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-between gap-4 bg-blue-600 px-4 py-3 text-white">
      <p className="text-sm font-medium">
        Love React? <a href="#" className="inline-block underline">
          Check out this new course!
        </a>
      </p>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss"
        className="shrink-0 rounded-lg bg-white/10 p-1 transition hover:bg-white/20"
      >
        <X className="size-5" />
      </button>
    </div>
  );
};`
  },
  responsive: {
    title: "Responsive Banner",
    description: "Banner that adapts to different screen sizes",
    code: `<Banner type="responsive" />`,
    fullCode: `const Banner = ({ type = "responsive" }) => {
  return (
    <div className="bg-blue-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p className="text-center font-medium sm:text-left">
        Love React? <br className="sm:hidden" />
        Check out this new deep dive course!
      </p>
      <a
        className="mt-4 block rounded-lg bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring active:text-gray-300 sm:mt-0"
        href="#"
      >
        Learn More
      </a>
    </div>
  );
};`
  },
  sliding: {
    title: "Sliding Banner",
    description: "Banner with multiple slides and navigation",
    code: `<Banner type="sliding" />`,
    fullCode: `const Banner = ({ type = "sliding" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { text: "Love React?", link: "Check out this new course!" },
    { text: "Love Next.js?", link: "Check out this new course!" },
    { text: "Love TypeScript?", link: "Check out this new course!" }
  ];

  return (
    <div className="bg-blue-600 px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-center justify-center text-white">
        <button
          onClick={() => setCurrentSlide((prev) => 
            prev === 0 ? slides.length - 1 : prev - 1
          )}
          className="hidden hover:text-gray-200 sm:block sm:rounded sm:transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5 rtl:rotate-180" />
        </button>

        <div className="mx-4 flex-1">
          <div className="text-center text-sm font-medium">
            {slides[currentSlide].text}{" "}
            <a href="#" className="block underline sm:inline-block">
              {slides[currentSlide].link}
            </a>
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => 
            prev === slides.length - 1 ? 0 : prev + 1
          )}
          className="hidden hover:text-gray-200 sm:block sm:rounded sm:transition"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
};`
  }
};

const Banner = ({ type = "simple", onDismiss }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    { text: "Love React?", link: "Check out this new course!" },
    { text: "Love Next.js?", link: "Check out this new course!" },
    { text: "Love TypeScript?", link: "Check out this new course!" },
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  const renderBanner = () => {
    switch (type) {
      case "simple":
        return (
          <div className="bg-blue-600 px-4 py-3 text-white">
            <p className="text-center text-sm font-medium">
              Love React? <a href="#" className="inline-block underline">Check out this new course!</a>
            </p>
          </div>
        );

      case "dismissable":
        return (
          <div className="flex items-center justify-between gap-4 bg-blue-600 px-4 py-3 text-white">
            <p className="text-sm font-medium">
              Love React? <a href="#" className="inline-block underline">Check out this new course!</a>
            </p>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              className="shrink-0 rounded-lg bg-white/10 p-1 transition hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
          </div>
        );

      case "responsive":
        return (
          <div className="bg-blue-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="text-center font-medium sm:text-left">
              Love React? <br className="sm:hidden" />
              Check out this new deep dive course!
            </p>
            <a
              className="mt-4 block rounded-lg bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring active:text-gray-300 sm:mt-0"
              href="#"
            >
              Learn More
            </a>
          </div>
        );

      case "sliding":
        return (
          <div className="bg-blue-600 px-4 py-3">
            <div className="mx-auto flex max-w-3xl items-center justify-center text-white">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="hidden hover:text-gray-200 sm:block sm:rounded sm:transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-5 rtl:rotate-180" />
              </button>

              <div className="mx-4 flex-1">
                <div className="text-center text-sm font-medium">
                  {slides[currentSlide].text}{" "}
                  <a href="#" className="block underline sm:inline-block">
                    {slides[currentSlide].link}
                  </a>
                </div>
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="hidden hover:text-gray-200 sm:block sm:rounded sm:transition"
                aria-label="Next slide"
              >
                <ChevronRight className="size-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderBanner();
};

const BannerShowcase = () => {
  const [showCode, setShowCode] = useState(
    Object.keys(BANNER_TYPES).reduce(
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
          <h2 className="text-3xl font-semibold">Banner Components</h2>
          <p className="mt-2 text-gray-400">
            A collection of customizable banner components with dark theme styling
          </p>
        </div>

        {Object.entries(BANNER_TYPES).map(([type, config]) => (
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
                  className="rounded-full bg-gray-700 px-4 py-2 text-gray-300 transition-all duration-200 hover:bg-gray-600 hover:text-white"
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
                <code>{config.fullCode}</code>
              </pre>
            ) : (
              <div className="rounded-xl bg-gray-950 p-4">
                <Banner
                  type={type}
                  onDismiss={() => console.log(`${type} banner dismissed`)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerShowcase;