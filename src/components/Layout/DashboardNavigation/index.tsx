import React, { useEffect, useState } from 'react';
import { dashboardNavStyle } from './dashboard_navigation_tailwind';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { updateTabAction } from '@/store/actions/configAction';

export default function DashboardNavigation() {
  const profileData = useSelector((state: any) => state.profileState);
  const teamMemberRoutes = useSelector((state: any) => state.config.teamMemberRoutes);
  const managerRoutes = useSelector((state: any) => state.config.managerRoutes);

  const [routes, setRoutes] = useState<any>([])
  const router = useRouter();
  
  const dispatch: any = useDispatch();

  //change the "isActive" flag to true if navigation bar is switched
  const handleNavChange = (navId: string) => {
    dispatch(updateTabAction(navId, profileData?.persona));
  };

  useEffect(() => {
    if(profileData?.persona === 'team_member') {
      setRoutes(teamMemberRoutes);
    } else if (profileData?.persona === 'manager') {
      setRoutes(managerRoutes);
    }
  }, [managerRoutes, profileData?.persona, teamMemberRoutes])

  //Push new route based navigation change
  useEffect(() => {
    console.log("inside routes I am changing")
    const index = routes.findIndex((item: any) => item.isActive);
    if ((index > -1) && (router.pathname !== routes[index].path)) {
     router.push(routes[index].path);
    }
  }, [routes]);

  // Listen to router change on the browser  
  useEffect(() => {
      handleNavChange(router.pathname);
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
