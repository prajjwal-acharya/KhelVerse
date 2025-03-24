import React from 'react';
import FeatureHero from '../shared/FeatureHero';
import CareerAdviceResult from './CareerAdviceResult';
import JobListings from './JobListings';
import Sponsorships from './Sponsorships';

function DietMain() {
  return (
    <div className='w-full'>
      <FeatureHero
        title={'Career Guidance'}
      />
      <CareerAdviceResult/>
      <JobListings/>
      <Sponsorships/>
    </div>
  );
}

export default DietMain;
