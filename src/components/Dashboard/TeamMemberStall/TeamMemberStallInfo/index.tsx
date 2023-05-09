import React from 'react'
import dropdown_icon from '../../../../../public/images/icons/dropdown.svg';
import Image from 'next/image';

export default function TeamMemberStallInfo() {
  return (
    <div className='grid grid-cols-3 gap-8 my-6 mx-10 font-toyota'>
      <div className='col-span-1 grid grid-rows-2 gap-0 w-full h-16'>
        <div className='row-span-1 text-grey4'>
          Team Member(s) at Stall
        </div>
        <div className='row-span-1 w-full m-auto p-2 border border-black rounded flex justify-between items-center'>
          <div>
            <span className='bg-black text-white px-2 content-center rounded'>2 X</span>
            <span className='px-2'> John Smith, Jane White </span>
          </div>
          <Image src={dropdown_icon} alt='dropdown' />
        </div>
      </div>
      <div className='col-span-2 grid grid-cols-9'>
        <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
          <div className='text-grey4'>
            Stall Progress - Current Shift
          </div>
          <div className='grid grid-cols-3 gap-2 font-semibold'>
            <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
              0 % | 0
            </div>
            <div className='col-span-1 text-base'>Planned: 25</div>
          </div>
        </div>
        <div className="inline-block h-20 min-h-[1em] w-0.5 self-stretch bg-grey opacity-100 dark:opacity-50 m-auto"></div>
        <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
          <div className='text-grey4'>
            Shop Progress - Current Shift
          </div>
          <div className='grid grid-cols-3 gap-2 font-semibold'>
            <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
              0 % | 0
            </div>
            <div className='col-span-1 text-base'>Planned: 140</div>
          </div>
        </div>
      </div>

    </div>
  )
}
