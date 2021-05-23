import './scss/Overview.scss';
import './scss/App_MOBILE.scss';
import React, { useEffect } from 'react';

const Overview = () => {
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((res) => res.json())
      .then((data) => displayWWData(data));
  });

  const displayWWData = (data) => {
    document.getElementById('ww_cases_data').innerHTML = data.todayCases.toLocaleString('cz-CZ');
    document.getElementById('ww_recovered_data').innerHTML = data.todayRecovered.toLocaleString('cz-CZ');
    document.getElementById('ww_deaths_data').innerHTML = data.todayDeaths.toLocaleString('cz-CZ');
  };

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/cz?strict=true')
      .then((res) => res.json())
      .then((data) => displayCZData(data));
  }, []);

  const displayCZData = (data) => {
    document.getElementById('cz_cases_data').innerHTML = data.todayCases.toLocaleString('cz-CZ');
    document.getElementById('cz_recovered_data').innerHTML = data.todayRecovered.toLocaleString('cz-CZ');
    document.getElementById('cz_deaths_data').innerHTML = data.todayDeaths.toLocaleString('cz-CZ');
  };

  return (
    <div className='overview'>
      <div className='ww overview_container'>
        <h1 className='header'>CELOSVĚTOVĚ</h1>
        <div className='ww_container data_container'>
          <h2>Dnešní nové případy</h2>
          <p id='ww_cases_data'></p>
        </div>
        <div className='ww_container data_container'>
          <h2>Dnešní počet vyléčení</h2>
          <p id='ww_recovered_data'></p>
        </div>
        <div className='ww_container data_container'>
          <h2>Dnešní počet úmrtí</h2>
          <p id='ww_deaths_data'></p>
        </div>
      </div>
      <div className='cz overview_container'>
        <h1 className='header'>V ČR</h1>
        <div className='cz_container data_container'>
          <h2>Dnešní nové případy</h2>
          <p id='cz_cases_data'></p>
        </div>
        <div className='cz_container data_container'>
          <h2>Dnešní počet vyléčení</h2>
          <p id='cz_recovered_data'></p>
        </div>
        <div className='cz_container data_container'>
          <h2>Dnešní počet úmrtí</h2>
          <p id='cz_deaths_data'></p>
        </div>
      </div>
      <div className='forms'>
        <h2>
          Prosíme o vyplnění našeho krátkého <br /> formuláře ohledně COVIDU-19
        </h2>
        <p>(Formulář je zcela anonymní)</p>
        <div className='forms_icon_container'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://forms.office.com/pages/responsepage.aspx?id=AW39MGaVEEOyJReEvxFnXMjxamHwNP9Cqeem8s6Dwe1UNTVYMkpBSlBNOUs0N1dUTDBUTDY0UDNQMC4u'
          >
            <img
              className='forms_icon'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Microsoft_Forms_(2019-present).svg/1200px-Microsoft_Forms_(2019-present).svg.png'
              alt='Microsoft Forms icon'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Overview;
