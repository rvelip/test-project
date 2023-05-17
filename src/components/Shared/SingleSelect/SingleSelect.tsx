import React from 'react'

export default function SingleSelect(props: any) {
    const { singleselect_data, width, bgColor, placeholderText } = props;
    return (
        <>
                <div className={`${width}`}>
                    <select className={`w-full h-10 ${bgColor}`}>
                    <option value='' selected disabled hidden>{placeholderText}</option>
                        {singleselect_data && singleselect_data.map((data: any) =>
                            <option className='' key={data.id}>{data.label}</option>
                        )}
                    </select>
                </div>
        </>
    )
}
