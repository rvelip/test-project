import React, { useEffect, useState } from 'react'
import { dashboardHeaderStyle } from './dashboard_header_tailwind';
import { useDispatch, useSelector } from 'react-redux';
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';
import Modal from '@/components/Shared/Modal';
import { CONSTANTS } from '@/constants/constants';
import moment from 'moment'

export default function DashboardHeader(props: any) {
  const { renderEle } = props;
  const dispatch: any = useDispatch();
  const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);
  const element = useSelector((state: any) => state.vinState.element);

  const [unit, setUnit] = useState('vehicles');
  const [dateFilter, setDateFilter] = useState('today');
  const [isCancelDisabled, setIsCancelDisabled] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [date, setDate] = useState('');

  const filterEle = [
    { name: "today", value: "today", label: "Today" },
    { name: "yesterday", value: "yesterday", label: "Yesterday" },
    { name: "week", value: "week", label: "Week" },
    { name: "month", value: "month", label: "Month" }
  ];

  const unitEle = [
    { name: 'vehicles', value: 'vehicles', label: 'Vehicles' },
    { name: 'hours', value: 'hours', label: 'Hours' },
  ];

  const handleConfirmCancellation = () => {
    dispatch(scanNextVINIdAction(""));
    /*************** might need to remove upon api call ****************/
    dispatch(changeVINStatus(scanNextVINId, 'pending', 'PENDING SCAN'));
    dispatch(setElementAction('scan_input'));
    setShowCancelModal(false);
  }

  const tick = () => {
    setDate(moment().format('ddd DD/MM/YYYY LT'));
  };

  useEffect(() => {
    // console.log(unit);
  }, [unit]);

  useEffect(() => {
    // console.log(unit);
  }, [dateFilter]);

  useEffect(() => {
    if (element === 'vin_table') {
      setIsCancelDisabled(false);
    } else {
      setIsCancelDisabled(true)
    }

  }, [element])

  //Timer tick 
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <>
      {/* MODAL FOR CONFIRMATION */}
      {showCancelModal &&
        <Modal
          handleModalClose={() => setShowCancelModal(false)}
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
        {/* Production Line & Stall Number */}
        <div className={dashboardHeaderStyle.headerText}>
          Production Line 1 | Stall 4
        </div>
        {/* Date Filters */}
        <div className={dashboardHeaderStyle.rightSectionWrapper}>
          <div className={dashboardHeaderStyle.dateTimeText}>{date}</div>
          {renderEle === 'showFilter' && (
            <div className={dashboardHeaderStyle.toggleBtn}>
              {filterEle.map((item: any) => {
                return (
                  <button
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    className={(dateFilter === item.name) ? dashboardHeaderStyle.btnActive : dashboardHeaderStyle.btnInActive}
                    onClick={(e: any) => setDateFilter(e.target?.value)}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          )}
          {/* Toggle Unit */}
          <div className={dashboardHeaderStyle.toggleBtn}>
            {unitEle.map((item: any) => {
              return (
                <button
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  className={unit === item.name ? dashboardHeaderStyle.btnActive : dashboardHeaderStyle.btnInActive}
                  onClick={(e: any) => setUnit(e.target?.value)}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
          {/* Cancel Button  */}
          {renderEle === 'showCancel' && (
            <button
              className={isCancelDisabled ? dashboardHeaderStyle.cancelBtnDisabled : dashboardHeaderStyle.cancelBtn}
              onClick={() => setShowCancelModal(true)}
              disabled={isCancelDisabled}
            >
              {CONSTANTS.CANCEL}
            </button>
          )}
        </div>
      </div>
    </>
  )
}
