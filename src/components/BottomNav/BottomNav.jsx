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
      const sections = ['home', 'skills', 'projects', 'education', 'achievements', 'contact'];
      
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
        <a href="#home" onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}><i className="fas fa-house"></i><span className="nav-text"> Home</span></a>
        <a href="#skills" onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}><i className="fas fa-laptop-code"></i><span className="nav-text"> Skills</span></a>
        <a href="#projects" onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}><i className="fas fa-diagram-project"></i><span className="nav-text"> Projects</span></a>
        <a href="#education" onClick={() => handleNavClick('education')} className={activeSection === 'education' ? 'active' : ''}><i className="fas fa-user-graduate"></i><span className="nav-text"> Education</span></a>
        <a href="#achievements" onClick={() => handleNavClick('achievements')} className={activeSection === 'achievements' ? 'active' : ''}><i className="fas fa-award"></i><span className="nav-text"> Achievements</span></a>
        <a href="#contact" onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}><i className="fas fa-paper-plane"></i><span className="nav-text"> Contact</span></a>
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
