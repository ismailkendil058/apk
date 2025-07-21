import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { isValidEmail } from '../lib/utils';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button className="text-[#111418] flex size-12 shrink-0 items-center" onClick={() => navigate(-1)}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Sign In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="email"
                placeholder="Email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637488] p-4 text-base font-normal leading-normal"
                value={formData.email}
                onChange={handleChange}
                type="email"
                autoComplete="email"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="password"
                placeholder="Password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637488] p-4 text-base font-normal leading-normal"
                value={formData.password}
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
              />
            </label>
          </div>
          <p className="text-[#637488] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
          <div className="flex px-4 py-3">
            <button type="submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#1978e5] text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Sign In</span>
            </button>
          </div>
        </form>
      </div>
      <div>
        <Link to="/signup" className="text-[#637488] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline block">Don't have an account? Create an account</Link>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default LoginPage; 