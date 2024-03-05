import { AddressTypeData, StateData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// const initialValue = {
//   addressId: 0,
//   goldenId: 0,
//   stateCode: "",
//   addressType: "",
//   addressLine1: "",
//   addressLine2: "",
//   addressLine3: "",
//   city: "",
//   country: "",
//   zipCode: "",
//   isPrimary: true,
//   startDate: "2024-01-27T08:09:20.794Z",
//   endDate: "2024-01-27T08:09:20.794Z",
//   isActive: true,
//   createById: "data_entry_user_id",
//   lastUpdatedById: "data_entry_user_id",
//   isDeleted: false,
//   source: "res",
//   isActiveFlag: true,
// };

const AddressModel = ({
  onClose,
  updateRowData,
  rowData,
  updatedRowData,
  allData,
  initialValue,
  setFormData,
  formData
}) => {
  // const [formData, setFormData] = useState(initialValue);
  // console.log("🚀 ~ updateRowData:-----------------000", updateRowData)
  // console.log("formData-------->>>", formData);

  const handleFromData = (data, target) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [target]: data,
    }));
  };

  /*   const generateDynamicId = () => {
      return Math.floor(Math.random() * 1000) + 1;
    }; */

  const handleAddressSave = () => {
    if (Object.keys(updateRowData).length > 0) {
      const updatedata = rowData?.map((item) =>
        item.addressId === updateRowData.addressId ? formData : item
      );

      // console.log(updatedata);
      updatedRowData(updatedata);

      onClose();
      setFormData(initialValue);
    } else {
      if (Object.keys(formData)?.length > 0) {
        const createNewData = [
          ...rowData,
          rowData?.length > 0
            ? { ...formData, isPrimary: false, addressId: new Date().getTime() }
            : formData,
        ];
        updatedRowData(createNewData);

        onClose();
        setFormData(initialValue);
      }
    }
  };

  useEffect(() => {
    if (updateRowData && Object.keys(updateRowData).length > 0) {
      const convertData = {
        addressId: updateRowData?.addressId,
        goldenId: updateRowData?.goldenId,
        stateCode: stateFilter(updateRowData?.stateCode),
        addressType: {
          label: updateRowData?.addressType,
          value: updateRowData?.addressType,
        },
        addressLine1: updateRowData?.addressLine1,
        addressLine2: updateRowData?.addressLine2,
        addressLine3: updateRowData?.addressLine3,
        city: updateRowData?.city,
        country: updateRowData?.country,
        zipCode: updateRowData?.zipCode,
        isPrimary: updateRowData?.isPrimary,
        startDate: updateRowData?.startDate,
        endDate: updateRowData?.endDate,
        isActive: updateRowData?.isActive,
        createById: updateRowData?.createById,
        lastUpdatedById: updateRowData?.lastUpdatedById,
        isDeleted: updateRowData?.isDeleted,
        source: updateRowData?.source,
        isActiveFlag: updateRowData?.isActiveFlag,
      };

      setFormData(convertData);
    }
  }, [updateRowData]);

  const handleCancleModel = () => {
    setFormData({});
    onClose();
  };

  const stateFilter = (state) => {
    const data = StateData?.filter((item) => item.label === state)?.[0];
    return data ? data : state;
  };

  return (
    <div className="h-full flex flex-col gap-4 w-full p-2  ">
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
      <div className="flex flex-col lg:flex-row  gap-5 py-4 px-3 ">
        <div className="flex flex-row gap-4 w-full max-w-[800px]">
          <label className="text-lg font-semibold flex justify-center items-center">
            Add new Address for Guest
          </label>
          <div className="w-full max-w-[300px] xl:max-w-[70%]">
            <CustomInput
              isNUmber={false}
              isRequired={true}
              isIcon={true}
              label=""
              isdisablad={true}
              placeholder="Guest Name"
              name="address"
              value={allData?.fullName}
              // onChange={(e) => handleFromData(e.target.value, "addresss")}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <label className="text-lg font-semibold flex justify-center items-center">
            Guest ID
          </label>
          <div className="w-[100px]">
            <CustomInput
              isNUmber={true}
              isRequired={true}
              isdisablad={true}
              isIcon={true}
              label="" 
              placeholder=""
              name="guest"
              value={allData?.goldenId}
              // onChange={(e) => handleFromData(e.target.value, "guest")}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-56 w-full h-full py-10 px-24">
        <div className="flex flex-col gap-8 ">
          <div className="w-full flex gap-4">
            <label className="flex items-center w-44 ">Address Type</label>
            <div className="w-full max-w-[300px] lg:max-w-[70%]">
              <SingleSelectDropDown
                placeholder="addressType"
                options={AddressTypeData}
                target="addressType"
                creatableSelect={true}
                selectedType={formData?.addressType}
                handleSelectChange={handleFromData}
              />
            </div>
          </div>

          <div className=" w-full  flex gap-4">
            <label className="flex items-center w-44">Address Line 1</label>
            <div className="w-full max-w-[300px] lg:max-w-[70%]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="addressLine1"
                name="addressLine1"
                value={formData?.addressLine1}
                onChange={(e) => handleFromData(e.target.value, "addressLine1")}
              />
            </div>
          </div>
          <div className=" w-full  flex gap-4">
            <label className="flex items-center w-44">Address Line 2</label>
            <div className="w-full max-w-[300px] lg:max-w-[70%]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label="" 
                placeholder="addressLine2"
                name="addressLine2"
                value={formData?.addressLine2}
                onChange={(e) => handleFromData(e.target.value, "addressLine2")}
              />
            </div>
          </div>
          <div className=" w-full  flex gap-4">
            <label className="flex items-center w-44">Address Line 3</label>
            <div className="w-full max-w-[300px] lg:max-w-[70%]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="addressLine3"
                name="addressLine3"
                value={formData?.addressLine3}
                onChange={(e) => handleFromData(e.target.value, "addressLine3")}
              />
            </div>
          </div>
          <div className="flex gap-20">
            <label className="">Is Active</label>
            <input
              type="checkbox"
              placeholder=""
              autoComplete="false"
              id="date"
              name="isActive"
              checked={formData?.isActive}
              onChange={(e) => handleFromData(e.target.checked, "isActive")}
              className={`w-5 h-5 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-8 ">
            <div className="w-full flex gap-4 ">
              <label className="flex items-center w-14   ">City</label>
              <div className="w-full max-w-[300px] lg:max-w-[80%]">
                <CustomInput
                  isNUmber={false}
                  isRequired={true}
                  isIcon={true}
                  label=""
                  placeholder="city"
                  name="city"
                  value={formData?.city}
                  onChange={(e) => handleFromData(e.target.value, "city")}
                />
              </div>
            </div>

            <div className=" w-full  flex gap-4">
              <label className="flex items-center w-14 ">State</label>
              <div className="w-full max-w-[300px] lg:max-w-[80%]">
                <SingleSelectDropDown
                  placeholder="stateCode"
                  options={StateData}
                  target="stateCode"
                  creatableSelect={true}
                  selectedType={formData?.stateCode}
                  handleSelectChange={handleFromData}
                />
              </div>
            </div>
            <div className=" w-full  flex gap-4">
              <label className="flex items-center ">Country</label>
              <div className="w-full max-w-[300px] lg:max-w-[80%]">
                <CustomInput
                  isNUmber={false}
                  isRequired={true}
                  isIcon={true}
                  label=""
                  placeholder="country"
                  name="country"
                  value={formData?.country}
                  onChange={(e) => handleFromData(e.target.value, "country")}
                />
              </div>
            </div>
            <div className=" w-full flex ">
              <label className="flex items-center w-24">Zip Code</label>
              <div className="w-full max-w-[300px] lg:max-w-[80%]">
                <CustomInput
                  isNUmber={false}
                  isRequired={true}
                  isIcon={true}
                  label=""
                  placeholder="zipCode"
                  name="zipCode"
                  value={formData?.zipCode}
                  onChange={(e) => handleFromData(e.target.value, "zipCode")}
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-10">
              <div className="w-full max-w-[150px]">
                <CustomButton
                  name="Save"
                  handleClick={() => handleAddressSave()}
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
        </div>
      </div>
    </div>
  );
};

export default AddressModel;
