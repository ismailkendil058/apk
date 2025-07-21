import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from "../components/BottomNav";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleMissionClick = () => {
    navigate('/mission');
  };

  const handleValuesClick = () => {
    navigate('/values');
  };

  const handleVisionClick = () => {
    navigate('/vision');
  };

  const handleTeamMemberClick = (memberId) => {
    navigate(`/team/${memberId}`);
  };

  return (
    <>
      {/* Main content below */}
      <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div>
          {/* Header */}
          <div className="flex items-center bg-white p-4 pb-2 justify-between">
            <div 
              className="text-[#111418] flex size-12 shrink-0 items-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">About Us</h2>
          </div>

          {/* Who We Are Section */}
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Who We Are</h2>
          <div className="px-4 pb-3 pt-1">
            <p className="text-[#111518] text-base font-normal leading-normal">
              <span className="font-bold">CONNECTECH</span> is a consulting firm created in 2016 offering consulting services, professional training, and coaching in project management, entrepreneurial and organizational management, and commercial/logistics management. We provide top-notch services aimed at strengthening your organization and ensuring success by implementing effective processes following an initial audit or diagnosis.
            </p>
            <p className="text-[#111518] text-base font-normal leading-normal mt-4">
              Our goal is to accompany you throughout your project and monitor its future developments. Therefore, our teams offer you a flexible and attentive partnership through internal management and operational coaching either on-site or at our premises.
            </p>
            <p className="text-[#111518] text-base font-normal leading-normal mt-4">
              Thus, we commit to:
            </p>
            <ul className="list-disc pl-8 text-[#111518] text-base font-normal leading-normal mt-2">
              <li>A comprehensive solution,</li>
              <li>Guaranteed results,</li>
              <li>Long-term relationship,</li>
              <li>Real added value,</li>
              <li>Recognized expertise,</li>
              <li>Mastered technology.</li>
            </ul>
          </div>

          {/* Letter from the Founder */}
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Letter from the Founder</h2>
          <div className="flex flex-col @[520px]:flex-row @[520px]:items-start px-4 pb-3 pt-1 gap-6">
            <div className="flex-shrink-0 flex justify-center @[520px]:justify-start w-full @[520px]:w-auto">
              <img src="/youcef-belouz.jpg.png" alt="Youcef Belouz" className="rounded-full w-32 h-32 object-cover mb-4 @[520px]:mb-0" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#111418] text-2xl font-bold leading-tight mb-2">Learn Anywhere, Anytime</h3>
              <div className="w-16 h-1 bg-[#111418] mb-4"></div>
              <p className="text-[#111518] text-base font-normal leading-normal mb-4">
                At <span className="font-bold">CONNECTECH</span>, we believe that the pursuit of knowledge is a lifelong journey that transcends the confines of a classroom. Our mission is to empower individuals to achieve excellence in project management through innovative learning solutions that fit into your everyday life, no matter where you are.
              </p>
              <p className="text-[#111518] text-base font-normal leading-normal mb-4">
                In today’s dynamic world, project management skills and agile practices are more crucial than ever. Whether you’re a seasoned professional aiming to stay ahead of the curve, or a newcomer eager to make your mark, our comprehensive courses, personalized coaching, and recognized certifications are designed to meet you at your level and guide you to your goals.
              </p>
              <p className="text-[#111518] text-base font-normal leading-normal mb-4">
                We are dedicated to fostering an environment where learning never stops. Our platform is built to support continuous growth and improvement, ensuring that you can stay relevant and competitive in your field.
              </p>
              <p className="text-[#111518] text-base font-normal leading-normal mb-4">
                Explore our range of courses, connect with our expert coaches, and take the next step in your professional journey with confidence.
              </p>
              <p className="text-[#111518] text-base font-normal leading-normal mb-4">
                Thank you for choosing Connectech. Together, let’s learn anywhere, anytime!
              </p>
              <p className="text-[#111518] text-base font-normal leading-normal mb-1">Warm regards,</p>
              <p className="text-[#111518] text-base font-bold leading-normal">Youcef BELOUZ</p>
              <p className="text-[#111518] text-base font-bold leading-normal">Founder</p>
            </div>
          </div>

          {/* Mission, Values, Vision Buttons */}
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
              <button 
                onClick={handleMissionClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full"
              >
                <span className="truncate">Mission</span>
              </button>
              <button 
                onClick={handleValuesClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full"
              >
                <span className="truncate">Values</span>
              </button>
              <button 
                onClick={handleVisionClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full"
              >
                <span className="truncate">Vision</span>
              </button>
            </div>
          </div>

          {/* Our Team Section */}
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Our Team</h2>
          <p className="px-4 pb-3 text-base font-normal leading-normal"><span className="font-bold">Meet Your Guide to Success:</span> Our Expert Instructor! With years of experience in project management and a passion for teaching, our instructor brings a wealth of knowledge and practical insights to every session.</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 text-center">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url("/youcef-belouz.jpg.png")` }}
                  onClick={() => handleTeamMemberClick('1')}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url("/7.png")` }}
                  onClick={() => handleTeamMemberClick('2')}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url("/8.png")` }}
                  onClick={() => handleTeamMemberClick('3')}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url("/9.png")` }}
                  onClick={() => handleTeamMemberClick('4')}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div>
            <div className="h-5 bg-white"></div>
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default AboutPage; 