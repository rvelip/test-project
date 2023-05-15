import React from 'react'
import DashboardNavigation from './DashboardNavigation'
import TeamMemberStall from './TeamMemberStall'
import VINScan from './VINScan'

export default function DashboardWrapper() {
    const navData = [
        { id: 1, label: 'Stall Dashboard', isActive: true },
      ]
    return (
        <>
            <DashboardNavigation navData={navData}/>
            <TeamMemberStall />
            <VINScan />
        </>
    )
}
