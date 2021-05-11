import './chatbot/css/ChatbotContainer.css';
import './css/App_MOBILE.css';
import React from 'react';
import Chatbot from 'react-chatbot-kit';

import messageParser from './chatbot/messageParser';
import actionProvider from './chatbot/actionProvider';
import config from './chatbot/config';

const ChatbotContainer = () => {
  document.getElementsByTagName('input')[0].placeholder = 'Zde zadejte svůj dotaz.';

  return (
    <div className='chatbotContainer'>
      <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider} />
    </div>
  );
};

export default ChatbotContainer;
