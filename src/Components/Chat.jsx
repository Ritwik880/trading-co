import React, { useState, useEffect } from 'react';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '9241149525'; // Replace with your business WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleScroll = () => {
    // Set visibility based on the scroll position
    setIsVisible(window.scrollY > 100); // Adjust the value based on when you want the button to appear
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <button onClick={handleWhatsAppClick} className={`chat-icon ${isVisible ? 'visible' : ''}`}>
      <IoChatbubbleEllipsesSharp fontSize={60} color='#FF00FF'/>
    </button>

  );
};

export default Chat;
