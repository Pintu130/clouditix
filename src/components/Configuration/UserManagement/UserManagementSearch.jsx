import { statussearch } from '@/assets/data'
import CustomButton from '@/components/common/CustomButton'
import SingleSelectDropDown from '@/components/common/SingleSelectDropDown'
import React, { useEffect, useState } from 'react'


const UserManagementSearch = ({ searchDatas, handleSearchData }) => {
    const [searchData, setSearchData] = useState({})
    const [emailSearchData, setEmailSearchData] = useState([])
    const [roleName, setRoleName] = useState([])


    const handleSearch = (data, target) => {

        setSearchData({
            ...searchData,
            [target]: data
        })

    }

    const handleSearchClick = () => {

        handleSearchData(searchData)
        /*  setSearchData({
             roleName: "",
         }) */
    }

    useEffect(() => {
        if (searchDatas?.length > 0) {

            const roleNameData = searchDatas?.map((item) => ({ label: item?.roleName, value: item?.roleName }))

            const uniqueValues = new Set();
            const uniqueData = roleNameData.filter((entry) => {
                if (!uniqueValues.has(entry.value)) {
                    uniqueValues.add(entry.value);
                    return true;
                }
                return false;
            });

            // Add a new entry with label 'All' and value 'All'
            const modifiedData = [
                { label: 'All', value: 'All' },
                ...uniqueData,
            ];

            setRoleName(modifiedData)



            const searchEmailData = searchDatas.filter((item) => (searchData?.roleName?.value === 'All' || item?.roleName === searchData?.roleName?.value))

            const uniqueValuesSet = new Set();

            const addsearchEmailData = searchEmailData && searchEmailData.reduce((acc, item) => {
                if (!uniqueValuesSet.has(item?.emailId)) {
                    uniqueValuesSet.add(item?.emailId)
                    acc.push({ label: item?.emailId, value: item?.emailId });
                }
                return acc;
            }, [])

            addsearchEmailData.unshift({ label: "ALL", value: "All" });

            setEmailSearchData(addsearchEmailData);

        }

    }, [searchData, searchDatas])




    return (
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-3'>
            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    User Role
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Select roleName"
                        options={roleName}
                        target="roleName"
                        creatableSelect={true}
                        selectedType={searchData?.roleName}
                        handleSelectChange={handleSearch}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    Email
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Select Entity"
                        options={emailSearchData}
                        target="emailId"
                        creatableSelect={true}
                        selectedType={searchData?.emailId}
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
                        placeholder="Select Status"
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
                        handleClick={() => handleSearchClick()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserManagementSearch;