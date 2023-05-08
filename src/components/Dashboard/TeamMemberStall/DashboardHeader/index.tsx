import React from 'react'

export default function DashboardHeader() {
  return (
    <div className='border-b-2 border-grey font-toyota px-10 py-4 flex items-center justify-between'>
      <div className='font-semibold text-2xl'>
        Shop A1 | Stall 4
      </div>
      <div className='grid grid-cols-5 gap-8 text-sm'>
        <div className='col-span-2 m-auto'>Thu 05/04/2023 7:05 AM</div>
        <div className='col-span-2 grid grid-cols-2 h-10 border border-black rounded overflow-hidden'>
          <div className='col-span-1'>
            <button className='bg-black text-white m-auto w-full h-full'>Vehicles</button>
          </div>
          <div className='col-span-1'>
            <button className='bg-white text-black m-auto w-full h-full'>Hours</button>
          </div>
        </div>
        <div className='h-10 w-full rounded bg-grey m-auto'>
          <button disabled className='w-full h-full'>Back</button>
        </div>
      </div>
    </div>
  )
}
