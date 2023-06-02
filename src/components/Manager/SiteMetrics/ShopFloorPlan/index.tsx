import React from 'react';
import { CONSTANTS } from '@/constants/constants';
import staging_icon from '../../../../../public/images/icons/staging_icon.svg';
import Image from 'next/image';

export default function ShopFloorPlan() {
  const shop_floor_data = {
    left_section: [
      { shopName: "D", shopType: "Hoist" },
      { shopName: "A1", shopType: "Wheel" },
      { shopName: "A2", shopType: "Align" },
      { shopName: "E", shopType: "Roof" },
      { shopName: "B", shopType: "Bay" },
      { shopName: "C", shopType: "Bay" },
      { shopName: "F1", shopType: "Bay" },
      { shopName: "F2", shopType: "Hoist" }
    ],
    right_section: [
      { shopName: "J1", shopType: "Conveyor" },
      { shopName: "J", shopType: "Conveyor" },
      { shopName: "H", shopType: "Conveyor" },
      { shopName: "U", shopType: "Conveyor" },
      { shopName: "X", shopType: "Conveyor" },
      { shopName: "X", shopType: "Conveyor" },
    ]
  };

  return (
    <div className='w-full'>
      <div className='bg-black p-4 text-white text-xs'>
        <div className='font-bold'>{CONSTANTS.MANAGER_SITE_METRIC_SHOP_FLOOR_HEADER}</div>
        <div>{CONSTANTS.MANAGER_SITE_METRIC_SHOP_FLOOR_SUB_HEADER}</div>
      </div>
      <div className='px-4 py-8 text-center'>
        <div className='grid grid-cols-12 gap-4'>
          {/* Left Section */}
          <div className='col-span-8 flex justify-between overflow-x-auto overflow-y-hidden border border-grey px-3.5 py-4'>
            {shop_floor_data.left_section.map((data: { shopName: string; shopType: string }) => {
              return (
                <div key={data.shopName} className='grid grid-flow-row p-8 border border-grey rounded bg-grey6 group relative'>
                  <div className='text-xs'>30/100</div>
                  <div className='font-semibold text-2xl'>{data.shopName}</div>
                  <div className='text-sm'>{data.shopType}</div>
                  {/* <span className="absolute -bottom-2 left-1 w-max rounded text-white bg-black p-2 invisible shadow transition-opacity group-hover:visible font-normal">Blah Blah Blah</span> */}
                  <div className="absolute rotate-180 z-1000 -bottom-10 left-4 w-max flex flex-col items-center invisible mb-6 group-hover:visible">
                    <span className="relative z-1000 rotate-180 rounded p-2 text-xs leading-none text-left text-white whitespace-no-wrap bg-black shadow-lg">
                      {`PPO Shop Wheel (${data.shopName})`} <br /><br />
                      Progress <br />
                      Planned <br />
                      Complete <br />
                    </span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Right Section */}
          <div className='col-span-4 gap-4 flex justify-between overflow-x-scroll border border-grey px-3.5 py-4'>
            {shop_floor_data.right_section.map((data: { shopName: string; shopType: string }) => {
              return (
                <div key={data.shopName} className='grid grid-flow-row px-4 py-2 border border-grey rounded bg-grey6'>
                  <div className='text-xs'>30/100</div>
                  <div className='font-semibold text-2xl'>{data.shopName}</div>
                  <div className='text-sm'>{data.shopType}</div>
                </div>
              )
            })}
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
