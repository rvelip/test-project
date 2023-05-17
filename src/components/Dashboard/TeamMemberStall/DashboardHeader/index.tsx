import React, { useEffect, useState } from 'react'
import { dashboardHeaderStyle } from './dashboard_header_tailwind';
import { useDispatch, useSelector } from 'react-redux';
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';

export default function DashboardHeader() {
  const dispatch: any = useDispatch();
  const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);
  const element = useSelector((state: any) => state.vinState.element);

  const [unit, setUnit] = useState('vehicles');
  const [isCancelDisabled, setIsCancelDisabled] = useState(false);

  const handleUnitChange = (e: any) => {
    setUnit(e.target.value);
  }

  const handleCancelSubmission = () => {
    dispatch(scanNextVINIdAction(""));
    dispatch(changeVINStatus(scanNextVINId, 'pending', 'PENDING SCAN'));
    dispatch(setElementAction('scan_input'));
  }

  useEffect(() => {
    // console.log(unit);
  }, [unit]);

  useEffect(() => {
    if(element === 'vin_table') {
      setIsCancelDisabled(false);
    } else {
      setIsCancelDisabled(true)
    }
  }, [element])

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
        <button 
          className={isCancelDisabled ?  dashboardHeaderStyle.cancelBtnDisabled : dashboardHeaderStyle.cancelBtn} 
          onClick={handleCancelSubmission}
          disabled={isCancelDisabled}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
