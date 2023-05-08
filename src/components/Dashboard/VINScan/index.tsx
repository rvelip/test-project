import React from 'react'
import { vinScanStyle } from './vin_scan_tailwind'

export default function VINScan() {
    return (
        <>
            <div className={vinScanStyle.currentVehicle}>
                Current Vehicle Installation
            </div>
            <div >
                <form className={vinScanStyle.form}>
                    <label className={vinScanStyle.label}>Scan Next VIN</label>
                    <input className={vinScanStyle.input} type="text" placeholder="###########" />
                    <button className={vinScanStyle.button} type='submit'>Submit</button>
                </form>
            </div>
        </>

    )
}
