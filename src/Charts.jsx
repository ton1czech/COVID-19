import './scss/Charts.scss';
import './scss/App_MOBILE.scss';
import React from 'react';

const Charts = () => {
  const chartsData = [
    {
      header: 'Data z formuláře',
      source: 'https://i.imgur.com/LqJlRHp.jpeg',
      alt: 'form data',
      id: 1,
    },
    {
      header: 'Celosvětová data',
      source: 'https://i.imgur.com/LqJlRHp.jpeg',
      alt: 'worldwide data',
      id: 2,
    },
    {
      header: 'Česká data',
      source: 'https://i.imgur.com/LqJlRHp.jpeg',
      alt: 'czech data',
      id: 3,
    },
  ];

  return (
    <div className='charts'>
      <div className='charts_container'>
        {chartsData.map(({ header, source, alt }, id) => (
          <div key={id}>
            <h1>{header}</h1>
            <img className='chart' src={source} alt={alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
