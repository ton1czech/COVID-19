import './scss/Map.scss';
import './scss/App_MOBILE.scss';
import React from 'react';

const Map = () => {
  return (
    <div className='map'>
      <iframe
        className='map_iframe'
        title='map'
        src='https://app.powerbi.com/view?r=eyJrIjoiZTFiMjQ3NzAtMGNmMS00YWIyLTg4NTAtMDIxOTIxZTAwZjNlIiwidCI6IjMwZmQ2ZDAxLTk1NjYtNDMxMC1iMjI1LTE3ODRiZjExNjc1YyIsImMiOjh9'
        frameborder='0'
        allowFullScreen='false'
      ></iframe>
    </div>
  );
};

export default Map;
