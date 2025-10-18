import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Lista de todas las secciones en orden
  const sections = ['hero', 'services', 'about', 'gallery', 'contact', 'terms'];

  // Mostrar/ocultar el botón basado en el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Detectar en qué sección estamos
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'gallery', 'contact', 'terms'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setCurrentSection(i);
          break;
        }
      }
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Si estamos en la última sección, volver al inicio
    if (currentSection === sections.length - 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Ir a la siguiente sección
      const nextSection = sections[currentSection + 1];
      const element = document.getElementById(nextSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getButtonIcon = () => {
    if (currentSection === sections.length - 1) {
      // Flecha hacia arriba cuando estamos en la última sección
      return (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
        </svg>
      );
    } else {
      // Flecha hacia abajo para ir a la siguiente sección
      return (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      );
    }
  };

  const getButtonTitle = () => {
    if (currentSection === sections.length - 1) {
      return "Volver al inicio";
    } else {
      return "Siguiente sección";
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleClick}
          className="scroll-button"
          title={getButtonTitle()}
          aria-label={getButtonTitle()}
        >
          {getButtonIcon()}
        </button>
      )}
    </>
  );
};

export default ScrollButton;