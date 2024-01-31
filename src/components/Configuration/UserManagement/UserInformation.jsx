import { fetchGetRoles, fetchGetUsersCreate, fetchGetUsersUpdate, statussearch } from '@/assets/data';
import CustomButton from '@/components/common/CustomButton';
import CustomInput from '@/components/common/CustomInput'
import SingleSelectDropDown from '@/components/common/SingleSelectDropDown';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const intialValue = {
    roleName: "",
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    userName: '',
    password: '',
    isActive: false
}

const UserInformation = ({ editData, updateEdit, removeEditData }) => {
    const [formData, setFormData] = useState(intialValue);
    const [edit, setEdit] = useState(editData);
    const [userroledata, setUserroleData] = useState([])

    const handleFromData = (data, target) => {

        if (target === "phoneNumber") {
            if (/[A-Za-z]/.test(data)) {
                console.log("Invalid phone number format. Please do not include alphabetical characters.");
                return;
            }
        } else if (target === "userName" || target === "password") {
            if (data.length > 20) {
                toast.error(`${target} should not exceed 20 characters.`, {
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
                return;
            }
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [target]: data,
        }));
    };

    useEffect(() => {

        setEdit(editData)
    }, [editData])


    useEffect(() => {

        if (Object.keys(edit).length > 0) {
            setFormData({
                ...edit,
                roleName: { label: edit?.roleName, value: edit?.roleName }
            })
        }


    }, [edit])

    
    const isFieldValid = (field, value) => {
        switch (field) {
            case 'firstName':
            case 'lastName':
            case 'emailId':
            case 'phoneNumber':
            case 'userName':
            case 'password':
            case 'roleName':
                return value !== '';

            case 'isActive':
                return true; // Assume isActive can be left empty

            default:
                return true; // Default to true for other fields
        }
    };

    const isFormValid = () => {
        const invalidFields = Object.entries(formData)
            .filter(([field, value]) => !isFieldValid(field, value))
            .map(([field]) => field);

        if (invalidFields.length > 0) {
            const errorMessage = `Please fill in all the fields: ${invalidFields.join(', ')}.`;
            toast.error(errorMessage, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                toastId: 'toastId'
            });
            return false;
        }

        return true;
    };


    const handleSave = async () => {


        if (!isFormValid()) {
            return;
        }


        if (Object.keys(edit).length > 0) {

            const res = await updateEdit(formData)

            if (res?.isSuccess) {
                setFormData(intialValue)
                setEdit({})
            }

        } else {
            const updateformdata = {
                userId: 0,
                userName: formData?.userName,
                password: formData?.password,
                firstName: formData?.firstName,
                lastName: formData?.lastName,
                emailId: formData?.emailId,
                phoneNumber: formData?.phoneNumber,
                isActive: formData?.isActive,
                userRoles: [
                    {
                        userRoleId: 0,
                        roleName: formData?.roleName?.label
                    },
                ],
                createdBy: "Sudharsan",
            }

            const updateData = await fetchGetUsersCreate(updateformdata)
            if (updateData?.isSuccess) {
                setFormData(intialValue)
                setEdit({})
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
                toast.error(updateData?.errorMessage, {
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

        }

    }

    const handleCancel = () => {
        removeEditData()
        setFormData(intialValue)
        setEdit({})
    }

    useEffect(() => {
        ; (async () => {
            const data = await fetchGetRoles();

            if (data.length > 0) {
                const modifyData = data?.map((item) => ({
                    label: item?.roleName, value: item?.roleName
                }))
                setUserroleData(modifyData);
            }

        })()
    }, [])


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
                                    name="emailId"
                                    value={formData?.emailId}
                                    onChange={(e) => handleFromData(e.target.value, "emailId")}
                                />
                            </div>
                        </div>

                        <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                            <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                <CustomInput
                                    isNUmber={false}
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
                                        name="userName"
                                        value={formData?.userName}
                                        onChange={(e) =>
                                            handleFromData(e.target.value, "userName")
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
                                        name="password"
                                        value={formData?.password}
                                        onChange={(e) => handleFromData(e.target.value, "password")}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="  w-full ">

                            <div className="lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
                                <div className='flex items-center w-full gap-2 custom-select max-w-[300px] lg:max-w-[100%] '>
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
                                    target="roleName"
                                    creatableSelect={true}
                                    selectedType={formData?.roleName}
                                    handleSelectChange={handleFromData}
                                    menuPlacement="top"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-10">
                            <div className="w-full max-w-[150px]">
                                <CustomButton
                                    name="Save"
                                    handleClick={() => handleSave()}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                            <div className="w-full max-w-[150px]">
                                <CustomButton
                                    name="Cancel"
                                    handleClick={() => handleCancel()}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                        </div>
                    </div>
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

export default UserInformation;