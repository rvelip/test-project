import React from 'react'
import apps_logo from '../../../../public/images/icons/apps_logo.svg';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { logoutAction } from '@/store/actions/authenticationAction';
import { resetAction } from '@/store/actions/rootAction';

export default function TopBar() {
  const dispatch: any = useDispatch();

  const logout = () => {
    dispatch(logoutAction())
    dispatch(resetAction())
  }

  return (
    <div className='w-full bg-black text-white h-10 flex justify-between items-center p-4 sticky top-0 z-1000'>
      <div>
        <strong className='font-toyota'>Logistics Orchestration </strong>
        | TLS
      </div>
      <div className='flex justify-between items-center'>
        <div className='mr-4' onClick={logout}>
          <strong className='font-toyota cursor-pointer'>Logout</strong>
        </div>
        <div>
          <Image src={apps_logo} alt="" />
        </div>
      </div>
    </div>
  )
}
