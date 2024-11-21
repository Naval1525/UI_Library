"use client"
import React from 'react';

const Footerlib = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-400">
            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">Get the latest news!</h2>

                <p className="mt-4 text-gray-400">
                  Stay updated with our latest insights and offerings.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only"> Email </label>

                <div className="border border-gray-700 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none bg-gray-900 text-white focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button
                    className="mt-1 w-full bg-teal-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-700 sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Services Column */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> 1on1 Coaching </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Company Review </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Accounts Review </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> HR Consulting </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> SEO Optimisation </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> About </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Meet the Team </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Accounts Review </a>
                </li>
              </ul>
            </div>

            {/* Helpful Links Column */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Contact </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> FAQs </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Live Chat </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Accessibility </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Returns Policy </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Refund Policy </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Hiring Statistics </a>
                </li>
              </ul>
            </div>

            {/* Downloads Column */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Downloads</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> Marketing Calendar </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-white"> SEO Infographics </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-white"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* SVG icons would be inserted here, maintaining original paths */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-400">&copy; 2024. Company Name. All rights reserved.</p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white"> Terms & Conditions </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white"> Privacy Policy </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white"> Cookies </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerlib;