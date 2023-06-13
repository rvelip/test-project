import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { vinStyle } from './vin_card_tailwind';
import { useDispatch, useSelector } from 'react-redux';
import { CONSTANTS } from '@/constants/constants';
interface IVinDetails {
    vin_id: string;
    vin_name: string;
    pick_up: string;
    drop_off: string;
    status: string;
    status_label: string;
    planned_start_time: string;
    estimated_install_time: string;
    expected_completion: string;
    expected_install_time: string;
    car_photo_url: string;
    actual_completion: string;
    actual_install_time: string;
}
export default function VINCard() {
    const dispatch: any = useDispatch();

    const vins = useSelector((state: any) => state.vinState.vins);
    const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);

    const [nextVehicle, setNextVehicle] = useState<IVinDetails>();
    const [firstCardVehicle, setFirstCardVehicle] = useState<IVinDetails>();

    const color_map: any = {
        completed_prev: vinStyle.completed_prev,
        completed_on_time: vinStyle.completed_on_time,
        completed_late: vinStyle.completed_late,
        ongoing: vinStyle.ongoing
    }

    const vinStatus = () => {
        if(firstCardVehicle?.status === 'completed_prev') {
            return CONSTANTS.PREVIOUS_VEHICLE;
        } else if (firstCardVehicle?.status === 'completed_on_time') {
            return CONSTANTS.PREVIOUS_VEHICLE;
        } else if (firstCardVehicle?.status === 'ongoing') {
            return CONSTANTS.CURRENT_VEHICLE;
        }
    }

    useEffect(() => {
        console.log('firstCardVehicle',firstCardVehicle);
        let isScanNextVINIdValid = vins.findIndex((item: any) => item.vin_id === scanNextVINId);
        //Set Data of Left Card if status is "ongoing"
        if (scanNextVINId && (isScanNextVINIdValid > -1)) {
            setFirstCardVehicle(vins.filter((item: any) => item.status === 'ongoing')[0])
        }
        //Set Data of Left Card if status is "completed_on_time" 
        else if (vins.filter((item: any) => item.status === 'completed_on_time')[vins.filter((item: any) => item.status === 'completed_on_time').length - 1]) {
            setFirstCardVehicle(vins.filter((item: any) => item.status === 'completed_on_time')[vins.filter((item: any) => item.status === 'completed_on_time').length - 1])
        }
        //Set Data of Left Card if status is "completed_prev". This is the state to be shown on first time login
        else {
            setFirstCardVehicle(vins.filter((item: any) => item.status === 'completed_prev')[vins.filter((item: any) => item.status === 'completed_prev').length - 1])
        }
        //Missing condition ---------------
        //Add else if for "completed_late"
        //----------------------------------

        //Set Data of Right Car
        setNextVehicle(vins.filter((item: any) => item.status === 'pending')[0]);
    }, [scanNextVINId, vins]);

    return (
        <div className={vinStyle.mainwrapper}>
            {/* left car */}
            <div className={vinStyle.innerWrapper} >
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={(firstCardVehicle?.status === 'completed_prev' ? vinStyle.prevVehicle : vinStyle.currentVehicle)}>
                            {vinStatus()}
                        </div>
                        <div className={firstCardVehicle ? color_map[firstCardVehicle?.status] : null}>
                            {firstCardVehicle?.status_label}
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <span className={vinStyle.semiBold}> {firstCardVehicle?.vin_id}</span><br />

                        <span className={vinStyle.fontSize}>{firstCardVehicle?.vin_name}</span>
                        {firstCardVehicle?.status === 'completed_on_time' ?
                            (
                                <>
                                    <div className={vinStyle.plannedTime}>
                                        <div>Actual Completion</div> <div>{firstCardVehicle?.actual_completion}</div>
                                    </div>
                                    <div className={vinStyle.plannedTime}>
                                        <div>Actual Install Time</div> <div>{firstCardVehicle?.actual_install_time}</div>
                                    </div>
                                </>
                            ) :
                            (firstCardVehicle?.status !== 'completed_prev') ? (
                                <>
                                    <div className={vinStyle.plannedTime}>
                                        <div>{CONSTANTS.EXPECTED_COMPLETION}</div> <div>{firstCardVehicle?.expected_completion}</div>
                                    </div>
                                    <div className={vinStyle.plannedTime}>
                                        <div>{CONSTANTS.EXPECTED_INSTALL_TIME}</div> <div>{firstCardVehicle?.expected_install_time}</div>
                                    </div>
                                </>
                            ) : null
                        }
                    </div>

                </div>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.marginFontSize}>
                            {CONSTANTS.DROP_OFF_LOCATION}
                        </div>
                        <div className={vinStyle.labelStaging}>
                            {firstCardVehicle?.drop_off}
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <Image
                            src='/images/vin.png'
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>           
            {/* right car */}
            {
                nextVehicle ? (
                    <div className={vinStyle.innerWrapper}>
                        <div>
                            <div className={vinStyle.displayFlex}>
                                <div className={vinStyle.nextVehicle}>
                                    {CONSTANTS.NEXT_VEHICLE}
                                </div>
                                <div className={vinStyle.labelPending}>
                                    {nextVehicle?.status_label}
                                </div>
                            </div>
                            {/* <div className={vinStyle.marginTop}>
                                <span className={vinStyle.semiBold}>{nextVehicle?.vin_id}</span><br />
                                {nextVehicle &&
                                    (
                                        <>
                                            <span className={vinStyle.fontSize}>{nextVehicle.vin_name}</span>
                                            <div className={vinStyle.plannedTime}>
                                                <div> {CONSTANTS.PLANNED_START_TIME}</div> <div>{nextVehicle.planned_start_time}</div>
                                            </div>
                                            <div className={vinStyle.plannedTime}>
                                                <div>  {CONSTANTS.EXPECTED_INSTALL_TIME}</div> <div>{nextVehicle.estimated_install_time}</div>
                                            </div>
                                        </>
                                    )
                                }
                            </div> */}
                        </div>
                        {/* <div>
                            <div className={vinStyle.displayFlex}>
                                <div className={vinStyle.marginFontSize}>
                                    {CONSTANTS.PICK_UP_LOCATION}
                                </div>
                                <div className={vinStyle.labelStaging}>
                                    {nextVehicle?.pick_up}
                                </div>
                            </div>
                            <div className={vinStyle.marginTop}>
                                <Image
                                    src='/images/vin.png'
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div> */}
                    </div>
                ) :
                    <div className={vinStyle.innerWrapperError}>{CONSTANTS.NEXT_VEHICLE_IS_NOT_AVAILABLE}.</div>
            }
        </div>
    )
}
