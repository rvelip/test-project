import React from 'react'
import dropdown_icon from '../../../../../public/images/icons/dropdown.svg';
import Image from 'next/image';

export default function TeamMemberStallInfo() {
  return (
    <div className='grid grid-cols-3 gap-8 m-10 font-toyota'>
      <div className='grid grid-rows-2 w-full'>
        <div className='h-8 text-grey4'>
          Team Member(s) at Stall
        </div>
        <div className='col-span-2 w-full m-auto p-2 border border-black rounded flex justify-between items-center'>
          <div>
            <span className='bg-black text-white px-2 content-center rounded'>2 X</span>
            <span className='px-2'> John Smith, Jane White </span>
          </div>
          <Image src={dropdown_icon} alt='dropdown'/>
        </div>
      </div>
      <div className='grid grid-rows-2 gap-0 bg-white w-full p-4'>
        <div className='h-8 text-grey4'>
          Stall Progress - Current Shift
        </div>
        <div className='grid grid-cols-3 gap-2 '>
          <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
            <strong>0 % | 0</strong>
          </div>
          <div className='col-span-1 font-semibold text-base'>Planned: 25</div>
        </div> 
      </div>
      <div className='grid grid-rows-2 gap-0 bg-white w-full p-4'>
        <div className='h-8 text-grey4'>
          Shop Progress - Current Shift
        </div>
        <div className='grid grid-cols-3 gap-2 '>
          <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
            <strong>0 % | 0</strong>
          </div>
          <div className='col-span-1 font-semibold text-base'>Planned: 140</div>
        </div> 
      </div>
    </div>
  )
}
