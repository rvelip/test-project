import React, { useEffect, useState } from 'react';
import MultiSelect from '@/components/Shared/MultiSelect/MultiSelect';
import MultiSelectDropdown from '@/components/Shared/MultiSelectDropdown';
import { CONSTANTS } from '@/constants/constants';

export default function TeamMemberStallInfo() {
  const options = [
    { value: "589842", label: "589842" },
    { value: "591122", label: "591122" },
    { value: "589841", label: "589841" },
    { value: "589843", label: "589843" },
    { value: "589844", label: "589844" },
    { value: "589845", label: "589845" },
    { value: "589846", label: "589846" },
    { value: "589847", label: "589847" },
    { value: "589848", label: "589848" }
  ];

  return (
    <div className='grid grid-cols-3 gap-8 my-6 mx-10 font-toyota'>
      <div className='col-span-1 w-full h-16'>
        <div className='text-grey4 mb-1'>{CONSTANTS.TEAM_MEMBER_AT_STALL}</div>
      
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
            {CONSTANTS.STALL_PROGRESS_CURRENT_SHIFT}
          </div>
          <div className='grid grid-cols-3 gap-2 font-semibold'>
            <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
              0 % | 0
            </div>
            <div className='col-span-1 text-base'>{CONSTANTS.PLANNED}: 25</div>
          </div>
        </div>
        <div className="inline-block h-20 min-h-[1em] w-0.5 self-stretch bg-grey opacity-100 dark:opacity-50 m-auto"></div>
        <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
          <div className='text-grey4'>
            {CONSTANTS.SHOP_PROGRESS_CURRENT_SHIFT}
          </div>
          <div className='grid grid-cols-3 gap-2 font-semibold'>
            <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
              0 % | 0
            </div>
            <div className='col-span-1 text-base'>{CONSTANTS.PLANNED}: 140</div>
          </div>
        </div>
      </div>

    </div>
  )
}
