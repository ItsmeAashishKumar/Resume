import React from 'react';

function Nav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='nav'>
      <div className='navbar'>
        <div className='title'>Aashish.dev</div>
        <div className='nav-elements'>
          <h3 onClick={() => scrollToSection('home')}>Home</h3>
          <h3 onClick={() => scrollToSection('about')}>About</h3>
          <h3 onClick={() => scrollToSection('skill')}>Skills</h3>
          <h3 onClick={() => scrollToSection('project')}>Project</h3>
          <h3 onClick={() => scrollToSection('cont')}>Contact</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
