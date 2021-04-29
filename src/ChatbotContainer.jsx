import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './css/ChatbotContainer.css';

const config = {
  botName: 'Zabiják',
  lang: 'cz',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

const ChatbotContainer = () => {
  return (
    <div className='chatbotContainer'>
      <Chatbot config={config} />
    </div>
  );
};

export default ChatbotContainer;
