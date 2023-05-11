import React from 'react'
import { vinStyle } from './vin_table_tailwind'
import MultiSelect from '@/components/Shared/MultiSelect/MultiSelect'

export default function VINTable() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-toyota">
                            <thead
                                className="bg-white text-sm">
                                <tr>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">Shop</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">

                                        <div className="group relative w-max">
                                            <span >Code</span>
                                            <button className="bg-blue1 text-white active:bg-blue1 font-bold  ml-3 px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            >
                                                i
                                            </button>
                                            <span className="pointer-events-none absolute -bottom-20 left-6 w-max rounded text-black bg-white py-4 pl-4 pr-14 opacity-0 shadow transition-opacity group-hover:opacity-100"> Click the links below to access<br /> each accessory's Standard Work Sheet. </span>
                                        </div>
                                    </th>

                                    <th scope="col" className="px-3.5 py-4 text-grey4">Accessory Description</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">Accessory Part Number(s)</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">Install Time</th>
                                    <th scope="col" className="px-3.5 py-4 text-black font-bold"><span>&#10003;&nbsp;&nbsp;</span>All Installed</th>
                                    <th scope="col" className="px-3.5 py-4 text-black font-bold"><span>&#x2716;&nbsp;&nbsp;</span>All Not Installed</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">
                                        <div className="group relative w-max">
                                            <span >Reason</span>
                                            <button className="bg-blue1 text-white active:bg-blue1 font-bold  ml-3 px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            >
                                                i
                                            </button>
                                            <div className="pointer-events-none absolute -bottom-96 -left-72 w-max rounded bg-white py-4 pl-4 pr-10 opacity-0 shadow transition-opacity group-hover:opacity-100">
                                                <span className=' text-black font-semibold'>Not Installed Reason Descriptions </span> <br /> <br />
                                                <span className=' text-black font-semibold'>Missing Part/Contents</span> <br /><br />
                                                Parts kit contents are missing from the<br /> packaging (bracket, hardware, stickers, etc.)
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Re-routed</span>  <br /><br />
                                                Team Member is asked to only do a portion<br /> of the available PPOs assigned to the line<br /> because it was taken from another line.
                                                <br /><br />
                                                <span className=' text-black font-semibold'>PPO Conflict</span>  <br /><br />
                                                Vehicle is routed from a different line but a<br /> PPO cannot be completed at this time.
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="bg-grey3">
                                    <td className="whitespace-nowrap px-3.5 py-4">A1</td>
                                    <td className="whitespace-nowrap px-3.5 py-4 text-blue1">A1</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">17” TRD PRO WHEEL BLACK W/TIRE</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">@#####-#####-##, #####-#####-##,
                                        #####-#####-##</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">10 min</td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#10003;&nbsp;&nbsp;</span>Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#x2716;&nbsp;&nbsp;</span>Not Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><MultiSelect /></td>
                                </tr>
                                <tr
                                    className="bg-white">
                                    <td className="whitespace-nowrap px-3.5 py-4 font-medium">A1</td>
                                    <td className="whitespace-nowrap px-3.5 py-4 text-blue1">LJ</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">HIGH PERFORMANCE LED FOG LIGHT</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">#####-#####-##</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">10 min</td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#10003;&nbsp;&nbsp;</span>Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#x2716;&nbsp;&nbsp;</span>Not Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><MultiSelect /></td>
                                </tr>
                                <tr
                                    className="bg-grey3">
                                    <td className="whitespace-nowrap px-3.5 py-4 font-medium">A1</td>
                                    <td className="whitespace-nowrap px-3.5 py-4 text-blue1">S2</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">TRD PRO SUSPENSION</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">#####-#####-##</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">10 min</td>
                                    <td className="whitespace-nowrap px-3.5 py-4 text-white"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#10003;&nbsp;&nbsp;</span>Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#x2716;&nbsp;&nbsp;</span>Not Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><MultiSelect /></td>
                                </tr>
                                <tr
                                    className="bg-white">
                                    <td className="whitespace-nowrap px-3.5 py-4 font-medium">A1</td>
                                    <td className="whitespace-nowrap px-3.5 py-4 text-blue1">WK</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">BLACK PVD WHEEL LOCKS</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">#####-#####-##</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">5 min</td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#10003;&nbsp;&nbsp;</span>Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#x2716;&nbsp;&nbsp;</span>Not Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><MultiSelect /></td>
                                </tr>
                                <tr
                                    className="bg-grey3">
                                    <td className="whitespace-nowrap px-3.5 py-4 font-medium">A1</td>
                                    <td className="whitespace-nowrap px-3.5 py-4 text-blue1">6M</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">TRD PRO ALIGNMENT (NO PARTS)</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">#####-#####-##</td>
                                    <td className="whitespace-nowrap px-3.5 py-4">5 min</td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#10003;&nbsp;&nbsp;</span>Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><button className={`${vinStyle.button} ${vinStyle.buttonColorInstalled}`}><span>&#x2716;&nbsp;&nbsp;</span>Not Installed</button></td>
                                    <td className="whitespace-nowrap px-3.5 py-4"><MultiSelect /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={vinStyle.buttonWidth}>
                            <button
                                type="submit"
                                className={`${vinStyle.button} ${vinStyle.btnMargin} ${vinStyle.buttonColorBlack}`}
                            >
                                Clear Inputs
                            </button>
                            <button
                                type="submit"
                                className={`${vinStyle.button} ${vinStyle.btnMargin} ${vinStyle.buttonColorBlue} `}
                            >
                                Submit
                            </button>
                        </div>



                    </div>
                </div>
            </div>


        </div>


    )
}
