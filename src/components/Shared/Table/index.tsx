import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function Table(props: any) {
    const [headers, setHeaders] = useState<any>();
    const { tableData, isStallStatusData, isStaffingData } = props;
    useEffect(() => {
        setHeaders(Object.keys(tableData[0]));
    }, []);

    const renderHeaders = () => {
        if (headers) {
            return headers.map((header: any) => {
                return <th key={header} scope="col" className={isStallStatusData ? "pr-3.5 py-4 text-grey4 font-normal" : "px-3.5 py-4 text-grey4 font-normal"}>{header}</th>
            });
        }
    };
    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-toyota">
                                <thead
                                    className="bg-white text-sm">
                                    <tr>
                                        {renderHeaders()}
                                    </tr>
                                </thead>
                                <tbody className='group'>
                                    {isStallStatusData ?
                                        (
                                            <>
                                                {tableData && tableData.map((data: any, index: any) => {
                                                    return (
                                                        <tr
                                                            key={data.Asset}
                                                        >
                                                            <td className="whitespace-nowrap pr-3.5 py-4">
                                                                {data['Asset']}
                                                                <div className='mt-2'>
                                                                    {data['Time Elapsed'] < data['Ex. Install Time'] ?
                                                                        (
                                                                            <>
                                                                                <Image
                                                                                    src='/images/green.png'
                                                                                    width={80}
                                                                                    height={50}
                                                                                    alt="stall_status"
                                                                                />
                                                                            </>
                                                                        ) :
                                                                        <>
                                                                            <Image
                                                                                src='/images/red.png'
                                                                                width={80}
                                                                                height={50}
                                                                                alt="stall_status"
                                                                            />
                                                                        </>

                                                                    }
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data['Start Time']}</td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data['Time Elapsed']}</td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data['Ex. Install Time']}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </>
                                        ) : isStaffingData ?
                                            (
                                                <>
                                                    {tableData && tableData.map((data: any, index: any) => {
                                                        return (
                                                            <tr
                                                                key={data.Asset}
                                                                className={index % 2 === 0 ? "bg-grey3" : "bg-white"}
                                                            >
                                                                <td className="whitespace-nowrap px-3.5 py-4">{data['Shop']}</td>
                                                                <td className="whitespace-nowrap px-3.5 py-4">{data['Stall']}</td>
                                                                <td className="whitespace-nowrap px-3.5 py-4">{data['Planned Vehicles']}</td>
                                                                <td className="whitespace-nowrap px-3.5 py-4">{data['Planned Hours']}</td>
                                                                <td className="whitespace-nowrap px-3.5 py-4">
                                                                    <button type="button" className="text-black rounded-full font-medium px-1.5 py-.5 text-center inline-flex items-center mr-2 border-2 border-solid border-black">
                                                                    <b>-</b>
                                                                    </button>
                                                                   <span className='text-black bg-white rounded font-medium px-4 py-1 text-center inline-flex items-center mx-1 border border-solid border-black'> {data['Team Member Count']}</span>
                                                                    <button type="button" className="text-black rounded-full font-medium px-1.5 py-.5 text-center inline-flex items-center ml-2 border-2 border-solid border-black">
                                                                       <b>+</b>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </>
                                            ) :
                                            <>
                                                {tableData && tableData.map((data: any, index: any) => {
                                                    return (
                                                        <tr
                                                            key={data.Asset}
                                                            className={index % 2 === 0 ? "bg-grey3" : "bg-white"}
                                                        >
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data.Asset}</td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data.Planned}</td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data.Complete}</td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data.Remaining}</td>
                                                            <td className="whitespace-nowrap px-3.5 py-4">{data.Progress}</td>
                                                        </tr>
                                                    )
                                                })}

                                            </>

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
