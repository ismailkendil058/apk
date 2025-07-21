import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sampleCourses } from "../services/courseService";
import BottomNav from "../components/BottomNav";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCourses(sampleCourses);
  }, []);

  return (
    <>
      {/* Top bar with back arrow and About Us title */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <button onClick={() => navigate('/')} className="flex items-center text-[#222] focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold text-[#111518]">Popular Courses</h2>
        <div className="w-7" />
      </div>
      {/* Main content below */}
      <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        {/* Remove any top navigation or icon bar, keep only BottomNav at the bottom. */}
        <div>
          {/* Render course cards dynamically */}
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="block p-4 hover:bg-[#f9fafb] transition rounded-xl"
              style={{ textDecoration: 'none' }}
            >
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-[#6a7181] text-sm font-normal leading-normal">{course.level}</p>
                  <p className="text-[#121416] text-base font-bold leading-tight">{course.title}</p>
                  <p className="text-[#6a7181] text-sm font-normal leading-normal">{course.description}</p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: `url('${course.image}')` }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default CoursesPage; 