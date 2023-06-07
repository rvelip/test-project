import React, { useEffect, useState } from 'react';
import { dashboardNavStyle } from './dashboard_navigation_tailwind';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { updateTabAction } from '@/store/actions/configAction';
// import { VinAction } from '@/store/actions/vinAction';

export default function DashboardNavigation(props: any) {
  const profileData = useSelector((state: any) => state.profileState);
  const teamMemberRoutes = useSelector((state: any) => state.config.teamMemberRoutes);
  const managerRoutes = useSelector((state: any) => state.config.managerRoutes);
  const routes = profileData?.persona === 'team_member' ? teamMemberRoutes : managerRoutes;
  const router = useRouter();
  const dispatch: any = useDispatch();

  //change the "isActive" flag to true if navigation bar is switched
  const handleNavChange = (navId: string) => {
    dispatch(updateTabAction(navId, profileData?.persona));
   
  };

  //Push new route based navigation change
  useEffect(() => {
    const index = routes.findIndex((item: any) => item.isActive);
    if (router.pathname !== routes[index].path) {
     router.push(routes[index].path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes]);

  // Listen to router change on the browser  
  useEffect(() => {
  handleNavChange(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className={dashboardNavStyle.navWrapper}>
      {routes.map((navItem: any) => {
        return (
          <div
            key={navItem.id}
            className={navItem.isActive ? dashboardNavStyle.isActive : dashboardNavStyle.isInActive}
            onClick={() => handleNavChange(navItem.path)}
          >
            {navItem.label}
          </div>
        )
      })}
    </div>
  )
}
