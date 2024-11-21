"use client"
import { ArrowLeft } from 'lucide-react'

function Layout({ children }) {
  const handleBackClick = () => {
    console.log("Going back to the previous page...");
    // Go back to the previous page
    window.history.back();
  };

  return (
    <div className="text-black">
      {children}

      {/* <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden"></div> */}

      <div className=" md:ml-64  ">
        {/* Back button */}
        <button
          onClick={handleBackClick}
          className="p-2  bg-fuchsia-600 text-white rounded-full ml-[-200px] mt-3 hover:bg-fuchsia-700 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      </div>
    </div>
  );
}

export default Layout;
