import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import CustomModal from "@/components/common/CustomModal";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import React, { useState } from "react";
import GuestCreateAddress from "./GuestCreateAddress";
import PreferanceModel from "./PreferanceModel";
import { genderDate, income, married, nationality } from "@/assets/data";

const GuestDataCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setformData] = useState({})

  const handleFromData = (value, name) => {
    console.log(value);
    console.log(name);


    setformData({
      ...formData,
      [name]: value
    })
  }

  console.log(formData);

  const handleAddModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full p-2 ">
      <CustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <PreferanceModel />
      </CustomModal>


      <h1 className=" text-lg font-semibold px-2">Add Guest</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-5 w-full">

        <div className="flex flex-col gap-5 w-full">

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">First Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Arjun"
                name="firstName"
                value={formData?.firstName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Middle Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Kumar"
                name="middleName"
                value={formData?.middleName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Last Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Sharma"
                name="lastName"
                value={formData?.lastName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Full Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Arjun Kumar Sharma"
                name="fullName"
                value={formData?.fullName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Notes</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder=""
                name="notes"
                value={formData?.notes}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-5 w-full">

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px]">Date of Birth</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <input
                type='date'
                placeholder="12/03/1992"
                autoComplete='false'
                id='date'
                name='date'
                value={formData?.date}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px] ">Gender</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="Male"
                options={genderDate}
                target="gender"
                creatableSelect={true}
                selectedType={formData?.gender}
                handleSelectChange={(data) => handleFromData(data, 'gender')}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px] ">
              Marital Status
            </label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="Married"
                options={married}
                target="married"
                creatableSelect={true}
                selectedType={formData?.married}
                handleSelectChange={(data) => handleFromData(data, 'married')}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px] ">No of Children</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={true}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="0"
                name="children"
                value={formData?.children}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

          <div className="w-full flex gap-4 ">
            <label className="flex items-center w-24 ml-2 ">Is Active</label>
            <input
              type='checkbox'
              placeholder=""
              autoComplete='false'
              id='date'
              name='isActive'
              checked={formData?.isActive}
              onChange={(e) => handleFromData(e.target.checked, e.target.name)}
              className={`w-5 h-5 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`}
            />
          </div>

        </div>

        <div className="flex flex-col gap-5 w-full">

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row gap-2 xl:gap-4">

            <label className="flex items-center w-[170px] ">Nationality</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="India"
                options={nationality}
                target="nationality"
                creatableSelect={true}
                selectedType={formData?.nationality}
                handleSelectChange={(data) => handleFromData(data, 'nationality')}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px] ">Company Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder=""
                name="companyName"
                value={formData?.companyName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Income Level</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="Middle"
                options={income}
                target="income"
                creatableSelect={true}
                selectedType={formData?.income}
                handleSelectChange={(data) => handleFromData(data, 'income')}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Category</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="LEI"
                options={[]}
                target="category"
                creatableSelect={true}
                selectedType={formData?.category}
                handleSelectChange={(data) => handleFromData(data, 'category')}
              />
            </div>
          </div>

          <div className="w-full flex flex-col xs:flex-row  md:flex-col  lg:flex-row items-center justify-between gap-10">

            <div className="w-full max-w-[150px]  ">
              <CustomButton
                name="Add Preferences"
                handleClick={() => handleAddModal()}
                isDisable={false}
                isLoading={false}
              />
            </div>

            <div className="flex  gap-4">
              <div className="w-full max-w-[150px]  ">
                <CustomButton
                  name="Save"
                  handleClick={() => { }}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
              <div className="w-full max-w-[150px]  ">
                <CustomButton
                  name="Cancle"
                  handleClick={() => { }}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="border border-gray-400 rounded-lg p-2">
        <GuestCreateAddress />
      </div>
    </div>
  );
};

export default GuestDataCreate;
