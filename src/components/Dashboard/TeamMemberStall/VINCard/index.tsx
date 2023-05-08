import React from 'react'
import Image from 'next/image';
import { vinStyle } from './vin_card_tailwind';

export default function VINCard() {
    return (
        <div className={vinStyle.mainwrapper}>
            <div className={vinStyle.innerWrapper}>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.vehicle}>
                            Previous Vehicle
                        </div>
                        <div className={vinStyle.complete}>
                            COMPLETE
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <span className={vinStyle.semiBold}>VIN #################</span><br />
                        <span className={vinStyle.fontSize}>2023 Lexus ES 350 Silver</span>
                    </div>

                </div>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.marginFontSize}>
                            Drop Off Location
                        </div>
                        <div className={vinStyle.labelStaging}>
                            SHOP B STAGING
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <Image
                            src='/images/vin.png'
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
            <div className={vinStyle.innerWrapper}>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.vehicle}>
                            Next Vehicle
                        </div>
                        <div className={vinStyle.labelPending}>
                            PENDING SCAN
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <span className={vinStyle.semiBold}>VIN #################</span><br />
                        <span className={vinStyle.fontSize}>2023 Lexus ES 350 Silver</span>
                        <div className={vinStyle.plannedTime}>
                            <div> Planned Start Time</div> <div>7:05 AM</div>
                        </div>
                        <div className={vinStyle.plannedTime}>
                            <div>  Estimated Install Time</div> <div>45 min</div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className={vinStyle.displayFlex}>
                        <div className={vinStyle.marginFontSize}>
                            Pick Up Location
                        </div>
                        <div className={vinStyle.labelStaging}>
                            SHOP A STAGING
                        </div>
                    </div>
                    <div className={vinStyle.marginTop}>
                        <Image
                            src='/images/vin.png'
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
