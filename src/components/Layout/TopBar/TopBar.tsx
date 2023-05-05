import React from 'react'
import apps_logo from '../../../../public/images/icons/apps_logo.svg';
import Image from 'next/image';
export default function TopBar() {
  return (
    <div className='w-full bg-black text-white h-10 flex justify-between items-center p-4'>
      <div>
        <strong className='font-toyota'>Logistics orchestration </strong>
        | TLS
      </div>
      <div className='flex justify-between w-20'>
        <div>
          <Image src={apps_logo} alt="" />
        </div>
        <div>
          <Image src={apps_logo} alt="" />
        </div>
      </div>
    </div>
  )
}
