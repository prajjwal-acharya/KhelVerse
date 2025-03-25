import React from 'react'
import TodaysTarget from './TodaysTarget.jsx'
import FeatureHero from '../shared/FeatureHero.jsx'

function TodaysTargetsMain() {
  return (
    <div className='w-full '>
      <FeatureHero
        title={"Today's Targets"}
      />
      <div className='min-h-screen h-auto bg-black'>
      <TodaysTarget/>
     </div>
    </div>
  )
}

export default TodaysTargetsMain