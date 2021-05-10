import './css/App.css';
import './css/App_MOBILE.css';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PersonIcon from '@material-ui/icons/Person';
import MapIcon from '@material-ui/icons/Map';
import ShowChartIcon from '@material-ui/icons/ShowChart';

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
      <div className='app_topbar'>
        <MapIcon class='hide icon_map' />
        <h1>nadpis</h1>
        <p>432423</p>
        <ShowChartIcon class='hide icon_chart' />
      </div>

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

      <div className='forms_mobile'>
        <div className='forms_mobile_icon'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://forms.office.com/pages/responsepage.aspx?id=AW39MGaVEEOyJReEvxFnXMjxamHwNP9Cqeem8s6Dwe1UNTVYMkpBSlBNOUs0N1dUTDBUTDY0UDNQMC4u'
          >
            <img
              className='forms_mobile_icon_itself'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Microsoft_Forms_(2019-present).svg/1200px-Microsoft_Forms_(2019-present).svg.png'
              alt='Microsoft Forms icon'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
