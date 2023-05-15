import React, { useEffect, useState } from 'react';
import MultiSelect from '@/components/Shared/MultiSelect/MultiSelect';

export default function TeamMemberStallInfo() {
  const [workday_id_data, setWorkdayIdData] = useState([
    { id: 1, label: "Pritam", isChecked: true },
    { id: 2, label: "Ram", isChecked: false },
    { id: 3, label: "Sahil", isChecked: false },
    { id: 31, label: "Ashim", isChecked: false },
    { id: 32, label: "Ankit", isChecked: false },
    { id: 33, label: "Wilshan", isChecked: false },
    { id: 34, label: "Hannah", isChecked: false },
    { id: 4, label: "Cara", isChecked: false },
    { id: 5, label: "Ming", isChecked: false},
    { id: 6, label: "Tony", isChecked: false },
    { id: 7, label: "Pawan", isChecked: false},
    { id: 8, label: "Pritam 2", isChecked: false},
    { id: 9, label: "Pritam 3", isChecked: false },
  ]);
  const [searchText, setSearchText ] = useState("");
  const [filteredData, setFilteredData] = useState(workday_id_data);

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
    //make an API call here!
    //--------------------------
    console.log("fetching the searched User ...");
  };

  const handleChecked = (e:any) => {
    workday_id_data.filter(item => item.id === parseInt(e.target.name))[0].isChecked = !workday_id_data.filter(item => item.id === parseInt(e.target.name))[0].isChecked;
    setWorkdayIdData([...workday_id_data]);
  };

  useEffect(() => {
    setFilteredData([...workday_id_data.filter((item: any) => item.label.includes(searchText))]);
  }, [searchText, workday_id_data]);

  return (
    <div className='grid grid-cols-3 gap-8 my-6 mx-10 font-toyota'>
      <div className='col-span-1 w-full h-16'>
        <div className='text-grey4 mb-1'>Team Member(s) at Stall</div>
        <MultiSelect 
          id="username_dropdown"
          multiselect_data={filteredData}
          width='w-auto' 
          showSearchBar 
          bgColor='bg-white'
          searchText={searchText}
          handleSearch={(e: any) => handleSearch(e)}
          handleChecked={(e: any) => handleChecked(e)}
        />
      </div>
      <div className='col-span-2 grid grid-cols-9'>
        <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
          <div className='text-grey4'>
            Stall Progress - Current Shift
          </div>
          <div className='grid grid-cols-3 gap-2 font-semibold'>
            <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
              0 % | 0
            </div>
            <div className='col-span-1 text-base'>Planned: 25</div>
          </div>
        </div>
        <div className="inline-block h-20 min-h-[1em] w-0.5 self-stretch bg-grey opacity-100 dark:opacity-50 m-auto"></div>
        <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
          <div className='text-grey4'>
            Shop Progress - Current Shift
          </div>
          <div className='grid grid-cols-3 gap-2 font-semibold'>
            <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
              0 % | 0
            </div>
            <div className='col-span-1 text-base'>Planned: 140</div>
          </div>
        </div>
      </div>

    </div>
  )
}
