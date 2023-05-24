import React, { useEffect, useState } from 'react'
import { dashboardHeaderStyle } from './dashboard_header_tailwind';
import { useDispatch, useSelector } from 'react-redux';
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';
import Modal from '@/components/Shared/Modal';
import { CONSTANTS } from '@/constants/constants';

export default function DashboardHeader() {
  const dispatch: any = useDispatch();
  const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);
  const element = useSelector((state: any) => state.vinState.element);

  const [unit, setUnit] = useState('vehicles');
  const [isCancelDisabled, setIsCancelDisabled] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  // const [date, setDate] = useState(new Date().toString());

  const handleUnitChange = (e: any) => {
    setUnit(e.target.value);
  }

  const handleModalClose = () => {
    setShowCancelModal(false);
  }

  const handleConfirmCancellation = () => {
    dispatch(scanNextVINIdAction(""));
    /*************** might need to remove upon api call ****************/
    dispatch(changeVINStatus(scanNextVINId, 'pending', 'PENDING SCAN'));
    dispatch(setElementAction('scan_input'));
    setShowCancelModal(false);
  }

  // const tick = () => {
  //   setDate(new Date().toString());
  // };

  useEffect(() => {
    // console.log(unit);
  }, [unit]);

  useEffect(() => {
    if (element === 'vin_table') {
      setIsCancelDisabled(false);
    } else {
      setIsCancelDisabled(true)
    }

  }, [element])

  // useEffect(() => {
  //   document.title = date;
  //   const timerID = setInterval(() => tick(), 1000);
  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, []);

  return (
    <>
      {/* MODAL FOR CONFIRMATION */}
      {showCancelModal &&
        <Modal
          handleModalClose={handleModalClose}
          handleConfirm={handleConfirmCancellation}
          modal_header={CONSTANTS.CANCEL_MODAL_HEADER}
          modal_content={CONSTANTS.CONFIRM_MODAL_CONTENT}
          isConfirm
          confirmBtnName={CONSTANTS.YES_CANCEL_CURRENT_VIN}
          isCancel
          cancelBtnName={CONSTANTS.NO_BACK_TO_CUURENT_VIN}
        />
      }
      <div className={dashboardHeaderStyle.dashboardControlsWrapper}>
        <div className={dashboardHeaderStyle.headerText}>
          Production Line 1 | Stall 4
        </div>
        <div className={dashboardHeaderStyle.rightSectionWrapper}>
          <div className={dashboardHeaderStyle.dateTimeText}>Thu 05/04/2023 11:00 AM</div>
          <div className={dashboardHeaderStyle.toggleBtn}>
            <button
              name='vehicles'
              value='vehicles'
              className={unit === 'vehicles' ? dashboardHeaderStyle.btnActive : dashboardHeaderStyle.btnInActive}
              onClick={(e) => handleUnitChange(e)}
            >
              {CONSTANTS.VEHICLES}
            </button>
            <button
              name='hours'
              value='hours'
              className={unit === 'hours' ? dashboardHeaderStyle.btnActive : dashboardHeaderStyle.btnInActive}
              onClick={(e) => { handleUnitChange(e) }}
            >
              {CONSTANTS.HOURS}
            </button>
          </div>
          <button
            className={isCancelDisabled ? dashboardHeaderStyle.cancelBtnDisabled : dashboardHeaderStyle.cancelBtn}
            onClick={() => setShowCancelModal(true)}
            disabled={isCancelDisabled}
          >
            {CONSTANTS.CANCEL}
          </button>
        </div>
      </div>
    </>
  )
}
