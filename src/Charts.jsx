import './scss/Charts.scss';
import './scss/App_MOBILE.scss';
import React from 'react';

const Charts = () => {
  const chartsData = [
    {
      header: 'Data z formuláře',
      source: '',
      id: 1,
    },
    {
      header: 'Kontinenty',
      source:
        'https://app.powerbi.com/view?r=eyJrIjoiODI3OTYxNTktM2ZhNy00NjkzLTgyZGItZTJjMjdkNDlhMDdlIiwidCI6IjMwZmQ2ZDAxLTk1NjYtNDMxMC1iMjI1LTE3ODRiZjExNjc1YyIsImMiOjh9',
      id: 2,
    },
    {
      header: 'Státy',
      source:
        'https://app.powerbi.com/view?r=eyJrIjoiNjAzODk2OGYtN2EzZS00NGZkLTg5ZjItOTFiMDE3N2Q0YWMyIiwidCI6IjMwZmQ2ZDAxLTk1NjYtNDMxMC1iMjI1LTE3ODRiZjExNjc1YyIsImMiOjh9',
      id: 3,
    },
  ];

  return (
    <div className='charts'>
      <div className='charts_container'>
        {chartsData.map(({ header, source }, id) => (
          <div key={id}>
            <h1>{header}</h1>
            <iframe title='chart' src={source} className='chart'></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
