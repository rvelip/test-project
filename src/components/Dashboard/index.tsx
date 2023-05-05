import React from 'react'
import DashboardNavigation from './DashboardNavigation'
import TeamMemberStall from './TeamMemberStall'
import VINScan from './VINScan'

export default function DashboardWrapper() {
    return (
        <div className=''>
            <DashboardNavigation />
            <TeamMemberStall />
            <VINScan />
        </div>
    )
}
