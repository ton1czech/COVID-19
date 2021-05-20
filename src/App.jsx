import './scss/App.scss';
import './scss/App_MOBILE.scss';
import React, { useState } from 'react';
import 'boxicons';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MapIcon from '@material-ui/icons/Map';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import MessageIcon from '@material-ui/icons/Message';

import ChatbotContainer from './ChatbotContainer';
import Overview from './Overview';
import MapContainer from './MapContainer';
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

  const scrollDown = () => {
    window.scrollTo(0, window.innerHeight * 1.1);
  };

  var titleArray = [
    'Dnešní případy (Celosvětově)',
    'Dnešní vyléčení (Celosvětově)',
    'Dnešní úmrtí (Celosvětově)',
    'Dnešní případy (CZ)',
    'Dnešní vyléčení (CZ)',
    'Dnešní úmrtí (CZ)',
  ];

  let valueArray = [];
  fetch('https://disease.sh/v3/covid-19/all')
    .then((res) => res.json())
    .then((data) => {
      valueArray.push(
        Object.values(data)[2].toLocaleString('cz-CZ'),
        Object.values(data)[6].toLocaleString('cz-CZ'),
        Object.values(data)[4].toLocaleString('cz-CZ')
      );
      return valueArray;
    });

  fetch('https://disease.sh/v3/covid-19/countries/cz?strict=true')
    .then((res) => res.json())
    .then((data) => {
      valueArray.push(
        Object.values(data)[4].toLocaleString('cz-CZ'),
        Object.values(data)[8].toLocaleString('cz-CZ'),
        Object.values(data)[6].toLocaleString('cz-CZ')
      );
      return valueArray;
    });

  let counter = 0;
  (function (counter, titleArray, valueArray) {
    setTimeout(() => {
      document.getElementById('_data-title').innerHTML = titleArray[counter];
      document.getElementById('_data-value').innerHTML = valueArray[counter];
    }, 500);
    setInterval(() => {
      document.getElementById('_data-title').innerHTML = titleArray[counter];
      document.getElementById('_data-value').innerHTML = valueArray[counter];
      if (counter === valueArray.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
    }, 5000);
  })(counter, titleArray, valueArray);

  return (
    <div className='app'>
      <div className='app_leftbar'>
        <Overview />
      </div>
      <div className='app_main'>
        <div className={isMapActive ? '_mobile-active' : '_mobile-inactive'}>
          <MapContainer />
        </div>

        <div className={isChartsActive ? '_mobile-active' : '_mobile-inactive'}>
          <Charts />
        </div>
      </div>

      <box-icon
        type='solid'
        name='down-arrow-alt'
        class='icon_arrow _mobile-inactive'
        onClick={scrollDown}
        animation='tada-hover'
      ></box-icon>

      <div className='app_chatbot'>
        <div
          className={isChatbotInactive ? 'chatbot_container _chatbot-inactive' : 'chatbot_container _chatbot-active'}
        >
          <ChatbotContainer />
        </div>
        <MessageIcon class='chatbot_icon' onClick={handleChatbotToggle} />
      </div>

      {/* MOBILE */}
      <div className='app_topbar _desktop-inactive'>
        <MapIcon class='icon_map' onClick={handleMap} />
        <div className='topbar_text'>
          <h1 id='_data-title'>{''}</h1>
          <p id='_data-value'></p>
        </div>
        <ShowChartIcon class='icon_chart' onClick={handleCharts} />
      </div>

      <div className='_desktop-inactive'>
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
