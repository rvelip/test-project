import React, { useEffect, useState } from 'react'
import { vinScanStyle } from './vin_scan_tailwind'
import VINTable from './VINTable'
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';
import { useDispatch, useSelector } from 'react-redux';
import { VinTableAction } from '@/store/actions/vinTableAction';

export default function VINScan() {
    const dispatch: any = useDispatch();

    const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);
    const element = useSelector((state: any) => state.vinState.element);
    const vins = useSelector((state: any) => state.vinState.vins);

    const [scanInput, setScanInput] = useState("");

    const handleVINScanChange = (e: any) => {
        setScanInput(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(scanNextVINIdAction(scanInput));
        dispatch(changeVINStatus(scanInput, 'ongoing', 'TIME ELAPSED: 00H 05 MIN'));
    }

    useEffect(() => {
        //Check if scanInput is valid and exists in redux
        const isScanNextVINIdValid = vins.findIndex((item: any) => item.vin_id === scanNextVINId);

        if (scanNextVINId && isScanNextVINIdValid > -1) {
            //Show table only if scanNextVINId is available in redux
            dispatch(setElementAction("vin_table"));

            //fetch table data
            dispatch(VinTableAction());
        } else if (scanNextVINId) {
            console.log("display error card")
            //show Error Message
            dispatch(setElementAction('error_pop_up'));

            // //set scanNextVINId in redux to empty string since it doesn't exist
            // dispatch(scanNextVINIdAction(""));
        }
    }, [scanNextVINId]);

    return (
        <>
            <div className={vinScanStyle.currentVehicle}>
                Current Vehicle Installation
            </div>

            {(element === 'scan_input') &&
                <form className={vinScanStyle.form}>
                    <label className={vinScanStyle.label}>Scan Next VIN</label>
                    <input
                        className={vinScanStyle.input}
                        type="text"
                        placeholder="###########"
                        onChange={(e) => handleVINScanChange(e)}
                    />
                    <button
                        className={vinScanStyle.button}
                        type='submit'
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            }

            {/* Error Message to show scanned vin id doesn't exist */}
            {(element === 'error_pop_up') && (
                <div className='flex w-max m-auto my-20 p-4 border-l-4 border-l-status-pending-color bg-orange-200 rounded'>
                    <div className='px-4'>
                        !
                    </div>
                    <div>
                        <div className='text-sm font-semibold pb-2'>
                            {`Warning - Inventory Code ${scanNextVINId}`}
                        </div>
                        <div>
                            {`This vehicle's inventory code is ${scanNextVINId}. Choose to continue installation or scan another VIN.`}
                        </div>
                    </div>
                    <div
                        className='px-4'
                        onClick={() => {
                            dispatch(setElementAction('scan_input'))
                            dispatch(scanNextVINIdAction(""));
                        }}

                    >
                        X
                    </div>
                </div>
            )}
            {/* Render Table with vin details */}
            {(element === 'vin_table') && <VINTable />}
        </>

    )
}
