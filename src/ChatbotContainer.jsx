import './scss/ChatbotContainer.scss';
import './scss/App_MOBILE.scss';
import React from 'react';
import Chatbot from 'react-chatbot-kit';

import messageParser from './chatbot/messageParser';
import actionProvider from './chatbot/actionProvider';
import config from './chatbot/config';

const ChatbotContainer = () => {
  return (
    <div className='chatbotContainer'>
      <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider} />
    </div>
  );
};

export default ChatbotContainer;
