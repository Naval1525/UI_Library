// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Github, Sun, Moon, MessageCircle } from "lucide-react";
// import Im from "./im";

// const DeveloperLanding = () => {
//   const [isMenuExpanded, setIsMenuExpanded] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   return (
//     <div className="h-full">
//       <Im></Im>

//       {/* Background Image - Added with negative z-index */}

//       <header className="py-4  sm:py-6 relative z-10">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <a href="/" title="Home" className="flex items-center ">
//                 <Image
//                   className="w-24 h-16"
//                   src="/logo2.png"
//                   alt="Company Logo"
//                   width={144}
//                   height={36}
//                   priority
//                 />
//                 <span className="text-2xl font-extrabold">Tech.UI</span>
//               </a>
//             </div>

//             <button
//               type="button"
//               className="text-white md:hidden"
//               onClick={() => setIsMenuExpanded(!isMenuExpanded)}
//               aria-expanded={isMenuExpanded}
//               aria-label="Toggle navigation menu"
//             >
//               {!isMenuExpanded ? (
//                 <svg
//                   className="w-10 h-10"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-7 h-7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>

//             <nav className=" hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
//               {["Documentation", "Components", "Figma", "Contact Us"].map(
//                 (item) => (
//                   <a
//                     key={item}
//                     href={`/${item.toLowerCase()}`}
//                     className="text-lg font-normal text-gray-400 transition-all duration-200 hover:text-white"
//                   >
//                     {item}
//                   </a>
//                 )
//               )}
//             </nav>

//             <div className="relative hidden md:items-center md:justify-center md:inline-flex gap-4 group">
//               <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50" />
//               <div className="relative inline-flex items-center justify-center gap-4 px-6 py-2 text-lg font-normal text-white bg-black border border-transparent rounded-full">
//                 <a
//                   href="https://discord.com"
//                   className="hover:text-cyan-400 transition-colors p-2"
//                   aria-label="Discord"
//                 >
//                   <MessageCircle size={24} />
//                 </a>
//                 <a
//                   href="https://github.com"
//                   className="hover:text-purple-400 transition-colors p-2"
//                   aria-label="GitHub"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <button
//                   onClick={() => setIsDark(!isDark)}
//                   className="hover:text-yellow-400 transition-colors p-2"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <Sun size={24} /> : <Moon size={24} />}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           {isMenuExpanded && (
//             <nav className="md:hidden">
//               <div className="flex flex-col pt-8 pb-4 space-y-6">
//                 {["Products", "Features", "Pricing", "Support"].map((item) => (
//                   <a
//                     key={item}
//                     href={`/${item.toLowerCase()}`}
//                     className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
//                   >
//                     {item}
//                   </a>
//                 ))}

//                 <div className="relative inline-flex items-center justify-center group">
//                   <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50" />
//                   <a
//                     href="/trial"
//                     className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
//                     role="button"
//                   >
//                     Start free trial
//                   </a>
//                 </div>
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>

//       <section className="relative h-[calc(100%-72px)] overflow-hidden  z-10">
//         <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl h-full">
//           <div className="grid items-center h-full grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
//             <div className="-mt-32">
//               <h1 className="text-4xl font-semi-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
//                 Helping
//                 <span className="text-rose-400 font-extrabold"> Devs</span> with
//                 Components
//               </h1>
//               <p className="mt-4 text-2xl font-normal text-gray-400 sm:mt-8">
//                 For the creators by the developers
//               </p>

//               <form
//                 action="/search"
//                 method="GET"
//                 className="relative mt-8 rounded-full sm:mt-12"
//               >
//                 <div className="relative">
//                   <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500" />
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-6">
//                       <svg
//                         className="w-5 h-5 text-gray-500"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         />
//                       </svg>
//                     </div>
//                     <input
//                       type="text"
//                       name="q"
//                       placeholder="Try Hero section , Button , Box, grid, etc.."
//                       className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
//                   <button
//                     type="submit"
//                     className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
//                   >
//                     Find A COMPONENT
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0">
//                 <svg
//                   className="blur-3xl filter opacity-70"
//                   style={{ filter: "blur(64px)" }}
//                   width="444"
//                   height="536"
//                   viewBox="0 0 444 536"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <defs>

//                   </defs>
//                   <path
//                     d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
//                     fill="url(#gradient)"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DeveloperLanding;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Github, Sun, Moon, MessageCircle } from "lucide-react";
import Im from "./im";

const DeveloperLanding = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="h-full bg-black text-white">
      <Im />

      <header className="py-4 sm:py-6 relative z-10 bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
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
                <span className="text-4xl font-extrabold ">Tech.UI</span>
              </a>
            </div>

            <button
              type="button"
              className="text-gray-300 md:hidden"
              onClick={() => setIsMenuExpanded(!isMenuExpanded)}
              aria-expanded={isMenuExpanded}
              aria-label="Toggle navigation menu"
            >
              {!isMenuExpanded ? (
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            <nav className="hidden md:flex ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12">
              {["Documentation", "Components", "Figma", "Contact Us"].map((item) => (
                <a key={item} href={`/${item.toLowerCase()}`} className="text-lg font-normal text-gray-300 hover:text-rose-400 transition-all duration-200">
                  {item}
                </a>
              ))}
            </nav>

            <div className="relative hidden md:inline-flex items-center gap-4">
              <a href="https://discord.com" className="p-2 text-gray-300 hover:text-cyan-400" aria-label="Discord">
                <MessageCircle size={24} />
              </a>
              <a href="https://github.com" className="p-2 text-gray-300 hover:text-purple-400" aria-label="GitHub">
                <Github size={24} />
              </a>
              <button onClick={() => setIsDark(!isDark)} className="p-2 text-gray-300 hover:text-yellow-400" aria-label="Toggle theme">
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuExpanded && (
            <nav className="md:hidden bg-gray-900 p-4 rounded-md">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                {["Products", "Features", "Pricing", "Support"].map((item) => (
                  <a key={item} href={`/${item.toLowerCase()}`} className="text-base font-normal text-gray-300 hover:text-rose-400 transition-all duration-200">
                    {item}
                  </a>
                ))}

                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500" />
                  <a href="/trial" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-black bg-white border border-transparent rounded-full">
                    Start free trial
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative h-[calc(100%-72px)] overflow-hidden z-10">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl h-full">
          <div className="grid items-center h-full grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div className="-mt-32">
              <h1 className="text-4xl font-semi-bold  sm:text-5xl lg:text-6xl xl:text-7xl">
                Helping <span className=" font-extrabold text-fuchsia-600">Devs</span> with Components
              </h1>
              <p className="mt-4 text-2xl font-normal text-gray-300 sm:mt-8">
                For the creators by the developers
              </p>
              <form
                action="/search"
                method="GET"
                className="relative mt-8 rounded-full sm:mt-12"
              >
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-white to-fuchsia-600" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="q"
                      placeholder="Try Hero section , Button , Box, grid, etc.."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                  >
                    Find A COMPONENT
                  </button>
                </div>
              </form>

              {/* <form action="/search" method="GET" className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input type="text" name="q" placeholder="Try Hero section, Button, Box, grid, etc.." className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0" />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">
                    Find A COMPONENT
                  </button>
                </div>
              </form> */}
            </div>

            <div className="relative">
              <div className="absolute inset-0">
                <svg className="blur-3xl filter opacity-70" style={{ filter: "blur(64px)" }} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#gradient)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperLanding;
