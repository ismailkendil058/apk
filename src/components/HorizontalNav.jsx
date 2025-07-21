import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div className="relative inline-block text-left font-sans" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-2 px-6 py-2 text-base font-medium text-[#121416] bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Meet Us
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 mt-2 min-w-[180px] z-50 rounded-xl shadow-lg backdrop-blur-md bg-gray-100/80 border border-blue-100 flex flex-col divide-y divide-blue-400/40"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Link
            to="/about"
            className="px-6 py-3 text-[#121416] bg-transparent hover:bg-blue-50 transition-colors font-medium text-base rounded-t-xl focus:outline-none"
            style={{ fontFamily: 'inherit' }}
          >
            About Us
          </Link>
          <Link
            to="/team"
            className="px-6 py-3 text-[#121416] bg-transparent hover:bg-blue-50 transition-colors font-medium text-base focus:outline-none"
            style={{ fontFamily: 'inherit' }}
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 text-[#121416] bg-transparent hover:bg-blue-50 transition-colors font-medium text-base rounded-b-xl focus:outline-none"
            style={{ fontFamily: 'inherit' }}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

const HorizontalNav = () => {
  return (
    <nav className="w-full flex justify-center py-6 bg-white/80 backdrop-blur-md z-40 relative" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <DropdownMenu />
    </nav>
  );
};

export default HorizontalNav; 