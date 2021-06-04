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
    </div>
  );
};

export default Overview;
