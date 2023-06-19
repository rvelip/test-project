import React from 'react';
import Image from 'next/image';
import plusIcon from '../../../../../../public/images/icons/plusIcon.svg';

export default function SettingsTable(props: any) {
    const { tableHeaders, tableData } = props;

    return (
        <>
            <table className="min-w-full text-left text-sm font-toyota">
                <thead className="bg-white text-sm">
                    <tr>
                        {tableHeaders.map((tableHeaders: { id: string; label: string }) => {
                            return (
                                <th
                                    key={tableHeaders.id}
                                    scope="col"
                                    className="px-3.5 py-4 text-grey4 font-normal"
                                >
                                    {tableHeaders.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className='group'>
                    {tableData.map((row: any, index: number) => {
                        return (
                            <tr key={row.line} className={index % 2 !== 0 ? "bg-grey3" : "bg-white"}>
                                {Object.keys(row).map((item) => {
                                    return (
                                        <>
                                                <td
                                                    key={row.line}
                                                    className={`whitespace-nowrap px-3.5 py-4`}
                                                >
                                                    {row[item]}
                                                </td>
                                            

                                        </>

                                    )
                                })}
                                {/* <td className="whitespace-nowrap px-3.5 py-4">
                                    <Image src={circleCrossIcon} alt='circle cross icon' />
                                </td>
                                <td className="whitespace-nowrap px-3.5 py-4">{tableData.line}</td>
                                <td className="whitespace-nowrap px-3.5 py-4">{tableData.name}</td>
                                <td className="whitespace-nowrap px-3.5 py-4">
                                    <SingleSelect
                                        name=''
                                        placeHolder="Select Shop"
                                        options={singleSelectOptions}
                                        onChange={(value: any) => console.log("value", value)}
                                        handleFieldChange={handleShopChange}
                                    />
                                </td>
                                <td className="whitespace-nowrap px-3.5 py-4">{tableData.stall_count}</td>
                                <td className="whitespace-nowrap px-3.5 py-4 text-center"><input type='radio' /></td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='flex justify-start items-center bg-grey2 px-3.5 py-4 text-white'>
                <Image src={plusIcon} alt="add icon" className='mr-8' />
                <div>Add Production Line</div>
            </div>
            <div className='flex justify-start items-center px-3.5 py-4 text-sm'>
                <div className='mr-2'>Total Stall/Pitch Count</div>
                <input type='text' className='rounded border border-black text-center w-16 h-10' value='71' disabled />
            </div>
        </>
    )
}
