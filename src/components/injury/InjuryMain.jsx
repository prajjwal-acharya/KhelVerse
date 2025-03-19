import React from 'react';
import FeatureHero from '../shared/FeatureHero';

function InjuryMain() {
  return (
    <div className='w-full'>
      <FeatureHero
        bg_url={
          'https://res.cloudinary.com/dpmlrxlzr/image/upload/v1741330564/MacBook_Pro_16__-_1_4_zwatot.svg'
        }
        title={'Injury Management'}
      />
    </div>
  );
}

export default InjuryMain;
