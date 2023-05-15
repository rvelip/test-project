import React, {useState} from 'react'
import DonutChart from '../DonutChart.tsx'

export default function GraphSection() {
  const [data,setData] = useState([
    {label: "Apples", value: 50},
    {label: "Oranges", value: 30},
    {label: "Bananas", value: 20}
  ]);
  const width = 500;
  const height = 500;
  return (
    <div className='grid grid-cols-12 mt-9'>
      <div className='col-span-5 p-4 bg-white mr-10'>
        <div className='font-bold text-base'>Installation Exceptions</div>
        <div className='text-xs text-grey3'>95 hours affected</div>
        <div>
        <DonutChart data={data} width={width} height={height} />
        </div>
      </div>
      <div className='col-span-7 p-4 bg-white'>
        <div className='font-bold text-base'>Progress Against Plan</div>
        <div className='text-xs text-grey3'>95 hours affected</div>
      </div>
    </div>
  )
}
