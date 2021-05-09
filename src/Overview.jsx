import './css/Overview.css';
import './css/App_MOBILE.css';
import React from 'react';

const Overview = () => {
  return (
    <div className='overview'>
      <div className='safe5'>
        <h1>5 nejbezpečnějších zemí</h1>
        <p>Zapadákov</p>
        <p>SSSR</p>
        <p>Prusko</p>
        <p>Jugoslávie</p>
        <p>Rakousko-Uhersko</p>
      </div>
      <div className='dangerous5'>
        <h1>5 nejnebezpečnějších zemí</h1>
        <p>Amerikaaa</p>
        <p>Akirema</p>
        <p>Kanada</p>
        <p>USA</p>
        <p>Mexiko</p>
      </div>
      <div className='died'>
        <h1>počet úmrtí</h1>
        <p>4,328,742</p>
      </div>
      <div className='RNumber'>
        <h1>Reprodukční číslo</h1>
        <p>2.354</p>
      </div>
      <div className='forms'>
        <h1>
          Prosíme o vyplnění našeho krátkého <br /> formuláře ohledně COVIDU-19
        </h1>
        <p>(Formulář je zcela anonymní)</p>
        <div className='forms_icon'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://forms.office.com/pages/responsepage.aspx?id=AW39MGaVEEOyJReEvxFnXMjxamHwNP9Cqeem8s6Dwe1UNTVYMkpBSlBNOUs0N1dUTDBUTDY0UDNQMC4u'
          >
            <img
              className='forms_icon_itself'
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
