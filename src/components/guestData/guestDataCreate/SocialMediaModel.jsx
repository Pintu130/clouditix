import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { socialmediaData } from "@/assets/data";
import { useDispatch, useSelector } from "react-redux"
import { setSocialMediaData, setSocialMediaDataUpdate } from "@/store/guestDataCreateSlice";

const initialValue = {
  smpId: 0,
  goldenId: 0,
  socialMediaApp: "",
  profile: "",
  createById: "",
  lastUpdatedById: "",
  isDeleted: false,
  source: "",
  isActiveFlag: true
}

const SocialMediaModel = ({ onClose, updateRowData, rowData, ModifyRowData }) => {
  const [socialMedia, setSocialMedia] = useState(initialValue)
  const dispatch = useDispatch()
  const oldFormData = useSelector(state => state?.createData?.socialMedia)

  console.log(rowData);
  console.log(updateRowData);
  console.log(socialMedia);

  const handlesocialMediaData = (name, value) => {

    setSocialMedia({
      ...socialMedia,
      [name]: value
    })

  }


  const HandleSave = () => {
    if (Object.keys(updateRowData).length > 0) {
      const updatedata = rowData?.map((item) => item.smpId === updateRowData.smpId ? socialMedia : item)

      ModifyRowData(updatedata);

      onClose()
      setSocialMedia(initialValue)
    } else {

      const createNewData = [...rowData, socialMedia]
      ModifyRowData(createNewData);

      setSocialMedia(initialValue)
      onClose()
    }
  }

  useEffect(() => {
    if (updateRowData && Object.keys(updateRowData).length > 0) {

      const convertData = {

        smpId: updateRowData?.smpId,
        goldenId: updateRowData?.goldenId,
        socialMediaApp: { label: updateRowData?.socialMediaApp, value: updateRowData?.socialMediaApp },
        profile: updateRowData?.profile,
        createById: updateRowData?.createById,
        lastUpdatedById: updateRowData?.lastUpdatedById,
        isDeleted: updateRowData?.isDeleted,
        source: updateRowData?.source,
        isActiveFlag: updateRowData?.isActiveFlag
      }
      setSocialMedia(convertData)
    }
  }, [updateRowData])

  const handleClose = () => {
    setSocialMedia(initialValue)
    onClose()
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

      <div className="flex flex-col gap-10 p-5 ">

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <span>Add new socialMedia detail for Guest - </span>
            <div className=" w-full md:w-[200px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Kumar"
                name="fullname"
                value={socialMedia?.fullname}
                onChange={(e) => handlesocialMediaData(e.target.name, e.target.value)}
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
                value={socialMedia?.guestID}
                onChange={(e) => handlesocialMediaData(e.target.name, e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-20 ">

          <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-5 ">

            <div className=" w-full flex items-start justify-start flex-col   gap-2 ">
              <label className="flex items-center w-full  xl:max-w-[160px]">Social Media</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[250px] ]">
                <SingleSelectDropDown
                  placeholder="Social Media"
                  options={socialmediaData}
                  target="socialMediaApp"
                  creatableSelect={true}
                  selectedType={socialMedia?.socialMediaApp}
                  handleSelectChange={(data) => handlesocialMediaData('socialMediaApp', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col  gap-2 ">
              <label className="flex items-center w-full  xl:max-w-[160px]">Profile</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[350px] ]">
                <CustomInput
                  isNUmber={false}
                  isRequired={true}
                  isIcon={true}
                  label=""
                  placeholder="Social Media Link "
                  name="profile"
                  value={socialMedia?.profile}
                  onChange={(e) => handlesocialMediaData(e.target.name, e.target.value)}
                />
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
                checked={socialMedia?.isActiveFlag}
                onChange={(e) => handlesocialMediaData(e.target.name, e.target.checked)}
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
  </>;;
};

export default SocialMediaModel;
