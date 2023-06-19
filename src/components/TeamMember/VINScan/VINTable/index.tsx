import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { vinStyle } from './vin_table_tailwind';
import Modal from '@/components/Shared/Modal';
import SingleSelect from '@/components/Shared/SingleSelect/SingleSelect';
import Tooltip from '@/components/Shared/Tooltip/Tooltip';
import { changeVINStatus, scanNextVINIdAction, setElementAction } from '@/store/actions/vinAction';
import toast from 'react-hot-toast';
import { CONSTANTS } from '@/constants/constants';

export default function VINTable() {
    const dispatch: any = useDispatch();

    const shop = useSelector((state: any) => state.profileState.shop);
    const vin_table_data = useSelector((state: any) => state.vinTableState.vin_table_data);
    const scanNextVINId = useSelector((state: any) => state.vinState.scanNextVINId);

    const [formData, setFormData] = useState<any>([]);
    // const [payload, setPayload] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isSubmitBtnDisabled, setSubmitBtnDisabled] = useState(false);

    const options = [
        { value: "End of shift/End of day", label: "End of shift/End of day" },
        { value: "No Part/Contents", label: "No Part/Contents" },
        { value: "Part Damage/Quality Issue", label: "Part Damage/Quality Issue" },
        { value: "Vehicle Damage/Quality Issue", label: "Vehicle Damage/Quality Issue" },
        { value: "System Issue", label: "System Issue" },
        { value: "Team Member Not Trained", label: "Team Member Not Trained" },
        { value: "Re-Routed", label: "Re-Routed" },
        { value: "Missing Tool", label: "Missing Tool" },
        { value: "PPO Conflict", label: "PPO Conflict" },
    ];

    const handleInstalledClick = (e: any, btnKey: string) => {
        if (formData && formData.length && formData.filter((item: any) => item.code === e.target.name)[0]) {
            const index = formData.findIndex((item: any) => item.code === e.target.name);
            let arr = [...formData];

            //check which btn is clicked. If "Installed" is clicked then change the installed status to either pending(p), installed(i) or not installed(n) 
            if (btnKey === "Installed") {
                //toggle grey to green and vice versa
                if (arr[index].installed === "p") {
                    arr[index] = Object.assign({}, arr[index], { installed: "i", reason: "" });
                } else if (arr[index].installed === "n") {
                    arr[index] = Object.assign({}, arr[index], { installed: "i", reason: "" });
                } else { //toggle green to grey and vice versa
                    arr[index] = Object.assign({}, arr[index], { installed: "p", reason: "" });
                }
            } else { //check which btn is clicked. If "Not Installed" is clicked then make the button red
                //toggle red to grey and vice versa 
                if (arr[index].installed === 'p') {
                    arr[index] = Object.assign({}, arr[index], { installed: "n" });
                } else if (arr[index].installed === 'i') {
                    arr[index] = Object.assign({}, arr[index], { installed: "n" });
                }
                else {
                    arr[index] = Object.assign({}, arr[index], { installed: "p", reason: "" });
                }
            }
            setFormData([...arr]);
        }
    }

    const handleReasonChange = (name: string, selectedValue: string) => {
        const index = formData.findIndex((item: any) => item.code === name);
        let arr = [...formData];
        if (index > -1) {
            arr[index].reason = selectedValue;
        }
        setFormData([...arr]);
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

        //Land on Dashboard Default View
        dispatch(setElementAction('scan_input'));

        // ******* start removed this code *********
        // ****** POST call will return the status of the prev car as status: "copmleted"
        //  Below is simply mocking for DEMO
        // Mark the last vehicle as completed
        dispatch(changeVINStatus(scanNextVINId, 'completed_on_time', 'COMPLETE - ON TIME'));
        //********  end - remove this code********/


        //empty the scanned number 
        dispatch(scanNextVINIdAction(""));

        //Toast Success Message
        toast.success(CONSTANTS.VEHICLE_SUCCESS_MESSAGE, {
            position: 'top-right',
            duration: 4000,
            icon: '😃',
            style: {
                borderRadius: '4px',
                backgroundColor: '#22A63E',
                color: 'white',
                fontWeight: '600'
            }
        });

    };

    const handleModalClose = () => {
        setShowModal(false);
    }

    //load the redux state into an easily mutable state for processing
    useEffect(() => {
        setFormData(vin_table_data);
    }, [vin_table_data])

    //listen to changes in form data and disable the submit btn if selection from current line is pending
    useEffect(() => {
        // let index = formData.findIndex((item: any) => (item.installed === 'i' || item.installed === 'n'));
        let filteredFormDataByShopLB = formData.filter((item: any) => item.shop === shop);

        let isPendingIndex = filteredFormDataByShopLB.findIndex((item: any) => (item.installed === 'p'));
        
        let filterArrWithNoReason = formData.filter((item: any) => (item.installed === 'n' && !item.reason));
        
        if ((isPendingIndex > -1) || filterArrWithNoReason.length) {
            setSubmitBtnDisabled(true);
        } else {
            setSubmitBtnDisabled(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    return (
        <>
            {/* MODAL FOR CONFIRMATION */}
            {showModal && (
                <Modal
                    handleModalClose={handleModalClose}
                    handleConfirm={handleFormSubmit}
                    modal_header={CONSTANTS.TABLE_SUBMIT_MODAL_HEADER}
                    modal_content={CONSTANTS.TABLE_SUBMIT_MODAL_CONTENT}
                    isConfirm
                    confirmBtnName="Confirm"
                    isCancel
                    cancelBtnName="Cancel"
                >
                    <>
                        {(formData.findIndex((item: any) => item.installed === 'i') > -1) && (
                            <div className='mb-4'>
                                <div className='text-xl mb-2'>Installed</div>
                                {formData.filter((data: any) => data.installed === 'i').map((item: any) => {
                                    return (
                                        <div key={item.code} className='text-sm border-b border-grey2 mb-2'>
                                            <div><span className='font-semibold'>Line </span>{item.shop}  <span className='font-semibold'>Code </span>{item.code}</div>
                                            <div><span className='font-semibold'>Description:</span> {item.accessory_description}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                        {(formData.findIndex((item: any) => item.installed === 'n') > -1) && (
                            <div className='mb-4'>
                                <div className='text-xl mb-2'>Not Installed</div>
                                {formData.filter((data: any) => data.installed === 'n').map((item: any) => {
                                    return (
                                        <div key={item.code} className='text-sm border-b border-grey2 mb-2'>
                                            <div><span className='font-semibold'>Line </span>{item.shop}  <span className='font-semibold'>Code </span>{item.code}</div>
                                            <div><span className='font-semibold'>Description:</span> {item.accessory_description}</div>
                                            <div><span className='font-semibold'>Reason:</span> {item.reason}</div>   
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </>
                </Modal>
            )}
            {/* Render Accessories Table */}
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-toyota">
                                <thead
                                    className="bg-white text-sm">
                                    <tr>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">{CONSTANTS.LINE}</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4">
                                            <div className="group relative w-max">
                                                <span className='font-normal'>{CONSTANTS.CODE}</span>
                                                <button className="bg-blue1 text-white active:bg-blue1 font-bold  ml-3 px-2 py-px rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                                >
                                                    i
                                                </button>
                                                <span className="absolute -bottom-72 left-1 w-max rounded text-black bg-white py-4 pl-4 pr-14 invisible shadow transition-opacity group-hover:visible font-normal"> Click the links below to access<br /> each accessory&apos;s Standard Work Sheet. </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">{CONSTANTS.ACCESSORY_DESCRIPTION}</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">{CONSTANTS.ACCESSORY_PART_NUMBER}</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">{CONSTANTS.EXP_TIME}</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Status</th>
                                        <th scope="col" className="px-3.5 py-4 text-grey4 font-normal">Status</th>
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
                                                <td
                                                    className="whitespace-nowrap px-3.5 py-4 opacity-100"
                                                    onClick={(e) => handleInstalledClick(e, "Installed")}
                                                >
                                                    <button
                                                        name={data.code}
                                                        className={`${vinStyle.button} 
                                                        ${(formData && formData.length && (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'i'))
                                                                ? vinStyle.buttonColorAccessoryInstalled
                                                                : vinStyle.buttonColorInstalled}`}
                                                    >
                                                        <span>&#10003;&nbsp;&nbsp;</span>{CONSTANTS.INSTALLED}
                                                    </button>
                                                </td>
                                                <td
                                                    className="whitespace-nowrap px-3.5 py-4 opacity-100"
                                                    onClick={(e) => handleInstalledClick(e, "Not Installed")}
                                                >
                                                    <button
                                                        name={data.code}
                                                        className={`${vinStyle.button} 
                                                    ${(formData && formData.length && (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'n'))
                                                                ? vinStyle.buttonColorNotInstalled
                                                                : vinStyle.buttonColorInstalled}`}

                                                    >
                                                        <span>&#x2716;&nbsp;&nbsp;</span>{CONSTANTS.NOT_INSTALLED}
                                                    </button>
                                                </td>
                                                <td className="whitespace-nowrap py-4">
                                                    {
                                                        (formData && formData.length &&
                                                            (formData.filter((item: any) => item.code === data.code)[0]["installed"] === 'n')
                                                        )
                                                            ? <SingleSelect
                                                                name={data.code}
                                                                placeHolder="Select options"
                                                                options={options}
                                                                onChange={(value: any) => console.log("value", value)}
                                                                handleFieldChange={handleReasonChange}
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
                                    disabled={isSubmitBtnDisabled}
                                    className={`${vinStyle.button} ${vinStyle.btnMargin} ${isSubmitBtnDisabled ? vinStyle.buttonColorDisabled : vinStyle.buttonColorBlue} `}
                                    onClick={() => setShowModal(true)}
                                >
                                    {CONSTANTS.SUBMIT}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}
