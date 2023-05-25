import React from 'react';
import { CONSTANTS } from '@/constants/constants';
import staging_icon from '../../../../../public/images/icons/staging_icon.svg';
import Image from 'next/image';

export default function ShopFloorPlan() {
  return (
    <div className='w-full'>
      <div className='bg-black p-4 text-white text-xs'>
        <div className='font-bold'>{CONSTANTS.MANAGER_SITE_METRIC_SHOP_FLOOR_HEADER}</div>
        <div>{CONSTANTS.MANAGER_SITE_METRIC_SHOP_FLOOR_SUB_HEADER}</div>
      </div>
      <div className='px-4 py-8 text-center'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-8 flex justify-between overflow-x-scroll border border-grey px-3.5 py-4'>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>D</div>
              <div className='text-sm'>Hoist</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>A1</div>
              <div className='text-sm'>Wheel</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>A2</div>
              <div className='text-sm'>Align</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>E</div>
              <div className='text-sm'>Roof</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>50/100</div>
              <div className='font-semibold text-2xl'>B</div>
              <div className='text-sm'>Bay</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>50/100</div>
              <div className='font-semibold text-2xl'>C</div>
              <div className='text-sm'>Bay</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>50/100</div>
              <div className='font-semibold text-2xl'>F1</div>
              <div className='text-sm'>Bay</div>
            </div>
            <div className='grid grid-flow-row p-8 border border-grey rounded bg-grey6'>
              <div className='text-xs'>50/100</div>
              <div className='font-semibold text-2xl'>F2</div>
              <div className='text-sm'>Bay</div>
            </div>
          </div>
          <div className='col-span-4 gap-4 flex justify-between overflow-x-scroll border border-grey px-3.5 py-4'>
            <div className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>J1</div>
              <div className='text-sm'>Conveyor</div>
            </div>
            <div className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>J</div>
              <div className='text-sm'>Conveyor</div>
            </div>
            <div className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>H</div>
              <div className='text-sm'>Bay</div>
            </div>
            <div className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>U</div>
              <div className='text-sm'>FQA & Throw Ins</div>
            </div>
            <div className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>X</div>
              <div className='text-sm'>FQA & Throw Ins</div>
            </div>
            <div className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
              <div className='text-xs'>30/100</div>
              <div className='font-semibold text-2xl'>X</div>
              <div className='text-sm'>FQA & Throw Ins</div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8 h-16'>
          <div className='col-span-4 border-r-2 border-grey2 border-dashed'></div>
          <div className='col-span-1 border-r-2 border-grey2'></div>
          <div className='col-span-2'></div>
          <div className='col-span-2 border-l-2 border-grey2 border-dashed'></div>
          <div className='col-span-2 border-l-2 border-grey2'></div>
          <div className='col-span-1 border-l-2 border-grey2'></div>
        </div>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-1 flex justify-center items-center border border-grey rounded p-2 bg-grey6'>
            FPR
          </div>
          <div className='col-span-1 flex flex-col justify-center items-center border border-grey rounded p-2 bg-grey6'>
            <Image
              src={staging_icon}
              alt="staging icon"
            />
            <div>Fuel</div>
          </div>
          <div className='col-span-5 flex flex-col justify-center items-center border border-grey rounded p-2 bg-grey6'>
            <Image
              src={staging_icon}
              alt="staging icon"
            />
            <div>PPO Shop Staging </div>
          </div>
          <div className='col-span-4 flex flex-col justify-center items-center border border-grey rounded p-2 bg-grey6'>
            <Image
                src={staging_icon}
                alt="staging icon"
            />
            Conveyor & FQA Staging
          </div>
          <div className='col-span-1 flex flex-col justify-center items-center border border-grey rounded p-2 bg-grey6'>
            LPR
          </div>
        </div>
        <br />
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
