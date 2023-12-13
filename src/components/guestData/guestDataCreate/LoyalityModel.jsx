
import React, { useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { useDispatch } from "react-redux"
import { setLotalityData } from "@/store/guestDataCreateSlice";

const initialData = {
  fullname: '',
  guestID: '',
  membershipstartdate: '',
  redemtionhistory: '',
  loyaltypoints: '',
  membershipenddate: '',
  earninghistory: '',
  tierlevel: "",
  loyaltyprogrammembership: ""
}

const LoyalityModel = ({ onClose }) => {
  const [loyality, setLoyality] = useState({})
  const dispatch = useDispatch()

  const handleloyalityData = (name, value) => {
    setLoyality({
      ...loyality,
      [name]: value
    })
  }
  
  const HandleSave = () => {
    if (loyality) {
      dispatch(setLotalityData(loyality))
      setLoyality(initialData)
      onClose()
    }
  }

  const handleClose = () => {
    onClose()
    setLoyality(initialData)
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
            <span>Add Loyalty Program membership for Guest - </span>
            <div className=" w-full md:w-[200px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Kumar"
                name="fullname"
                value={loyality?.fullname}
                onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
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
                value={loyality?.guestID}
                onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 h-full">

          <div className=" w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-5">

            <div className=" w-full flex flex-col items-center justify-center gap-3">

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  ">Loyalty Program membership</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <SingleSelectDropDown
                    placeholder="Loyalty Program membership"
                    options={[]}
                    target="loyaltyprogrammembership"
                    creatableSelect={true}
                    selectedType={loyality?.loyaltyprogrammembership}
                    handleSelectChange={(data) => handleloyalityData('loyaltyprogrammembership', data)}
                  />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
                <label className="flex items-center w-full  ">Membership Start Date</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='date'
                    placeholder="Membership Start Date"
                    autoComplete='false'
                    id='membershipstartdate'
                    name='membershipstartdate'
                    value={loyality?.membershipstartdate}
                    onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  ">Redemtion History</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='text'
                    placeholder="Redemtion History"
                    autoComplete='false'
                    id='redemtionhistory'
                    name='redemtionhistory'
                    value={loyality?.redemtionhistory}
                    onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>

              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  ">Loyalty Points</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='number'
                    placeholder="Loyalty Points"
                    autoComplete='false'
                    id='loyaltypoints'
                    name='loyaltypoints'
                    value={loyality?.loyaltypoints}
                    onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>

              </div>

            </div>

            <div className=" w-full flex flex-col items-center justify-center gap-3">

              <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
                <label className="flex items-center w-full  ">Tier Level</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <SingleSelectDropDown
                    placeholder="Tier Level"
                    options={[]}
                    target="tierlevel"
                    creatableSelect={true}
                    selectedType={loyality?.tierlevel}
                    handleSelectChange={(data) => handleloyalityData('tierlevel', data)}
                  />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  ">Membership End Date</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='date'
                    placeholder="Membership End Date"
                    autoComplete='false'
                    id='membershipenddate'
                    name='membershipenddate'
                    value={loyality?.membershipenddate}
                    onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  ">Earning History</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='text'
                    placeholder="Earning History"
                    autoComplete='false'
                    id='earninghistory'
                    name='earninghistory'
                    value={loyality?.earninghistory}
                    onChange={(e) => handleloyalityData(e.target.name, e.target.value)}
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
                checked={loyality?.isActive}
                onChange={(e) => handleloyalityData(e.target.name, e.target.checked)}
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
                  name="Cancel"
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

export default LoyalityModel;
