import React, { useState } from 'react'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'
import SingleSelectDropDown from '../common/SingleSelectDropDown'
import { EntitySearch, attributeSearch, rulesearch, statussearch } from '@/assets/data'

const DataQualitySearch = () => {
    const [searchData, setSearchData] = useState({})
    const handleSearch = () => {

    }
    return (
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-3'>
            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    Entity
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Enter Entity"
                        options={EntitySearch}      
                        target="entity"
                        creatableSelect={true}
                        selectedType={searchData?.entity}
                        handleSelectChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    Attribute
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Enter Attribute"
                        options={attributeSearch}
                        target="attribute"
                        creatableSelect={true}
                        selectedType={searchData?.attribute}
                        handleSelectChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    Rule
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Enter Rule"
                        options={rulesearch}
                        target="rule"
                        creatableSelect={true}
                        selectedType={searchData?.rule}
                        handleSelectChange={handleSearch}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    Status
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Enter Status"
                        options={statussearch}
                        target="status"
                        creatableSelect={true}
                        selectedType={searchData?.status}
                        handleSelectChange={handleSearch}
                    />
                </div>
            </div>
            <div className='flex  items-center md:items-end justify-center md:justify-end w-full '>
            <div className="w-full max-w-[150px]  " >
                <CustomButton
                    name="Search"
                    handleClick={() => { }}
                    isDisable={false}
                    isLoading={false}
                />
            </div>
            </div>
        </div>
    )
}

export default DataQualitySearch