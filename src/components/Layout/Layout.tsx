import React, { useEffect, useState } from 'react'
import TopBar from './TopBar/TopBar'
import DashboardNavigation from './DashboardNavigation';
import DashboardHeader from '../TeamMember/TeamMemberStall/DashboardHeader';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { VinAction } from '@/store/actions/vinAction';
import Login from '../Login';
import { CONSTANTS } from '@/constants/constants';
import toast from 'react-hot-toast';
import { useIsAuthenticated } from "@azure/msal-react";
import { fetchProfileDetailsAction } from '@/store/actions/profileAction';

export default function Layout({ children }: any) {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const isAuthenticated = useIsAuthenticated();
  const profileData = useSelector((state: any) => state.profileState);
  const teamMemberRoutes = useSelector((state: any) => state.config.teamMemberRoutes);
  const managerRoutes = useSelector((state: any) => state.config.managerRoutes);
  const [routes, setRoutes] = useState<any>([]);
  const [renderEle, setRenderEle] = useState('');
  const [sectionHeader, setSectionHeader] = useState('');

  useEffect(() => {
    if (profileData?.persona === 'team_member') {
      setRoutes(teamMemberRoutes);
      setRenderEle('showCancel');
      dispatch(VinAction());
    }
    else if (profileData?.persona === 'manager') {
      setRoutes(managerRoutes);
      setRenderEle('showFilter')
    }

    isAuthenticated && toast.success(`${CONSTANTS.WELCOME} ${profileData && profileData.username && profileData?.username.slice(0, 2).toUpperCase()}`, {
      position: 'top-right',
      duration: 5000,
      // icon: '',
      style: {
        width: '12em',
        borderRadius: '4px',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '600',
        marginTop: '1.6em',
      }
    })
  }, [profileData]);

  useEffect(() => {
    if (profileData?.persona === 'team_member') {
      setSectionHeader(`Production Line ${profileData?.line} | ${profileData.stall}`);
    } else if (profileData?.persona === 'manager') {
      if (profileData?.location === 'long_beach') {
        setSectionHeader(`${managerRoutes.filter((item: any) => item.isActive)[0]?.label} (Long Beach)`);
      } else if (profileData?.location === 'princeton') {
        setSectionHeader(`${managerRoutes.filter((item: any) => item.isActive)[0]?.label} (Princeton)`);
      }
    }
  }, [profileData, teamMemberRoutes, managerRoutes]);

  useEffect(() => {
    //set log in to true
    if (isAuthenticated) {
      //load profile data
      dispatch(fetchProfileDetailsAction('manager'));
    } else {
      router.push('/');
    }

  }, [isAuthenticated])

  // useEffect(() => {
  //   // console.log("router", router.pathname) 
  //   console.log("trigger")
  //   // console.log('-------------------->', history)
  //   if(isAuthenticated && router.pathname === '/') {
  //     console.log("inside if")
  //     if(profileData?.persona === 'team_member') {
  //       window.history.pushState(null, '', '/TeamMember');
  //     } else if(profileData?.persona === 'manager') {
  //       window.history.pushState(null, '', '/Manager');
  //     }
  //     window.onpopstate = function(event) {
  //       history.go(1);
  //     };
  //   }
  // }, [router]);

  return (
    <>
      {/* fixed topbar */}
      <TopBar />
      {/* fixed navigation & header */}
      {isAuthenticated && (
        <>
          {/* {router.pathname !== '/' && (routes.length !== 0) && ( */}
          <>
            <DashboardNavigation />
            <DashboardHeader sectionHeader={sectionHeader} renderEle={renderEle} />
          </>
          {/* )} */}
          {children}
        </>
      )}

    </>
  )
}
