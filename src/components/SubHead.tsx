import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const data = [
    { id: 1, label: 'Location', value: 'Grand Prairie, TX, USA' },
    // { id: 2, label: 'Data Range', value: 'Enter Data Range' },
    // { id: 3, label: 'Min Sq. Ft', value: 'Min Sq. Ft' },
  ];
  
const renderedItems = data.map((item, index) => (
    <div key={item.id} className=''>
      <div className='my-1 text-md font-semibold'>{item.label}</div>
      <div className='w-full md:w-56 flex justify-between items-center gap-10 px-2 py-1  border border-t-[3.1px] border-l-2 border-r-2 border-zinc-700 text-sm font-light'>{item.value} {index === 0 && <FaLocationDot />}</div>
    </div>
  ));

function SubHead() {
  return (
    <>
    <div className='w-full h-20'>
        <div className='hidden md:flex gap-10 items-center p-2 px-16'>
         {renderedItems}
        </div>
        <div className='border-1 border-red-100'></div>
    </div>
    <div className='border-b border-zinc-500 shadow-md mt-5'></div>
    </>
  )
}

export default SubHead;