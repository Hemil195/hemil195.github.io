import { useState, useEffect } from "react";
import "./BottomNav.css";

function BottomNav() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after scrolling down
      setShowBackToTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'education', 'projects', 'achievements', 'contact'];
      
      // Find which section is currently in view
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (more lenient detection)
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="bottom-nav">
        <a href="#home" onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}><i className="fas fa-home"></i> Home</a>
        <a href="#skills" onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}><i className="fas fa-code"></i> Skills</a>
        <a href="#education" onClick={() => handleNavClick('education')} className={activeSection === 'education' ? 'active' : ''}><i className="fas fa-graduation-cap"></i> Education</a>
        <a href="#projects" onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}><i className="fas fa-rocket"></i> Projects</a>
        <a href="#achievements" onClick={() => handleNavClick('achievements')} className={activeSection === 'achievements' ? 'active' : ''}><i className="fas fa-trophy"></i> Awards</a>
        <a href="#contact" onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}><i className="fas fa-envelope"></i> Contact</a>
      </nav>
      
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default BottomNav;
