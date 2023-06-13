import React, { useEffect, useState } from 'react'
import { vinScanStyle } from './vin_scan_tailwind'
import VINTable from './VINTable'
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';
import { useDispatch, useSelector } from 'react-redux';
import { VinTableAction } from '@/store/actions/vinTableAction';
import { CONSTANTS } from '@/constants/constants';

export default function VINScan() {
    const dispatch: any = useDispatch();

    const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);
    const element = useSelector((state: any) => state.vinState.element);
    const vins = useSelector((state: any) => state.vinState.vins);
    const selectedUsers = useSelector((state: any) => state.usersState.selectedUsers);

    const [errors, setError] = useState(false);
    const [scanInput, setScanInput] = useState("");

    const handleVINScanChange = (e: any) => {
        setScanInput(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!scanNextVINId) {
            setError(false);
        }
        if (scanInput.length == 0) {
            setError(true);
        }
        dispatch(scanNextVINIdAction(scanInput));
        dispatch(changeVINStatus(scanInput, 'ongoing', 'TIME ELAPSED: 00H 05 MIN'));
    }

    useEffect(() => {
        setScanInput(scanNextVINId);

        //Check if scanInput is valid and exists in redux
        const isScanNextVINIdValid = vins.findIndex((item: any) => item.vin_id === scanNextVINId);

        if (scanNextVINId && isScanNextVINIdValid > -1) {
            //Show table only if scanNextVINId is available in redux
            dispatch(setElementAction("vin_table"));

            //fetch table data
            dispatch(VinTableAction());
        } else if (scanNextVINId) {
            //show Error Message
            dispatch(setElementAction('error_pop_up'));

            // //set scanNextVINId in redux to empty string since it doesn't exist
            // dispatch(scanNextVINIdAction(""));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scanNextVINId]);

    return (
        <>
            <div className={vinScanStyle.currentVehicle}>
                {CONSTANTS.CURRENT_VEHICLE_INSTALLATION}
            </div>

            {(element === 'scan_input') && (
                <form className={vinScanStyle.form}>
                    <div>
                        <label className={vinScanStyle.label}>{CONSTANTS.SCAN_NEXT_VIN}</label>
                        <input
                            className={vinScanStyle.input}
                            type="text"
                            placeholder={CONSTANTS.ENTER_VIN}
                            name='vinid'
                            onChange={(e) => handleVINScanChange(e)}
                        />
                        {errors && scanInput.length <= 0 ?
                            <p className="text-sm text-red-600 ml-36 mt-2"> {CONSTANTS.VIN_ID_EMPTY_MESSAGE}</p> : ''
                        }

                    </div>
                    <div className={errors && scanInput.length <= 0 ? '-mt-7' : 'mt-0'}>
                        <button
                            className={(selectedUsers.length === 0) ? vinScanStyle.buttonDisabled : vinScanStyle.button}
                            type='submit'
                            onClick={(e) => handleSubmit(e)}
                            disabled={selectedUsers.length === 0}
                        >
                            {CONSTANTS.SUBMIT}
                        </button>
                    </div>

                </form>
            )}

            {/* Error Message to show scanned vin id doesn't exist */}
            {(element === 'error_pop_up') && (
                <div className='flex w-max m-auto my-20 p-4 border-l-4 border-l-status-pending-color bg-orange-200 rounded'>
                    <div className='px-4'>
                        !
                    </div>
                    <div>
                        <div className='text-sm font-semibold pb-2'>
                            {CONSTANTS.VIN_ID_INVALID_MESSAGE1} {scanNextVINId}
                        </div>
                        <div>
                            {CONSTANTS.VIN_ID_INVALID_MESSAGE2} {scanNextVINId}. {CONSTANTS.VIN_ID_INVALID_MESSAGE3}.
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
