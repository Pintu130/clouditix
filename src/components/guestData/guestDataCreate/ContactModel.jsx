import React, { useEffect, useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import { useDispatch, useSelector } from "react-redux"
import { setContectData, setContectDataUpdate } from "@/store/guestDataCreateSlice";

const initialValue = {
  contactId: 0,
  goldenId: 0,
  businessPhoneCountryCode: '91',
  businessPhone: '',
  homePhoneCountryCode: '91',
  homePhone: '',
  mobilePhoneCountryCode: '91',
  mobilePhone: '',
  alternatePhoneCountryCode: '91',
  alternatePhone: '',
  businessEmail: '',
  personalEmail: '',
  alternateEmail: '',
  createById: '',
  lastUpdatedById: '',
  isDeleted: false,
  source: '',
  isActiveFlag: ''
}

const ContactModel = ({ onClose, updateRowData, rowData, updatedRowData }) => {
  const [contact, setcontact] = useState(initialValue)
  const dispatch = useDispatch()
  // const oldformData = useSelector(state => state?.createData?.contect)


  console.log(updateRowData);
  console.log(rowData);
  console.log(contact);


  const handlecontactData = (name, value) => {
    setcontact({
      ...contact,
      [name]: value
    })
  }


  const HandleSave = () => {

    if (Object.keys(updateRowData).length > 0) {
      const updateData = rowData?.map((item) => item.contactId === updateRowData.contactId ? contact : item)

      updatedRowData(updateData);

      // dispatch(setContectDataUpdate(updateData))
      onClose()
      setcontact(initialValue)

    } else {

      const createNew = [...rowData, contact]

      updatedRowData(createNew);

      onClose()
      setcontact(initialValue)
    }

  }

  useEffect(() => {
    if (updateRowData && Object.keys(updateRowData).length > 0) {

      const convertData = {
        contactId: updateRowData?.contactId,
        goldenId: updateRowData?.goldenId,
        businessPhoneCountryCode: updateRowData?.businessPhoneCountryCode,
        businessPhone: updateRowData?.businessPhone,
        homePhoneCountryCode: updateRowData?.homePhoneCountryCode,
        homePhone: updateRowData?.homePhone,
        mobilePhoneCountryCode: updateRowData?.mobilePhoneCountryCode,
        mobilePhone: updateRowData?.mobilePhone,
        alternatePhoneCountryCode: updateRowData?.alternatePhoneCountryCode,
        alternatePhone: updateRowData?.alternatePhone,
        businessEmail: updateRowData?.businessEmail,
        personalEmail: updateRowData?.personalEmail,
        alternateEmail: updateRowData?.alternateEmail,
        createById: updateRowData?.createById,
        lastUpdatedById: updateRowData?.lastUpdatedById,
        isDeleted: updateRowData?.isDeleted,
        source: updateRowData?.source,
        isActiveFlag: updateRowData?.isActiveFlag
      }

      setcontact(convertData)
    }
  }, [updateRowData])

  const handleClose = () => {
    onClose()
    setcontact(initialValue)
  }
  return <>
    <div className='w-full h-full '>
      <div className='flex justify-between border-b '>
        <button className='flex items-center flex-shrink-0 gap-6 px-6 '>
          <Image
            src="/images/logo.png"
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
                value={contact?.fullname}
                onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                value={contact?.guestID}
                onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    name='businessPhone'
                    value={contact?.businessPhone}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    name='mobilePhone'
                    value={contact?.mobilePhone}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    name='alternateEmail'
                    value={contact?.alternateEmail}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    name='businessEmail'
                    value={contact?.businessEmail}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    name='homePhone'
                    value={contact?.homePhone}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    id='alternatePhone'
                    name='alternatePhone'
                    value={contact?.alternatePhone}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                    name='personalEmail'
                    value={contact?.personalEmail}
                    onChange={(e) => handlecontactData(e.target.name, e.target.value)}
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
                name='isActiveFlag'
                checked={contact?.isActiveFlag}
                onChange={(e) => handlecontactData(e.target.name, e.target.checked)}
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

export default ContactModel;
