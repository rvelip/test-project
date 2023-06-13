import Metrics from '@/components/Shared/Metrics';
import React from 'react'

export default function MetricsSection() {

  const metricsData = [
    { id: 1, value: "46%", label: "Progress" },
    { id: 2, value: "550", label: "Total Planned" },
    { id: 3, value: "250", label: "Total Complete" },
    // { id: 4, value: "92%", label: "Plan Adherence" },
    // { id: 5, value: "No OT", label: "Expected Overtime" }
  ];

  return (
    <div className='w-full grid grid-cols-12'>
      <div className='col-span-8 bg-white mr-8 px-4 py-8'>
        <div className='font-semibold text-base'>Metrics</div>
        <div className='text-xs text-grey4 mt-3'>Throughput</div>
        <Metrics metricsData={metricsData}/>
      </div>
      <div className='col-span-4 bg-white px-4 py-4'>
        <div className='font-semibold text-base'>Completion Performance</div>
        <div>330 Vehicles Complete</div>
        <br />
        <div className='w-full grid grid-cols-2'>
          <div>
            <div className='bg-green1 px-2.5 py-2 text-white mb-4'>220</div>
            <div className='flex items-center'>
              <div className='bg-green1 w-2 h-2 mr-2'></div>
              <div>Complete On Time</div>
            </div>
          </div>
          <div>
            <div className='bg-red2 px-2.5 py-2 text-white mb-4'>110</div>
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
