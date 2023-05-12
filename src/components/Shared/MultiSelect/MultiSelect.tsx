import React, { useState } from 'react'

export default function MultiSelect(props: any) {
    const { row_id, multiselect_data } = props;
    const [expanded, setExpanded] = useState(false);

    const showCheckboxes = () => {
        let checkboxes = document.getElementById("checkboxes_" + row_id);
        if (!expanded) {
            if (checkboxes)
                checkboxes.style.display = "block";
            setExpanded(!expanded);
        } else {
            if (checkboxes)
                checkboxes.style.display = "none";
            setExpanded(!expanded);
        }
    };
    return (
        <div className="w-64">
            <div className="relative px-4 py-2 bg-grey3" onClick={showCheckboxes}>
                <select id={row_id} className='w-full h-10 bg-grey3'>
                    <option>Select options</option>
                </select>
                <div className="absolute top-0 left-0 right-0 bottom-0"></div>
            </div>
            <div id={`checkboxes_${row_id}`} className='absolute z-999 hidden bg-white drop-shadow-sm h-[22.5rem] overflow-y-scroll rounded'>
                {multiselect_data.map((data: any) => {
                    return (
                        <label key={data.id} className='block p-4 hover:bg-black hover:text-white active:bg-black'>
                            <input type="checkbox" id={data.id} className='mr-2' />
                            {data.label}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}
