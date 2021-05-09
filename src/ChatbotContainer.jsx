import './css/ChatbotContainer.css';
import './css/App_MOBILE.css';
import React from 'react';
import Chatbot from 'react-chatbot-kit';

const ChatbotContainer = () => {
  return (
    <div className='chatbotContainer'>
      <Chatbot />
    </div>
  );
};

export default ChatbotContainer;
