import React, { useEffect } from 'react';
import './BackToTop.css'

const BackToTopButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const toTopBtn = document.getElementById('toTopBtn');
      if (window.pageYOffset > 300) {
        toTopBtn.classList.add('cd-top--is-visible');
      } else {
        toTopBtn.classList.remove('cd-top--is-visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      id="toTopBtn"
      className="hvr-bob cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out "
      data-abc="true"
      onClick={scrollToTop}
    ></a>
  );
};

export default BackToTopButton;
