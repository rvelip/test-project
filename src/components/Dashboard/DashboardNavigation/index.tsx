import React, { useEffect, useState } from 'react';
import { dashboardNavStyle } from './dashboard_navigation_tailwind';

export default function DashboardNavigation() {
  const [navItems, setNavItems] = useState([
    { id: 1, label: 'Stall Dashboard', isActive: false },
    { id: 2, label: 'Stall Analytics', isActive: true },
    { id: 3, label: 'Stall Financials', isActive: false }
  ]);

  const handleNavChange = (e: any, navId: number) => {
    navItems.forEach(item => {
      if(item.id === navId) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    })
    setNavItems([...navItems]);
  };

  useEffect(() => {
    console.log(navItems);
  }, [navItems]);

  return (
    <div className={dashboardNavStyle.navWrapper}>
      {navItems.map((navItem) => {
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
