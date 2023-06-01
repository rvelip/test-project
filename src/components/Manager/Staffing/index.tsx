import Metrics from '@/components/Shared/Metrics'
import Table from '@/components/Shared/Table'
import React from 'react'

export default function StaffingWrapper() {

  const metricsData = [
    { id: 1, value: "550", label: "Total Planned Vehicles" },
    { id: 2, value: "720.0", label: "Total Planned Hours" },
    { id: 3, value: "100", label: "Total Headcount" }
  ];

  const staffingData = [
    { 'Shop': "Wheel (A1)", 'Stall': "Stall 1", 'Planned Vehicles': "25", 'Planned Hours': "5.2", "Team Member Count":"01"},
    { 'Shop': "Wheel (A1)", 'Stall': "Stall 2", 'Planned Vehicles': "25", 'Planned Hours': "5.0", "Team Member Count":"01"},
    { 'Shop': "Wheel (A1)", 'Stall': "Stall 3", 'Planned Vehicles': "25", 'Planned Hours': "5.5", "Team Member Count":"01"},
    { 'Shop': "Wheel (A1)", 'Stall': "Stall 4", 'Planned Vehicles': "25", 'Planned Hours': "5.5", "Team Member Count":"01"},
    { 'Shop': "Align (A2)", 'Stall': "Stall 1", 'Planned Vehicles': "50", 'Planned Hours': "7.5", "Team Member Count":"01"}
  ];

  const handleShopChange = (name: string, selectedValue: string) => {
    console.log('handleShopChange')
  }

  return (
    <>
      <div className='w-full grid grid-cols-12'>
        <div className='col-span-9 mt-5 mb-5 ml-10'>
          <div className='bg-white mr-12 px-4 py-8'>
            <div className='font-semibold text-base'>Metrics</div>
            <Metrics metricsData={metricsData} />
          </div>
        </div>
      </div>
      <div className='mb-20'>
          <div className='text-white bg-black p-4 text-xs font-bold font-toyota'>
          Today’s Staffing Breakdown
          </div>
            <Table tableData={staffingData} isStaffingData={true}/>
      </div>
    </>
  )
}

