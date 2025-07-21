import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button className="text-[#121417] flex size-12 shrink-0 items-center" onClick={() => navigate(-1)}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Forgot Password</h2>
        </div>
        <h1 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Enter your email or username</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#121417] text-base font-medium leading-normal pb-2">Email or Username</p>
              <input
                placeholder="Enter your email or username"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-14 placeholder:text-[#687082] p-4 text-base font-normal leading-normal"
                value={emailOrUsername}
                onChange={e => setEmailOrUsername(e.target.value)}
              />
            </label>
          </div>
        </form>
      </div>
      <div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#3a63c4] text-white text-base font-bold leading-normal tracking-[0.015em]"
            type="submit"
            onClick={handleSubmit}
          >
            <span className="truncate">Submit</span>
          </button>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 