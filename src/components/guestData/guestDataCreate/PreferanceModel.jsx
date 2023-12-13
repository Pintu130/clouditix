import React, { useState } from "react";
import Image from 'next/image';
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { airporttransfer, bathslippers, bedtype, celebratoryoccasion, conceirgeservices, connectivityreg, dietaryallergy, donotdisturb, favouritecuisine, floorlevel, genderDate, housekeepingschedule, modeofcommunication, pillowtype, preferreddiningtimes, promotionalmaterials, roomtemppref, roomviewpref, spatreatments } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";

const PreferanceModel = ({ onClose }) => {
  const [preferance, setPreferance] = useState({})

  const handlepreferanceData = (name, value) => {
    setPreferance({
      ...preferance,
      [name]: value
    })
  }
  const HandleSave = () => {
    console.log(preferance);
  }

  const handlCancel = () => {
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
                placeholder="Kumar"
                name="fullname"
                value={preferance?.fullname}
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
                placeholder="Kumar"
                name="guestID"
                value={preferance?.guestID}
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
                  target="bedtype"
                  creatableSelect={true}
                  selectedType={preferance?.gender}
                  handleSelectChange={(data) => handlepreferanceData('bedtype', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Floor Level</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Floor Level"
                  options={floorlevel}
                  target="floorlevel"
                  creatableSelect={true}
                  selectedType={preferance?.gender}
                  handleSelectChange={(data) => handlepreferanceData('floorlevel', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Room View Pref</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Room View Pref"
                  options={roomviewpref}
                  target="roomviewpref"
                  creatableSelect={true}
                  selectedType={preferance?.roomviewpref}
                  handleSelectChange={(data) => handlepreferanceData('roomviewpref', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Bath Robe & Slippers</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Bath Robe & Slippers"
                  options={bathslippers}
                  target="bathslippers"
                  creatableSelect={true}
                  selectedType={preferance?.bathslippers}
                  handleSelectChange={(data) => handlepreferanceData('bathslippers', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Favourite Cuisine</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Favourite Cuisine"
                  options={favouritecuisine}
                  target="favouritecuisine"
                  creatableSelect={true}
                  selectedType={preferance?.favouritecuisine}
                  handleSelectChange={(data) => handlepreferanceData('favouritecuisine', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Airport Transfer</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Airport Transfer"
                  options={airporttransfer}
                  target="airporttransfer"
                  creatableSelect={true}
                  selectedType={preferance?.airporttransfer}
                  handleSelectChange={(data) => handlepreferanceData('airporttransfer', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Conceirge Services</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Conceirge Services"
                  options={conceirgeservices}
                  target="conceirgeservices"
                  creatableSelect={true}
                  selectedType={preferance?.conceirgeservices}
                  handleSelectChange={(data) => handlepreferanceData('conceirgeservices', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Connectivity Reg</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Connectivity Reg"
                  options={connectivityreg}
                  target="connectivityreg"
                  creatableSelect={true}
                  selectedType={preferance?.connectivityreg}
                  handleSelectChange={(data) => handlepreferanceData('connectivityreg', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Promotional Materials</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Promotional Materials"
                  options={promotionalmaterials}
                  target="promotionalmaterials"
                  creatableSelect={true}
                  selectedType={preferance?.promotionalmaterials}
                  handleSelectChange={(data) => handlepreferanceData('promotionalmaterials', data)}
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
                  target="pillowtype"
                  creatableSelect={true}
                  selectedType={preferance?.pillowtype}
                  handleSelectChange={(data) => handlepreferanceData('pillowtype', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Room Temp Pref</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Room Temp Pref"
                  options={roomtemppref}
                  target="roomtemppref"
                  creatableSelect={true}
                  selectedType={preferance?.roomtemppref}
                  handleSelectChange={(data) => handlepreferanceData('roomtemppref', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Dietary Restictions & Allergy</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Dietary Restictions & Allergy"
                  options={dietaryallergy}
                  target="dietaryallergy"
                  creatableSelect={true}
                  selectedType={preferance?.dietaryallergy}
                  handleSelectChange={(data) => handlepreferanceData('dietaryallergy', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Preferred Dining Times</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Preferred Dining Times"
                  options={preferreddiningtimes}
                  target="preferreddiningtimes"
                  creatableSelect={true}
                  selectedType={preferance?.preferreddiningtimes}
                  handleSelectChange={(data) => handlepreferanceData('preferreddiningtimes', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Celebratory occasion</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Celebratory occasion"
                  options={celebratoryoccasion}
                  target="celebratoryoccasion"
                  creatableSelect={true}
                  selectedType={preferance?.celebratoryoccasion}
                  handleSelectChange={(data) => handlepreferanceData('celebratoryoccasion', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Spa Treatments</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Spa Treatments"
                  options={spatreatments}
                  target="spatreatments"
                  creatableSelect={true}
                  selectedType={preferance?.spatreatments}
                  handleSelectChange={(data) => handlepreferanceData('spatreatments', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Housekeeping Schedule</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Housekeeping Schedule"
                  options={housekeepingschedule}
                  target="housekeepingschedule"
                  creatableSelect={true}
                  selectedType={preferance?.housekeepingschedule}
                  handleSelectChange={(data) => handlepreferanceData('housekeepingschedule', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Do Not Disturb Preference</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Do Not Disturb Preference"
                  options={donotdisturb}
                  target="donotdisturb"
                  creatableSelect={true}
                  selectedType={preferance?.donotdisturb}
                  handleSelectChange={(data) => handlepreferanceData('donotdisturb', data)}
                />
              </div>
            </div>

            <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
              <label className="flex items-center w-full  xl:max-w-[160px]">Mode Of Communication</label>
              <div className=" w-full md:w-[250px] lg:w-full xl:w-[300px] ]">
                <SingleSelectDropDown
                  placeholder="Mode Of Communication"
                  options={modeofcommunication}
                  target="modeofcommunication"
                  creatableSelect={true}
                  selectedType={preferance?.modeofcommunication}
                  handleSelectChange={(data) => handlepreferanceData('modeofcommunication', data)}
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
              placeholder=""
              autoComplete='false'
              id='date'
              name='isActive'
              checked={preferance?.isActive}
              onChange={(e) => handlepreferanceData(e.target.name, e.target.checked)}
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
                handleClick={() => handlCancel()}
                isDisable={false}
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
