import React from 'react';

function Home() {
  return (
    <div className='home' id='home'>
      <div className='home-elements'>
        <div className='home-headings'>
          <div className='home-title'>
            <h1 className='title1'>Front-End React</h1>
            <h1 className='title2'>Developer <span>&#128400;</span></h1>
          </div>
          <div className='home-desc'>
            <p className='p1'>Hi, I'm Aashish Kashyap. A passionate Front-end React </p>
            <p className='p2'>Developer based in Delhi, India</p>
          </div>
          <div className='home-img'>
            {/* GitHub logo with link */}
            <a href="https://github.com/ItsmeAashishKumar" target="_blank" rel="noopener noreferrer">
              <img src='./Pics/github.png' width='25px' alt="GitHub" />
            </a>
            {/* LinkedIn logo with link */}
            <a href="https://www.linkedin.com/in/aashish-kumar-5b264a22b/" target="_blank" rel="noopener noreferrer">
              <img src='./Pics/linkedin.png' width='40px' alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className='woggle-container'>
          <div className='wobble-circle'>
            <img src='./Pics/profile1.jpg' width='360px' alt="Coder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
