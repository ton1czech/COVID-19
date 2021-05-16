import './scss/Overview.scss';
import './scss/App_MOBILE.scss';
import React from 'react';

const Overview = () => {
  fetch('https://disease.sh/v3/covid-19/all')
    .then((ww_res) => ww_res.json())
    .then((ww_data) => displayWWData(ww_data));

  const displayWWData = (ww_data) => {
    document.getElementsByClassName('ww_cases')[0].innerHTML = ww_data.todayCases.toLocaleString('cz-CZ', {
      minimunFractionDigits: 3,
    });
    document.getElementsByClassName('ww_recovered')[0].innerHTML = ww_data.todayRecovered.toLocaleString('cz-CZ', {
      minimunFractionDigits: 3,
    });
    document.getElementsByClassName('ww_deaths')[0].innerHTML = ww_data.todayDeaths.toLocaleString('cz-CZ', {
      minimunFractionDigits: 3,
    });
  };

  fetch('https://disease.sh/v3/covid-19/countries/cz?strict=true')
    .then((cz_res) => cz_res.json())
    .then((cz_data) => displayCZData(cz_data));

  const displayCZData = (cz_data) => {
    document.getElementsByClassName('cz_cases')[0].innerHTML = cz_data.todayCases.toLocaleString('cz-CZ', {
      minimunFractionDigits: 3,
    });
    document.getElementsByClassName('cz_recovered')[0].innerHTML = cz_data.todayRecovered.toLocaleString('cz-CZ', {
      minimunFractionDigits: 3,
    });
    document.getElementsByClassName('cz_deaths')[0].innerHTML = cz_data.todayDeaths.toLocaleString('cz-CZ', {
      minimunFractionDigits: 3,
    });
  };

  return (
    <div className='overview'>
      <div className='ww'>
        <h1 className='header'>CELOSVĚTOVĚ</h1>
        <div className='ww_container'>
          <h2>Dnešní nové případy</h2>
          <p className='ww_cases'></p>
        </div>
        <div className='ww_container'>
          <h2>Dnešní počet vyléčení</h2>
          <p className='ww_recovered'></p>
        </div>
        <div className='ww_container'>
          <h2>Dnešní počet úmrtí</h2>
          <p className='ww_deaths'></p>
        </div>
      </div>
      <div className='cz'>
        <h1 className='header'>V ČR</h1>
        <div className='cz_container'>
          <h2>Dnešní nové případy</h2>
          <p className='cz_cases'></p>
        </div>
        <div className='cz_container'>
          <h2>Dnešní počet vyléčení</h2>
          <p className='cz_recovered'></p>
        </div>
        <div className='cz_container'>
          <h2>Dnešní počet úmrtí</h2>
          <p className='cz_deaths'></p>
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
