import React, { useState } from 'react';
import { dashboardNavStyle } from './dashboard_navigation_tailwind';

export default function DashboardNavigation(props: any) {
  const { navData } = props;
  const [navItems, setNavItems] = useState(navData);

  const handleNavChange = (e: any, navId: number) => {
    navItems.forEach((item: any) => {
      if(item.id === navId) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    })
    setNavItems([...navItems]);
  };

  return (
    <div className={dashboardNavStyle.navWrapper}>
      {navItems.map((navItem: any) => {
        return (
          <div 
            key={navItem.id} 
            className={navItem.isActive ? dashboardNavStyle.isActive : dashboardNavStyle.isInActive}
            onClick={(e) => handleNavChange(e, navItem.id)}
          >
            {navItem.label}
          </div>
        )
      })}
    </div>
  )
}
