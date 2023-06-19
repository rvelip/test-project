import React, { useState } from 'react';
import Image from 'next/image';
import penIcon from '../../../../../public/images/icons/penIcon.svg';
import plusIcon from '../../../../../public/images/icons/plusIcon.svg';
import circleCrossIcon from '../../../../../public/images/icons/circleCrossIcon.svg';
import SettingsTable from './SettingsTable';
import SingleSelect from '@/components/Shared/SingleSelect/SingleSelect';

export default function ConfigScreen() {
  const [settingsTab, setSettingsTab] = useState('production_line');

  const handleFieldChange = (name: string, selectedValue: string) => {
    console.log('handleFieldChange')
  }

  const locationOptions = [
    { value: "Ops building", label: "Ops building" },
    { value: "FQA Building", label: "FQA building" }
  ];

  const stallIdOptions = [
    { value: "LB_S029", label: "LB_S029" },
    { value: "LB_S030", label: "LB_S030" },
    { value: "LB_S031", label: "LB_S031" },
    { value: "LB_S032", label: "LB_S032" },
    { value: "LB_S033", label: "LB_S033" },
    { value: "LB_S034", label: "LB_S034" },
    { value: "LB_S035", label: "LB_S035" },
    { value: "LB_S036", label: "LB_S036" }
  ];

  const Select = () => {
    return (
      <SingleSelect
        name=''
        placeHolder="Select Shop"
        options={locationOptions}
        onChange={(value: any) => console.log("value", value)}
        handleFieldChange={handleFieldChange}
      />
    )
  }

  const prodLineTableHeaders = [
    { id: 'showDelete', label: '' },
    { id: 'line', label: "Line", },
    { id: 'name', label: "Name" },
    { id: 'location', label: "Location" },
    { id: 'stall_count', label: "Stall/Pitch Count" },
    { id: 'update_assignment', label: "Update Assignment" },
  ];

  const prodLineTableData = [
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'A2', name: 'Align', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'E', name: 'Roof', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'B', name: 'Bay', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'C', name: 'Bay', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'F1', name: 'Bay', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'F2', name: 'Bay', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'J', name: 'Conveyor', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'J1', name: 'Conveyor', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'H', name: 'Bay', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'U', name: 'FQA & Throw Ins', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, line: 'X', name: 'FQA & Throw Ins', location: <Select />, stall_count: '20', update_assignment: <input type='radio' /> },
  ];

  const stallAssignmentTableHeaders = [
    { id: 'showDelete', label: '' },
    { id: 'stall_id', label: 'Stall/Pitch ID' },
    { id: 'line', label: "Line", },
    { id: 'name', label: "Name" },
  ];

  const stallAssignmentTableData = [
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Bay' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Conveyor' },
    { showDelete: <Image src={circleCrossIcon} alt='circle cross icon' />, stall_id: <Select />, line: <Select />, name: 'Conveyor' },
  ];

  return (
    <>
      <div className='flex justify-start border-b-2'>
        {/* Navigation */}
        <div
          className={`flex justify-between px-4 py-2 cursor-pointer ${settingsTab === 'production_line' && 'border-b-2 border-b-black'}`}
          onClick={() => setSettingsTab('production_line')}
        >
          <div className='mr-2'>Production Lines</div>
          <Image src={penIcon} alt='pen Icon' />
        </div>
        <div
          className={`flex justify-between px-4 py-2 cursor-pointer ${settingsTab === 'stall_assignment' && 'border-b-2 border-b-black'}`}
          onClick={() => setSettingsTab('stall_assignment')}
        >
          <div className='mr-2'>Stall/Pitch Assignment</div>
          <Image src={penIcon} alt='pen Icon' />
        </div>
      </div>
      {/* Table */}
      {settingsTab === 'production_line' && (
        <SettingsTable tableHeaders={prodLineTableHeaders} tableData={prodLineTableData} />
      )}
      {settingsTab === 'stall_assignment' && (
        <SettingsTable tableHeaders={stallAssignmentTableHeaders} tableData={stallAssignmentTableData} />
      )}
    </>
  )
}
