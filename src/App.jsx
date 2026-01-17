import { useEffect } from "react";
import "./styles/tokens.css";
import "./styles/sections.css";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
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

  return (
    <div className="app-root">
      {/* Hero Section */}
      <section id="home" className="section section--home">
        <div className="hero-content">
          <div className="hero-greeting">Hi, I'm</div>
          <h1 className="hero-name">Hemil Patel</h1>
          <div className="hero-role">Full Stack Developer</div>
          <div className="hero-divider"></div>
          <p className="hero-tagline">
            I build scalable web applications and craft exceptional digital experiences 
            using modern technologies. Passionate about solving complex problems through clean, 
            efficient code.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary"><i className="fas fa-rocket"></i> View My Work</a>
            <a href="/Hemil_Patel.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><i className="fas fa-file-pdf"></i> View Resume</a>
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
            A diverse set of technical skills acquired through academic coursework, personal projects, and professional experience.
          </p>
          
          <div className="skills-container">
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon"><i className="fas fa-code"></i></span>
                <h3>Programming Languages</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon"><i className="fas fa-layer-group"></i></span>
                <h3>Frameworks & Tools</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">PHP</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon"><i className="fas fa-database"></i></span>
                <h3>Database</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">XAMPP</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon"><i className="fas fa-lightbulb"></i></span>
                <h3>Soft Skills</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Time Management</span>
                <span className="skill-tag">Team Coordination</span>
                <span className="skill-tag">Self-learning</span>
                <span className="skill-tag">Resilience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section--education reveal">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation with excellent performance and relevant coursework in software development.
          </p>
          
          <div className="education-list">
            <div className="education-card">
              <div className="edu-header">
                <div className="edu-icon"><i className="fas fa-graduation-cap"></i></div>
                <div className="edu-main">
                  <h3>Charusat University, Anand, Gujarat, India</h3>
                  <p className="edu-meta">July 2023 - Present • Computer Science and Engineering Department</p>
                </div>
              </div>
              <div className="edu-body">
                <div className="edu-degree">
                  <strong>Bachelor of Technology - Computer Science and Engineering</strong>
                  <span className="edu-grade">CGPA: 9.65</span>
                </div>
                <p className="edu-coursework">
                  <strong>Relevant Coursework:</strong> Data Structures and Algorithms, 
                  Object-Oriented Programming, Database Management Systems, Web Development, 
                  Computer Networks, Software Engineering
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-header">
                <div className="edu-icon"><i className="fas fa-school"></i></div>
                <div className="edu-main">
                  <h3>Lokmanya Vidhyalaya, Rander, Surat</h3>
                  <p className="edu-meta">2021 - 2023 • Science Stream</p>
                </div>
              </div>
              <div className="edu-body">
                <div className="edu-degree">
                  <strong>Higher Secondary Certificate (HSC)</strong>
                  <span className="edu-grade">Score: 78%</span>
                </div>
                <p className="edu-coursework">
                  <strong>Relevant Coursework:</strong> Physics, Chemistry, Mathematics, Computer Science
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-header">
                <div className="edu-icon"><i className="fas fa-book-open"></i></div>
                <div className="edu-main">
                  <h3>Smt. I. N. Tekrawala High School, Surat</h3>
                  <p className="edu-meta">2020 - 2021</p>
                </div>
              </div>
              <div className="edu-body">
                <div className="edu-degree">
                  <strong>Secondary School Certificate (SSC)</strong>
                  <span className="edu-grade">Score: 81%</span>
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
