import { createRoleScreens, fetchGetRoles, fetchRuleCreate, fetchUpdateRole } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const RulesCreateAndEdit = ({
  isNewRuleModal,
  onClose,
  editData,
  updateRule,
  removeEditData,
  setRowData,
}) => {
  const tableRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [roleScreen, setRoleScreen] = useState('');
  const AccessLevel_roles = ["No Access", "View", "Edit"];

  const handleOnChange = (e, data, allData) => {
    const { name, value } = e.target;
    // console.log(name + ": " + value);
    const finelData = allData?.map((item) => {
      if (item?.roleScreenId === data?.roleScreenId) {
        return {
          ...item,
          [name]: value,
        };
      } else {
        return item;
      }
    });
    setRoleScreen(finelData);
  };

  const [columnDefs] = useState([
    {
      field: "screenName",
      headerName: "Screen Name",
      minWidth: 430, maxWidth: 500
    },
    {
      field: "accessLevel",
      headerName: "accessLevel",
      minWidth: 233,
      cellRenderer: (params) => {
        const data = params.data;
        const allData = params.api.rowModel.rowsToDisplay?.map(
          (row) => row?.data
        );
        return (
          <select
            className={`w-full max-w-[300px] lg:max-w-[100%]`}
            name="accessLevel"
            value={data?.["accessLevel"]}
            onChange={(e) => handleOnChange(e, data, allData)}
          >
            {AccessLevel_roles?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        );
      },
    },
  ]);

  const handleFromData = (data, target) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [target]: data,
    }));
  };

  useEffect(() => {
    if (Object.values(editData).length > 0) {
      setFormData(editData);
      setRoleScreen(editData?.roleScreens);
    } else {
      setRoleScreen(createRoleScreens);
      setFormData({})
    }
  }, [editData]);

  const handleUpdateRule = async () => {
    const {
      roleId = 0,
      roleName = "",
      description = "",
      isActive = false,
      createdBy = "",
      modifiedBy = "",
    } = formData;
    const bodyData = {
      roleId,
      roleName,
      description,
      isActive: isActive,
      createdBy,
      modifiedBy,
      roleScreens: roleScreen?.map((data) => {
        const { roleScreenId = 0, screenName = "", accessLevel = "" } = data;
        return {
          roleScreenId,
          screenName,
          accessLevel,
        };
      }),
    };
    fetchUpdateRole(bodyData)
      .then(async (res) => {
        if (res?.isSuccess) {
          toast.success("Update Rule", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            toastId: "toastId",
          });
          onClose();
          const Data = await fetchGetRoles();
          setRowData(Data);
        } else {
          toast.error("Somthing went wrong!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            toastId: "toastId",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleCreateRule = async () => {
    const {
      roleId = 0,
      roleName = "",
      description = "",
      isActive = true,
      createdBy = "",
      modifiedBy = "",
    } = formData;

    const roleScreensData = roleScreen?.map((data) => {
      const {
        roleScreenId = 0,
        screenName = "",
        accessLevel = "No Access",
      } = data;
      return {
        roleScreenId,
        screenName,
        accessLevel,
      };
    });

    const bodyData = {
      roleId,
      roleName,
      description,
      isActive,
      createdBy,
      modifiedBy,
      roleScreens: roleScreensData,
    };

    try {
      const response = await fetchRuleCreate(bodyData);
      if (response.isSuccess) {
        toast.success("Create New Rule", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "toastId",
        });
        onClose();
        const Data = await fetchGetRoles();
        setRowData(Data);
      } else {
        // Handle error case if needed
        toast.error("Failed to create rule");
      }
    } catch (error) {
      console.error("Error creating rule:", error);
      // Handle error case if needed
      toast.error("An error occurred while creating rule");
    }
  };

  const handleCancle = () => {
    onClose();
    setFormData({});
    removeEditData();
  };

  const defaultColDef = {
    flex: 1,
    filter: true,
    headerComponentParams: { placeholder: 'Enter Member ID' },
    resizable: true,
    suppressMovable: true,
    cellClass: "uppercase",
    resizable: false,
    cellStyle: {
      color: '#3B475A',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      fontFamily: 'Assistant',
    },
    headerClass: "whitespace-normal",
    wrapText: true,
    autoHeight: true,
  }

  return (
    <div className="w-full  gap-5 h-full">
      <div className="flex justify-between border-b ">
        <button className="flex items-center flex-shrink-0 gap-6 px-6 ">
          <Image
            src="/images/logo.png"
            alt="HOM-logo"
            width="212"
            priority
            height="40"
            className="flex-shrink-0  h-auto pb-2"
          />
        </button>
      </div>
      <div className="text-xl font-semibold leading-6 px-7 my-2">
        {isNewRuleModal} Role & Permission
      </div>
      <div className=" flex pb-2 flex-col items-start px-7 w-full gap-3 ">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
            <div className="w-full  max-w-[300px] lg:max-w-[100%]">
              <CustomInput
                isNUmber={false}
                isIcon={true}
                label="Role Name"
                placeholder="Enter role name"
                name="roleName"
                value={formData?.roleName}
                onChange={(e) => handleFromData(e.target.value, "roleName")}
                isRequired={true}
              />
            </div>
          </div>

          <div className=" lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select">
            <div className="w-full max-w-[300px] lg:max-w-[100%]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label="Description"
                placeholder="Enter description"
                name="description"
                value={formData?.description}
                onChange={(e) => handleFromData(e.target.value, "description")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[70%] 2xl:max-w-[60%] lg:min-w-[60%] 2xl:min-w-[50%] custom-select mx-7 my-2">
        <div className="flex items-center w-full gap-2 custom-select ">
          <input
            type="checkbox"
            className="h-5 w-5 accent-blue-B40 border-[#4A4A4A] rounded-[4px] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none cursor-pointer"
            checked={formData?.isActive}
            onChange={(e) => handleFromData(e.target.checked, "isActive")}
          />
          <label
            htmlFor="speciality"
            className="text-[#5A5A5A] whitespace-nowrap w-full max-w-[145px] inline-block text-base font-normal"
          >
            Is Active
          </label>
        </div>
      </div>
      <div className="px-7">
        <div
          className="ag-theme-alpine overflow-auto "
          style={{ height: 320, width: "100% " }}
        >
          <AgGridReact
            ref={tableRef}
            rowData={roleScreen}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
      {/* BUTTON HERE--- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        <div className="w-full max-w-[100px] md:max-w-[150px]">
          {isNewRuleModal === "Create" ? (
            <CustomButton
              name="CREATE"
              handleClick={() => handleCreateRule()}
              isDisable={!(formData?.roleName?.length > 0 && formData?.description?.length > 0)}
              isLoading={false}
            />
          ) : (
            <CustomButton
              name="UPDATE"
              handleClick={() => handleUpdateRule()}
              isDisable={!(formData?.roleName?.length > 0 && formData?.description?.length > 0)}
              isLoading={false}
            />
          )}
        </div>
        <div className="w-full max-w-[100px] md:max-w-[150px]">
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
  );
};

export default RulesCreateAndEdit;
