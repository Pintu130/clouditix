import React, { useEffect, useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { airporttransfer, bathslippers, bedtype, celebratoryoccasion, conceirgeservices, connectivityreg, dietaryallergy, donotdisturb, favouritecuisine, floorlevel, genderDate, housekeepingschedule, modeofcommunication, pillowtype, preferreddiningtimes, promotionalmaterials, roomtemppref, roomviewpref, spatreatments } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import { useDispatch } from "react-redux"
import { setPreferanceData } from "@/store/guestDataCreateSlice";


const preferanceInitialData = {
  guestPrefId: 0,
  goldenId: 0,
  bedType: "",
  smoking: "",
  floorLevel: "",
  roomViewPreference: "",
  bathrobeAndSlippersSize: "",
  pillowType: "",
  roomTemperaturePreference: "",
  dietaryRestrictionsAndAllergies: "",
  preferredDiningTimes: "",
  favoriteCuisines: "",
  celebratoryOccasions: "",
  airportTransferPreferences: "",
  spaTreatments: "",
  conciergeServices: "",
  housekeepingSchedule: "",
  connectivityRequirements: "",
  doNotDisturbPreferences: "",
  promotionalMaterials: "",
  modeOfCommunication: "",
  createById: "",
  lastUpdatedById: "",
  isDeleted: false,
  source: "",
  isActiveFlag: true
}


const PreferanceModel = ({ onClose, allData }) => {
  const [preferance, setPreferance] = useState(preferanceInitialData)
  const [isEdit, setIsEdit] = useState(true)
  const dispatch = useDispatch();

  const handlepreferanceData = (name, value) => {
    setPreferance({
      ...preferance,
      [name]: value
    })
  }

  
  useEffect(() => {

    if (allData?.guestPreferences?.length > 0) {
      const preferenceDatas = allData?.guestPreferences?.map(item => ({
        bedType: { label: item?.bedType, value: item?.bedType },
        floorLevel: { label: item?.floorLevel, value: item?.floorLevel },
        roomViewPreference: { label: item?.roomViewPreference, value: item?.roomViewPreference },
        bathrobeAndSlippersSize: { label: item?.bathrobeAndSlippersSize, value: item?.bathrobeAndSlippersSize },
        favoriteCuisines: { label: item?.favoriteCuisines, value: item?.favoriteCuisines },
        airportTransferPreferences: { label: item?.airportTransferPreferences, value: item?.airportTransferPreferences },
        conciergeServices: { label: item?.conciergeServices, value: item?.conciergeServices },
        connectivityRequirements: { label: item?.connectivityRequirements, value: item?.connectivityRequirements },
        promotionalMaterials: { label: item?.promotionalMaterials, value: item?.promotionalMaterials },
        pillowType: { label: item?.pillowType, value: item?.pillowType },
        roomTemperaturePreference: { label: item?.roomTemperaturePreference, value: item?.roomTemperaturePreference },
        dietaryRestrictionsAndAllergies: { label: item?.dietaryRestrictionsAndAllergies, value: item?.dietaryRestrictionsAndAllergies },
        preferredDiningTimes: { label: item?.preferredDiningTimes, value: item?.preferredDiningTimes },
        celebratoryOccasions: { label: item?.celebratoryOccasions, value: item?.celebratoryOccasions },
        spaTreatments: { label: item?.spaTreatments, value: item?.spaTreatments },
        housekeepingSchedule: { label: item?.housekeepingSchedule, value: item?.housekeepingSchedule },
        doNotDisturbPreferences: { label: item?.doNotDisturbPreferences, value: item?.doNotDisturbPreferences },
        modeOfCommunication: { label: item?.modeOfCommunication, value: item?.modeOfCommunication },
        isActiveFlag: { label: item?.isActiveFlag, value: item?.isActiveFlag }
      }))


      setPreferance(preferenceDatas[0]);
      dispatch(setPreferanceData(allData?.guestPreferences[0]))
    }
  }, [allData])

  const HandleSave = () => {
    if (preferance) {
      handleCancel();
    }

    const data = {
      guestPrefId: 0,
      goldenId: 0,
      bedType: preferance?.bedType?.value,
      smoking: "",
      floorLevel: preferance?.floorLevel?.value,
      roomViewPreference: preferance?.roomViewPreference?.value,
      bathrobeAndSlippersSize: preferance?.bathrobeAndSlippersSize?.value,
      pillowType: preferance?.pillowType?.value,
      roomTemperaturePreference: preferance?.roomTemperaturePreference?.value,
      dietaryRestrictionsAndAllergies: preferance?.dietaryRestrictionsAndAllergies?.value,
      preferredDiningTimes: preferance?.preferredDiningTimes?.value,
      favoriteCuisines: preferance?.favoriteCuisines?.value,
      celebratoryOccasions: preferance?.celebratoryOccasions?.value,
      airportTransferPreferences: preferance?.airportTransferPreferences?.value,
      spaTreatments: preferance?.spaTreatments?.value,
      conciergeServices: preferance?.conciergeServices?.value,
      housekeepingSchedule: preferance?.housekeepingSchedule?.value,
      connectivityRequirements: preferance?.connectivityRequirements?.value,
      doNotDisturbPreferences: preferance?.doNotDisturbPreferences?.value,
      promotionalMaterials: preferance?.promotionalMaterials?.value,
      modeOfCommunication: preferance?.modeOfCommunication?.value,
      createById: '',
      lastUpdatedById: '',
      isDeleted: false,
      source: "",
      isActiveFlag: true
    }

    dispatch(setPreferanceData(data))
  }

  const handleCancel = () => {
    onClose();
    setPreferance(preferanceInitialData);
    setIsEdit(true);
  }

  const HandleEdit = () => {
    // console.log(preferance);
    setIsEdit(!isEdit);
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

      <div className="flex flex-col gap-5 p-5">

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <span>Add Preferences for Guest - </span>
            <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                isdisablad={true}
                placeholder="Guest Name"
                name="fullname"
                value={allData?.guest?.fullName}
                onChange={(e) => handlepreferanceData(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span>Guest ID</span>
            <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
              <CustomInput
                isNUmber={true}
                isRequired={true}
                isIcon={true}
                label=""
                isdisablad={true}
                placeholder=""
                name="guestID"
                value={allData?.guest?.goldenId}
                onChange={(e) => handlepreferanceData(e.target.name, e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-5">

          <div className=" w-full flex flex-col items-center justify-center gap-3">
            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Bed Type</label>

              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Bed Type"
                  options={bedtype}
                  target="bedType"
                  creatableSelect={true}
                  selectedType={preferance?.bedType}
                  handleSelectChange={(data) => handlepreferanceData('bedType', data)}
                  isDisabled={isEdit}
                />
              </div>

            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Floor Level</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Floor Level"
                  options={floorlevel}
                  target="floorLevel"
                  creatableSelect={true}
                  selectedType={preferance?.floorLevel}
                  handleSelectChange={(data) => handlepreferanceData('floorLevel', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Room View Pref</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Room View Pref"
                  options={roomviewpref}
                  target="roomViewPreference"
                  creatableSelect={true}
                  selectedType={preferance?.roomViewPreference}
                  handleSelectChange={(data) => handlepreferanceData('roomViewPreference', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Bath Robe & Slippers</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Bath Robe & Slippers"
                  options={bathslippers}
                  target="bathrobeAndSlippersSize"
                  creatableSelect={true}
                  selectedType={preferance?.bathrobeAndSlippersSize}
                  handleSelectChange={(data) => handlepreferanceData('bathrobeAndSlippersSize', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Favourite Cuisine</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Favourite Cuisine"
                  options={favouritecuisine}
                  target="favoriteCuisines"
                  creatableSelect={true}
                  selectedType={preferance?.favoriteCuisines}
                  handleSelectChange={(data) => handlepreferanceData('favoriteCuisines', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Airport Transfer</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Airport Transfer"
                  options={airporttransfer}
                  target="airportTransferPreferences"
                  creatableSelect={true}
                  selectedType={preferance?.airportTransferPreferences}
                  handleSelectChange={(data) => handlepreferanceData('airportTransferPreferences', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Conceirge Services</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Conceirge Services"
                  options={conceirgeservices}
                  target="conciergeServices"
                  creatableSelect={true}
                  selectedType={preferance?.conciergeServices}
                  handleSelectChange={(data) => handlepreferanceData('conciergeServices', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Connectivity Reg</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Connectivity Reg"
                  options={connectivityreg}
                  target="connectivityRequirements"
                  creatableSelect={true}
                  selectedType={preferance?.connectivityRequirements}
                  handleSelectChange={(data) => handlepreferanceData('connectivityRequirements', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Promotional Materials</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Promotional Materials"
                  options={promotionalmaterials}
                  target="promotionalMaterials"
                  creatableSelect={true}
                  selectedType={preferance?.promotionalMaterials}
                  handleSelectChange={(data) => handlepreferanceData('promotionalMaterials', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

          </div>

          <div className=" w-full flex flex-col items-center justify-center gap-3">

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Pillow Type</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Pillow Type"
                  options={pillowtype}
                  target="pillowType"
                  creatableSelect={true}
                  selectedType={preferance?.pillowType}
                  handleSelectChange={(data) => handlepreferanceData('pillowType', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Room Temp Pref</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Room Temp Pref"
                  options={roomtemppref}
                  target="roomTemperaturePreference"
                  creatableSelect={true}
                  selectedType={preferance?.roomTemperaturePreference}
                  handleSelectChange={(data) => handlepreferanceData('roomTemperaturePreference', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Dietary Restictions & Allergy</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Dietary Restictions & Allergy"
                  options={dietaryallergy}
                  target="dietaryRestrictionsAndAllergies"
                  creatableSelect={true}
                  selectedType={preferance?.dietaryRestrictionsAndAllergies}
                  handleSelectChange={(data) => handlepreferanceData('dietaryRestrictionsAndAllergies', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Preferred Dining Times</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Preferred Dining Times"
                  options={preferreddiningtimes}
                  target="preferredDiningTimes"
                  creatableSelect={true}
                  selectedType={preferance?.preferredDiningTimes}
                  handleSelectChange={(data) => handlepreferanceData('preferredDiningTimes', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Celebratory occasion</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Celebratory occasion"
                  options={celebratoryoccasion}
                  target="celebratoryOccasions"
                  creatableSelect={true}
                  selectedType={preferance?.celebratoryOccasions}
                  handleSelectChange={(data) => handlepreferanceData('celebratoryOccasions', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Spa Treatments</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] cur">
                <SingleSelectDropDown
                  placeholder="Spa Treatments"
                  options={spatreatments}
                  target="spaTreatments"
                  creatableSelect={true}
                  selectedType={preferance?.spaTreatments}
                  handleSelectChange={(data) => handlepreferanceData('spaTreatments', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Housekeeping Schedule</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Housekeeping Schedule"
                  options={housekeepingschedule}
                  target="housekeepingSchedule"
                  creatableSelect={true}
                  selectedType={preferance?.housekeepingSchedule}
                  handleSelectChange={(data) => handlepreferanceData('housekeepingSchedule', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Do Not Disturb Preference</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Do Not Disturb Preference"
                  options={donotdisturb}
                  target="doNotDisturbPreferences"
                  creatableSelect={true}
                  selectedType={preferance?.doNotDisturbPreferences}
                  handleSelectChange={(data) => handlepreferanceData('doNotDisturbPreferences', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Mode Of Communication</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Mode Of Communication"
                  options={modeofcommunication}
                  target="modeOfCommunication"
                  creatableSelect={true}
                  selectedType={preferance?.modeOfCommunication}
                  handleSelectChange={(data) => handlepreferanceData('modeOfCommunication', data)}
                  isDisabled={isEdit}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-5">

          <div className="w-full flex gap-4 ">
            <label className="flex items-center xl:max-w-[160px] ">Is Active</label>
            <input
              type='checkbox'
              disabled={isEdit}
              placeholder=""
              autoComplete='false'
              id='date'
              name='isActiveFlag'
              checked={preferance?.isActive}
              onChange={(e) => handlepreferanceData(e.target.name, e.target.checked)}
              className={`w-5 h-5 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`}
            />
          </div>

          <div className="flex  gap-4">
            <div className="w-full min-w-[100px]  ">
              <CustomButton
                name={isEdit ? "Edit" : "Cancel"}
                handleClick={() => HandleEdit()}
                isDisable={false}
                isLoading={false}
              />
            </div>
            <div className="w-full min-w-[100px]  ">
              <CustomButton
                name="Save"
                handleClick={() => HandleSave()}
                isDisable={isEdit}
                isLoading={false}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  </>;
};

export default PreferanceModel;
