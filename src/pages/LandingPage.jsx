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
  const [autoScroll, setAutoScroll] = useState(true);
  const [modalLogo, setModalLogo] = useState(null);
  const visibleCount = 3;
  // Add state for drag/swipe
  // Remove drag state and handlers
  // Remove handleDragStart, handleDragMove, handleDragEnd, and related state

  // Add auto-scroll effect
  const [scroll, setScroll] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setScroll((prev) => {
        const carousel = carouselRef.current;
        if (!carousel) return prev;
        const totalWidth = carousel.scrollWidth / 2;
        if (prev >= totalWidth) return 0;
        return prev + 0.7;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Remove drag/swipe/manual navigation handlers for the carousel.
  // Restore the auto-scroll effect using requestAnimationFrame to move the carousel from left to right only.
  // Do not allow manual interaction; only auto-scroll.

  // Remove scroll state and related animation logic.
  // Use carouselIndex to control which logos are visible, and update it on drag/swipe or with left/right buttons if present.
  // Manual navigation handlers
  const handlePrev = () => {
    setAutoScroll(false);
    setCarouselIndex((prev) => (prev - 1 + partnerLogos.length) % partnerLogos.length);
  };
  const handleNext = () => {
    setAutoScroll(false);
    setCarouselIndex((prev) => (prev + 1) % partnerLogos.length);
  };
  return (
    <>
      {/* Main content below */}
      <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
        <div>
          <div className="flex items-center bg-white p-4 pb-2 justify-between">
            <div className="text-[#121417] flex size-12 shrink-0 items-center" data-icon="List" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </div>
            <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Connectech Pro</h2>
            <div className="flex w-12 items-center justify-end">
              <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            </div>
          </div>
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
          <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Who Trusts Us</h2>
          <div className="relative overflow-hidden w-full py-4 flex items-center justify-center">
            <div
              ref={carouselRef}
              className="flex items-center gap-8 whitespace-nowrap transition-transform duration-300"
              style={{ transform: `translateX(-${scroll}px)`, touchAction: 'none', pointerEvents: 'none' }}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="Partner Logo"
                  className="w-32 h-32 object-contain rounded-xl shadow bg-white p-2 inline-block cursor-pointer"
                  onClick={() => setModalLogo(logo)}
                />
              ))}
            </div>
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