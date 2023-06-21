import React from 'react'
import AppCards from './AppCards'
import './AppStyle.css'
import ModelAppareil from './ModelAppareil';
export default function Appareil() {
  return (
    <div>
           <div style={{ padding: '10px' }}>
      <ModelAppareil/>
      </div>
    <AppCards/>
    </div>
  )
}
