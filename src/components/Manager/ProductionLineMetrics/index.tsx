import Metrics from '@/components/Shared/Metrics'
import Table from '@/components/Shared/Table'
import SingleSelect from '@/components/Shared/SingleSelect/SingleSelect';
import React from 'react'

export default function ProductionLineMetricsWrapper() {

  const metricsData = [
    { id: 1, value: "40%", label: "Today's Progress" },
    { id: 2, value: "100", label: "Total Planned" },
    { id: 3, value: "40", label: "Total Complete" },
    { id: 4, value: "No OT", label: "Expected Overtime" }
  ];

  const options = [
    { value: "Hoist (D)", label: "Hoist (D)" },
    { value: "Wheel (A1)", label: "Wheel (A1)" },
    { value: "Align (A2)", label: "Align (A2)" },
    { value: "Roof (E)", label: "Roof (E)" },
    { value: "Bay (B)", label: "Bay (B)" },
    { value: "Bay (C)", label: "Bay (C)" },
    { value: "Bay (F1)", label: "Bay (F1)" },
    { value: "Bay (F2)", label: "Bay (F2)" }
  ];

  const tableData = [
    { Asset: "Stall1", Planned: "5.2", Complete: "2.1", Remaining: "3.1", Progress: "40%" },
    { Asset: "Stall2", Planned: "5.0", Complete: "2.0", Remaining: "3.1", Progress: "40%" },
    { Asset: "Stall3", Planned: "5.5", Complete: "2.2", Remaining: "3.1", Progress: "40%" },
    { Asset: "Stall4", Planned: "5.5", Complete: "2.2", Remaining: "3.1", Progress: "40%" }
  ];

  const stallStatusData = [
    { 'Asset': "Stall1", 'Start Time': "10:00 AM", 'Time Elapsed': "01H 00MIN", 'Ex. Install Time': "00H 45 MIN"},
    { 'Asset': "Stall2", 'Start Time': "10:20 AM", 'Time Elapsed': "00H 40MIN", 'Ex. Install Time': "00H 30 MIN"},
    { 'Asset': "Stall3", 'Start Time': "10:30 AM", 'Time Elapsed': "00H 30MIN", 'Ex. Install Time': "00H 35 MIN"},
    { 'Asset': "Stall4", 'Start Time': "10:30 AM", 'Time Elapsed': "00H 30MIN", 'Ex. Install Time': "00H 45 MIN"},
  ];

  const handleShopChange = (name: string, selectedValue: string) => {
    console.log('handleShopChange')
  }

  return (
    <>
      <div className='w-full grid grid-cols-12'>
        <div className='col-span-8 mt-5 mb-10 ml-10'>
          <div className='text-xs text-grey4 mb-3'>Shop</div>
          <div className='mb-4'>
            <SingleSelect
              name=''
              placeHolder="Select Shop"
              options={options}
              onChange={(value: any) => console.log("value", value)}
              handleFieldChange={handleShopChange}
            />
          </div>
          <div className='bg-white mr-8 px-4 py-8'>
            <div className='font-semibold text-base'>Metrics</div>
            <div className='text-xs text-grey4 mt-3'>Throughput</div>
            <Metrics metricsData={metricsData} />
          </div>
          
          <div className='mt-10 mr-8'>
          <div className='text-white bg-black p-4 text-xs font-bold font-toyota'>
          Progress Summary
          </div>
            <Table tableData={tableData} />
          </div>
        </div>
        <div className='col-span-4 bg-white px-4 py-4 mt-5 mb-10 mr-10'>
          <div className='font-semibold text-base'>Stall Status for Current Vehicle</div>
          <div className='text-sm text-grey4 font-semibold'>Hover for current vehicle VIN</div>
          <div className=''>
            <Table tableData={stallStatusData} isStallStatusData={true} />
          </div>
        </div>
      </div>
    </>
  )
}
