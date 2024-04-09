import React from 'react';



function Skills() {
  const data = [
    {
      'name':'HTML',
      'img':'./Pics/html.svg'
    },
    {
      'name':'CSS',
      'img':'./Pics/css.webp'
    },
    {
      'name':'JAVASCRIPT',
      'img':'./Pics/javascript.png'
    },
    {
      'name':'REACT',
      'img':'./Pics/reactnew.png'
    },
    {
      'name':'C++',
      'img':'./Pics/C++.png'
    },
    {
      'name':'DSA',
      'img':'./Pics/dsanew.png'
    },
    {
      'name':'MYSQL',
      'img':'./Pics/mysql.png'
    },
    {
      'name':'PYTHON',
      'img':'./Pics/pythonnew.png'
    }
  ];



  return (
    <div className='skills' id='skill'>
      <h1 className='skills-heading'>SKILLS</h1>
      <div className='skills-content'>
        
        {data.map((d, index) => (
            <div key={index} className='card-container'>
              <div className='card'>
                <div className='img-card'>
                  <div className='img'>
                    <img src={d.img} alt={d.name} width="100px" />
                  </div>
                </div> 
                <div className='card-name'>
                  <p>{d.name}</p>
                </div>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default Skills;
