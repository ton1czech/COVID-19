import React from 'react';

import './scss/Options.scss';

const Options = (props) => {
  const options = [
    {
      text: 'Inkubační doba',
      handler: props.actionProvider.incubationTime,
      id: 1,
    },
    { text: 'Hlavní příznaky', handler: props.actionProvider.symptoms, id: 2 },
    { text: 'Druhy vakcín', handler: props.actionProvider.vaccines, id: 3 },
    { text: 'Nárok na bezplatné testování', handler: props.actionProvider.tests, id: 4 },
    { text: 'Průběh', handler: props.actionProvider.progress, id: 5 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className='option-button'>
      {option.text}
    </button>
  ));

  return <div className='options-container'>{buttonsMarkup}</div>;
};

export default Options;
