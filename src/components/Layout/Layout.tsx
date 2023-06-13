import React, { useEffect, useState } from 'react'
import TopBar from './TopBar/TopBar'
import DashboardNavigation from './DashboardNavigation';
import DashboardHeader from '../TeamMember/TeamMemberStall/DashboardHeader';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { VinAction } from '@/store/actions/vinAction';
import Login from '../Login';

export default function Layout({ children }: any) {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const isAuthenticated = useSelector((state: any) => state.authenticationState.isAuthenticated);
  const profileData = useSelector((state: any) => state.profileState);
  const teamMemberRoutes = useSelector((state: any) => state.config.teamMemberRoutes);
  const managerRoutes = useSelector((state: any) => state.config.managerRoutes);
  const [routes, setRoutes] = useState([]);
  const [renderEle, setRenderEle] = useState('');

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
  }, [profileData]);

  useEffect(() => {
    !isAuthenticated && router.push('/');
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
      {isAuthenticated ? (
        <>
          {router.pathname !== '/' && (routes.length !== 0) && (
            <>
              <DashboardNavigation />
              <DashboardHeader renderEle={renderEle} />
            </>
          )}
          {children}
        </>
      ) : (
        <Login />
      )}
    </>
  )
}
