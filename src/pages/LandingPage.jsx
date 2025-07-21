import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const LandingPage = () => {
  const [showVmerModal, setShowVmerModal] = useState(false);
  const partnerLogos = [
    '/a.png',
    '/b.png',
    '/c.png',
    '/d.png',
    '/e.png',
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [modalLogo, setModalLogo] = useState(null);
  const visibleCount = 3;
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Add state for drag/swipe
  // Remove drag state and handlers
  // Remove handleDragStart, handleDragMove, handleDragEnd, and related state

  // Add auto-scroll effect
  // Remove scroll state and related animation logic.
  // Use carouselIndex to control which logos are visible, and update it on drag/swipe or with left/right buttons if present.
  // Manual navigation handlers
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + partnerLogos.length) % partnerLogos.length);
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % partnerLogos.length);
  };
  return (
    <>
      {/* Main content below */}
      <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
        <div>
          <div className="flex items-center bg-white p-4 pb-2 justify-between">
            <button
              className="text-[#121417] flex size-12 shrink-0 items-center focus:outline-none"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
            <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Connectech Pro</h2>
            <div className="flex w-12 items-center justify-end">
              <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            </div>
          </div>
          {drawerOpen && (
            <div className="fixed inset-0 z-50">
              <div className="absolute left-0 top-0 z-50 size-full min-h-screen bg-[#141414]/40" onClick={() => setDrawerOpen(false)}>
                <div className="flex h-full min-h-screen w-72 max-w-[90vw] flex-col bg-white p-6 shadow-2xl relative justify-between" onClick={e => e.stopPropagation()}>
                  <div className="text-[#121417] text-2xl font-extrabold text-center mb-8 mt-2 tracking-tight">Connectech Pro</div>
                  <ul className="flex flex-col gap-8 mt-12 items-center">
                    <li>
                      <Link to="/" onClick={() => setDrawerOpen(false)} className="flex w-full h-16 items-center gap-4 rounded-full px-6 bg-[#f0f2f4] shadow hover:bg-blue-50 transition group justify-center">
                        <span className="text-[#111518] pr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path></svg>
                        </span>
                        <span className="text-[#111518] text-lg font-bold leading-tight truncate">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses" onClick={() => setDrawerOpen(false)} className="flex w-full h-16 items-center gap-4 rounded-full px-6 bg-[#f0f2f4] shadow hover:bg-blue-50 transition group justify-center">
                        <span className="text-[#111518] pr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path></svg>
                        </span>
                        <span className="text-[#111518] text-lg font-bold leading-tight truncate">Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources" onClick={() => setDrawerOpen(false)} className="flex w-full h-16 items-center gap-4 rounded-full px-6 bg-[#f0f2f4] shadow hover:bg-blue-50 transition group justify-center">
                        <span className="text-[#111518] pr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path></svg>
                        </span>
                        <span className="text-[#111518] text-lg font-bold leading-tight truncate">Resources</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setDrawerOpen(false)} className="flex w-full h-16 items-center gap-4 rounded-full px-6 bg-[#f0f2f4] shadow hover:bg-blue-50 transition group justify-center">
                        <span className="text-[#111518] pr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
                        </span>
                        <span className="text-[#111518] text-lg font-bold leading-tight truncate">About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setDrawerOpen(false)} className="flex w-full h-16 items-center gap-4 rounded-full px-6 bg-[#f0f2f4] shadow hover:bg-blue-50 transition group justify-center">
                        <span className="text-[#111518] pr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                        </span>
                        <span className="text-[#111518] text-lg font-bold leading-tight truncate">Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="flex-1"></div>
                  <div className="flex flex-col gap-3 px-2 pb-4 mt-8">
                    <Link to="/signup" onClick={() => setDrawerOpen(false)} className="flex items-center justify-center rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full hover:bg-blue-50 transition">
                      <span className="truncate">Create an Account</span>
                    </Link>
                    <Link to="/login" onClick={() => setDrawerOpen(false)} className="flex items-center justify-center rounded-full h-10 px-4 bg-[#1284e7] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full hover:bg-blue-700 transition">
                      <span className="truncate">Sign In</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3">
              <div className="bg-cover bg-center flex flex-col justify-end min-h-[218px] pb-6" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(\"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80\")' }}>
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-white tracking-light text-[28px] font-bold leading-tight mb-2">Learn Anywhere, Any Time</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Update the 'Why Choose Us' section for a more compact, website-matching design. */}
          <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Explore Certifications</h2>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 max-w-xs bg-[#f0f2f4] p-4 items-center">
              <a href="https://www.credly.com/badges/3285b911-6ecb-4745-bcdd-e486cb193cd0/public_url" target="_blank" rel="noopener noreferrer" className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col cursor-pointer hover:scale-105 transition-transform duration-200">
                <img src="/atp.png" alt="PMI-ATP Certification" className="w-full h-full object-cover rounded-xl" />
              </a>
              <p className="text-blue-700 font-bold text-center text-base leading-tight mt-2">CONNECTECH is a PMI-ATP premier training centre accredited by the PMI</p>
              <p className="text-gray-700 text-center text-sm">(Click on the Logo to check the Licence)</p>
              <p className="text-center text-sm text-[#222] mt-2 mb-4"><span className="font-bold">Project Management Institute (PMI)</span> is the world’s leading professional association for a growing community of millions of project professionals and change-makers worldwide.</p>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 max-w-xs bg-[#f0f2f4] p-4 items-center">
              <button onClick={() => setShowVmerModal(true)} className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col cursor-pointer hover:scale-105 transition-transform duration-200 border-0 p-0">
                <img src="/vm.png" alt="Certification" className="w-full h-full object-contain rounded-xl p-2 bg-white" />
              </button>
              <p className="text-blue-700 font-bold text-center text-base leading-tight mt-2">CONNECTECH is a VMEdu-ATP Gold Partner accredited by the VMEdu</p>
              <p className="text-gray-700 text-center text-sm">(Click on the Logo to check the Licence)</p>
              <p className="text-center text-sm text-[#222] mt-2 mb-4"><span className="font-bold">Value for Money Education (VMEdu)</span> is a leader in the professional training and certification industry and has facilitated the training of 500,000+ students from 3500+ corporations across 150+ countries.</p>
            </div>
          </div>
          {showVmerModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-lg w-full flex flex-col items-center relative">
                <button onClick={() => setShowVmerModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
                <img src="/vmer.png" alt="VMEdu Licence" className="max-w-full max-h-[70vh] rounded-lg" />
              </div>
                </div>
          )}
          {/* Replace the 'Who Trusts Us' carousel with a horizontally scrollable flexbox, similar to the testimonials section. */}
          <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Who Trusts Us</h2>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-4 px-2 gap-8">
            {partnerLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="Partner Logo"
                className="w-32 h-32 object-contain rounded-xl shadow bg-white p-2 inline-block cursor-pointer"
                onClick={() => setModalLogo(logo)}
              />
            ))}
              </div>
          {modalLogo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-lg w-full flex flex-col items-center relative">
                <button onClick={() => setModalLogo(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
                <img src={modalLogo} alt="Partner Logo Large" className="max-w-full max-h-[70vh] rounded-lg" />
              </div>
            </div>
          )}
          <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Testimonials</h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{ backgroundImage: 'url("/1.png")' }}
                ></div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-1">{[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}</div>
                  <p className="text-[#121417] text-base font-bold leading-normal">Ahmed MAHI, <span className="font-normal">PMP®</span></p>
                  <p className="text-[#222] text-sm font-normal leading-normal">Freelance Digital Consultant</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal mt-2 text-center">"Connectech Pro's training was a game changer for my freelance career. Highly recommended!"</p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{ backgroundImage: 'url("/2.png")' }}
                ></div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-1">{[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}</div>
                  <p className="text-[#121417] text-base font-bold leading-normal">Abdellah BOUCHOURL, <span className="font-normal">PMP®, ACP®</span></p>
                  <p className="text-[#222] text-sm font-normal leading-normal">IT Consultant</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal mt-2 text-center">"The PMP and ACP courses were thorough and practical. I felt well-prepared for my certifications."</p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{ backgroundImage: 'url("/3.png")' }}
                ></div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-1">{[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}</div>
                  <p className="text-[#121417] text-base font-bold leading-normal">Billal LADAYCIA, <span className="font-normal">PMP®</span></p>
                  <p className="text-[#222] text-sm font-normal leading-normal">Senior Civil Engineer</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal mt-2 text-center">"Excellent instructors and real-world examples. The best training experience I've had."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-5 bg-white"></div>
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default LandingPage; 