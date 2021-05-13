import './scss/Overview.scss';
import './scss/App_MOBILE.scss';
import React from 'react';

const Overview = () => {
  return (
    <div className='overview'>
      <div className='ww'>
        <h1 className='header'>CELOSVĚTOVĚ</h1>
        <div className='ww_container ww_cases'>
          <h2>Dnešní nové případy</h2>
          <p>432 523</p>
        </div>
        <div className='ww_container ww_recovered'>
          <h2>Dnešní počet vyléčení</h2>
          <p>1 432 643</p>
        </div>
        <div className='ww_container ww_deaths'>
          <h2>Dnešní počet úmrtí</h2>
          <p>28 742</p>
        </div>
      </div>
      <div className='cz'>
        <h1 className='header'>V ČR</h1>
        <div className='cz_container cz_cases'>
          <h2>Dnešní nové případy</h2>
          <p>432 523</p>
        </div>
        <div className='cz_container cz_recovered'>
          <h2>Dnešní počet vyléčení</h2>
          <p>1 432 643</p>
        </div>
        <div className='cz_container cz_deaths'>
          <h2>Dnešní počet úmrtí</h2>
          <p>28 742</p>
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
