import { statussearch, userroledata } from '@/assets/data';
import CustomButton from '@/components/common/CustomButton';
import CustomInput from '@/components/common/CustomInput'
import SingleSelectDropDown from '@/components/common/SingleSelectDropDown';
import React, { useState } from 'react'

const UserInformation = () => {
    const [formData, setFormData] = useState({});

    const handleFromData = (data, target) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [target]: data,
        }));
    };


    return (
        <div className='w-full flex flex-col items-center justify-center gap-8'>
            <div className='w-full flex flex-col items-center justify-center gap-5'>
                <div className='border-b-2 pb-3 w-full'>
                    <span className='text-xl font-semibold leading-6 '>user Information</span>
                </div>
                <div className='w-full flex items-center justify-between mx-auto gap-10'>
                    <div className=" flex flex-col items-start gap-2 w-full ">
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

                    </div>
                    <div className=" flex flex-col  items-center gap-2 w-full ">

                        <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                            <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                <CustomInput
                                    isNUmber={false}
                                    isRequired={false}
                                    isIcon={true}
                                    label="Email"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={formData?.email}
                                    onChange={(e) => handleFromData(e.target.value, "email")}
                                />
                            </div>
                        </div>

                        <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                            <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                <CustomInput
                                    isNUmber={true}
                                    isRequired={false}
                                    isIcon={true}
                                    label="Phone Number"
                                    placeholder="Enter Phone Number"
                                    name="phoneNumber"
                                    value={formData?.phoneNumber}
                                    onChange={(e) =>
                                        handleFromData(e.target.value, "phoneNumber")
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-full gap-8'>
                <div className='w-[70%] flex flex-col gap-2' >
                    <div className='border-b-2 pb-3 w-full'>
                        <span className='text-xl font-semibold leading-6 '>Login Settings</span>
                    </div>
                    <div className='w-full flex items-start justify-between mx-auto gap-10'>
                        <div className=" flex flex-col items-start gap-2 w-full ">
                            <div className="lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[80%] 2xl:min-w-[75%] custom-select">
                                <div className="w-full  max-w-[300px] lg:max-w-[100%]">
                                    <CustomInput
                                        isNUmber={false}
                                        isRequired={false}
                                        isIcon={true}
                                        label="User Name"
                                        placeholder="Enter User Name"
                                        name="firstName"
                                        value={formData?.firstName}
                                        onChange={(e) =>
                                            handleFromData(e.target.value, "firstName")
                                        }
                                    />
                                </div>
                            </div>

                            <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[80%] 2xl:min-w-[75%] custom-select">
                                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                    <CustomInput
                                        isNUmber={false}
                                        isRequired={false}
                                        isIcon={true}
                                        label="Password"
                                        placeholder="Enter Password"
                                        name="lastName"
                                        value={formData?.password}
                                        onChange={(e) => handleFromData(e.target.value, "lastName")}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="  w-full ">

                            <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[80%] 2xl:min-w-[75%] custom-select">
                                <div className="w-full max-w-[300px] lg:max-w-[100%] flex flex-col  gap-1">

                                    <label className="text-[#5A5A5A] text-base font-normal">is Active</label>

                                    <SingleSelectDropDown
                                        placeholder="Select Status"
                                        options={statussearch}
                                        target="isactive"
                                        creatableSelect={true}
                                        selectedType={formData?.isactive}
                                        handleSelectChange={handleFromData}
                                        menuPlacement="top"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='w-[30%] flex flex-col gap-2'>
                    <div className='border-b-2 pb-3 w-full'>
                        <span className='text-xl font-semibold leading-6 '>User Role</span>
                    </div>
                    <div className='w-full flex flex-col items-center justify-between mx-auto gap-10'>
                        <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[80%] 2xl:min-w-[75%] custom-select">
                            <div className="w-full max-w-[300px] lg:max-w-[100%] flex flex-col  gap-1">

                                <label className="text-[#5A5A5A] text-base font-normal">User Role</label>

                                <SingleSelectDropDown
                                    placeholder="Select User Role"
                                    options={userroledata}
                                    target="userrole"
                                    creatableSelect={true}
                                    selectedType={formData?.userrole}
                                    handleSelectChange={handleFromData}
                                    menuPlacement="top"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-10">
                            <div className="w-full max-w-[150px]">
                                <CustomButton
                                    name="Save"
                                    handleClick={() => { }}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                            <div className="w-full max-w-[150px]">
                                <CustomButton
                                    name="Cancel"
                                    handleClick={() => { }}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformation