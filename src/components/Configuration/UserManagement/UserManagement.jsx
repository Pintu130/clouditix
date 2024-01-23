import {
  fetchGetUsersUpdate,
} from "@/assets/data";
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
      password: formData?.password,
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      emailId: formData?.emailId,
      phoneNumber: formData?.phoneNumber,
      isActive: formData?.isActive,
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

    return updateData;

  };

  return (
    <div className="h-full max-h-screen w-full px-8 py-4 flex flex-col gap-2 overflow-auto">
      <div className="border rounded-xl p-5 border-[#a6a6a6] flex flex-col items-center justify-center gap-5 w-full ">



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
