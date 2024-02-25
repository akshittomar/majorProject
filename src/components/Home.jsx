

import React, { useState, useEffect } from 'react';
import video from '../assets/video.mp4';
import './home.css';



function Home() {
  const headings = [
    'Sample Heading Here ',
    'Sample Heading Here ',
    'Sample Heading Here ',
    'Sample Heading Here ',
    'Sample Heading Here ',
    'Sample Heading Here '
  ];
  const icons = [
    "fa-solid fa-house",
    "fa-solid fa-house",
    "fa-solid fa-house",
    "fa-solid fa-house",
    "fa-solid fa-house",
    "fa-solid fa-house"
    ]


  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currenticons, setcurrenticons] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) =>
        (prevIndex + 1) % headings.length
      );
      setcurrenticons((prevIndex) =>
        (prevIndex + 1) % icons.length
      );
    }, 2500); // Adjust the interval as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullscreen-bg">
      <video className="fullscreen-bg__video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fullscreen-bg__content">
        <h1 className="fa-solid">CROP PREDICTION</h1>


        <div style={{ display: "flex" }}>
          <div className="fade-in-heading-container">
            {headings.map((heading, index) => (
              <h4
                key={index}
                style={{ color: "", opacity: currentHeadingIndex === index ? 1 : 0 }}
                className={currentHeadingIndex === index ? "fade-in-heading fa-fade" : "d-none"}
              >
                {heading}&nbsp; <i class={icons[index]}></i>
               
              
              </h4>
            ))}
          </div>
          
         
          
        </div>

        <div style={{ display: "flex", cursor :"pointer"}}>
        <p  className='mx-3'  style={{color:"white"}}>
       HEADING ONE HERE
      </p>
      <p className='mx-3'  style={{color:"white"}}> 
         HEADING TWO HERE  </p>
          
          <p className='mx-3'  style={{color:"white"}}>
            HEADING THREE HERE 
          </p>

          <p className='mx-3'  style={{color:"white"}}>
            HEADING FOUR HERE 
            </p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
