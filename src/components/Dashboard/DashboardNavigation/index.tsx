import React from 'react'

export default function DashboardNavigation() {
  // const []
  return (
    <div className='grid grid-cols-4 h-12 border-b-2 border-grey font-toyota text-sm'>
      <div className='pl-4 border-b-2 border-black flex items-center'>
        <div className='font-semibold'>Stall Dashboard</div>
      </div>
      <div className='pl-4 bg-black text-white flex items-center font-semibold'>
        Stall Lorem
      </div>
      <div className='pl-4 bg-black text-white flex items-center font-semibold '>
        Stall Ipsum
      </div>
    </div>
  )
}
