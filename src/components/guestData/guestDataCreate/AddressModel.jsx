import { AddressTypeData, StateData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { setCreateAddressData } from "@/store/guestDataCreateSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

const AddressModel = ({ onClose }) => {
  const [formData, setFormData] = useState({
    address: { label: '2 xyc soc ', value: '2 xyc soc ', __isNew__: true },
    line: 'xyz to abc road',
    line1: 'mlq stale',
    line2: 'sddv',
    city: 'Mumbai',
    state: { label: 'maharastra', value: 'maharastra', __isNew__: true },
    country: 'india',
    zip: '365010'
  });

  const dispatch = useDispatch()

  const handleFromData = (data, target) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [target]: data,
    }));
  };
  const handleAddressSave = () => {

    if (Object.keys(formData)?.length > 0) {
      dispatch(setCreateAddressData(formData))
      onClose()
    }
  };

  const handleCancleModel = () => {
    setFormData({});
    onClose()
  };
  return (
    <div className="h-full flex flex-col gap-4 w-full p-2  ">
      <div className="flex justify-between border-b ">
        <button className="flex items-center flex-shrink-0 gap-6 px-6 ">
          <Image
            src="/images/icon/logo.png"
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
              placeholder="Arjun Kumar Sharma"
              name="address"
              value={formData?.address}
              onChange={(e) => handleFromData(e.target.value, "address")}
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
              isIcon={true}
              label=""
              placeholder="1"
              name="guest"
              value={formData?.guest}
              onChange={(e) => handleFromData(e.target.value, "guest")}
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
                placeholder="Home"
                options={AddressTypeData}
                target="address"
                creatableSelect={true}
                selectedType={formData?.address}
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
                placeholder="123 Main Street"
                name="line"
                value={formData?.line}
                onChange={(e) => handleFromData(e.target.value, "line")}
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
                placeholder="Apartment 101"
                name="line1"
                value={formData?.line1}
                onChange={(e) => handleFromData(e.target.value, "line1")}
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
                placeholder="XYZ Towers"
                name="line2"
                value={formData?.line2}
                onChange={(e) => handleFromData(e.target.value, "line2")}
              />
            </div>
          </div>
          <div className="flex gap-20">
            <label className="">Is Active</label>
            <input
              type='checkbox'
              placeholder=""
              autoComplete='false'
              id='date'
              name='isActive'
              checked={formData?.isActive}
              onChange={(e) => handleFromData(e.target.checked, 'isActive', )}
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
                  placeholder="Mumbai"
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
                  placeholder="Maharashtra"
                  options={StateData}
                  target="state"
                  creatableSelect={true}
                  selectedType={formData?.state}
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
                  placeholder="India"
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
                  placeholder="400001"
                  name="zip"
                  value={formData?.zip}
                  onChange={(e) => handleFromData(e.target.value, "zip")}
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
