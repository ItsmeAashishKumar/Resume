import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

function Project() {
  const [isVisible, setIsVisible] = useState([false, false, false]); // Separate state for each card

  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll(".project-card"); // Get all elements with class 'project-card'
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight/1.5 && rect.bottom >= 0;
        setIsVisible(prevState => {
          const newState = [...prevState];
          newState[index] = isVisible;
          return newState;
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='projects' id='project'>
      <h1 className='project-heading'>PROJECTS</h1>
      <div className='project-container'>
        <motion.div 
          className='project-card'
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: isVisible[0] ? 1 : 0, y: isVisible[0] ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <div className='project-img'>
            <img src='./Pics/project1.jpg' alt="Project 1" />
          </div>
          <div className='project-info'>
            <a href='https://github.com/ItsmeAashishKumar/Crypto-Tracker'>COINDOM</a>
            <p>"Coindom is a user-friendly cryptocurrency tracking website designed to provide real-time insights into the latest trends and market data of various cryptocurrencies. Powered by React technology, it enables users to effortlessly monitor trending coins and explore current market trends. Coindom offers a seamless experience for cryptocurrency enthusiasts seeking to stay informed and make informed decisions in the dynamic digital asset market."
          .</p>
          </div>
        </motion.div>
        
        <motion.div 
          className='project-card'
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: isVisible[1] ? 1 : 0, y: isVisible[1] ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <div className='project-img'>
            <img src='./Pics/project2.png' alt="Project 2" />
          </div>
          <div className='project-info'>
            <a href='https://github.com/ItsmeAashishKumar/GymMate'>SPORTS MANAGEMENT SYSTEM</a>
            <p>"The Sports Management System is a streamlined website built with Python, HTML, and CSS. It simplifies inventory tracking by managing the inflow and outflow of sports items. Users can easily monitor total inventory, track issued items, record fines, and seamlessly add or remove inventory items. This user-friendly platform ensures efficient sports equipment management for administrators and users.".</p>
          </div>
        </motion.div>
        
        <motion.div 
          className='project-card'
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: isVisible[2] ? 1 : 0, y: isVisible[2] ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <div className='project-img'>
            <img src='./Pics/project3.jpg' alt="Project 3" />
          </div>
          <div className='project-info'>
            <a href='https://github.com/ItsmeAashishKumar/GymMate'>GYMMATE</a>
            <p>"GymMate is a dynamic website built with React, offering a wide range of features for fitness enthusiasts. Users can browse exercise categories and target specific muscle groups, with access to over a thousand exercises complete with practical examples. The site includes pagination, detailed exercise information, and pulls related videos from YouTube for enhanced guidance. GymMate sets a new standard for online workout resources."</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
