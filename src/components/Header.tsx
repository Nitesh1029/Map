import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";

function Header() {
  return (
    <div className='w-full h-20 p-3 md:px-14 bg-zinc-900 '>
        <div className='flex justify-between items-center gap-10'>
          {/* <div className='flex gap-2 p-2'>
            <img className="h-11 p-0.5" src="https://www.warehouseexchange.com/img/general/logo-small-part1.svg" alt="" />
              <img className='hidden md:flex' src="https://www.warehouseexchange.com/img/general/logo-small-part2(origin).svg" />
          </div> */}
{/* 
          <div className='h-10 flex justify-center items-center p-1 gap-2 '>
          <div className='hidden md:flex font-semibold'>Need help? Call Us!</div>
            <div className='flex gap-1 font-light justify-center items-center'> <FaPhoneVolume /> (424) 239-2738</div>
            <div className='hidden md:flex border-2 border-yellow-400 font-semibold text-md m-2 px-2 py-1'>List your Space</div>
            <div className='m-2 text-md text-yellow-500 font-semibold'>Sign Up</div>
            <div className='text-md text-yellow-500 font-semibold'>Log In</div>
          </div> */}
            
        </div>
    </div>
  )
}

export default Header;