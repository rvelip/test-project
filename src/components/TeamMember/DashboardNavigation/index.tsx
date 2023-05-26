import React, { useEffect, useState } from 'react';
import { dashboardNavStyle } from './dashboard_navigation_tailwind';
import { useRouter } from 'next/router';

export default function DashboardNavigation(props: any) {
  const { navData } = props;
  const [navItems, setNavItems] = useState(navData);

  const router = useRouter();

  const handleNavChange = (navId: string) => {
    navItems.forEach((item: any) => {
      if(item.path === navId) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    })
    setNavItems([...navItems]);
  };

  useEffect(() => {
    const index = navItems.findIndex((item: any) => item.isActive);
    if(router.pathname !== navItems[index].path) {
      router.push(navItems[index].path);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navItems]);

  useEffect(() => {
    console.log('router is changing', typeof(router.pathname), router.pathname );
    handleNavChange(router.pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);



  return (
    <div className={dashboardNavStyle.navWrapper}>
      {navItems.map((navItem: any) => {
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
