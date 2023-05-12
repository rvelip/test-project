import React, { useState } from 'react'

export default function MultiSelect(props:any) {
    const { code } = props;
    const [expanded, setExpanded] = useState(false);
    
    const showCheckboxes = () => {
        let checkboxes = document.getElementById("checkboxes_"+code);
        if (!expanded) {
            if(checkboxes) 
                checkboxes.style.display = "block";
            setExpanded(!expanded);
        } else {
            if(checkboxes)
                checkboxes.style.display = "none";
            setExpanded(!expanded);
        }
        console.log('clicked')
    };
    return (
        <div className="w-64">
            <div className="relative px-4 py-2 bg-grey3" onClick={showCheckboxes}>
                <select id={code} className='w-full h-10 bg-grey3'>
                    <option>Select options</option>
                </select>
                <div className="absolute top-0 left-0 right-0 bottom-0"></div>
            </div>
            <div id={`checkboxes_${code}`} className='absolute z-999 hidden bg-white drop-shadow-sm over'>
                <label className='block p-4 hover:bg-black hover:text-white active:bg-black'>
                    <input type="checkbox" id="1" className='bg-white b-2' />
                    Missing Parts
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="2" />
                    Part Damage/Quality Issue
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="3" />
                    Vehicle Damage/Quality Issue
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="4" />
                    System Issue
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="5" />
                    Team Member Not Trained
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="6" />
                    Re-Routed
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="7" />
                    Missing Tool
                </label>
                <label className='block p-4 hover:bg-black hover:text-white'>
                    <input type="checkbox" id="8" />
                    PPO Conflict
                </label>
            </div>
        </div>
    )
}
