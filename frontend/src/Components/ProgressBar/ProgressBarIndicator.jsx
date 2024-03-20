import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarIndicator = ({title,progress,upperLimit}) => {
  return (
    <div className='progress-bar mar-top-2 flex-col sp-1'>
        <div className='bar-info pad-inline flex-row space-between'>
            <div className='progress-title-text'>{title}</div>
            <div className='progress-meter'>{progress}%</div>
        </div>
        <div className='progress '>
            <ProgressBar transitionDuration='2s' bgColor='#36A54680' height='10px' isLabelVisible='false' labelSize='7px' completed={progress} maxCompleted={upperLimit} />
        </div>
      
    </div>
  )
}

export default ProgressBarIndicator
