import './scss/Overview.scss';
import './scss/App_MOBILE.scss';
import React from 'react';

const Overview = () => {
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
