import React, { useEffect } from 'react'
import apps_logo from '../../../../public/images/icons/apps_logo.svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '@/store/actions/authenticationAction';
import { resetAction } from '@/store/actions/rootAction';
import toast from 'react-hot-toast';
import { CONSTANTS } from '@/constants/constants';
import { useIsAuthenticated } from "@azure/msal-react";

export default function TopBar() {
  const dispatch: any = useDispatch();
  const isAuthenticated = useIsAuthenticated();
  const profileData = useSelector((state: any) => state.profileState);

  const logout = () => {
    dispatch(logoutAction())
    dispatch(resetAction())
    toast.success(CONSTANTS.LOGOUT_MESSAGE, {
      position: 'top-right',
      duration: 4000,
      // icon:'',
      style: {
        borderRadius: '4px',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '600'
      }
    });
  }

  return (
    <div className='w-full bg-black text-white h-10 flex justify-between items-center p-4 sticky top-0 z-1000'>
      <div>
        <strong className='font-toyota'>Logistics Orchestration </strong>
        | TLS
      </div>
      <div className='flex justify-between items-center'>
        {isAuthenticated && (
          <div className='mr-4' onClick={logout}>
            <strong className='font-toyota cursor-pointer'>Logout</strong>
          </div>
        )}
        <div className='mr-4'>
          <Image src={apps_logo} alt="" />
        </div>
        {isAuthenticated && profileData && (
          <div className="h-6 w-6 rounded-full ring-2 ring-white font-semibold text-xs flex justify-center items-center align-middle">
            <div className='mb-0.5'>{profileData && profileData.username && profileData?.username.slice(0,2).toUpperCase()}</div>
          </div>
        )}
      </div>
    </div>
  )
}
