import { useState, useEffect } from "react";
import "./BottomNav.css";

function BottomNav() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="bottom-nav">
        <a href="#home" className={activeSection === 'home' ? 'nav-active' : ''}><i className="fas fa-house"></i><span className="nav-text"> Home</span></a>
        <a href="#skills" className={activeSection === 'skills' ? 'nav-active' : ''}><i className="fas fa-laptop-code"></i><span className="nav-text"> Skills</span></a>
        <a href="#projects" className={activeSection === 'projects' ? 'nav-active' : ''}><i className="fas fa-diagram-project"></i><span className="nav-text"> Projects</span></a>
        <a href="#education" className={activeSection === 'education' ? 'nav-active' : ''}><i className="fas fa-user-graduate"></i><span className="nav-text"> Education</span></a>
        <a href="#achievements" className={activeSection === 'achievements' ? 'nav-active' : ''}><i className="fas fa-award"></i><span className="nav-text"> Achievements</span></a>
        <a href="#contact" className={activeSection === 'contact' ? 'nav-active' : ''}><i className="fas fa-paper-plane"></i><span className="nav-text"> Contact</span></a>
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
