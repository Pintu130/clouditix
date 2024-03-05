import {
  fetchGetUsers,
  fetchGetUsersUpdate,
} from "@/assets/data";
import React, { useState } from "react";
import UserManagementTable from "./UserManagementTable";
import UserInformation from "./UserInformation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";

const UserManagement = () => {
  const accLevel = useSelector((state) => state.roleSlice.acclevel)
  console.log("🚀 ~ UserManagement ~ accLevel:------------>>", accLevel)

  const [editData, setEditData] = useState({})
  const [updateUser, setUpdateUser] = useState({})
  const [searchDatas, setSearchDatas] = useState([]);
  const [rowData, setRowData] = useState([]);

  const handleEditData = (data) => {
    setEditData(data);
  }

  const removeEditData = () => [
    setUpdateUser({})
  ]
  const ViewallData = async () => {
    const Data = await fetchGetUsers();
    const transformedData = Data.map((user) => {
      // Extract userRoles from user
      const { userRoles, ...restUser } = user;

      // Map each userRole to a new object
      const rolesArray = userRoles.map((role) => ({
        ...restUser,
        ...role,
      }));

      return rolesArray;
    });
    // Flatten the array of arrays into a single array
    const flattenedData = [].concat(...transformedData);

    const sortedData = flattenedData.sort((a, b) => {
      return a.roleName.localeCompare(b.roleName);
    });

    const setActiveData = sortedData.sort((a, b) => {
      return b.isActive - a.isActive;
    });
    setRowData(setActiveData);
    setSearchDatas(setActiveData);
  }

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
      // ViewallData()
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
    <>
      {
        accLevel === 'No Access' ?
          <div className="flex justify-center items-center h-screen">
            <div className="text-2xl font-bold text-center">
              This page is not accessible.
            </div>
          </div>
          :
          <div className="h-full max-h-screen w-full px-8 py-4 flex flex-col gap-2 overflow-auto">
            <div className="border rounded-xl p-5 border-[#a6a6a6] flex flex-col items-center justify-center gap-5 w-full ">
              <div className="w-full h-full">
                <UserManagementTable accLevel={accLevel} handleEditData={handleEditData} updateUser={updateUser} setRowData={setRowData} rowData={rowData} ViewallData={ViewallData} />
              </div>
            </div>

            <div className="border rounded-xl p-5 border-[#a6a6a6] flex flex-col items-center justify-center gap-5 w-full " >
              <UserInformation accLevel={accLevel} editData={editData} updateEdit={updateEdit} removeEditData={removeEditData} ViewallData={ViewallData} setSearchDatas={setSearchDatas} searchDatas={searchDatas} />
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
      }
    </>

  );
};

export default UserManagement;
