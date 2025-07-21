import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const templates = [
  { title: "Project Charter Template" },
  { title: "Agile Sprint Template" },
  { title: "Risk Management Plan Template" },
];

const articles = [
  {
    title: "Mastering Agile: A Comprehensive Guide",
    description: "Explore the core principles and practices of Agile methodology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTWDnnqPmPICh0-Mi94jsaXMHqWPu_rT1yn1xrE4WFUuuYXBH5oOlqmZ_WAo4oahnTgcBWpq4J2wEFNlyu_lRGoh0qmQc3F9D5cW62nYIwryMGDxC2XmCThjOY0A3tI-YWJRHiIHpgtCS8S2sbRv-8cit3bZ6BGQh3IONojxQEp0tJl3L9ZR9Jh8dQ7ib2jWfv7UegPWhrlI1Ic3IBI-GSOxxz5pvVw5TrgTg2s65vIGE_9Q_lW4RajuNq18hXygJsnHCa089bYmY",
  },
  {
    title: "Effective Project Planning: Strategies for Success",
    description: "Learn how to create a robust project plan that aligns with your goals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmZEJTL_5dBAvUGvwwQw067gTes5Pkg2LAl9mSM4cWTasI-r4hUG4HKut9D51iSHpCQcbyJ2rvBt7vEcaqaQ3BO_g0x5AxxQFY7J2vhT4DuWPRJF24HvwSdiONUADzYxmquOujmU-IcjKQVRsEpZ7rEY_WpQBkk9HxiFMs1vA_Sv1V-LuZHYpEThnQjNIgBUHCikTcG7iF2OH6x3ammwOZt83G-zTG2Y1jswLncDmhL497dFrNH7nW3cJpo5HoXecdyIlo4Oi0r8",
  },
];

const ResourcesPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredTemplates = templates.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  const filteredArticles = articles.filter((a) => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button onClick={() => navigate(-1)} className="text-[#111518] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Resources</h2>
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#637688] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search resources"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637688] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </label>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Templates</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {filteredTemplates.map((t) => (
            <div key={t.title} className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 items-center">
              <div className="text-[#111518]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                </svg>
              </div>
              <h2 className="text-[#111518] text-base font-bold leading-tight">{t.title}</h2>
            </div>
          ))}
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Articles & Insights</h2>
        <div className="p-4">
          {filteredArticles.map((a) => (
            <div key={a.title} className="flex items-stretch justify-between gap-4 rounded-xl cursor-pointer hover:bg-[#f0f2f4] transition" onClick={() => navigate(`/article/${encodeURIComponent(a.title)}`)}>
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#637688] text-sm font-normal leading-normal">Article</p>
                <p className="text-[#111518] text-base font-bold leading-tight">{a.title}</p>
                <p className="text-[#637688] text-sm font-normal leading-normal">{a.description}</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url('${a.image}')` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BottomNav />
      </div>
    </div>
  );
};

export default ResourcesPage; 