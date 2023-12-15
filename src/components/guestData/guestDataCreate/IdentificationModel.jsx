import React, { useEffect, useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { identificationtype, issuingcountry } from "@/assets/data";
import { useDispatch, useSelector } from "react-redux"
import { setIdentificationData, setIdentificationDataUpdate } from "@/store/guestDataCreateSlice";

const IdentificationModel = ({ onClose, updateRowData }) => {

  const [identification, setIdentification] = useState({})
  const dispatch = useDispatch()
  const oldFormData = useSelector(state => state?.createData?.identification)

  const handleidentificationData = (name, value) => {
    const dynamicId = generateDynamicId();

    if (updateRowData && Object.keys(updateRowData).length > 0) {
      setIdentification({
        ...identification,
        [name]: value
      })
    } else {
      setIdentification({
        ...identification,
        id: dynamicId,
        [name]: value
      })
    }

  }

  const generateDynamicId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const HandleSave = () => {

    if (Object.keys(updateRowData).length > 0) {
      const updatedata = oldFormData?.map((item) => item.id === updateRowData.id ? identification : item)
      
      dispatch(setIdentificationDataUpdate(updatedata))
      onClose()
    } else {
      if (identification) {
        dispatch(setIdentificationData(identification))
        onClose()
        setIdentification({})
      }
    }


  }

  const handleClose = () => {
    onClose()
    setIdentification({})
  }

  useEffect(() => {
    if (updateRowData && Object.keys(updateRowData).length > 0) {

      const convertData = {

        id: updateRowData?.id,
        expirydate: updateRowData?.expiryDate,
        identificationvalue: updateRowData?.identificationValue,
        issuingdate: updateRowData?.issueDate,
        isActive: true,
        issuingcountry: { label: updateRowData?.issuingCountry, value: updateRowData?.issuingCountry },
        identificationtype: { label: updateRowData?.identificationType, value: updateRowData?.identificationType }
      }

      setIdentification(convertData)
    }
  }, [updateRowData])

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
            <span>Add new Identification detail for Guest - </span>
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

          <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-5">

            <div className=" w-full flex flex-col items-center justify-center gap-3">

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Identification Type</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <SingleSelectDropDown
                    placeholder="Identification Type"
                    options={identificationtype}
                    target="identificationtype"
                    creatableSelect={true}
                    selectedType={identification?.identificationtype}
                    handleSelectChange={(data) => handleidentificationData('identificationtype', data)}
                  />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Issuing Country</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <SingleSelectDropDown
                    placeholder="Issuing Country"
                    options={issuingcountry}
                    target="issuingcountry"
                    creatableSelect={true}
                    selectedType={identification?.issuingcountry}
                    handleSelectChange={(data) => handleidentificationData('issuingcountry', data)}
                  />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Expiry Date</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='date'
                    placeholder="Expiry Date"
                    autoComplete='false'
                    id='expirydate'
                    name='expirydate'
                    value={identification?.expirydate}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                    className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `} />
                </div>
              </div>

            </div>

            <div className=" w-full flex flex-col items-center justify-center gap-3">

              <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Identification Value</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <CustomInput
                    isNUmber={false}
                    isRequired={true}
                    isIcon={true}
                    label=""
                    placeholder="Kumar"
                    name="identificationvalue"
                    value={identification?.identificationvalue}
                    onChange={(e) => handleidentificationData(e.target.name, e.target.value)}
                  />
                </div>
              </div>

              <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
                <label className="flex items-center w-full  xl:max-w-[160px]">Issuing Date</label>
                <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                  <input
                    type='date'
                    placeholder="12/03/1992"
                    autoComplete='false'
                    id='issuingdate'
                    name='issuingdate'
                    value={identification?.issuingdate}
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

export default IdentificationModel;
