import React from 'react';

export default function Modal(props: any) {
    const { children, handleModalClose, handleConfirm, modal_header, modal_content, isConfirm, confirmBtnName, isCancel, cancelBtnName } = props;

    return (
        <div id="modal" className="fixed z-1000 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="flex justify-between p-6 font-normal text-2xl">
                        <div>{modal_header}</div>
                        <div onClick={handleModalClose} className='cursor-default hover:font-medium'>X</div>
                    </div>
                    {/* Render children */}
                    {children && (
                        <div className='px-6 pb-4'>
                            {children}
                        </div>
                    )}
                    {/* Content */}
                    {modal_content && (
                        <div className="px-6 pb-6">
                            <p>
                                {modal_content}
                            </p>
                        </div>
                    )}
                    <div className="border-t-2 p-6 text-right">
                        {isCancel && (
                            <button
                                type="button"
                                className="border-2 border-black py-2 px-4 rounded hover:bg-grey mr-2"
                                onClick={handleModalClose}
                            >
                                {cancelBtnName}
                            </button>
                        )}
                        {isConfirm && (
                            <button
                                type="button"
                                className="border-2 border-blue-500 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                                onClick={handleConfirm}
                            >
                                {confirmBtnName}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
