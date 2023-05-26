import React from 'react'
import TopBar from './TopBar/TopBar'
import DashboardNavigation from '../TeamMember/DashboardNavigation';
import DashboardHeader from '../TeamMember/TeamMemberStall/DashboardHeader';
import { useRouter } from 'next/router'

export default function Layout({ children }: any) {
  const router = useRouter();
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

  const loadNavData = () => {
    if (router.pathname.includes('TeamMember')) {
      return teamMemberNavData;
    } else if(router.pathname.includes('Manager')) {
      return managerNavData;
    }
  }

  return (
    <>
      <TopBar />
      {/* navigation & header */}
      {router.pathname !== '/' && (
        <>
          <DashboardNavigation navData={loadNavData()} />
          <DashboardHeader showFilter />
        </>
      )}
      {children}
    </>
  )
}
