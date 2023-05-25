import React from 'react'
import DashboardHeader from './DashboardHeader'
import VINCard from './VINCard'
import TeamMemberStallInfo from './TeamMemberStallInfo'

export default function TeamMemberStall() {
  return (
    <div>
      <DashboardHeader isCancel/>
      <TeamMemberStallInfo />
      <VINCard/>
    </div>
  )
}
