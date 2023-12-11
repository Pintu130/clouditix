import React, { useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { bedtype, identificationtype, issuingcountry } from "@/assets/data";

const ContactModel = () => {
  const [identification, setIdentification] = useState({})

  const handleidentificationData = (name, value) => {
    setIdentification({
      ...identification,
      [name]: value
    })
  }
  const HandleSave = () => {
    console.log(identification);
  }

  const handleClose = () => {
    onClose()
  }
  return <>
    <div className='w-full h-full '>
      <div className='flex justify-between border-b '>
        <button className='flex items-center flex-shrink-0 gap-6 px-6 '>
          <Image
            src="/images/icon/logo.png"
            alt='HOM-logo'
            width="212"
            priority
            height="40"
            className='flex-shrink-0  h-auto pb-2'
          />
        </button>
      </div>

      <div className="flex flex-col gap-10 p-5 h-full">

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <span>Add new Contact details for Guest - </span>
            <div className=" w-full md:w-[200px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Kumar"
                name="fullname"
                value={identification?.fullname}
                onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span>Guest ID</span>
            <div className=" w-[100px] ]">
              <CustomInput
                isNUmber={true}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Kumar"
                name="guestID"
                value={identification?.guestID}
                onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 h-full">

          <div className=" w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-5">

            <div className=" w-full flex flex-col items-center justify-center gap-3">

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Business Phone</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='tel'
                    placeholder="Business Phone"
                    autoComplete='false'
                    id='businessphone'
                    name='businessphone'
                    value={identification?.businessphone}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Mobile Phone</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='tel'
                    placeholder="Mobile Phone"
                    autoComplete='false'
                    id='mobilephone'
                    name='mobilephone'
                    value={identification?.mobilephone}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Alternate Email</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='text'
                    placeholder="Alternate Email"
                    autoComplete='false'
                    id='alternateemail'
                    name='alternateemail'
                    value={identification?.alternateemail}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Business Email</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='text'
                    placeholder="Business Email"
                    autoComplete='false'
                    id='businessemail'
                    name='businessemail'
                    value={identification?.businessemail}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

            </div>

            <div className=" w-full flex flex-col items-center justify-center gap-3">

              <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Home Phone</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='tel'
                    placeholder="Home Phone"
                    autoComplete='false'
                    id='homephone'
                    name='homephone'
                    value={identification?.homephone}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Alternate Phone</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='tel'
                    placeholder="Alternate Phone"
                    autoComplete='false'
                    id='alternatephone'
                    name='alternatephone'
                    value={identification?.alternatephone}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Personal Email</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='text'
                    placeholder="Personal Email"
                    autoComplete='false'
                    id='personalemail'
                    name='personalemail'
                    value={identification?.personalemail}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-5 pb-5">

            <div className="w-full flex gap-4 ">
              <label className="flex items-center xl:max-w-[160px] ">Is Active</label>
              <input
                type='checkbox'
                placeholder=""
                autoComplete='false'
                id='date'
                name='isActive'
                checked={identification?.isActive}
                onChange={(e) => handleidentificationData(e.target.name, e.target.checked)}
                className={`w-5 h-5 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`}
              />
            </div>

            <div className="flex  gap-4">
              <div className="w-full max-w-[150px]  ">
                <CustomButton
                  name="Save"
                  handleClick={() => HandleSave()}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
              <div className="w-full max-w-[150px]  ">
                <CustomButton
                  name="Cancle"
                  handleClick={() => handleClose()}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
            </div>

          </div>

        </div>



      </div>
    </div>
  </>;
};

export default ContactModel;
