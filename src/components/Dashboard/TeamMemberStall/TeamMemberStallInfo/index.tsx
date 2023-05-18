import React, { useEffect, useState } from 'react';
import MultiSelect from '@/components/Shared/MultiSelect/MultiSelect';
import MultiSelectDropdown from '@/components/Shared/MultiSelectDropdown';

export default function TeamMemberStallInfo() {
  const options = [
    { value: "pritam", label: "Pritam" },
    { value: "ram", label: "Ram" },
    { value: "ankit", label: "Ankit" },
    { value: "pawan", label: "Pawan" },
    { value: "wilshan", label: "Wilshan" },
    { value: "ashim", label: "Ashim" },
    { value: "sahil", label: "Sahil" },
    { value: "hannah", label: "Hannah" },
    { value: "cara", label: "Cara" }
  ];

  return (
    <div className='grid grid-cols-3 gap-8 my-6 mx-10 font-toyota'>
      <div className='col-span-1 w-full h-16'>
        <div className='text-grey4 mb-1'>Team Member(s) at Stall</div>
      
        <MultiSelectDropdown 
          isSearchable
          isMulti
          placeHolder="Select..."
          options={options}
          onChange={(value: any) => console.log(value)}
        />
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
