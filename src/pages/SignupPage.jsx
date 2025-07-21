import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupSuccessPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-white" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl flex flex-col items-center">
      <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" /></svg>
      <h2 className="text-2xl font-bold text-[#121417] mb-2 text-center">Account Created!</h2>
      <p className="text-[#687082] text-base text-center mb-6">Your account has been successfully created. You can now sign in and start using the platform.</p>
      <Link to="/login" className="w-full bg-[#3a63c4] text-white text-center py-2 rounded-lg font-bold hover:bg-blue-700 transition">Sign In</Link>
    </div>
  </div>
);

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate account creation, then show success page
    setSuccess(true);
  };

  if (success) return <SignupSuccessPage />;

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button className="text-[#121417] flex size-12 shrink-0 items-center" onClick={() => navigate(-1)}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Create Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex px-4 py-3">
            <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#f1f2f4] p-1">
              <label
                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-[#687082] text-sm font-medium leading-normal has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#121417] ${formData.role === 'Student' ? 'bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] text-[#121417]' : ''}`}
              >
                <span className="truncate">Student</span>
                <input type="radio" name="role" className="invisible w-0" value="Student" checked={formData.role === 'Student'} onChange={() => handleRoleChange('Student')} />
              </label>
              <label
                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-[#687082] text-sm font-medium leading-normal has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#121417] ${formData.role === 'Administrator' ? 'bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] text-[#121417]' : ''}`}
              >
                <span className="truncate">Administrator</span>
                <input type="radio" name="role" className="invisible w-0" value="Administrator" checked={formData.role === 'Administrator'} onChange={() => handleRoleChange('Administrator')} />
              </label>
            </div>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="fullName"
                placeholder="Full Name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-14 placeholder:text-[#687082] p-4 text-base font-normal leading-normal"
                value={formData.fullName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="email"
                placeholder="Email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-14 placeholder:text-[#687082] p-4 text-base font-normal leading-normal"
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
                name="phone"
                placeholder="Phone Number"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-14 placeholder:text-[#687082] p-4 text-base font-normal leading-normal"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                autoComplete="tel"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="password"
                placeholder="Password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-14 placeholder:text-[#687082] p-4 text-base font-normal leading-normal"
                value={formData.password}
                onChange={handleChange}
                type="password"
                autoComplete="new-password"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-14 placeholder:text-[#687082] p-4 text-base font-normal leading-normal"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                autoComplete="new-password"
              />
            </label>
          </div>
          <div className="flex px-4 py-3">
            <button type="submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#3a63c4] text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Create Account</span>
            </button>
          </div>
        </form>
      </div>
      <div>
        <Link to="/login" className="text-[#687082] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline block">Already have an account? Sign In</Link>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default SignupPage; 