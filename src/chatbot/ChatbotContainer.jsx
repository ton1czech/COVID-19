import './css/ChatbotContainer.css';
import '../css/App_MOBILE.css';
import React from 'react';
import Chatbot from 'react-chatbot-kit';

import messageParser from './messageParser';
import actionProvider from './actionProvider';
import config from './config';

const ChatbotContainer = () => {
  return (
    <div className='chatbotContainer'>
      <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider} />
    </div>
  );
};

export default ChatbotContainer;
