import './scss/Charts.scss';
import './scss/App_MOBILE.scss';
import React, { useState } from 'react';

const Charts = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);

  const handleChart1 = () => {
    setOpen1(!isOpen1);
  };
  const handleChart2 = () => {
    setOpen2(!isOpen2);
  };
  const handleChart3 = () => {
    setOpen3(!isOpen3);
  };
  const handleChart4 = () => {
    setOpen4(!isOpen4);
  };

  return (
    <div className='charts'>
      <div className='charts_container'>
        <h1>Data z formuláře</h1>
        <div className='chart_wrapper' onClick={handleChart1}>
          <div className='chart_head'></div>
          <img
            className={isOpen1 ? 'chart _chart-open' : 'chart _chart-close'}
            src='https://i.imgur.com/LqJlRHp.jpeg'
            alt='chart'
          ></img>
        </div>
        <h1>Celosvětová data</h1>
        <div className='chart_wrapper' onClick={handleChart2}>
          <div className='chart_head'></div>
          <img
            className={isOpen2 ? 'chart _chart-open' : 'chart _chart-close'}
            src='https://i.imgur.com/LqJlRHp.jpeg'
            alt='chart'
          ></img>
        </div>
        <h1>Data pro ČR</h1>
        <div className='chart_wrapper' onClick={handleChart3}>
          <div className='chart_head'></div>
          <img
            className={isOpen3 ? 'chart _chart-open' : 'chart _chart-close'}
            src='https://i.imgur.com/LqJlRHp.jpeg'
            alt='chart'
          ></img>
        </div>
        <h1>Data pro Evropu</h1>
        <div className='chart_wrapper' onClick={handleChart4}>
          <div className='chart_head'></div>
          <img
            className={isOpen4 ? 'chart _chart-open' : 'chart _chart-close'}
            src='https://i.imgur.com/LqJlRHp.jpeg'
            alt='chart'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Charts;
