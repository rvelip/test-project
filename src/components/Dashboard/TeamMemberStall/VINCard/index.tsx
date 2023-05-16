import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { vinStyle } from './vin_card_tailwind';
import { useDispatch, useSelector } from 'react-redux';
import { VinAction } from '@/store/actions/vinAction';
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
}
export default function VINCard() {
    const dispatch: any = useDispatch();
    const vin_data = useSelector((state: any) => state.vinState);
    const [nextVehicle, setNextVehicle] = useState<IVinDetails>();
    const [firstCardVehicle, setFirstCardVehicle] = useState<IVinDetails>();

    useEffect(() => {
        dispatch(VinAction());
    }, [dispatch]);

    useEffect(() => {
        setNextVehicle(vin_data?.vins.filter((item: any) => item.status === 'pending')[0]);
        if(vin_data.scanNextVINId) {
            setFirstCardVehicle(vin_data?.vins.filter((item: any) => item.status === 'ongoing')[0])
        } else {
            setFirstCardVehicle(vin_data?.vins.filter((item: any) => item.status === 'completed')[vin_data?.vins.filter((item: any) => item.status === 'completed').length - 1])

        }
    }, [vin_data, vin_data.scanNextVINId])


    console.log('vin_dataFromVINCard', vin_data)
    // console.log('nextVehicle', nextVehicle)
    console.log('firstCardVehicleAfter', firstCardVehicle)

    return (
        <div className={vinStyle.mainwrapper}>
            <div className={vinStyle.innerWrapper} >
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={(firstCardVehicle?.status === 'completed' ? vinStyle.prevVehicle : vinStyle.currentVehicle)}>
                            {firstCardVehicle?.status === 'completed' ? 'Previous Vehicle' : 'Current Vehicle'}
                        </div>
                        <div className={(firstCardVehicle?.status === 'completed' ? vinStyle.complete : vinStyle.ongoing)}>

                            {firstCardVehicle?.status_label}
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <span className={vinStyle.semiBold}> {`VIN ${firstCardVehicle?.vin_id}`}</span><br />

                        <span className={vinStyle.fontSize}>{firstCardVehicle?.vin_name}</span>
                        {firstCardVehicle?.status !== 'completed' &&
                            (
                                <>
                                    <div className={vinStyle.plannedTime}>
                                        <div> Expected Completion</div> <div>{firstCardVehicle?.expected_completion}</div>
                                    </div>
                                    <div className={vinStyle.plannedTime}>
                                        <div>  Expected Install Time</div> <div>{firstCardVehicle?.expected_install_time}</div>
                                    </div>
                                </>
                            )}

                    </div>

                </div>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.marginFontSize}>
                            Drop Off Location
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
            <div className={vinStyle.innerWrapper}>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.prevVehicle}>
                            Next Vehicle
                        </div>
                        <div className={vinStyle.labelPending}>
                            {nextVehicle?.status_label}
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <span className={vinStyle.semiBold}>{`VIN ${nextVehicle?.vin_id}`}</span><br />
                        {/* <span className={vinStyle.fontSize}>2023 Toyota RAV4 Silver</span>  */}
                        {nextVehicle &&
                            (
                                <>
                                    <span className={vinStyle.fontSize}>{nextVehicle.vin_name}</span>
                                    <div className={vinStyle.plannedTime}>
                                        <div> Planned Start Time</div> <div>{nextVehicle.planned_start_time}</div>
                                    </div>
                                    <div className={vinStyle.plannedTime}>
                                        <div>  Estimated Install Time</div> <div>{nextVehicle.estimated_install_time}</div>
                                    </div>
                                </>
                            )

                        }
                    </div>

                </div>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.marginFontSize}>
                            Pick Up Location
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
                </div>
            </div>

        </div>
    )
}
