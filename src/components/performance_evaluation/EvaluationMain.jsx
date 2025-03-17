import React from 'react';
import FeatureHero from '../shared/FeatureHero';
import Graph from '../dashboard/athlete/Graph';

function EvaluationMain() {
  return (
    <div className='w-full'>
      <FeatureHero
        bg_url={
          'https://res.cloudinary.com/dpmlrxlzr/image/upload/v1741312562/MacBook_Pro_16__-_1_u3j03c.svg'
        }
        title={'Performance Evaluation'}
      />
      <div className='pt-3'>
        <Graph width={800} />
      </div>
    </div>
  );
}


export default EvaluationMain;
