import { faBath, faCalendar, faDoorOpen, faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Features({mts2,bathrooms,rooms,date}) {
  return (
    <div className='flex flex-col gap-4 text-gray-600 '>
     <div className='grid grid-cols-8 gap-4 items-center'><FontAwesomeIcon className='col-span-1' icon={faRulerCombined}/><p className='col-span-6'>{mts2} mts2</p></div>
     <div className='grid grid-cols-8 items-center'><FontAwesomeIcon className='col-span-1' icon={faDoorOpen}/><p className='col-span-6'>{rooms} rooms</p></div>
     <div className='grid grid-cols-8 items-center'><FontAwesomeIcon className='col-span-1' icon={faBath}/><p className='col-span-6'>{bathrooms} bathrooms</p></div>
     <div className='grid grid-cols-8 items-center'><FontAwesomeIcon className='col-span-1' icon={faCalendar}/><p className='col-span-6'>{date}</p></div>
    </div>
  )
}

export default Features