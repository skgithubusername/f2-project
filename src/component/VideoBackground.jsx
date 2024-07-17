




import React, { useEffect, useState } from 'react';
import imp1whtsp from '../img/whatsapp 1.png';
import imp2chats from '../img/ChatbotIcon.png';
import Navbar from './Navbar';

const VideoBackground = () => {
  const [lineHeight, setLineHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setLineHeight(scrollPercent * 10); // Increase the growth rate
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar/>
    
      <video 
                // src='/4468789-uhd_3840_2160_24fps (1).mp4'
                src='/4468789-uhd_3840_2160_24fps.mp4'
        className="absolute top-0 left-0 w-full h-full object-cover"
        // C:\Users\shrut\React.js_project\f2-project\public\4468789-uhd_3840_2160_24fps (1).mp4
        // C:\Users\shrut\React.js_project\f2-project\public\4468789-uhd_3840_2160_24fps.mp4
                width={1000}
                autoPlay
        loop
        muted
        playsInline
                poster="poster.jpg"
              />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">Dynamic Import-Export Enterprise</h2>
        <button className="mb-10 bg-blue-800 rounded-2xl text-white p-2 md:p-3">Know More</button>
        {/* Circle and Line */}
        <div className="relative flex flex-col items-center mt-4">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div
            className="absolute top-4 w-1 bg-white transition-all duration-75"
            style={{ height: `${lineHeight}vh` }}
          ></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 mb-4 ml-4">
        <img loading='lazy' title='KSR Enterprises Logo' src={imp1whtsp} alt="WhatsApp" className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <img loading='lazy' title='KSR Enterprises Logo' src={imp2chats} alt="Chatbot" className="w-26 h-20" />
      </div>
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-4xl">Scroll down to see the line grow</h2>
      </div>
      <div className="h-screen bg-gray-400"></div>
    </div>
  );
};

export default VideoBackground;
