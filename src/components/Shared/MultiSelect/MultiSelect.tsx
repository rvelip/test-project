import React, { useState } from 'react'

export default function MultiSelect(props: any) {
    const { id, multiselect_data, width, showSearchBar, bgColor, placeholderText, searchText, handleSearch, handleChecked } = props;
    const [expanded, setExpanded] = useState(false);

    const showCheckboxes = () => {
        let checkboxes = document.getElementById("checkboxes_" + id);
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
        <div className={`${width}`}>
            <div className={`relative px-4 py-2 ${bgColor} rounded`} onClick={showCheckboxes}>
                <select id={id} className={`w-full h-10 ${bgColor} truncate`}>
                    <option>
                        {
                            placeholderText ? placeholderText 
                            : (
                                multiselect_data &&
                                multiselect_data.map((item: any) => {
                                    if (item.isChecked) {
                                        return `${item.label}, `
                                    }
                                })
                            )
                        }
                    </option>
                </select>
                <div className="absolute top-0 left-0 right-0 bottom-0"></div>
            </div>
            <div id={`checkboxes_${id}`} className={`${showSearchBar ? '' : 'absolute'} z-999 hidden bg-white drop-shadow-sm h-[22.5rem] overflow-y-scroll rounded`}>
                {showSearchBar &&
                    <input
                        type="search"
                        placeholder="Search..."
                        className='w-full p-4 rounded'
                        value={searchText}
                        onChange={handleSearch}
                    />
                }
                {multiselect_data && multiselect_data.map((data: any) => {
                    return (
                        <label key={data.id} className='block p-4 hover:bg-black hover:text-white active:bg-black'>
                            <input
                                type="checkbox"
                                name={data.id}
                                className='mr-2'
                                onChange={handleChecked}
                                checked={multiselect_data.filter((item: any) => item.id === data.id)[0].isChecked}
                            />
                            {data.label}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}
