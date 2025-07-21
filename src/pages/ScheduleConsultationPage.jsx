import React, { useState } from "react";
import BottomNav from "../components/BottomNav";

const ScheduleConsultationPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // handle submission logic here
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
      <div className="max-w-xl w-full mx-auto px-4 py-8">
        <h1 className="text-[#131416] text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">Schedule a Consultation</h1>
        <p className="text-[#131416] text-base font-normal leading-normal pb-6">Pick a date and tell us a bit about your needs. We'll get back to you to confirm your consultation.</p>
        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-center font-medium">Thank you! We'll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#f8fafc]/80 rounded-xl p-6 shadow-md backdrop-blur-md">
            <div>
              <label className="block text-sm font-medium text-[#131416] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input w-full rounded-xl border border-[#e3e6ea] bg-[#f1f2f3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#131416] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input w-full rounded-xl border border-[#e3e6ea] bg-[#f1f2f3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#131416] mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="form-input w-full rounded-xl border border-[#e3e6ea] bg-[#f1f2f3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#131416] mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="form-input w-full rounded-xl border border-[#e3e6ea] bg-[#f1f2f3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Tell us about your needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#b8cee4] text-[#131416] font-bold py-3 rounded-xl hover:bg-[#a0b8d6] transition-colors"
            >
              Schedule Consultation
            </button>
          </form>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default ScheduleConsultationPage; 