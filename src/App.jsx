import { useEffect, useState } from "react";
import "./styles/tokens.css";
import "./styles/sections.css";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";

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

  return (
    <div className="app-root">
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
            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-code"></i>
                <h3>Programming Languages</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item-simple">Java</span>
                <span className="skill-item-simple">JavaScript</span>
                <span className="skill-item-simple">C</span>
                <span className="skill-item-simple">C++</span>
                <span className="skill-item-simple">Python</span>
                <span className="skill-item-simple">SQL</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fab fa-react"></i>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item-simple">React.js</span>
                <span className="skill-item-simple">HTML5</span>
                <span className="skill-item-simple">CSS3</span>
                <span className="skill-item-simple">JavaScript</span>
                <span className="skill-item-simple">Responsive Design</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-server"></i>
                <h3>Backend Development</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item-simple">Node.js</span>
                <span className="skill-item-simple">Express.js</span>
                <span className="skill-item-simple">PHP</span>
                <span className="skill-item-simple">REST APIs</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-database"></i>
                <h3>Database</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item-simple">MongoDB</span>
                <span className="skill-item-simple">MySQL</span>
                <span className="skill-item-simple">XAMPP</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-tools"></i>
                <h3>Tools & Technologies</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item-simple">Git</span>
                <span className="skill-item-simple">GitHub</span>
                <span className="skill-item-simple">VS Code</span>
                <span className="skill-item-simple">Vite</span>
                <span className="skill-item-simple">NPM</span>
                <span className="skill-item-simple">Postman</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-lightbulb"></i>
                <h3>Soft Skills</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item-simple">Problem Solving</span>
                <span className="skill-item-simple">Team Work</span>
                <span className="skill-item-simple">Time Management</span>
                <span className="skill-item-simple">Self Learning</span>
              </div>
            </div>
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
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023 - Present</div>
                <div className="edu-card-modern">
                  <div className="edu-card-header">
                    <div className="edu-badge">Current</div>
                  </div>
                  <h3 className="edu-title">Computer Science and Engineering</h3>
                  <p className="edu-subtitle">Bachelor of Technology</p>
                  <div className="edu-institution">
                    <span>Charusat University, Anand, Gujarat</span>
                  </div>
                  <div className="edu-details">
                    <div className="edu-stat">
                      <span className="stat-label">CGPA</span>
                      <span className="stat-value">9.65</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2023</div>
                <div className="edu-card-modern">
                  <h3 className="edu-title">Higher Secondary Certificate</h3>
                  <p className="edu-subtitle">Science Stream (HSC)</p>
                  <div className="edu-institution">
                    <span>Lokmanya Vidhyalaya, Rander, Surat</span>
                  </div>
                  <div className="edu-details">
                    <div className="edu-stat">
                      <span className="stat-label">Parcentage</span>
                      <span className="stat-value">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2021</div>
                <div className="edu-card-modern">
                  <div className="edu-card-header">
                    <div className="edu-badge">Foundation</div>
                  </div>
                  <h3 className="edu-title">Secondary School Certificate</h3>
                  <p className="edu-subtitle">SSC</p>
                  <div className="edu-institution">
                    <span>Smt. I. N. Tekrawala High School, Surat</span>
                  </div>
                  <div className="edu-details">
                    <div className="edu-stat">
                      <span className="stat-label">Parcentage</span>
                      <span className="stat-value">81%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="project-card">
              <div className="project-header">
                <span className="project-year">2025</span>
              </div>
              <div className="project-content">
                <h3>Jay Jalaram Electricals - Business Management System</h3>
                <p>Developed a comprehensive business management system for electrical services. Automated GST-compliant invoice generation and billing. Implemented role-based access control for Admin, Client, and User roles. Built real-time dashboard analytics with payment tracking and professional PDF exports.</p>
                <div className="project-footer">
                  <div className="project-tech">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-stack">
                      <span className="tech-item">MongoDB</span>
                      <span className="tech-item">Express</span>
                      <span className="tech-item">React</span>
                      <span className="tech-item">Node.js</span>
                      <span className="tech-item">JWT</span>
                      <span className="tech-item">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="project-badge"><i className="fas fa-trophy"></i> Full-Stack Business Management System</div>
                  <div className="project-links">
                    <span className="project-btn" style={{opacity: 0.6, cursor: "not-allowed"}} title="Private repository"><i className="fas fa-code"></i> Code</span>
                    <a href="https://jjelectricals.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn"><i className="fas fa-rocket"></i> Live Demo</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-year">2025</span>
              </div>
              <div className="project-content">
                <h3>FreshTrack</h3>
                <p>Built a MERN stack app to reduce food waste via smart inventory control. Integrated AI-based demand prediction and expiry-based dynamic discounts. Automated donation tracking for unsold items. Created dashboards for inventory, sold, donated, and expired products.</p>
                <div className="project-footer">
                  <div className="project-tech">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-stack">
                      <span className="tech-item">MongoDB</span>
                      <span className="tech-item">Express</span>
                      <span className="tech-item">React</span>
                      <span className="tech-item">Node.js</span>
                    </div>
                  </div>
                  <div className="project-badge"><i className="fas fa-trophy"></i> Full-Stack MERN Application</div>
                  <div className="project-links">
                    <a href="https://github.com/cs-cspit/23CS-SEM4-CSE210_64_78_83" className="project-btn"><i className="fas fa-code"></i> Code</a>
                    <a href="https://fresh-track-six.vercel.app/" className="project-btn"><i className="fas fa-rocket"></i> Demo</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-year">2025</span>
              </div>
              <div className="project-content">
                <h3>Event Management System</h3>
                <p>Developed an intuitive event management system using Python and Gradio. Implemented event creation, user registration, and real-time tracking. Enabled admin approval workflows and role-based dashboards. Used CSV files for persistent storage with validation.</p>
                <div className="project-footer">
                  <div className="project-tech">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-stack">
                      <span className="tech-item">Python</span>
                      <span className="tech-item">Gradio</span>
                      <span className="tech-item">CSV</span>
                    </div>
                  </div>
                  <div className="project-badge"><i className="fas fa-trophy"></i> Python-Based Application</div>
                  <div className="project-links">
                    <a href="https://github.com/Hemil195" className="project-btn" title="View Event Management System code"><i className="fas fa-code"></i> Code</a>
                    <span className="project-btn" style={{opacity: 0.6, cursor: "not-allowed"}} title="Demo not available"><i className="fas fa-rocket"></i> Demo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-year">2024</span>
              </div>
              <div className="project-content">
                <h3>Clubs Management System</h3>
                <p>Built a web app to manage college club activities and boost student involvement. Created interfaces for students, faculty coordinators, and admins. Implemented club registration, event listings, feedback, and participation logs. Tech stack: HTML, CSS, JavaScript, PHP, MySQL (XAMPP).</p>
                <div className="project-footer">
                  <div className="project-tech">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-stack">
                      <span className="tech-item">HTML</span>
                      <span className="tech-item">CSS</span>
                      <span className="tech-item">JavaScript</span>
                      <span className="tech-item">PHP</span>
                      <span className="tech-item">MySQL</span>
                    </div>
                  </div>
                  <div className="project-badge"><i className="fas fa-trophy"></i> Responsive Web Application</div>
                  <div className="project-links">
                    <a href="https://github.com/Hemil195" className="project-btn" title="View Clubs Management System code"><i className="fas fa-code"></i> Code</a>
                    <span className="project-btn" style={{opacity: 0.6, cursor: "not-allowed"}} title="Demo not available"><i className="fas fa-rocket"></i> Demo</span>
                  </div>
                </div>
              </div>
            </div>
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
              
              <div className="achievement-card">
                <div className="achievement-header">
                  <h4>Codilio Platform</h4>
                  <span className="achievement-position">450+ Problems Solved</span>
                </div>
                <p className="achievement-desc">
                  Solved 450+ Data Structures and Algorithms problems across multiple competitive programming platforms.
                </p>
              </div>

              <div className="achievement-card">
                <div className="achievement-header">
                  <h4>Technical Treasure Hunt (DSA-Based)</h4>
                  <span className="achievement-position">Winner</span>
                </div>
                <p className="achievement-desc">
                  Won the Department Level Technical Treasure Hunt competition in 2024.
                </p>
                <div className="achievement-meta">
                  <span className="meta-item"><i className="far fa-calendar"></i> 2024</span>
                  <span className="meta-item"><i className="fas fa-building"></i> Department Level</span>
                </div>
              </div>
            </div>

            <div className="achievement-category">
              <h3 className="achievement-category-title"><i className="fas fa-certificate"></i> Certifications</h3>
              
              <div className="certification-list">
                <div className="cert-item">
                  <h4>Design and Analysis of Algorithms - NPTEL</h4>
                  <p>Completed comprehensive course on algorithm design and analysis</p>
                </div>
                <div className="cert-item">
                  <h4>Data Structures and Algorithms using Java - NPTEL</h4>
                  <p>Advanced DSA certification focusing on Java implementation</p>
                </div>
                <div className="cert-item">
                  <h4>Database Management Systems (DBMS) - NPTEL</h4>
                  <p>Comprehensive study of database concepts and management</p>
                </div>
                <div className="cert-item">
                  <h4>Getting Started with AI on Jetson Nano - NVIDIA</h4>
                  <p>Introduction to AI and machine learning on edge devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section--contact reveal">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a conversation about technology.
          </p>
          
          <div className="contact-grid">
            <a href="mailto:hemilpatel0195@gmail.com" className="contact-link">
              <span className="contact-link-icon"><i className="fas fa-envelope"></i></span>
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">hemilpatel0195@gmail.com</span>
            </a>
            <a href="tel:+919876543210" className="contact-link">
              <span className="contact-link-icon"><i className="fas fa-phone"></i></span>
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">+91 98765 43210</span>
            </a>
            <a href="https://linkedin.com/in/hemil-patel-298a83288" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon"><i className="fab fa-linkedin"></i></span>
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">Hemil Patel</span>
            </a>
          </div>

          <div className="contact-cta">
            <h3>Ready to Work Together?</h3>
            <p>Whether you have a project in mind or want to discuss opportunities, I'd love to hear from you.</p>
            <div className="contact-buttons">
              <a href="mailto:hemilpatel0195@gmail.com" className="btn btn-primary"><i className="fas fa-envelope"></i> Send Email</a>
              <a href="https://linkedin.com/in/hemil-patel-298a83288" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><i className="fab fa-linkedin"></i> Connect on LinkedIn</a>
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
