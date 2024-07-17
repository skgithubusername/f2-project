

import React from 'react'
import map from '../img/us.png'
import { RiMapPin2Fill } from "react-icons/ri";

function Map() {
  return (
    <div className='bg-gradient-to-b from-transparent to-blue-200 bg-opacity-50 flex flex-col min-h-screen'>
      <h2 className="text-[2rem] mt-12 font-bold text-center text-blue-900 mb-20">
        Where Our Machinery Reaches
      </h2>

      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className='flex flex-col items-center lg:items-start lg:mr-10 mb-4 lg:mb-0'>
          <RiMapPin2Fill className='text-blue-600 w-8 h-8' />
          <h2 className='font-semibold text-center lg:text-left'>
            Location of Our KSR Enterprises
          </h2>
        </div>
        <img src={map}  loading='lazy' title='KSR Enterprises Logo' className='w-full max-w-lg lg:max-w-none lg:w-[700px]' alt="Map" />
      </div>
    </div>
  )
}

export default Map
