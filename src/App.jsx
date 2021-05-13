import './scss/App.scss';
import './scss/App_MOBILE.scss';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PersonIcon from '@material-ui/icons/Person';
import MapIcon from '@material-ui/icons/Map';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import ChatbotContainer from './ChatbotContainer';
import Overview from './Overview';
import Map from './Map';
import Charts from './Charts';

function App() {
  const [isChatbotInactive, setChatbotInactive] = useState('false');
  const [isMapActive, setMapActive] = useState(true);
  const [isChartsActive, setChartsActive] = useState(false);

  const setMapInactive = () => setMapActive(false);
  const setChartsInactive = () => setChartsActive(false);

  const handleChatbotToggle = () => {
    setChatbotInactive(!isChatbotInactive);
    document.getElementsByClassName('react-chatbot-kit-chat-input')[0].placeholder = 'Zde zadejte svůj dotaz.';

    if (document.getElementsByClassName('leaflet-container')[0].style.zIndex === '5') {
      document.getElementsByClassName('leaflet-container')[0].style.zIndex = '10';
    } else if ((document.getElementsByClassName('leaflet-container')[0].style.zIndex = '10')) {
      document.getElementsByClassName('leaflet-container')[0].style.zIndex = '5';
    }

    if (document.getElementsByClassName('charts')[0].style.zIndex === '5') {
      document.getElementsByClassName('charts')[0].style.zIndex = '10';
    } else if ((document.getElementsByClassName('charts')[0].style.zIndex = '10')) {
      document.getElementsByClassName('charts')[0].style.zIndex = '5';
    }
  };

  const handleMap = () => {
    setChartsInactive();
    setMapActive(!isMapActive);
  };

  const handleCharts = () => {
    setMapInactive();
    setChartsActive(!isChartsActive);
  };

  return (
    <div className='app'>
      <div className='app_topbar desktop_inactive'>
        <MapIcon class='icon_map' onClick={handleMap} />
        <div className='topbar_text'>
          <h1>nadpis</h1>
          <p>432423</p>
        </div>
        <ShowChartIcon class='icon_chart' onClick={handleCharts} />
      </div>

      <div className='app_leftbar'>
        <Overview />
      </div>

      <div className='app_main'>
        <div className={isMapActive ? 'app_main_map mobile_active' : 'app_main_map mobile_inactive'}>
          <Map />
        </div>

        <div className='icon_arrow_container mobile_inactive'>
          <ArrowDownwardIcon class='icon_arrow' />
        </div>

        <div className={isChartsActive ? 'app_main_charts moible_active' : 'app_main_charts mobile_inactive'}>
          <Charts />
        </div>
      </div>

      <div className='app_chatbot'>
        <div className={isChatbotInactive ? 'chatbot_container inactive' : 'chatbot_container active'}>
          <ChatbotContainer />
        </div>
        <PersonIcon class='chatbot_icon' onClick={handleChatbotToggle} />
      </div>

      <div className='desktop_inactive'>
        <div className='forms_mobile_icon_container'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://forms.office.com/pages/responsepage.aspx?id=AW39MGaVEEOyJReEvxFnXMjxamHwNP9Cqeem8s6Dwe1UNTVYMkpBSlBNOUs0N1dUTDBUTDY0UDNQMC4u'
          >
            <img
              className='forms_mobile_icon'
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
