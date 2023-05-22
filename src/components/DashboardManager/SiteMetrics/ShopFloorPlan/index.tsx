import React from 'react';
import { CONSTANTS } from '@/constants/constants';

export default function ShopFloorPlan() {
  return (
    <div className='w-full'>
      <div className='bg-black p-4 text-white text-xs'>
        <div className='font-bold'>{CONSTANTS.MANAGER_SITE_METRIC_SHOP_FLOOR_HEADER}</div>
        <div>{CONSTANTS.MANAGER_SITE_METRIC_SHOP_FLOOR_SUB_HEADER}</div>
      </div>
      <div className='px-4 py-8 text-center'>
        <div className='grid grid-cols-12 gap-4 text-2xl font-semibold'>
          <div className='col-span-8 flex justify-between border border-grey px-3.5 py-4'>
            <div className='border border-grey rounded p-2 bg-grey6'>D</div>
            <div className='border border-grey rounded p-2 bg-grey6'>A1</div>
            <div className='border border-grey rounded p-2 bg-grey6'>A2</div>
            <div className='border border-grey rounded p-2 bg-grey6'>E</div>
            <div className='border border-grey rounded p-2 bg-grey6'>B</div>
            <div className='border border-grey rounded p-2 bg-grey6'>C</div>
          </div>
          <div className='col-span-4 flex justify-between border border-grey px-3.5 py-4'>
            <div className='border border-grey rounded p-2 bg-grey6'>J1</div>
            <div className='border border-grey rounded p-2 bg-grey6'>J</div>
            <div className='border border-grey rounded p-2 bg-grey6'>H</div>
            <div className='border border-grey rounded p-2 bg-grey6'>U</div>
            <div className='border border-grey rounded p-2 bg-grey6'>X</div>
            <div className='border border-grey rounded p-2 bg-grey6'>C</div> 
            </div>  
        </div>
        <div className='grid grid-cols-12 gap-8 h-16'>
          <div className='col-span-4 border-r-2 border-grey2 border-dashed'></div>
          <div className='col-span-1 border-r-2 border-grey2'></div>
          <div className='col-span-2'></div>
          <div className='col-span-2 border-l-2 border-r-2 border-grey2'></div>
          <div className='col-span-2'></div>
          <div className='col-span-1 border-l-2 border-grey2'></div>
        </div>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-1 border border-grey rounded p-2 bg-grey6'>FPR</div>
          <div className='col-span-1 border border-grey rounded p-2 bg-grey6'>Fuel</div>
          <div className='col-span-5 border border-grey rounded p-2 bg-grey6'>PPO Shop Staging</div>
          <div className='col-span-4 border border-grey rounded p-2 bg-grey6'>Conveyor & FQA Staging</div>
          <div className='col-span-1 border border-grey rounded p-2 bg-grey6'>LPR</div>
        </div>
        <br/>
        <hr />
        <br />
        <div className='grid grid-cols-12'>
          <div className='col-span-1 border border-grey rounded p-2 bg-grey6'>NAP</div>
          <div className='col-span-10 grid grid-flow-row divide-y-2 > * + * divide-grey2'>
            <div></div>
            <div></div>
          </div>
          <div className='col-span-1 border border-grey rounded p-2 bg-grey6'>LPR</div>
        </div>
      </div>
    </div>
  )
}
