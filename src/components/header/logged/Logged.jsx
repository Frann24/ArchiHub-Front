import React from 'react'
import BtnMenu from '../btnMenu/BtnMenu'

function Logged() {
  const userName = "Franco"
  return (
    <div className='text-lg flex gap-12 items-center'>
      <p>Hello! {userName}</p>
      <BtnMenu />
    </div>
  )
}

export default Logged