import React, { useEffect, useState } from 'react'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'
import SingleSelectDropDown from '../common/SingleSelectDropDown'
import { attributeSearch, datasourceData, entitySearch, rulesearch, statussearch } from '@/assets/data'

const DataQualitySearch = ({ rowData }) => {
    const [searchData, setSearchData] = useState({})
    const [entitySearchData, setEntitySearchData] = useState(entitySearch)
    const [attiributeSearchData, setAttiributeSearchData] = useState(attributeSearch)
    const [ruleSearchData, setRuleSearchData] = useState(rulesearch)


    const handleSearch = (data, target) => {

        setSearchData({
            ...searchData,
            [target]: data
        })

    }

    useEffect(() => {
        if (rowData?.length > 0) {
            const searchentitiData = rowData.filter((item) => item?.dataSource === searchData?.datasource?.value)

            const uniqueValuesSet = new Set();

            const addsearchentitiData = searchentitiData && searchentitiData.reduce((acc, item) => {
                if (!uniqueValuesSet.has(item?.tableName)) {
                    uniqueValuesSet.add(item?.tableName)
                    acc.push({ label: item?.tableName, value: item?.tableName });
                }
                return acc;
            }, [])

            addsearchentitiData.unshift({ label: "ALL", value: "all" });
            setEntitySearchData(addsearchentitiData);

            if (searchData?.entity?.value?.length > 0) {
                const searchattributeData = rowData.filter((item) => item?.tableName === searchData?.entity?.value);

                const uniquAttributeValue = new Set()

                const addAttiributeData = searchattributeData && searchattributeData.reduce((acc, item) => {
                    if (!uniquAttributeValue.has(item?.columnName)) {
                        uniquAttributeValue.add(item?.columnName)
                        acc.push({ label: item.columnName, value: item.columnName });
                    }
                    return acc;
                }, [])
                addAttiributeData.unshift({ label: "ALL", value: "all" });
                setAttiributeSearchData(addAttiributeData);
            }

            if (searchData?.attribute?.value?.length > 0) {
                const searchruleData = rowData.filter((item) => item.columnName === searchData?.attribute?.value)

                const uniquRuleValue = new Set()

                const addRuledata = searchruleData.reduce((acc, item) => {
                    if (!uniquRuleValue.has(item.validationRule)) {
                        uniquRuleValue.add(item.validationRule)
                        acc.push({ label: item.validationRule, value: item.validationRule })
                    }
                    return acc;

                }, [])
                addRuledata.unshift({ label: "ALL", value: "all" });
                setRuleSearchData(addRuledata);
            }
        }

    }, [searchData])




    return (
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-3'>
            <div className="flex flex-col w-full items-center md:items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                <label
                    htmlFor="speciality"
                    className="text-[#5A5A5A] text-base text-center w-full md:w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                >
                    Data Source
                </label>
                <div className="w-full max-w-[300px] lg:max-w-[100%]">
                    <SingleSelectDropDown
                        placeholder="Enter Entity"
                        options={datasourceData}
                        target="datasource"
                        creatableSelect={true}
                        selectedType={searchData?.datasource}
                        handleSelectChange={handleSearch}
                    />
                </div>
            </div>

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
                        options={entitySearchData}
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
                        options={attiributeSearchData}
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
                        options={ruleSearchData}
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