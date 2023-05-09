import React, { useEffect, useState } from 'react'
import { dashboardHeaderStyle } from './dashboard_header_tailwind';

export default function DashboardHeader() {
  const [unit, setUnit] = useState('vehicles');
  const handleUnitChange = (e: any) => {
    setUnit(e.target.value);
  }

  useEffect(() => {
    console.log(unit);
  }, [unit]);

  return (
    <div className={dashboardHeaderStyle.dashboardControlsWrapper}>
      <div className={dashboardHeaderStyle.headerText}>
        Shop A1 | Stall 4
      </div>
      <div className={dashboardHeaderStyle.rightSectionWrapper}>
        <div className={dashboardHeaderStyle.dateTimeText}>Thu 05/04/2023 7:05 AM</div>
        <div className={dashboardHeaderStyle.toggleBtn}>
          <button
            name='vehicles'
            value='vehicles'
            className={unit === 'vehicles' ? dashboardHeaderStyle.btnActive : dashboardHeaderStyle.btnInActive}
            onClick={(e) => handleUnitChange(e)}
          >
            Vehicles
          </button>
          <button 
            name='hours'
            value='hours'
            className={unit === 'hours' ? dashboardHeaderStyle.btnActive : dashboardHeaderStyle.btnInActive}
            onClick={(e) => {handleUnitChange(e)}}
          >
            Hours
          </button>
        </div>
        <button className={dashboardHeaderStyle.backBtn}>Back</button>
      </div>
    </div>
  )
}
