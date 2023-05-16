import React from 'react';

export default function Modal(props: any) {
    const {handleModalClose, handleFormSubmit} = props;

    return (
        <div id="modal" className="fixed z-1000 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="flex justify-between p-6 font-normal text-2xl">
                        <div>Do you want to submit vehicle accessory installations?</div>
                        <div onClick={handleModalClose}>X</div>
                    </div>
                    <div className="px-6 pb-6">
                        <p>You have initialized submission of accessory installations for the vehicle at this stall.
                            Click <i>Cancel</i> to return to Current Vehicle Installation. Use <i>Confirm</i> to
                            finalize submission.
                        </p>
                    </div>
                    <div className="border-t-2 p-6 text-right">
                        <button
                            type="button"
                            className="border-2 border-black py-2 px-4 rounded hover:bg-grey mr-2"
                            onClick={handleModalClose}
                        >
                            <i className="fas fa-times"></i>
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="border-2 border-blue-500 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                            onClick={handleFormSubmit}
                        >
                            <i className="fas fa-plus"></i>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
