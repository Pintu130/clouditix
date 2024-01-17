import { fetchRuleCreate, fetchUpdateRole } from '@/assets/data';
import CustomButton from '@/components/common/CustomButton';
import CustomInput from '@/components/common/CustomInput'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RulesCreateAndEdit = ({ isNewRuleModal, onClose, editData, updateRule, removeEditData }) => {
    const [formData, setFormData] = useState({});

    const handleFromData = (data, target) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [target]: data,
        }));
    };

    useEffect(() => {
        setFormData(editData)
    }, [editData])


    const handleCreateRule = async () => {

        if (Object.keys(editData).length > 0) {
           
            updateRule(formData)

        } else {
            const updatedData = {
                "roleId": 0,
                "roleName": formData?.roleName,
                "description": formData?.description,
                "isActive": formData?.isActive,
                "createdBy": formData?.createdBy,
                "roleScreens": [
                    {
                        "roleScreenId": 0,
                        "screenName": formData?.screenName,
                        "accessLevel": formData?.accessLevel
                    }
                ]
            }

            const updateData = await fetchRuleCreate(updatedData)
            if (updateData?.isSuccess) {

                toast.success('Create New User', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    toastId: "toastId"
                });
            } else {
                toast.error('error re try to create User', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    toastId: "toastId"
                });
            }

            setFormData({})
        }
    };

    const handleCancle = () => {
        onClose();
        setFormData({});
        removeEditData()
    };

    return (
        <div className='w-full flex flex-col items-center justify-center gap-5 pb-2'>
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
                            label="role Name"
                            placeholder="Enter First Name"
                            name="roleName"
                            value={formData?.roleName}
                            onChange={(e) =>
                                handleFromData(e.target.value, "roleName")
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
                            label="Description"
                            placeholder="Enter Last Name"
                            name="description"
                            value={formData?.description}
                            onChange={(e) => handleFromData(e.target.value, "description")}
                        />
                    </div>
                </div>

                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={false}
                            isIcon={true}
                            label="screen Name"
                            placeholder="Enter Last Name"
                            name="screenName"
                            value={formData?.screenName}
                            onChange={(e) => handleFromData(e.target.value, "screenName")}
                        />
                    </div>
                </div>

                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={false}
                            isIcon={true}
                            label="access Level"
                            placeholder="Enter Last Name"
                            name="accessLevel"
                            value={formData?.accessLevel}
                            onChange={(e) => handleFromData(e.target.value, "accessLevel")}
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
                        handleClick={() => handleCancle()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default RulesCreateAndEdit