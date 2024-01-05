import CustomButton from '@/components/common/CustomButton';
import CustomInput from '@/components/common/CustomInput'
import React, { useState } from 'react'

const RulesCreateAndEdit = ({ isNewRuleModal, onClose }) => {
    const [formData, setFormData] = useState({});

    const handleFromData = (data, target) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [target]: data,
        }));
    };
    return (
        <div className='w-full flex flex-col items-center justify-center gap-5'>
            <div className='w-full border-b-2 pb-3 px-5'>
                <span className='text-xl font-semibold leading-6 ' >{isNewRuleModal} Role</span>
            </div>
            <div className=" flex flex-col items-center gap-3 w-full ">
                <div className="lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                    <div className="w-full  max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={false}
                            isIcon={true}
                            label="First Name"
                            placeholder="Enter First Name"
                            name="firstName"
                            value={formData?.firstName}
                            onChange={(e) =>
                                handleFromData(e.target.value, "firstName")
                            }
                        />
                    </div>
                </div>

                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={false}
                            isIcon={true}
                            label="Last Name"
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={formData?.lastName}
                            onChange={(e) => handleFromData(e.target.value, "lastName")}
                        />
                    </div>
                </div>

                <div className="lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                    <div className='flex items-center w-full gap-2 custom-select '>
                        <input
                            type="checkbox"
                            className='h-5 w-5 accent-blue-B40 border-[#4A4A4A] rounded-[4px] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none cursor-pointer'
                            checked={formData?.isActive}
                            onChange={(e) => handleFromData(e.target.checked, 'isActive')}
                        />
                        <label htmlFor="speciality" className="text-[#5A5A5A] whitespace-nowrap w-full max-w-[145px] inline-block text-base font-normal">Is Active
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-10 mt-10'>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="SAVE"
                        handleClick={() => handleCreateRule()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="CANCEL"
                        handleClick={() => onClose()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default RulesCreateAndEdit