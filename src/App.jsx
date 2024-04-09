import React from 'react';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Divider from './Divider';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <div className='app'>
      <Divider />
      <Nav />
      <Home id='home' />
      <About id='about' />
      <Skills id='skill' />
      <Project id='project' />
      <Contact id='cont' />
    </div>
  );
}

export default App;
