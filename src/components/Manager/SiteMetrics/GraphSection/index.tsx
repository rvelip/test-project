import React, { useState } from 'react'
import DonutChart from '../DonutChart';
import LineChartGraph from '../LineChart';

export default function GraphSection() {
  const [data, setData] = useState([
    { label: "Apples", value: 50 },
    { label: "Oranges", value: 30 },
    { label: "Bananas", value: 20 }
  ]);
  const width = 500;
  const height = 500;
  return (
    <div className='grid grid-cols-12 mt-9'>
      <div className='col-span-5 p-4 bg-white mr-10'>
        <div className='flex'>
          <div className='w-1/2 mb-3 text-base'>
            <div className='text-black font-bold'>Installation Exceptions</div>
            <div className='text-grey4 font-normal'>60 Vehicles Affected</div>
          </div>
          <div className='w-1/2 flex items-center justify-end'>
          <button className="text-grey4 text-2xl font-normal -mt-8">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          </button>
        </div> 
        </div>
        <DonutChart />
      </div>
      <div className='col-span-7 p-4 bg-white'>
        <div className='font-bold text-base mb-2'>Progress Against Plan</div>
        <LineChartGraph />
      </div>
    </div>
  )
}
