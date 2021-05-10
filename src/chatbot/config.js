import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import ChatbotAvatar from './components/ChatbotAvatar';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: 'COVID19 Chatbot',
  customComponents: {
    botAvatar: (props) => <ChatbotAvatar {...props} />,
    header: () => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          backgroundColor: '#2b064d',
          color: '#fff',
          padding: '5px',
          fontSize: '22px',
          borderRadius: '5px',
          fontWeight: '600',
        }}
      >
        COVID19 CHATBOT
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#8262a7',
    },
    chatButton: {
      backgroundColor: '#2b064d',
    },
  },
};

export default config;
