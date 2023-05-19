import React from 'react'

export default function Toast({ appearance, children }) {
    return (
        <div className={appearance === 'success' ? 'bg-green1 font-semibold text-white p-3 rounded' : ''} >
            {children}
        </div>
    )
}
