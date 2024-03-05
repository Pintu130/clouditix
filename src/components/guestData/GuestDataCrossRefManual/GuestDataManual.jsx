import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";

import CustomButton from '@/components/common/CustomButton'

import CrossRefTable from '../GuestDataCrossRef/CrossRefTable'
import CustomInput from '@/components/common/CustomInput';
import CrossRefManualTable from './CrossRefManualTable';

const GuestDataManual = () => {
    const [guestList, setGuestList] = useState([''])

    const handleGuestID = (index, value) => {

        const upDateguestValue = [...guestList]
        upDateguestValue[index] = value;
        
        setGuestList(upDateguestValue)
    }

    const handleGuestIDPlus = () => [
        setGuestList([...guestList , ''])
    ]

    return (
        <div className='p-5 flex flex-col justify-between gap-5 w-full'>
            <div className='flex items-center  w-full '>
                <div className='w-40 break-words'>Cross Reference</div>
                <div className='flex items-center justify-end gap-5 w-full '>

                    {
                        guestList?.map((guest, index) => {
                            return (
                                <div className="w-full max-w-[200px]" key={index}>
                                    <CustomInput
                                        isNUmber={false}
                                        isRequired={true}
                                        isIcon={true}
                                        label=""
                                        placeholder="Guest ID"
                                        name={`guestid_${index}`}
                                        value={guest}
                                        onChange={(e) => handleGuestID(index, e.target.value)}
                                    />
                                </div>
                            )
                        })
                    }



                    <div className="w-full max-w-[50px]" >
                        <CustomButton
                            name=""
                            handleClick={() => handleGuestIDPlus()}
                            isDisable={false}
                            isLoading={false}
                            icon={<FiPlus className='w-8 h-8' />}
                        />
                    </div>

                    <div className="w-full max-w-[150px]" >
                        <CustomButton
                            name="Merge"
                            handleClick={() => { }}
                            isDisable={false}
                            isLoading={false}
                        />
                    </div>
                </div>
            </div>
            <div className='h-full w-full'>
                <CrossRefManualTable />
            </div>
        </div>
    )
}

export default GuestDataManual