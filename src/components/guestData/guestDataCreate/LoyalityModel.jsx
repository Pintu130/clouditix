
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
// import { useDispatch } from "react-redux"
import { fetchGoldLoyaltyProgram, fetchGoldLoyaltyProgramID } from "@/assets/data";

// const initialData = {
//   loyaltyPrgMemId: 0,
//   goldenId: 0,
//   programName: "",
//   levelName: "",
//   memberId: 0,
//   memStartDate: "",
//   memEndDate: "",
//   membershipStatus: "",
//   redemptionHistory: "",
//   earningHistory: "",
//   loyaltyPoints: 0,
//   createById: "data_entry_user_id",
//   lastUpdatedById: "data_entry_user_id",
//   isDeleted: false,
//   source: "res",
//   isActiveFlag: true
// }

const LoyalityModel = ({ onClose, updateRowData, UpdatedData, rowData,allData,initialData,setLoyality,loyality }) => {
  // console.log("🚀 ~ LoyalityModel ~ rowData--------->>:", allData)
  // const [loyality, setLoyality] = useState(initialData)
  const [loyOption, setLoyOption] = useState([])
  const [filterLoyalityID, setFilterLoyalityID] = useState([])
  const [loyalityLevel, setLoyalityLevel] = useState([])
  // const dispatch = useDispatch()

  const handleloyalityData = (name, value) => {
    setLoyality({
      ...loyality,
      [name]: value
    })
  }


  useEffect(() => {(async () => {

      const filteredId = filterLoyalityID.filter((item) => item?.programName === updateRowData?.programName);

      const bodyData = loyality?.programName?.loyaltyProgramId > 0 ? loyality?.programName?.loyaltyProgramId : filteredId[0]?.loyaltyProgramId;

      if(bodyData){

        const responce = await fetchGoldLoyaltyProgramID(bodyData);
        
        if (responce?.length > 0) {
          
          const modifyLoyality = responce?.map((item) => ({
            label: item?.levelName, value: item?.levelName
          }))
          
          setLoyalityLevel(modifyLoyality)
        }
      }

    })()
  }, [loyality, filterLoyalityID])


  useEffect(() => {
    ; (async () => {
      const res = await fetchGoldLoyaltyProgram();

      if (res?.length > 0) {

        if (updateRowData && Object.keys(updateRowData).length > 0) {
          setFilterLoyalityID(res);
        }

        const loyaltyOptions = res.map((item) => {
          return {
            label: item?.programName, value: item?.programName, loyaltyProgramId: item?.loyaltyProgramId
          }
        });

        setLoyOption(loyaltyOptions);

        /* 
        dispatch(setLotalityData(res)) */
      };
    })()
  }, [updateRowData])



  const HandleSave = () => {
    if (Object.keys(updateRowData).length > 0) {
      const updatedata = rowData?.map((item) => item.programName === updateRowData.programName ? loyality : item)

      UpdatedData(updatedata)
      // console.log(updatedata);
      onClose()
    } else {

      const CreateNewRow = [...rowData, loyality]

      // console.log(CreateNewRow);
      // UpdatedData(CreateNewRow)
      onClose()

    }
  };


  useEffect(() => {
    if (updateRowData && Object.keys(updateRowData).length > 0) {
      // console.log("inside");
      const convertData = {
        loyaltyPrgMemId: updateRowData?.loyaltyPrgMemId,
        goldenId: updateRowData?.goldenId,
        programName: { label: updateRowData?.programName, value: updateRowData?.programName },
        levelName: { label: updateRowData?.levelName, value: updateRowData?.levelName },
        memberId: updateRowData?.memberId,
        memStartDate: updateRowData?.memStartDate,
        memEndDate: updateRowData?.memEndDate,
        membershipStatus: updateRowData?.membershipStatus,
        redemptionHistory: updateRowData?.redemptionHistory,
        earningHistory: updateRowData?.earningHistory,
        loyaltyPoints: updateRowData?.loyaltyPoints,
        createById: updateRowData?.createById,
        lastUpdatedById: updateRowData?.lastUpdatedById,
        isDeleted: updateRowData?.isDeleted,
        source: updateRowData?.source,
        isActiveFlag: updateRowData?.isActiveFlag
      }

      setLoyality(convertData)
    }
  }, [updateRowData])

  const handleClose = () => {
    onClose()
    setLoyality(initialData)
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
            <span>Add Loyalty Program membership for Guest - </span>
            <div className=" w-full md:w-[200px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                isdisablad={true}
                placeholder="Guest Name"
                name="fullname"
                value={allData?.fullName}
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
                isdisablad={true}
                placeholder=""
                name="guestID"
                value={allData?.goldenId}
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
                    options={loyOption}
                    target="programName"
                    creatableSelect={true}
                    selectedType={loyality?.programName}
                    handleSelectChange={(data) => handleloyalityData('programName', data)}
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
                    name='memStartDate'
                    value={loyality?.memStartDate}
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
                    name='redemptionHistory'
                    value={loyality?.redemptionHistory}
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
                    name='loyaltyPoints'
                    value={loyality?.loyaltyPoints}
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
                    options={loyalityLevel}
                    target="levelName"
                    creatableSelect={true}
                    selectedType={loyality?.levelName}
                    handleSelectChange={(data) => handleloyalityData('levelName', data)}
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
                    name='memEndDate'
                    value={loyality?.memEndDate}
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
                    name='earningHistory'
                    value={loyality?.earningHistory}
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
                name='isActiveFlag'
                checked={loyality?.isActiveFlag}
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
