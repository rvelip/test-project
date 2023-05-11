import React, { useState } from 'react'
import { vinScanStyle } from './vin_scan_tailwind'
import VINTable from './VINTable'

export default function VINScan() {
    const [showTable, setShowTable] = useState(false);
    const [scanNumber, setScanNumber] = useState("");

    const handleVINScanChange = (e: any) => {
        setScanNumber(e.target.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
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
                        <input className={vinScanStyle.input} type="text" placeholder="###########" onChange={(e) => handleVINScanChange(e)}/>
                        <button className={vinScanStyle.button} type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            }
            {showTable && <VINTable />}
        </>

    )
}
