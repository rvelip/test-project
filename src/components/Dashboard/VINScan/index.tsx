import React, { useState } from 'react'
import { vinScanStyle } from './vin_scan_tailwind'
import VINTable from './VINTable'
import { changeVINStatus, scanNextVINId } from '@/store/actions/vinAction';
import { useDispatch } from 'react-redux';

export default function VINScan() {
    const [showTable, setShowTable] = useState(false);
    const [scanNumber, setScanNumber] = useState("");
    // const [vinSearch, SetSearch]=useState("");
    const dispatch: any = useDispatch();
    const handleVINScanChange = (e: any) => {
        setScanNumber(e.target.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(scanNextVINId(scanNumber));
        dispatch(changeVINStatus(scanNumber, 'ongoing', 'TIME ELAPSED: 00H 05 MIN'));
        setShowTable(!showTable)
    }

    return (
        <>
            <div className={vinScanStyle.currentVehicle}>
                Current Vehicle Installation
            </div>
            {!showTable &&
                <div >
                    <form className={vinScanStyle.form}>
                        <label className={vinScanStyle.label}>Scan Next VIN</label>
                        <input className={vinScanStyle.input} type="text" placeholder="###########" onChange={(e) => handleVINScanChange(e)} />
                        <button className={vinScanStyle.button} type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            }
            {showTable && <VINTable />}
        </>

    )
}
