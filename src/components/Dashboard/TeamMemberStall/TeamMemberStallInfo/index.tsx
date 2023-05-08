import React from 'react'

export default function TeamMemberStallInfo() {
  return (
    <div className='grid grid-cols-3 gap-8 pb-1 pt-6 px-6 font-toyota'>
      <div className='grid grid-rows-2 w-full p-4 '>
        <div className='text-grey4'>
          Team Member(s) at Stall
        </div>
        <div className='border-2 col-span-2 p-2'>
          <span className='rounded bg-black text-white px-2 content-center'>2 x </span>
          <span className='px-2'> John Smith, Jane White </span>
        </div>
      </div>
      <div className='grid grid-rows-2 gap-0 bg-white w-full p-4'>
        <div className='h-8 text-grey4'>
          Stall Progress - Current Shift
        </div>
        <div className='grid grid-cols-3 gap-2 items-center'>
          <div className='border-2 col-span-2'>
            0 % | 0
          </div>
          <div className='col-span-1'><b>Planned:</b> 25</div>
        </div> 
      </div>
      <div className='grid grid-rows-2 gap-0 bg-white w-full p-4'>
        <div className='h-8 text-grey4'>
          Stall Progress - Current Shift
        </div>
        <div className='grid grid-cols-3 gap-2 items-center'>
          <div className='border-2 col-span-2'>
            0 % | 0
          </div>
          <div className='col-span-1'><b>Planned:</b> 25</div>
        </div> 
      </div>
    </div>
  )
}
