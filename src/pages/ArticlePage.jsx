import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-[#222] flex items-center p-2 rounded-full hover:bg-gray-100 focus:outline-none"
        aria-label="Back to Home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </button>
      <div className="text-6xl mb-4 mt-12">😞</div>
      <h1 className="text-2xl font-bold text-[#222] mb-2">Didn't work on it yet.</h1>
      <p className="text-[#666]">This article page is under construction.</p>
    </div>
  );
};

export default ArticlePage; 