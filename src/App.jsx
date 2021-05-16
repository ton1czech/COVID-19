import './scss/App.scss';
import './scss/App_MOBILE.scss';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MapIcon from '@material-ui/icons/Map';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import MessageIcon from '@material-ui/icons/Message';

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

  const scrollDown = () => {
    window.scrollTo(0, window.innerHeight * 1.2);
  };

  // fetch('https://disease.sh/v3/covid-19/countries/cz?strict=true')
  // const getData = () => {
  //   fetch('https://disease.sh/v3/covid-19/all')
  //   .then((response) => {return response.json()})
  //   .then((ww_data) => {pushData(ww_data)})
  // }

  // var dataList = [
  //   document.getElementById('ww_cases_data').innerHTML = ww_data.todayCases.toLocaleString('cz-CZ', {
  //     minimunFractionDigits: 3,
  //   }),
  //   document.getElementById('ww_recovered_data').innerHTML = ww_data.todayRecovered.toLocaleString('cz-CZ', {
  //     minimunFractionDigits: 3,
  //   }),
  //   document.getElementById('ww_deaths_data').innerHTML = ww_data.todayDeaths.toLocaleString('cz-CZ', {
  //     minimunFractionDigits: 3,
  //   })]
  //   document.getElementById('cz_cases_data').innerHTML = cz_data.todayCases.toLocaleString('cz-CZ', {
  //     minimunFractionDigits: 3,
  //   }),
  //   document.getElementById('cz_recovered_data').innerHTML = cz_data.todayRecovered.toLocaleString('cz-CZ', {
  //     minimunFractionDigits: 3,
  //   }),
  //   document.getElementById('cz_deaths_data').innerHTML = cz_data.todayDeaths.toLocaleString('cz-CZ', {
  //     minimunFractionDigits: 3,
  //   })
  // ];

  return (
    <div className='app'>
      <div className='app_leftbar'>
        <Overview />
      </div>
      <div className='app_main'>
        <div className={isMapActive ? 'app_main_map mobile_active' : 'app_main_map mobile_inactive'}>
          <Map />
        </div>

        <div className={isChartsActive ? 'app_main_charts moible_active' : 'app_main_charts mobile_inactive'}>
          <Charts />
        </div>
      </div>
      <ArrowDownwardIcon class='icon_arrow' onClick={scrollDown} />
      <div className='app_chatbot'>
        <div className={isChatbotInactive ? 'chatbot_container inactive' : 'chatbot_container active'}>
          <ChatbotContainer />
        </div>
        <MessageIcon class='chatbot_icon' onClick={handleChatbotToggle} />
      </div>

      {/* MOBILE */}
      <div className='app_topbar desktop_inactive'>
        <MapIcon class='icon_map' onClick={handleMap} />
        <div className='topbar_text'>
          <h1 id='data_header'>nadpis</h1>
          <p id='data_body'>432423</p>
        </div>
        <ShowChartIcon class='icon_chart' onClick={handleCharts} />
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
