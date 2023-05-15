import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { vinStyle } from './vin_table_tailwind';
import MultiSelect from '@/components/Shared/MultiSelect/MultiSelect';
import { VinTableAction } from '@/store/actions/vinTableAction';

export default function VINTable() {
    const dispatch: any = useDispatch();
    const vin_table_data = useSelector((state: any) => state.vinTableState.vin_table_data);
    const [formData, setFormData] = useState([]);
    const [payload, setPayload] = useState([]);

    const multiSelect_data = [
        { id: 1, label: "Missing Parts" },
        { id: 2, label: "Part Damage/Quality Issue" },
        { id: 3, label: "Vehicle Damage/Quality Issue" },
        { id: 4, label: "System Issue" },
        { id: 5, label: "Team Member Not Trained" },
        { id: 6, label: "Re-Routed" },
        { id: 7, label: "Missing Tool" },
        { id: 8, label: "PPO Conflict" },
    ];
    const handleInstalledClick = (e: any) => {
        console.log(e.target.name);
        if(formData && formData.length && formData.filter((item: any) => item.code === e.target.name)[0]) {
            formData.filter((item: any) => item.code === e.target.name)[0]["installed"] = "i";
        }
        setFormData([...formData]);

    }
    const handleNotInstalledClick = (e: any) => {
        console.log(e.target.name);
        if(formData && formData.length && formData.filter((item: any) => item.code === e.target.name)[0]) {
            formData.filter((item: any) => item.code === e.target.name)[0]["installed"] = "n";
        }
        setFormData([...formData]);

    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        //Open the Read only Modal
        // ------------------------

        //Prepare the payload for POST
        // -------------------------
        // payload.push(users);
        // payload.push(startTime);
        // payload.push(endTime);
        // payload.push(installed/notInstalled);

        //API Call here 
        // -------------------------
    };

    useEffect(() => {
        dispatch(VinTableAction());
    }, [dispatch]);

    useEffect(() => {
        setFormData([...vin_table_data]);
    }, [vin_table_data])

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-toyota">
                            <thead
                                className="bg-white text-sm">
                                <tr>
                                    <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Shop</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">

                                        <div className="group relative w-max">
                                            <span className='font-normal'>Code</span>
                                            <button className="bg-blue1 text-white active:bg-blue1 font-bold  ml-3 px-2 py-px rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            >
                                                i
                                            </button>
                                            <span className="pointer-events-none absolute -bottom-20 left-6 w-max rounded text-black bg-white py-4 pl-4 pr-14 opacity-0 shadow transition-opacity group-hover:opacity-100 font-normal"> Click the links below to access<br /> each accessory&apos;s Standard Work Sheet. </span>
                                        </div>
                                    </th>

                                    <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Accessory Description</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Accessory Part Number(s)</th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Exp. Time</th>
                                    <th scope="col" className="px-3.5 py-4 text-black font-bold"></th>
                                    <th scope="col" className="px-3.5 py-4 text-black font-bold"></th>
                                    <th scope="col" className="px-3.5 py-4 text-grey4">
                                        <div className="group relative w-max">
                                            <span className='font-normal'>Not Installed Reason</span>
                                            <button className="bg-blue1 text-white active:bg-blue1 font-bold  ml-3 px-2 py-px rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            >
                                                i
                                            </button>
                                            <div className="z-1000 pointer-events-none absolute -bottom-96 -left-72 w-max rounded bg-white py-4 pl-4 pr-10 opacity-0 shadow transition-opacity group-hover:opacity-100 overflow-y-scroll block h-[22.5rem]">
                                                <span className=' text-black font-semibold'>Not Installed Reason Descriptions </span> <br /> <br />
                                                <span className=' text-black font-semibold'>Missing Part/Contents</span> <br /><br />
                                                <span className='font-normal'>Part(s) or part(s) kit contents are missing.</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Part Damage/Quality Issue</span> <br /><br />
                                                <span className='font-normal'>Damage to part(s).</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Vehicle Damage/Quality Issue</span> <br /><br />
                                                <span className='font-normal'>Damage to vehicle.</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Systems Issue</span> <br /><br />
                                                <span className='font-normal'>Issue with data or systems, such as<br /> accessory part number not listed on PTAG.</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Team Member Not Trained</span> <br /><br />
                                                <span className='font-normal'>One or more team member(s) not trained for<br /> required installation.</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Re-routed</span> <br /><br />
                                                <span className='font-normal'>Team Member is asked to only do a portion<br /> of the available PPOs assigned to the line<br /> because it was taken from another line.</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>Missing Tool</span> <br /><br />
                                                <span className='font-normal'>Tool necessary for installation is missing.</span>
                                                <br /> <br />
                                                <span className=' text-black font-semibold'>PPO Conflict</span> <br /><br />
                                                <span className='font-normal'>Vehicle is routed from a different line but a<br /> PPO cannot be completed at this time.</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {vin_table_data && vin_table_data.map((data: any, index: any) => {
                                    return (
                                        <tr
                                            key={data.code}
                                            className={index % 2 === 0 ? "bg-grey3" : "bg-white"}
                                        >
                                            <td className="whitespace-nowrap px-3.5 py-4">{data.shop}</td>
                                            <td className="whitespace-nowrap px-3.5 py-4 text-blue1">{data.code}</td>
                                            <td className="whitespace-nowrap px-3.5 py-4">{data.accessory_description}</td>
                                            <td className="whitespace-nowrap px-3.5 py-4">{data.accessory_part_number}</td>
                                            <td className="whitespace-nowrap px-3.5 py-4">{data.exp_time}</td>
                                            <td className="whitespace-nowrap px-3.5 py-4">
                                                <button
                                                    name={data.code}
                                                    className={`${vinStyle.button} 
                                                        ${(formData && formData.length && (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'i'))
                                                            ? vinStyle.buttonColorAccessoryInstalled
                                                            : vinStyle.buttonColorInstalled}`}
                                                    onClick={(e) => handleInstalledClick(e)}
                                                >

                                                    <span>&#10003;&nbsp;&nbsp;</span>Installed
                                                </button>
                                            </td>
                                            <td className="whitespace-nowrap px-3.5 py-4">
                                                <button
                                                    name={data.code}
                                                    className={`${vinStyle.button} 
                                                    ${(formData && formData.length && (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'n'))
                                                            ? vinStyle.buttonColorNotInstalled
                                                            : vinStyle.buttonColorInstalled}`}
                                                    onClick={(e) => handleNotInstalledClick(e)}
                                                >
                                                    <span>&#x2716;&nbsp;&nbsp;</span>Not Installed
                                                </button>
                                            </td>
                                            <td className="whitespace-nowrap py-4">
                                                {
                                                    (formData && formData.length &&
                                                        (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'n')
                                                    ) 
                                                    ? <MultiSelect id={data.code} multiselect_data={multiSelect_data} width='w-64' bgColor='bg-grey3' placeholderText="Select options" />
                                                    : null
                                                }
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className={vinStyle.buttonWidth}>
                            <button
                                type="submit"
                                className={`${vinStyle.button} ${vinStyle.btnMargin} ${vinStyle.buttonColorBlue} `}
                                onSubmit={(e) => handleFormSubmit(e)}
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
