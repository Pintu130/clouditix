import {
  Country,
  MfaEnabled,
  TimeZone,
  UserRole,
  UserStatus,
  fetchGetUsersUpdate,
} from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import React, { useState } from "react";
import UserManagementTable from "./UserManagementTable";
import UserInformation from "./UserInformation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [editData, setEditData] = useState({})
  const [updateUser, setUpdateUser] = useState({})


  const handleEditData = (data) => {
    setEditData(data);
  }

  const removeEditData = () => [
    setUpdateUser({})
  ]

  const updateEdit = async (formData) => {
    const updateformdata = {
      userId: formData?.userId,
      userName: formData?.userName,
      password: "123456789",
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      emailId: formData?.emailId,
      phoneNumber: formData?.phoneNumber,
      isActive: formData?.isActive?.value,
      userRoles: [
        {
          userRoleId: formData?.userRoleId,
          roleName: formData?.roleName?.label
        },
      ],
      createdBy: formData?.createdBy,
      modifiedBy: formData?.modifiedBy
    }


    const updateData = await fetchGetUsersUpdate(updateformdata)
    setUpdateUser(updateData)
    if (updateData?.isSuccess) {
      removeEditData()
      toast.success('Update User', {
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

  };

  return (
    <div className="h-full w-full px-8 py-4 flex flex-col gap-2">
      <div className="border rounded-xl p-5 border-[#a6a6a6] flex flex-col items-center justify-center gap-5 w-full ">

        <div className="flex items-center justify-between gap-10 w-full">
          <span className="text-xl font-semibold leading-5">Users</span>
          <div className="w-full max-w-[150px]">
            <CustomButton
              name="CREATE"
              handleClick={() => { }}
              isDisable={false}
              isLoading={false}
            />
          </div>
        </div>

        <div className="w-full h-full">
          <UserManagementTable handleEditData={handleEditData} updateUser={updateUser} />
        </div>

      </div>

      <div className="border rounded-xl p-5 border-[#a6a6a6] flex flex-col items-center justify-center gap-5 w-full " >
        <UserInformation editData={editData} updateEdit={updateEdit} removeEditData={removeEditData} />
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
  );
};

export default UserManagement;
