import './scss/Charts.scss';
import './scss/App_MOBILE.scss';
import React, { useState } from 'react';

const Charts = () => {
  const [isFormDataOpen, setFormDataOpen] = useState(false);
  const [isWWDataOpen, setWWDataOpen] = useState(false);
  const [isCZDataOpen, setCZDataOpen] = useState(false);

  const chartsData = [
    {
      header: 'Data z formuláře',
      source: 'https://i.imgur.com/LqJlRHp.jpeg',
      alt: 'form data',
      state: isFormDataOpen,
      id: 1,
    },
    {
      header: 'Celosvětová data',
      source: 'https://i.imgur.com/LqJlRHp.jpeg',
      alt: 'worldwide data',
      state: isWWDataOpen,
      id: 2,
    },
    {
      header: 'Česká data',
      source: 'https://i.imgur.com/LqJlRHp.jpeg',
      alt: 'czech data',
      state: isCZDataOpen,
      id: 3,
    },
  ];

  const handleCharts = () => {
    (function () {
      setFormDataOpen(!isFormDataOpen);
      setWWDataOpen(false);
      setCZDataOpen(false);
    })();
    // (function () {
    //   setWWDataOpen(!isWWDataOpen);
    //   setCZDataOpen(false);
    //   setFormDataOpen(false);
    // })();
    // (function () {
    //   setCZDataOpen(!isCZDataOpen);
    //   setWWDataOpen(false);
    //   setFormDataOpen(false);
    // })();
  };

  return (
    <div className='charts'>
      <div className='charts_container'>
        {chartsData.map(({ header, source, alt, state }, id) => (
          <div key={id}>
            <h1>{header}</h1>
            <div className='chart_wrapper' onClick={handleCharts}>
              <div className='chart_head'></div>
              <img className={state ? 'chart _chart-open' : 'chart _chart-close'} src={source} alt={alt}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
