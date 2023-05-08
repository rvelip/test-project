import React from 'react'
import DashboardNavigation from './DashboardNavigation'
import TeamMemberStall from './TeamMemberStall'
import VINScan from './VINScan'
import { layoutStyle } from '../Common Tailwind/common_tailwind'

export default function DashboardWrapper() {
    return (
        <div className={layoutStyle.layoutBackground}>
            <DashboardNavigation />
            <TeamMemberStall />
            <VINScan />
        </div>
    )
}
