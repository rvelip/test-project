import React, { useEffect } from 'react'
import TopBar from './TopBar/TopBar'
import DashboardNavigation from '../TeamMember/DashboardNavigation';
import DashboardHeader from '../TeamMember/TeamMemberStall/DashboardHeader';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { VinAction } from '@/store/actions/vinAction';
import { setRoute } from '@/store/actions/configAction';
import Login from '../Login';

export default function Layout({ children }: any) {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const isAuthenticated = useSelector((state: any) => state.authenticationState.isAuthenticated);
  const profileData = useSelector((state: any) => state.profileState);
  const routes = useSelector((state: any) => state.config.routes);

  const teamMemberNavData = [
    { id: 1, label: 'Stall Dashboard', isActive: true, path: '/TeamMember' },
    { id: 2, label: 'Dummy Dashboard', isActive: false, path: '/TeamMember/Dummy' },
  ]
  const managerNavData = [
    { id: 1, label: 'Site Metric', isActive: true, path: '/Manager' },
    { id: 2, label: 'Shop Metric', isActive: false, path: '/Manager/ShopMetrics' },
    { id: 3, label: 'Vehicle Progress Tracking Board', isActive: false, path: '/Manager/VPTB' },
    { id: 4, label: 'Staffing', isActive: false, path: '/Manager/Staffing' }
  ];

  const renderEle = () => {
    if (router.pathname.startsWith('/TeamMember')) {
      return 'showCancel';
    } else if (router.pathname.startsWith('/Manager')) {
      return 'showFilter';
    }
  }

  useEffect(() => {
    if (profileData?.persona === 'team_member') {
      dispatch(setRoute(teamMemberNavData));
      dispatch(VinAction());
    } else if (profileData?.persona === 'manager') {
      dispatch(setRoute(managerNavData));
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
