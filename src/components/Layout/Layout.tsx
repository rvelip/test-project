import React, { useEffect, useState } from 'react'
import TopBar from './TopBar/TopBar'
import DashboardNavigation from '../TeamMember/DashboardNavigation';
import DashboardHeader from '../TeamMember/TeamMemberStall/DashboardHeader';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { VinAction } from '@/store/actions/vinAction';
// import { setRoute } from '@/store/actions/configAction';
import Login from '../Login';

export default function Layout({ children }: any) {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const isAuthenticated = useSelector((state: any) => state.authenticationState.isAuthenticated);
  const profileData = useSelector((state: any) => state.profileState);
  const teamMemberRoutes = useSelector((state: any) => state.config.teamMemberRoutes);
  const managerRoutes = useSelector((state: any) => state.config.managerRoutes);
  const [routes, setRoutes] = useState([]);

  const renderEle = () => {
    if (router.pathname.startsWith('/TeamMember')) {
      return 'showCancel';
    } else if (router.pathname.startsWith('/Manager')) {
      return 'showFilter';
    }
  }

  useEffect(() => {
    if (profileData?.persona === 'team_member') {
      setRoutes(teamMemberRoutes)
      //  dispatch(setRoute(routes));
      console.log('insideTeamMeberLayout')
      dispatch(VinAction());
    }
    else if (profileData?.persona === 'manager') {
      setRoutes(managerRoutes)
      //  dispatch(setRoute(managerNavData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData])

  useEffect(() => {
    !isAuthenticated && router.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

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
              <DashboardHeader renderEle={renderEle()} />
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
