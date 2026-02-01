import { useEffect, useState } from "react";
import "./styles/tokens.css";
import "./styles/sections.css";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import SkillGroup from "./components/SkillGroup/SkillGroup";
import EducationCard from "./components/EducationCard/EducationCard";
import AchievementCard from "./components/AchievementCard/AchievementCard";
import CertificationItem from "./components/CertificationItem/CertificationItem";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && roleText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && roleText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setRoleText(
          isDeleting
            ? currentRole.substring(0, roleText.length - 1)
            : currentRole.substring(0, roleText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  // Projects data
  const projects = [
    {
      year: "2025",
      title: "Jay Jalaram Electricals - Business Management System",
      description: "Developed a comprehensive business management system for electrical services. Automated GST-compliant invoice generation and billing. Implemented role-based access control for Admin, Client, and User roles. Built real-time dashboard analytics with payment tracking and professional PDF exports.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
      badge: "Full-Stack Business Management System",
      codeLink: null,
      demoLink: "https://jjelectricals.vercel.app/"
    },
    {
      year: "2025",
      title: "FreshTrack",
      description: "Built a MERN stack app to reduce food waste via smart inventory control. Integrated AI-based demand prediction and expiry-based dynamic discounts. Automated donation tracking for unsold items. Created dashboards for inventory, sold, donated, and expired products.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      badge: "Full-Stack MERN Application",
      codeLink: "https://github.com/cs-cspit/23CS-SEM4-CSE210_64_78_83",
      demoLink: "https://fresh-track-six.vercel.app/"
    },
    {
      year: "2025",
      title: "Veg Delight - Restaurant Order System",
      description: "Built a complete restaurant order management system for vegetarian cuisine. Implemented online ordering with shopping cart, checkout, and order tracking. Created admin dashboard for menu management, order processing, and sales reports. Features responsive design with Bootstrap and SQL Server database.",
      technologies: ["ASP.NET MVC", "C#", ".NET Framework", "SQL Server", "Bootstrap", "jQuery"],
      badge: "Full-Stack Restaurant Management System",
      codeLink: "https://github.com/Hemil195/Delight-Restaurant",
      demoLink: null
    },
    {
      year: "2025",
      title: "Event Management System",
      description: "Developed an intuitive event management system using Python and Gradio. Implemented event creation, user registration, and real-time tracking. Enabled admin approval workflows and role-based dashboards. Used CSV files for persistent storage with validation.",
      technologies: ["Python", "Gradio", "CSV"],
      badge: "Python-Based Application",
      codeLink: "https://github.com/Hemil195",
      demoLink: null
    },
    {
      year: "2024",
      title: "Clubs Management System",
      description: "Built a web app to manage college club activities and boost student involvement. Created interfaces for students, faculty coordinators, and admins. Implemented club registration, event listings, feedback, and participation logs. Tech stack: HTML, CSS, JavaScript, PHP, MySQL (XAMPP).",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      badge: "Responsive Web Application",
      codeLink: "https://github.com/Hemil195",
      demoLink: null
    }
  ];

  // Skills data
  const skillGroups = [
    {
      icon: "fas fa-code",
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "C", "C++", "Python", "SQL"]
    },
    {
      icon: "fab fa-react",
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "PHP", "REST APIs"]
    },
    {
      icon: "fas fa-database",
      title: "Database",
      skills: ["MongoDB", "MySQL", "XAMPP"]
    },
    {
      icon: "fas fa-tools",
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Vite", "NPM", "Postman"]
    },
    {
      icon: "fas fa-lightbulb",
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Work", "Time Management", "Self Learning"]
    }
  ];

  // Education data
  const education = [
    {
      date: "2023 - Present",
      badge: "Current",
      title: "Computer Science and Engineering",
      subtitle: "Bachelor of Technology",
      institution: "Charusat University, Anand, Gujarat",
      statLabel: "CGPA",
      statValue: "9.65"
    },
    {
      date: "2021 - 2023",
      badge: null,
      title: "Higher Secondary Certificate",
      subtitle: "Science Stream (HSC)",
      institution: "Lokmanya Vidhyalaya, Rander, Surat",
      statLabel: "Parcentage",
      statValue: "78%"
    },
    {
      date: "2020 - 2021",
      badge: "Foundation",
      title: "Secondary School Certificate",
      subtitle: "SSC",
      institution: "Smt. I. N. Tekrawala High School, Surat",
      statLabel: "Parcentage",
      statValue: "81%"
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "Codilio Platform",
      position: "450+ Problems Solved",
      description: "Solved 450+ Data Structures and Algorithms problems across multiple competitive programming platforms.",
      meta: null
    },
    {
      title: "Technical Treasure Hunt (DSA-Based)",
      position: "Winner",
      description: "Won the Department Level Technical Treasure Hunt competition in 2024.",
      meta: [
        { icon: "far fa-calendar", text: "2024" },
        { icon: "fas fa-building", text: "Department Level" }
      ]
    }
  ];

  // Certifications data
  const certifications = [
    {
      title: "Design and Analysis of Algorithms - NPTEL",
      description: "Completed comprehensive course on algorithm design and analysis",
      certificateLink: "#"
    },
    {
      title: "Data Structures and Algorithms using Java - NPTEL",
      description: "Advanced DSA certification focusing on Java implementation",
      certificateLink: "#"
    },
    {
      title: "Database Management Systems (DBMS) - NPTEL",
      description: "Comprehensive study of database concepts and management",
      certificateLink: "#"
    },
    {
      title: "Getting Started with AI on Jetson Nano - NVIDIA",
      description: "Introduction to AI and machine learning on edge devices",
      certificateLink: "#"
    }
  ];

  return (
    <div className="app-root">
      <ThemeToggle />
      {/* Hero Section */}
      <section id="home" className="section section--home">
        <div className="hero-content">
          <div className="hero-greeting">Hi, I'm</div>
          <h1 className="hero-name">Hemil Patel</h1>
          <div className="hero-role">{roleText}<span className="cursor">|</span></div>
          <div className="hero-divider"></div>
          <p className="hero-tagline">
            Computer Science Engineering student passionate about creating beautiful, 
            functional, and user-friendly web applications. Specialized in modern front-end 
            technologies with expertise in React, JavaScript, and responsive design.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/Hemil_Patel.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Resume</a>
          </div>
          <div className="hero-social">
            <a href="mailto:hemilpatel0195@gmail.com" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Hemil195" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/hemil-patel-298a83288" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.hackerrank.com/hemilpatel0195" target="_blank" rel="noopener noreferrer" className="social-link" title="HackerRank">
              <i className="fab fa-hackerrank"></i>
            </a>
            <a href="https://leetcode.com/hemilpatel0195" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
              <img src="/leetcode.png" alt="LeetCode" className="social-icon-img" />
            </a>
            <a href="https://codilio.com/profile/hemilpatel0195" target="_blank" rel="noopener noreferrer" className="social-link" title="Codilio">
              <img src="/codolio.svg" alt="Codilio" className="social-icon-svg" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section--skills reveal">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Programming languages, frameworks, and tools I use to create functional and user-friendly web applications.
          </p>
          
          <div className="skills-simple">
            {skillGroups.map((group, index) => (
              <SkillGroup 
                key={index} 
                icon={group.icon} 
                title={group.title} 
                skills={group.skills} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section--projects reveal">
        <div className="container">
          <h2 className="section-title">Projects & Work</h2>
          <p className="section-subtitle">
            Hands-on experience building scalable applications with modern technologies.
          </p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section--education reveal">
        <div className="container">
          <h2 className="section-title">Education Journey</h2>
          <p className="section-subtitle">
            My academic path in Computer Science and Engineering with a focus on building strong technical foundations.
          </p>
          
          <div className="education-timeline">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                date={edu.date}
                badge={edu.badge}
                title={edu.title}
                subtitle={edu.subtitle}
                institution={edu.institution}
                statLabel={edu.statLabel}
                statValue={edu.statValue}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section section--achievements reveal">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognition for excellence in competitive programming, hackathons, and continuous learning.
          </p>
          
          <div className="achievements-container">
            <div className="achievement-category">
              <h3 className="achievement-category-title"><i className="fas fa-laptop-code"></i> Competitive Programming</h3>
              
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.title}
                  position={achievement.position}
                  description={achievement.description}
                  meta={achievement.meta}
                />
              ))}
            </div>

            <div className="achievement-category">
              <h3 className="achievement-category-title"><i className="fas fa-certificate"></i> Certifications</h3>
              
              <div className="certification-list">
                {certifications.map((cert, index) => (
                  <CertificationItem
                    key={index}
                    title={cert.title}
                    description={cert.description}
                    certificateLink={cert.certificateLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section--contact reveal">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Open to full-time opportunities, freelance projects, and collaborations. 
              Let's discuss how we can work together.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <a href="mailto:hemilpatel0195@gmail.com">hemilpatel0195@gmail.com</a>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/hemil-patel-298a83288" target="_blank" rel="noopener noreferrer">Connect with me</a>
              </div>
            </div>

            <div className="contact-cta-box">
              <div className="cta-glow"></div>
              <h3>Available for New Projects</h3>
              <p>I'm currently accepting new projects and opportunities. Whether you need a full-stack developer, want to discuss a potential collaboration, or just want to say hi, feel free to reach out.</p>
              <div className="contact-actions">
                <a href="mailto:hemilpatel0195@gmail.com" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  <span>Send Message</span>
                </a>
                <a href="/Hemil_Patel.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fas fa-file-alt"></i>
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Hemil Patel. Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
