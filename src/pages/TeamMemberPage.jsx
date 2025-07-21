import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const TeamMemberPage = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();

  // Team member data
  const teamMembers = {
    '1': {
      name: 'Youcef BELOUZ',
      title: 'Founder of CONNECTECH, Entreprise Governance, Project management & Agile Instructor, Trainer, PMO Expert, Coach & Mentor',
      subtitle: '',
      image: '/youcef-belouz.jpg.png',
      bio: (
        <>
          <p>👉Need advice ?<br/>👉Got a challenge ?<br/>👉Just want to talk Gantt charts over coffee Or maybe enjoy a delicious strawberry tart ☕🍓, my absolute favorite! ?</p>
          <p>It would be my honor to support you in reaching your project goals. Hence, I’m at your disposal for any request or guidance you need.</p>
          <p>Let’s make things happen together!</p>
          <p>Curious about who I am? 😉</p>
          <p>I am a certified trainer, PMO expert, Agile coach, and strategic advisor with over <b>23 years of experience</b> managing complex projects across IT, Telecommunications, and Construction sectors. As a trusted consultant, I help organizations enhance <b>enterprise governance</b>, achieve <b>strategic alignment</b>, and drive <b>organizational transformation</b>.</p>
          <p>I have delivered <b>200+ training sessions</b> and hold multiple internationally recognized project management certifications. My consulting services focus on high-impact areas such as:</p>
          <ul className="list-disc pl-6">
            <li><b>✔ Enterprise Governance and Strategic Alignment / Enhancement</b></li>
            <li><b>✔ Program and Portfolio Management</b></li>
            <li><b>✔ PMO Setup and Optimization</b></li>
            <li><b>✔ Project Management Coaching and Performance Management</b></li>
            <li><b>✔ End-to-End Project Delivery</b></li>
            <li><b>✔ Agile and Lean Methodologies</b>, including Scrum, Kanban, SAFe, XP, Six Sigma, and Lean</li>
            <li><b>✔ Leadership Development and Soft Skills Enhancement</b></li>
          </ul>
          <p>I hold a degree in <b>Mechanical Construction Engineering</b>, along with postgraduate ...</p>
        </>
      ),
      linkedin: '#',
      twitter: '#'
    },
    '2': {
      name: 'Mahfoud KARA BERNOU',
      title: 'Project management & Agile Instructor, Trainer and Coach',
      subtitle: '',
      image: '/7.png',
      bio: (
        <>
          <p>I have over <b>10 years of experience</b> in the industry as a <b>Technical and Project Management expert</b>. I’ve applied my knowledge across <b>IT, Telecom, and Management</b>, working in diverse areas such as <b>Wireless technologies, OSS (Operations Support Systems)</b>, and overall project and service management.</p>
          <p>I’m truly passionate about <b>training and knowledge sharing</b>. It’s something that drives me both professionally and personally.</p>
          <p>Throughout my career, I’ve had the chance to collaborate with experts from leading companies and gain valuable experience as an <b>OSS specialist, trainer in quality and project management principles, and project manager</b> within my organization.</p>
          <p>My goal is to share my passion for <b>IT, wireless telecom, and project management</b> in a way that makes these fields accessible and practical. I believe that by doing so, I can help individuals and organizations <b>enhance their performance, improve quality</b>, and create lasting value.</p>
          <p>I also hold several <b>industry-recognized certifications</b>, including:</p>
          <ul className="list-disc pl-6">
            <li>✅ PMP Certified</li>
            <li>✅ PMP PMI-ATP Instructor ongoing process</li>
            <li>✅ PMI-PMOCP certification process ongoing</li>
            <li>✅ PSM I Certified</li>
            <li>✅ Huawei PROJECT MANAGEMENT HCPM-A Association Certified</li>
            <li>✅ Project Financial Management - ToB</li>
          </ul>
        </>
      ),
      linkedin: '#',
      twitter: '#'
    },
    '3': {
      name: 'Raouf CHERFEDDINE',
      title: 'Project management & Agile Instructor, Trainer and Coach',
      subtitle: '',
      image: '/8.png',
      bio: (
        <>
          <p>I graduated from university with a degree in Computer Engineering. I began my career as a Technical Engineer, a role I held for two years before transitioning into consulting for another two. Driven by an entrepreneurial spirit, I went on to found my own company, specializing in providing IT services to businesses. After successfully running it for a decade, I launched a second company in the same field to expand my impact and service offering.</p>
          <p>Over the course of more than <b>14 years in IT services</b>, I’ve gained a broad skill set through hands-on experience, continuous learning, and multiple professional training programs and certifications such as:</p>
          <b>Project Management Institute</b>
          <ul className="list-disc pl-6">
            <li>✅ PMI ATP PMP Instructor process ongoing</li>
            <li>✅ PMI-PMOCP certification process ongoing</li>
            <li>✅ PMP Certified (Project Management Professional)</li>
            <li>✅ PMI RMP Certified (Risk Management Professional)</li>
          </ul>
          <b>NUTANIX</b>
          <ul className="list-disc pl-6">
            <li>✅ Nutanix Certified Professional – Multi Cloud Infrastructure (NCP-MCI) 5.15</li>
            <li>✅ Nutanix Certified Professional 5.10</li>
            <li>✅ Nutanix Certified Systems Engineer</li>
          </ul>
          <b>Cisco</b>
          <ul className="list-disc pl-6">
            <li>✅ Formation Cisco CCNA v2.0</li>
            <li>✅ Certified Cisco CCNA v2.0</li>
          </ul>
          <b>MICROSOFT</b>
          <ul className="list-disc pl-6">
            <li>✅ Installing and Configuring Windows Server</li>
            <li>✅ Administering Windows Server</li>
            <li>✅ Configuring Advanced Windows Server Services</li>
          </ul>
        </>
      ),
      linkedin: '#',
      twitter: '#'
    },
    '4': {
      name: 'Samia BESSALAH',
      title: 'Project management & Agile Instructor, Trainer and Coach',
      subtitle: '',
      image: '/9.png',
      bio: (
        <>
          <p>PMP® certified Architect and Project Manager with 20+ years of experience delivering complex architectural and technical projects across the <b>tertiary, public, industrial</b>, and <b>research & development</b> sectors.</p>
          <p>Throughout my career, I have led multidisciplinary teams with <b>clarity, structure</b>, and a strong commitment to <b>project value creation</b>. My strength lies in translating client needs into tangible, high-performance spaces, while ensuring <b>stakeholder alignment, budget control, and regulatory compliance</b>.</p>
          <p>Today, I am driven by the <b>desire to share my expertise</b>, contribute to <b>professional development</b>, and support the next generation of <b>project leaders</b>.</p>
          <p>I believe in the power of <b>adaptability and continuous learning</b>, and I am passionate about teaching <b>predictive, agile, and hybrid approaches</b> in project management each chosen not by habit, but by <b>strategic alignment with project context and objectives</b>.</p>
          <p>My goal as a future PMP® instructor is to deliver training that is <b>pragmatic, engaging, and rooted in real-world practice</b>, while empowering learners to build confidence and structure in their own project environments.</p>
          <p>BIM Manager certified (2023)<br/>PMP certified (2025)</p>
          <p>Samia got several certifications:</p>
          <ul className="list-disc pl-6">
            <li>✅ PMP Certified</li>
            <li>✅ PMP PMI-ATP Instructor ongoing process</li>
            <li>✅ BIM Manager certified</li>
          </ul>
        </>
      ),
      linkedin: '#',
      twitter: '#'
    },
    '5': {
      name: 'David Thompson',
      title: 'Lead Consultant',
      subtitle: 'Digital Transformation Expert',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsThJ5lcIe89N6geUvdRZxvYVzTe-6LSwGwkqb6l09YPS6J8vv8468ktl62ZsLKVzkDrc0mk0ZWiKwwlG6ub-6NCY6Zzl-7zGw1bJeH4Fec96Xka5nRTj-pmjoPB9dQwK3m0lfjEv4zBvK1TUt9KaWYlYMSK5uHMgp32edI5e0X1LujNGfVA-QceYT4hXHbKCi09902eoToUMO9sLuva39h4U06LrFGpD4DPTk-XAQUZs-km3D_qBD3svni2EPc8HsysA1D0fR96c',
      bio: 'David is a digital transformation expert who has guided organizations through complex technological changes. His expertise in change management and stakeholder engagement is invaluable to our students.',
      linkedin: '#',
      twitter: '#'
    },
    '6': {
      name: 'Lisa Wang',
      title: 'Senior Trainer',
      subtitle: 'Communication & Leadership Coach',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaRHaiVcMstqTd0WupNiTHTAKw-dIR-Gf89uySDpN7MrOIRvMQ1gxPck_6z08MQ0L7JYK_i1pxjvwJxN8Ask1oxl0hjre6v_s25XpszBMSLsrbHdCFfAZWWgi2MNzWxPwdGqW9vTSc4KwmebjlGkAXbWrO5vJdzv2LhudIlhBk8w5S0rVvMSYmERMEQseFnLaVSQPHuAhxkqqZzdyJ-uh6Z1hFbbzYy2oJBelJeZEU2ROo_dr28BwZ1aKQWuiGCo8lmlTwn6H01F4',
      bio: 'Lisa focuses on developing leadership skills and effective communication strategies. Her background in organizational psychology helps students build strong teams and navigate complex workplace dynamics.',
      linkedin: '#',
      twitter: '#'
    }
  };

  const member = teamMembers[memberId] || teamMembers['1'];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div 
            className="text-[#131416] flex size-12 shrink-0 items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#131416] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">{member.name}</h2>
        </div>

        {/* Team Member Profile */}
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                  backgroundImage: `url("${member.image}")`
                }}
              ></div>
              <div className="flex flex-col items-center justify-center justify-center">
                <p className="text-[#131416] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{member.name}</p>
                <p className="text-[#6b7680] text-base font-normal leading-normal text-center">{member.title}</p>
                <p className="text-[#6b7680] text-base font-normal leading-normal text-center">{member.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[#131416] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {member.bio}
        </p>

        {/* Social Links */}
        <h3 className="text-[#131416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Connect with {member.name.split(' ')[0]}</h3>
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f3] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">LinkedIn</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f3] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Twitter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
          <Link to="/" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </Link>
          <Link to="/courses" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Courses</p>
          </Link>
          <Link to="/resources" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,56H216V168H40Zm32,32a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm88-56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Resources</p>
          </Link>
          <Link to="/about" className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#111518]">
            <div className="text-[#111518] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <p className="text-[#111518] text-xs font-medium leading-normal tracking-[0.015em]">About Us</p>
          </Link>
          <Link to="/contact" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
          </Link>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default TeamMemberPage; 