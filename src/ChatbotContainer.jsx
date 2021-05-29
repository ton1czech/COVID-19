import './scss/ChatbotContainer.scss';
import './scss/App_MOBILE.scss';
import React from 'react';
import Chatbot from 'react-chatbot-kit';

import messageParser from './chatbot/messageParser';
import actionProvider from './chatbot/actionProvider';
import config from './chatbot/config';

const ChatbotContainer = () => {
  (function chatbotStyles() {
    try {
      document.getElementsByClassName('react-chatbot-kit-chat-inner-container')[0].style.height = '430px';
      document.getElementsByClassName('react-chatbot-kit-chat-container')[0].style.width = '310px';
      document.getElementsByClassName('react-chatbot-kit-chat-container')[0].style.border = '4px solid #2b064d';
      document.getElementsByClassName('react-chatbot-kit-chat-container')[0].style.background = '#2b064d';
      document.getElementsByClassName('react-chatbot-kit-chat-container')[0].style.borderRadius = '5px';
      document.getElementsByClassName('react-chatbot-kit-chat-message-container')[0].style.height = '380px';
      document.getElementsByClassName('react-chatbot-kit-chat-message-container')[0].style.width = '310px';
      document.getElementsByClassName('react-chatbot-kit-user-chat-message')[0].color = '#303030';
    } catch (error) {}
  })();

  return (
    <div className='chatbotContainer'>
      <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider} />
    </div>
  );
};

export default ChatbotContainer;
