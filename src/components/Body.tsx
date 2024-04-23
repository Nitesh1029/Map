import React from 'react';
import Dropdown from './Dropdown';
import Cards from './Cards';
import Card from './Card';
import Map from './Map';
import MapSearch from './MapSearch';

function Body() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center p-5 gap-2'>
      <div className='w-full md:w-2/3 order-last md:order-first'> 
      <Map />
      </div>
      <div className='w-full md:w-1/2'>
        <div className='flex justify-center text-center text-2xl font-bold pt-6'>Locations</div>
        <div className='p-10'>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Body;