import React from 'react'
import ShopFloorPlan from './ShopFloorPlan'
import MetricsSection from './MetricsSection'
import GraphSection from './GraphSection'

export default function SiteMetrics() {
  return (
    <div className='px-12 py-8'>
        <MetricsSection />
        <GraphSection />
        <ShopFloorPlan />
    </div>
  )
}
