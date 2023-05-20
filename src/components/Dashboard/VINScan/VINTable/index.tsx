import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { vinStyle } from './vin_table_tailwind';
import Modal from '@/components/Shared/Modal';
import SingleSelect from '@/components/Shared/SingleSelect/SingleSelect';
import Tooltip from '@/components/Shared/Tooltip/Tooltip';
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';
import toast from 'react-hot-toast';

export default function VINTable() {
    const dispatch: any = useDispatch();
    const vin_table_data = useSelector((state: any) => state.vinTableState.vin_table_data);
    const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);
    const [formData, setFormData] = useState([]);
    // const [payload, setPayload] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const singleSelect_data = [
        { id: 1, label: "Missing Parts" },
        { id: 2, label: "Part Damage/Quality Issue" },
        { id: 3, label: "Vehicle Damage/Quality Issue" },
        { id: 4, label: "System Issue" },
        { id: 5, label: "Team Member Not Trained" },
        { id: 6, label: "Re-Routed" },
        { id: 7, label: "Missing Tool" },
        { id: 8, label: "PPO Conflict" },
    ];

    const options = [
        { value: "green", label: "Missing Parts" },
        { value: "blue", label: "Part Damage/Quality Issue" },
        { value: "red", label: "Vehicle Damage/Quality Issue" },
        { value: "yellow", label: "System Issue" },
        { value: "orange", label: "Team Member Not Trained" },
        { value: "pink", label: "Re-Routed" },
        { value: "purple", label: "Missing Tool" },
        { value: "grey", label: "PPO Conflict" }
    ];

    const handleInstalledClick = (e: any, btnKey: string) => {
        console.log(e.target.name);
        if (formData && formData.length && formData.filter((item: any) => item.code === e.target.name)[0]) {
            const index = formData.findIndex((item: any) => item.code === e.target.name);
            let arr = [...formData];
            if (btnKey === "Installed") {
                arr[index] = Object.assign({}, arr[index], { installed: "i" });
            } else {
                arr[index] = Object.assign({}, arr[index], { installed: "n" });
            }
            setFormData([...arr]);
        }
    }

    const handleFormSubmit = () => {
        //Prepare the payload for POST
        // -------------------------
        // payload.push(users);
        // payload.push(startTime);
        // payload.push(endTime);
        // payload.push(installed/notInstalled);

        //
        // dispatch()

        //POST API Call here 
        // -------------------------
        // alert("Calling API ....");

        //Close Modal After API Call is done
        setShowModal(false);

        //Toast Success Message
        toast.success('Vehicle accessory installations was successfully completed', {
            position: 'top-right',
            duration:4000,
            // icon:'',
            style:{
                borderRadius:'4px',
                backgroundColor:'#22A63E',
                color:'white',
                fontWeight:'600'
            }
        });
        //Land on Dashboard Default View
        dispatch(setElementAction('scan_input'));

        // ******* start removed this code *********
        // ****** POST call will return the status of the prev car as status: "copmleted"
        //  Below is simply mocking for DEMO
        // Mark the last vehicle as completed
        dispatch(changeVINStatus(scanNextVINId, 'completed', 'COMPLETE'));
        //********  end - remove this code********/


        //empty the scanned number 
        dispatch(scanNextVINIdAction(""));

    };

    const handleModalClose = () => {
        setShowModal(false);
    }

    //load the redux state into an easily mutable state for processing
    useEffect(() => {
        setFormData(vin_table_data);
    }, [vin_table_data])

    return (
        <>
            {/* MODAL FOR CONFIRMATION */}
            {showModal && <Modal handleModalClose={handleModalClose} handleFormSubmit={handleFormSubmit} />}
            {/* Render Accessories Table */}
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
                                                <span className="absolute -bottom-72 left-1 w-max rounded text-black bg-white py-4 pl-4 pr-14 invisible shadow transition-opacity group-hover:visible font-normal"> Click the links below to access<br /> each accessory&apos;s Standard Work Sheet. </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Accessory Description</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Accessory Part Number(s)</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Exp. Time</th>
                                        <th scope="col" className="px-3.5 py-4 text-black font-bold"></th>
                                        <th scope="col" className="px-3.5 py-4 text-black font-bold"></th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4">
                                            <Tooltip />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='group'>
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
                                                <td className="whitespace-nowrap px-3.5 py-4 opacity-100">
                                                    <button
                                                        name={data.code}
                                                        className={`${vinStyle.button} 
                                                        ${(formData && formData.length && (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'i'))
                                                                ? vinStyle.buttonColorAccessoryInstalled
                                                                : vinStyle.buttonColorInstalled}`}
                                                        onClick={(e) => handleInstalledClick(e, "Installed")}
                                                    >
                                                        <span>&#10003;&nbsp;&nbsp;</span>Installed
                                                    </button>
                                                </td>
                                                <td className="whitespace-nowrap px-3.5 py-4 opacity-100">
                                                    <button
                                                        name={data.code}
                                                        className={`${vinStyle.button} 
                                                    ${(formData && formData.length && (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'n'))
                                                                ? vinStyle.buttonColorNotInstalled
                                                                : vinStyle.buttonColorInstalled}`}
                                                        onClick={(e) => handleInstalledClick(e, "Not Installed")}
                                                    >
                                                        <span>&#x2716;&nbsp;&nbsp;</span>Not Installed
                                                    </button>
                                                </td>
                                                <td className="whitespace-nowrap py-4">
                                                    {
                                                        (formData && formData.length &&
                                                            (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'n')
                                                        )
                                                            // ? <SingleSelect singleselect_data={singleSelect_data} width='w-64' bgColor='bg-grey3' placeholderText="Select options" />
                                                            ? <SingleSelect
                                                                placeHolder="Select options"
                                                                options={options}
                                                                onChange={(value: any) => console.log(value)}
                                                            />
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
                                    type="button"
                                    className={`${vinStyle.button} ${vinStyle.btnMargin} ${vinStyle.buttonColorBlue} `}
                                    onClick={() => setShowModal(true)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}
