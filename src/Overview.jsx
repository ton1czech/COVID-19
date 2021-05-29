import './scss/Overview.scss';
import './scss/App_MOBILE.scss';
import React, { useEffect, useState } from 'react';

const Overview = () => {
  const [WWCases, setWWCases] = useState(null);
  const [WWRecovered, setWWRecovered] = useState(null);
  const [WWDeaths, setWWDeaths] = useState(null);
  const [CZCases, setCZCases] = useState(null);
  const [CZRecovered, setCZRecovered] = useState(null);
  const [CZDeaths, setCZDeaths] = useState(null);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((res) => res.json())
      .then((data) => {
        setWWCases(data.todayCases.toLocaleString('cz-CZ'));
        setWWRecovered(data.todayRecovered.toLocaleString('cz-CZ'));
        setWWDeaths(data.todayDeaths.toLocaleString('cz-CZ'));
      });
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/cz?strict=true')
      .then((res) => res.json())
      .then((data) => {
        setCZCases(data.todayCases.toLocaleString('cz-CZ'));
        setCZRecovered(data.todayRecovered.toLocaleString('cz-CZ'));
        setCZDeaths(data.todayDeaths.toLocaleString('cz-CZ'));
      });
  }, []);

  const overviewWWTemplate = [
    {
      header: 'Dnešní nové případy',
      number: WWCases,
      id: 1,
    },
    {
      header: 'Dnešní počet vyléčení',
      number: WWRecovered,
      id: 2,
    },
    {
      header: 'Dnešní počet úmrtí',
      number: WWDeaths,
      id: 3,
    },
  ];

  const overviewCZTemplate = [
    {
      header: 'Dnešní nové případy',
      number: CZCases,
      id: 1,
    },
    {
      header: 'Dnešní počet vyléčení',
      number: CZRecovered,
      id: 2,
    },
    {
      header: 'Dnešní počet úmrtí',
      number: CZDeaths,
      id: 3,
    },
  ];

  return (
    <div className='overview'>
      <div className='ww overview_container'>
        <h1 className='header'>CELOSVĚTOVĚ</h1>
        {overviewWWTemplate.map(({ header, number }, id) => (
          <div key={id} className='ww_container data_container'>
            <h2>{header}</h2>
            <p>{number}</p>
          </div>
        ))}
      </div>
      <div className='cz overview_container'>
        <h1 className='header'>V ČR</h1>
        {overviewCZTemplate.map(({ header, number }, id) => (
          <div key={id} className='ww_container data_container'>
            <h2>{header}</h2>
            <p>{number}</p>
          </div>
        ))}
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
