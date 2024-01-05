import {
  Country,
  MfaEnabled,
  TimeZone,
  UserRole,
  UserStatus,
} from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import React from "react";
import UserManagementTable from "./UserManagementTable";
import UserInformation from "./UserInformation";

const UserManagement = () => {

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
          <UserManagementTable />
        </div>

      </div>

      <div className="border rounded-xl p-5 border-[#a6a6a6] flex flex-col items-center justify-center gap-5 w-full " >
        <UserInformation />
      </div>

    </div>
  );
};

export default UserManagement;
