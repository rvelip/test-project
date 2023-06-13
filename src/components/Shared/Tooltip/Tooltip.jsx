import React from 'react'
import { CONSTANTS } from '@/constants/constants';
export default function Tooltip() {
    return (
        <div className="group relative w-max">
            <div>
                <span className='font-normal'>{CONSTANTS.NOT_INSTALLED_REASON}</span>
                <button className="bg-blue1 text-white active:bg-blue1 font-bold  ml-3 px-2 py-px rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                    i
                </button>
            </div>
            <div className="z-1000 absolute -bottom-86 -left-200 w-max rounded bg-white py-4 pl-4 pr-10 invisible shadow transition-opacity group-hover:visible overflow-y-scroll h-[22.5rem]">
                <span className=' text-black font-semibold'>Not Installed Reason Descriptions </span> <br /> <br />
                <span className=' text-black font-semibold'>No Part/Contents</span> <br /><br />
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
                <br /> <br />
                <span className=' text-black font-semibold'>End of shift/End of day</span> <br /><br />
                <span className='font-normal'>Team member has installs remaining at the end<br /> of their shift/day.</span>
            </div>
        </div>
    )
}
