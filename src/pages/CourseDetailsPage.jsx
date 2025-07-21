import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getCourseById } from '../services/courseService';
import BottomNav from "../components/BottomNav";
import { useAuth } from '../contexts/AuthContext';

const CourseDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeTab, setActiveTab] = useState('Modules');
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch course data
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const courseData = await getCourseById(id);
        if (courseData) {
          setCourse(courseData);
          setSelectedLanguage(courseData.language || 'English');
        } else {
          // Fallback to sample data if course not found
          console.log('Course not found, using sample data');
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating, size = '20px') => {
    return Array.from({ length: 5 }, (_, i) => (
      <div key={i} className={i < rating ? 'text-[#111418]' : 'text-[#bbc4ce]'}>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
          <path d={i < rating ? 
            "M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" :
            "M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
          }></path>
        </svg>
      </div>
    ));
  };

  // Generate course-specific resources
  const getCourseResources = (course) => {
    if (!course) return [];
    
    const baseResources = [
      {
        type: 'document',
        title: 'Course Syllabus',
        description: 'Complete course outline and learning objectives',
        icon: '📋',
        downloadable: true
      },
      {
        type: 'document',
        title: 'Study Guide',
        description: 'Comprehensive study materials and key concepts',
        icon: '📚',
        downloadable: true
      },
      {
        type: 'link',
        title: 'Additional Reading Materials',
        description: 'Recommended books and articles for deeper learning',
        icon: '🔗',
        downloadable: false
      },
      {
        type: 'video',
        title: 'Introduction Video',
        description: 'Course overview and instructor introduction',
        icon: '🎥',
        downloadable: false
      }
    ];

    // Add course-specific resources based on category
    const categorySpecificResources = {
      'Agile': [
        {
          type: 'document',
          title: 'Agile Manifesto PDF',
          description: 'The official Agile Manifesto and principles',
          icon: '📄',
          downloadable: true
        },
        {
          type: 'link',
          title: 'Scrum Guide',
          description: 'Official Scrum Guide by Ken Schwaber and Jeff Sutherland',
          icon: '🔗',
          downloadable: false
        },
        {
          type: 'template',
          title: 'Sprint Planning Template',
          description: 'Ready-to-use sprint planning worksheet',
          icon: '📝',
          downloadable: true
        }
      ],
      'Project Management': [
        {
          type: 'document',
          title: 'Project Charter Template',
          description: 'Standard project charter template',
          icon: '📋',
          downloadable: true
        },
        {
          type: 'template',
          title: 'Risk Assessment Matrix',
          description: 'Risk identification and assessment tool',
          icon: '📊',
          downloadable: true
        },
        {
          type: 'link',
          title: 'PMI Resources',
          description: 'Project Management Institute official resources',
          icon: '🔗',
          downloadable: false
        }
      ],
      'Scrum': [
        {
          type: 'document',
          title: 'Scrum Events Guide',
          description: 'Detailed guide to all Scrum events',
          icon: '📖',
          downloadable: true
        },
        {
          type: 'template',
          title: 'Sprint Backlog Template',
          description: 'Sprint backlog management template',
          icon: '📝',
          downloadable: true
        },
        {
          type: 'video',
          title: 'Scrum Master Tips',
          description: 'Best practices for Scrum Masters',
          icon: '🎥',
          downloadable: false
        }
      ],
      'Kanban': [
        {
          type: 'document',
          title: 'Kanban Board Setup Guide',
          description: 'Step-by-step Kanban board configuration',
          icon: '📋',
          downloadable: true
        },
        {
          type: 'template',
          title: 'WIP Limits Calculator',
          description: 'Work in Progress limits calculation tool',
          icon: '🧮',
          downloadable: true
        },
        {
          type: 'link',
          title: 'Kanban University',
          description: 'Official Kanban University resources',
          icon: '🔗',
          downloadable: false
        }
      ],
      'Six Sigma': [
        {
          type: 'document',
          title: 'DMAIC Process Guide',
          description: 'Complete DMAIC methodology guide',
          icon: '📖',
          downloadable: true
        },
        {
          type: 'template',
          title: 'Statistical Tools Cheat Sheet',
          description: 'Quick reference for Six Sigma tools',
          icon: '📊',
          downloadable: true
        },
        {
          type: 'link',
          title: 'ASQ Resources',
          description: 'American Society for Quality resources',
          icon: '🔗',
          downloadable: false
        }
      ],
      'Digital Management': [
        {
          type: 'document',
          title: 'Digital Tools Overview',
          description: 'Essential digital project management tools',
          icon: '💻',
          downloadable: true
        },
        {
          type: 'template',
          title: 'Remote Team Checklist',
          description: 'Remote team management checklist',
          icon: '✅',
          downloadable: true
        },
        {
          type: 'link',
          title: 'Digital PM Tools',
          description: 'Recommended digital project management tools',
          icon: '🔗',
          downloadable: false
        }
      ],
      'Strategic Management': [
        {
          type: 'document',
          title: 'Strategic Planning Framework',
          description: 'Strategic project planning methodology',
          icon: '📋',
          downloadable: true
        },
        {
          type: 'template',
          title: 'Stakeholder Analysis Matrix',
          description: 'Stakeholder identification and analysis tool',
          icon: '📊',
          downloadable: true
        },
        {
          type: 'link',
          title: 'Strategy Resources',
          description: 'Strategic management best practices',
          icon: '🔗',
          downloadable: false
        }
      ]
    };

    const specificResources = categorySpecificResources[course.category] || [];
    return [...baseResources, ...specificResources];
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Course not found</p>
      </div>
    );
  }

  const languages = ['English', 'French', 'Arabic'];
  const resources = getCourseResources(course);

  return (
    <>
      {/* Main content below */}
      <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}>
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
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Course Details</h2>
          </div>

          {/* Hero Section */}
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3">
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[218px]"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${course.heroImage || course.image}")`
                }}
              >
                <div className="flex p-4">
                  <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                    {course.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            {course.description}
          </p>

          {/* Key Benefits */}
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Key Benefits</h3>
          {course.benefits && course.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 bg-white px-4 min-h-14">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">{benefit}</p>
            </div>
          ))}

          {/* Curriculum/Resources Tabs */}
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            {activeTab === 'Modules' ? 'Curriculum' : 'Resources'}
          </h3>
          <div className="pb-3">
            <div className="flex border-b border-[#dce0e5] px-4 gap-8">
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'Modules' 
                    ? 'border-b-[#111418] text-[#111418]' 
                    : 'border-b-transparent text-[#637588]'
                }`}
                onClick={() => setActiveTab('Modules')}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Modules</p>
              </button>
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'Resources' 
                    ? 'border-b-[#111418] text-[#111418]' 
                    : 'border-b-transparent text-[#637588]'
                }`}
                onClick={() => setActiveTab('Resources')}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Resources</p>
              </button>
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'Modules' ? (
            /* Curriculum Content */
            <div className="flex flex-col p-4">
              {course.curriculum && course.curriculum.map((module, index) => (
                <details key={index} className="flex flex-col border-t border-t-[#dce0e5] py-2 group" open={index === 0}>
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-[#111418] text-sm font-medium leading-normal">{module.title}</p>
                    <div className="text-[#111418] group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                  </summary>
                  <p className="text-[#637588] text-sm font-normal leading-normal pb-2">
                    {module.description}
                  </p>
                </details>
              ))}
            </div>
          ) : (
            /* Resources Content */
            <div className="flex flex-col p-4 gap-3">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center gap-4 bg-white border border-[#dce0e5] rounded-lg p-4">
                  <div className="text-2xl">{resource.icon}</div>
                  <div className="flex-1">
                    <p className="text-[#111418] text-base font-medium leading-normal">{resource.title}</p>
                    <p className="text-[#637588] text-sm font-normal leading-normal">{resource.description}</p>
                  </div>
                  <button className="flex items-center justify-center rounded-lg bg-[#1672ce] text-white px-4 py-2 text-sm font-medium">
                    {resource.downloadable ? 'Download' : 'View'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Accreditation */}
          {course.accreditation && (
            <>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Accreditation</h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                  </svg>
                </div>
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">{course.accreditation}</p>
              </div>
            </>
          )}

          {/* Ratings & Reviews */}
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Ratings & Reviews</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">{course.rating || 4.8}</p>
              <div className="flex gap-0.5">
                {renderStars(course.rating || 4, '18px')}
              </div>
              <p className="text-[#111418] text-base font-normal leading-normal">{course.reviewCount || 125} reviews</p>
            </div>
            <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
              <p className="text-[#111418] text-sm font-normal leading-normal">5</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dce0e5]">
                <div className="rounded-full bg-[#111418]" style={{ width: '70%' }}></div>
              </div>
              <p className="text-[#637588] text-sm font-normal leading-normal text-right">70%</p>
              <p className="text-[#111418] text-sm font-normal leading-normal">4</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dce0e5]">
                <div className="rounded-full bg-[#111418]" style={{ width: '20%' }}></div>
              </div>
              <p className="text-[#637588] text-sm font-normal leading-normal text-right">20%</p>
              <p className="text-[#111418] text-sm font-normal leading-normal">3</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dce0e5]">
                <div className="rounded-full bg-[#111418]" style={{ width: '5%' }}></div>
              </div>
              <p className="text-[#637588] text-sm font-normal leading-normal text-right">5%</p>
              <p className="text-[#111418] text-sm font-normal leading-normal">2</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dce0e5]">
                <div className="rounded-full bg-[#111418]" style={{ width: '3%' }}></div>
              </div>
              <p className="text-[#637588] text-sm font-normal leading-normal text-right">3%</p>
              <p className="text-[#111418] text-sm font-normal leading-normal">1</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dce0e5]">
                <div className="rounded-full bg-[#111418]" style={{ width: '2%' }}></div>
              </div>
              <p className="text-[#637588] text-sm font-normal leading-normal text-right">2%</p>
            </div>
          </div>
        </div>

        {/* Enrollment Button */}
        <div>
          <div className="flex px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1672ce] text-white text-base font-bold leading-normal tracking-[0.015em]"
              onClick={() => {
                if (!user) {
                  navigate('/login');
                } else {
                  // Enrollment logic or show a message
                  alert('You are enrolled!');
                }
              }}
            >
              <span className="truncate">Enroll Now</span>
            </button>
          </div>
          <div className="h-5 bg-white"></div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default CourseDetailsPage; 