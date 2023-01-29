import React from 'react'
import Atropos from 'atropos/react';

export default function Tickets() {
  return (
    <div>
        <div id="app">
      {/* Atropos */}
      <Atropos
      rotate={true}
      rotateXMax={15}
      rotateYMax={15}
      shadow={true}
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <div data-atropos-offset="-5" data-atropos-opacity="1;0.5"  style={{border:"2px solid black",height:"500px"}}>
            heloo
            <div data-atropos-offset="5" data-atropos-stretchY="-100" data-atropos-opacity="0.5;0.8" style={{border:"2px solid black"}}>
            heloo2
        </div>
        </div>
        
        
      </Atropos>
    </div>
    </div>
  )
}
