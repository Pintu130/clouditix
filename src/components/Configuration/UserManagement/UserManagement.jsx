import {
  Country,
  MfaEnabled,
  TimeZone,
  UserRole,
  UserStatus,
} from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import React, { useEffect, useState } from "react";

const UserManagement = () => {
  const [formData, setFormData] = useState({});

  const handleFromData = (data, target) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [target]: data,
    }));
  };

  const handleSaveModel = () => {
    const CreateNewData = {
      country: formData?.country?.value,
      department: formData?.department,
      email: formData?.email,
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      managerName: formData?.managerName,
      managerUserId: formData?.managerUserId,
      mfaEnabled: formData?.mfaEnabled?.value,
      password: formData?.password,
      phoneNumber: formData?.phoneNumber,
      timeZone: formData?.timeZone?.value,
      userName: formData?.userName,
      userRole: formData?.userRole?.value,
      userStatus: formData?.userStatus?.value,
    };

  };

  const handleCancleModel = () => {
    setFormData({});
  };

  return (
    <div className="h-full w-full px-8 py-4">
      {/* 1st div */}
      <div className=" w-full">
        <div className="flex w-full">
          <label className="border-b-2 border-[#4A4A4A] font-semibold text-lg text-[#4A4A4A] w-full">
            User Information
          </label>
        </div>
        <div className="flex w-full justify-center pt-4  ">
          <div className=" flex flex-col w-full ">
            <div className=" flex flex-col gap-1 w-full ">
              <div className="lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={false}
                    isIcon={true}
                    label="First Name"
                    placeholder="data_entry"
                    name="firstName"
                    value={formData?.firstName}
                    onChange={(e) =>
                      handleFromData(e.target.value, "firstName")
                    }
                  />
                </div>
              </div>

              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={false}
                    isIcon={true}
                    label="Last Name"
                    placeholder="user_id"
                    name="lastName"
                    value={formData?.lastName}
                    onChange={(e) => handleFromData(e.target.value, "lastName")}
                  />
                </div>
              </div>
              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={false}
                    isIcon={true}
                    label="Email"
                    placeholder="data_entry_user_id@test.com"
                    name="email"
                    value={formData?.email}
                    onChange={(e) => handleFromData(e.target.value, "email")}
                  />
                </div>
              </div>
              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={true}
                    isRequired={false}
                    isIcon={true}
                    label="Phone Number"
                    placeholder="9897876798"
                    name="phoneNumber"
                    value={formData?.phoneNumber}
                    onChange={(e) =>
                      handleFromData(e.target.value, "phoneNumber")
                    }
                  />
                </div>
              </div>
              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={false}
                    isIcon={true}
                    label="Department"
                    placeholder="IT"
                    name="department"
                    value={formData?.department}
                    onChange={(e) =>
                      handleFromData(e.target.value, "department")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col w-full ">
            <div className=" flex flex-col gap-1 w-full  ">
              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <h1 className="text-gray-G40">Country</h1>

                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                      placeholder="Enter Column Name"
                      options={Country}
                      target="country"
                      creatableSelect={true}
                      selectedType={formData?.country}
                      handleSelectChange={handleFromData}
                    />
                  </div>
                </div>
              </div>

              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <h1 className="text-gray-G40">Time Zone</h1>

                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                      placeholder="Enter Column Name"
                      options={TimeZone}
                      target="timeZone"
                      creatableSelect={true}
                      selectedType={formData?.timeZone}
                      handleSelectChange={handleFromData}
                    />
                  </div>
                </div>
              </div>
              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={false}
                    isIcon={true}
                    label="Manager Name"
                    placeholder="test_manager_name"
                    name="managerName"
                    value={formData?.managerName}
                    onChange={(e) =>
                      handleFromData(e.target.value, "managerName")
                    }
                  />
                </div>
              </div>
              <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={false}
                    isIcon={true}
                    label="Manager User Id"
                    placeholder="test_manager_id"
                    name="managerUserId"
                    value={formData?.managerUserId}
                    onChange={(e) =>
                      handleFromData(e.target.value, "managerUserId")
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-col">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className=" h-10 w-[232px] border rounded-md border-gray-G30 p-1 "
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label>End Date</label>
                  <input
                    type="date"
                    className=" h-10 w-[232px] border rounded-md border-gray-G30 p-1 "
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-full mt-8 gap-4">
            <label className="border-b-2 border-[#4A4A4A] font-semibold text-lg text-[#4A4A4A] w-[60%]">
              Login Settings
            </label>
            <div className=" flex flex-col w-full ">
              <div className=" flex flex-col gap-1 w-full  ">
                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <CustomInput
                      isNUmber={false}
                      isRequired={false}
                      isIcon={true}
                      label="User Name"
                      placeholder="data_entry"
                      name="userName"
                      value={formData?.userName}
                      onChange={(e) =>
                        handleFromData(e.target.value, "userName")
                      }
                    />
                  </div>
                </div>

                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <CustomInput
                      isNUmber={false}
                      isRequired={false}
                      isIcon={true}
                      label="Password"
                      placeholder="**********"
                      name="password"
                      value={formData?.password}
                      onChange={(e) =>
                        handleFromData(e.target.value, "password")
                      }
                    />
                  </div>
                </div>
                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <h1 className="text-gray-G40">User Status</h1>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                      <SingleSelectDropDown
                        placeholder="Enter Column Name"
                        options={UserStatus}
                        target="userStatus"
                        creatableSelect={true}
                        selectedType={formData?.userStatus}
                        handleSelectChange={handleFromData}
                      />
                    </div>
                  </div>
                </div>
                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <h1 className="text-gray-G40">MFA Enabled</h1>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                      <SingleSelectDropDown
                        placeholder="Enter Column Name"
                        options={MfaEnabled}
                        target="mfaEnabled"
                        creatableSelect={true}
                        selectedType={formData?.mfaEnabled}
                        handleSelectChange={handleFromData}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 gap-4">
            <label className="border-b-2 border-[#4A4A4A] font-semibold text-lg text-[#4A4A4A] w-[60%]">
              User Role
            </label>
            <div className=" flex flex-col w-full ">
              <div className=" flex flex-col gap-1 w-full  ">
                <div className=" lg:max-w-[70%] 2xl:max-w-[60%] custom-select">
                  <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <h1 className="text-gray-G40">User Role</h1>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                      <SingleSelectDropDown
                        placeholder="Enter Column Name"
                        options={UserRole}
                        target="userRole"
                        creatableSelect={true}
                        selectedType={formData?.userRole}
                        handleSelectChange={handleFromData}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-10">
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Save"
            handleClick={() => handleSaveModel()}
            isDisable={false}
            isLoading={false}
          />
        </div>
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Cancel"
            handleClick={() => handleCancleModel()}
            isDisable={false}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
