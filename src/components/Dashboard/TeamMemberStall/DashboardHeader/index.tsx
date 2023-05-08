import React from 'react'

export default function DashboardHeader() {
  return (
    <div className='border-b-2 border-grey font-toyota px-6 py-4 flex items-center justify-between'>
      <div>
        <strong>Shop A1 | Stall 4</strong>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2 flex items-center justify-center'> Thu 05/04/2023 7:05 AM </div>
        <div className='col-span-2 h-10 border-black border-2 flex'>
          <div className='w-6/12 bg-black text-white text-center flex items-center justify-center'>Vehicles</div>
          <div className='w-6/12 border-black bg-white text-black text-center flex items-center justify-center'>Hours</div>
        </div>
        <div className='h-10 w-full rounded bg-grey flex items-center justify-center'>
          Back
        </div>
      </div>
    </div>
  )
}
