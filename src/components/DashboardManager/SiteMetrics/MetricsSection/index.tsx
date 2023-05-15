import React from 'react'

export default function MetricsSection() {
  return (
    <div className='w-full grid grid-cols-12'>
      <div className='col-span-8 bg-white mr-8 px-4 py-8'>
        <div className='font-semibold text-base'>Metrics</div>
        <div className='text-xs text-grey4 mt-3'>Throughput</div>
        <div className='grid grid-cols-5 mt-2'>
          {["Progress","Total Planned","Total Complete", "Plan Adherence","Expected Overtime"].map((data, index) => {
            return (
              <div 
                key={data}
                className={index%2 === 0 ? 'col-span-1 bg-grey3 mr-2  px-2.5 py-2' : 'col-span-1 bg-white mr-2  px-2.5 py-2'}
              >
                <div className='text-grey4'>{data}</div>
                <div className='font-bold text-2xl'>46%</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='col-span-4 bg-white px-4 py-4'>
        <div className='font-semibold text-base'>Completion Performance</div>
        <div>330.0 Hours Complete</div>
        <br/>
        <div className='w-full grid grid-cols-2'>
          <div>
            <div className='bg-green1 px-2.5 py-2 text-white mb-4'>220.0</div>
            <div className='flex items-center'>
              <div className='bg-green1 w-2 h-2 mr-2'></div>
              <div>Complete On Time</div>
            </div>
          </div>
          <div>
            <div className='bg-red2 px-2.5 py-2 text-white mb-4'>110.0</div>
            <div className='flex items-center'>
              <div className='bg-red2 w-2 h-2 mr-2'></div>
              <div>Complete Late</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
