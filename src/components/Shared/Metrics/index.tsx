import React from 'react';
import Image from 'next/image';
import greenTick from '../../../../public/images/icons/greenTick.svg';

export default function Metrics(props: any) {
    const { metricsData } = props;
    return (
        <div className='grid grid-cols-5 mt-2'>
            {metricsData && metricsData.map((data: any, index: any) => {
                return (
                    <div
                        key={data.id}
                        className={index % 2 === 0 ? 'col-span-1 bg-grey3 mr-2  px-2.5 py-2' : 'col-span-1 bg-white mr-2  px-2.5 py-2'}
                    >
                        <div className='flex items-center justify-between text-xs'>
                            <div className='text-grey4'>{data.label}</div>
                            {/* Temporary addition of green tick */}
                            {data.label === 'Progress' && (
                                <Image src={greenTick} alt="" />
                            )}
                        </div>
                        <div className='font-bold text-2xl'>{data.value}</div>
                    </div>
                )
            })}
        </div>
    )
}
