import './css/App.css';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PersonIcon from '@material-ui/icons/Person';

import ChatbotContainer from './ChatbotContainer';
import Overview from './Overview';
import Map from './Map';
import Graphs from './Graphs';

function App() {
  const [isInactive, setInactive] = useState('false');

  const handleToggle = () => {
    setInactive(!isInactive);
  };

  return (
    <div className='app'>
      <div className='app_leftbar'>
        <Overview />
      </div>

      <div className='app_main'>
        <Map />

        <div className='icon_arrow'>
          <ArrowDownwardIcon class='icon_arrow_itself' />
        </div>

        <Graphs />
      </div>

      <div className='app_chatbot'>
        <div className={isInactive ? 'inactive' : 'active'}>
          <ChatbotContainer />
        </div>
        <PersonIcon class='chatbot_icon' onClick={handleToggle} />
      </div>
    </div>
  );
}

export default App;
