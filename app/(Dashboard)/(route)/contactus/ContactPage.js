// 'use client'

// import React from 'react';
// import { Linkedin } from 'lucide-react';

// const TeamMember = ({ name, role, linkedin, description }) => (
//   <div className="bg-gray-900 rounded-lg p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all">
//     <h2 className="text-2xl font-semibold mb-2">{name}</h2>
//     <p className="text-pink-400 mb-3">{role}</p>
//     <p className="text-gray-300 mb-4">{description}</p>
//     <a
//       href={linkedin}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
//     >
//       <Linkedin className="w-5 h-5" />
//       Connect on LinkedIn
//     </a>
//   </div>
// );

// const ContactPage = () => {
//   const teamMembers = [
//     {
//       name: "Naval Bihani",
//       role: "Frontend Lead",
//       linkedin: "https://www.linkedin.com/in/navalbihani15/",
//       description: "Specializes in component architecture and design systems,Expert in responsive design and accessibility"
//     },
//     {
//       name: "Aditya Maurya",
//       role: "Frontend Lead",
//       linkedin: "https://www.linkedin.com/in/aditya-maurya-31457b281/",
//       description: "Expert in responsive design and accessibility,Specializes in component architecture and design system"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-white mb-8 text-center">
//           Contact Us
//         </h1>

//         <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
//           Have questions about our UI library? Connect with our team members directly through LinkedIn or send us your queries.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {teamMembers.map((member) => (
//             <TeamMember key={member.name} {...member} />
//           ))}
//         </div>

//         <div className="bg-gray-900 rounded-lg p-8 border border-pink-500/20">
//           <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 placeholder="Your message here..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
// 'use client'

// import React from 'react';
// import { Linkedin } from 'lucide-react';

// const TeamMember = ({ name, role, linkedin, description, imageUrl }) => (
//   <div className="bg-gray-900 rounded-lg p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all">
//     <div className="flex items-start gap-4 mb-4">
//       <img
//         src="/api/placeholder/96/96"
//         alt={`${name}'s profile`}
//         className="w-24 h-24 rounded-full object-cover border-2 border-pink-500/20"
//       />
//       <div>
//         <h2 className="text-2xl font-semibold mb-2">{name}</h2>
//         <p className="text-pink-400 mb-3">{role}</p>
//         <a
//           href={linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
//         >
//           <Linkedin className="w-5 h-5" />
//           Connect on LinkedIn
//         </a>
//       </div>
//     </div>
//     <p className="text-gray-300">{description}</p>
//   </div>
// );

// const ContactPage = () => {
//   const teamMembers = [
//     {
//       name: "Naval Bihani",
//       role: "Frontend Lead",
//       linkedin: "https://linkedin.com/in/sarahchen",
//       description: "Specializes in component architecture and design systems",
//       imageUrl: "https://ibb.co/9Vqbjpk"
//     },
//     {
//       name: "Alex Kumar",
//       role: "UI Engineer",
//       linkedin: "https://linkedin.com/in/alexkumar",
//       description: "Expert in responsive design and accessibility",
//       imageUrl: "/alex-profile.jpg"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-white mb-8 text-center">
//           Contact Us
//         </h1>

//         <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
//           Have questions about our UI library? Connect with our team members directly through LinkedIn or send us your queries.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {teamMembers.map((member) => (
//             <TeamMember key={member.name} {...member} />
//           ))}
//         </div>

//         <div className="bg-gray-900 rounded-lg p-8 border border-pink-500/20">
//           <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 placeholder="Your message here..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
"use client";

import React from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const TeamMember = ({ name, role, linkedin, description, imagePath }) => (
  <div className="bg-gray-900 rounded-lg p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all">
    <div className="flex items-start gap-4 mb-4">
      <div className="relative w-24 h-24">
        <Image
          src={imagePath}
          alt={`${name}'s profile`}
          fill
          className="rounded-full object-cover border-2 border-pink-500/20"
          sizes="(max-width: 96px) 100vw, 96px"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-pink-400 mb-3">{role}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ContactPage = () => {
  const teamMembers = [
    {
      name: "Naval Bihani",
      role: "Frontend Lead",
      linkedin: "https://www.linkedin.com/in/navalbihani15/",
      description:
        "Specializes in component architecture and design systems,Expert in responsive design and accessibilit",
      imagePath: "/naval.png", // Image in public/images directory
    },
    {
      name: "Aditya Maurya",
      role: "Frontend Lead",
      linkedin: "https://www.linkedin.com/in/aditya-maurya-31457b281/",
      description:
        "Expert in responsive design and accessibility,Specializes in component architecture and design system",
        imagePath: "/naval.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Contact Us
        </h1>

        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Have questions about our UI library? Connect with our team members
          directly through LinkedIn or send us your queries.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-pink-500/20">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send us a Message
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
