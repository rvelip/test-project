import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelectDropdown from '@/components/Shared/MultiSelectDropdown';
import { CONSTANTS } from '@/constants/constants';
import Modal from '@/components/Shared/Modal';
import { removeUserAction, removeItemId } from '@/store/actions/usersAction';

export default function TeamMemberStallInfo() {
  const dispatch: any = useDispatch();

  const [showModal, setShowModal] = useState(false);
  
  const element = useSelector((state: any) => state.vinState.element);
  const removeId = useSelector((state: any) => state.usersState.removeId);

  const handleRemoveConfirmation = () => {
    dispatch(removeUserAction(removeId));
    dispatch(removeItemId(""))
    setShowModal(false);
  }

  return (
    <>
      {/* Show modal to confirm remove Workday Id */}
      {showModal && (
        <Modal 
          handleModalClose={() => {setShowModal(false); dispatch(removeItemId(""));}}
          handleConfirm={handleRemoveConfirmation}
          modal_header="Are you sure you want to remove this user?"
          modal_content="Please confirm that you would like to remove this user from the stall. Any other users will remain logged in."
          isConfirm
          confirmBtnName="Remove"
          isCancel
          cancelBtnName="Cancel"
        />
      )}
      <div className='grid grid-cols-3 gap-8 my-6 mx-10 font-toyota'>
        {/* User dropdown */}
        <div className='col-span-1 w-full h-16'>
          <div className='text-grey4 mb-1'>{CONSTANTS.TEAM_MEMBER_AT_STALL}</div>
          <MultiSelectDropdown
            isDisabled={element === 'vin_table'}
            setShowModal={setShowModal}
            isSearchable
            isMulti
            placeHolder="Select..."
          />
        </div>
        <div className='col-span-2 grid grid-cols-9'>
          <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
            <div className='text-grey4'>
              {CONSTANTS.STALL_PROGRESS_CURRENT_SHIFT}
            </div>
            <div className='grid grid-cols-3 gap-2 font-semibold'>
              <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
                0 % | 0
              </div>
              <div className='col-span-1 text-base'>{CONSTANTS.PLANNED}: 25</div>
            </div>
          </div>
          <div className="inline-block h-20 min-h-[1em] w-0.5 self-stretch bg-grey opacity-100 dark:opacity-50 m-auto"></div>
          <div className='col-span-4 grid grid-rows-2 gap-0 bg-white w-full p-4'>
            <div className='text-grey4'>
              {CONSTANTS.SHOP_PROGRESS_CURRENT_SHIFT}
            </div>
            <div className='grid grid-cols-3 gap-2 font-semibold'>
              <div className='col-span-2 pl-2.5 border-2 border-l-4 border-l-blue-500'>
                0 % | 0
              </div>
              <div className='col-span-1 text-base'>{CONSTANTS.PLANNED}: 140</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
