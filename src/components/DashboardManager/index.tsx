import React from 'react'
import DashboardNavigation from '../Dashboard/DashboardNavigation'
import DashboardHeader from '../Dashboard/TeamMemberStall/DashboardHeader'
import SiteMetrics from './SiteMetrics';

export default function DashboardManagerWrapper() {
  const navData = [
    { id: 1, label: 'Site Metric', isActive: true },
    { id: 2, label: 'Shop Metric', isActive: false },
    { id: 3, label: 'Vehicle Progress Tracking Board', isActive: false },
    { id: 4, label: 'Staffing', isActive: false }
  ];

  return (
    <>
        <DashboardNavigation navData={navData}/>
        <DashboardHeader />
        <SiteMetrics />
    </>
  )
}
