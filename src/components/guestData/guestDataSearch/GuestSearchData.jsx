import CustomButton from '@/components/common/CustomButton'
import CustomInput from '@/components/common/CustomInput'
import SingleSelectDropDown from '@/components/common/SingleSelectDropDown'
import React, { useState } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const customStyles = {
    option: (provided, state) => {
        return ({
            ...provided,
            backgroundColor: state.isSelected ? '#114391' : state?.isFocused ? "#CBDDF9" : '',
            color: state.isSelected ? 'white' : state.isHovered ? 'black' : 'black',
            cursor: "pointer",
        })
    },
    singleValue: (provided) => ({
        ...provided,
        color: 'black',
    }),
    control: (provided, state) => {
        return ({
            ...provided,
            boxShadow: state?.isFocused ? '0 0 0 1.5px #046e04' : "",
        })
    },
    indicatorSeparator: () => ({
        display: 'none',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#4A4A4A',
        fontSize: "17px",
        fontWeight: "400",
        fontFamily: "OpenSans"
    }),
};

const and = [
    { label: 'AND', value: 'AND' }
]
const guestid = [
    { label: 'guestid', value: 'guestid' }
]
const is = [
    { label: 'is', value: 'is' }
]

const GuestSearchData = () => {
    const animatedComponents = makeAnimated();
    const [searchData, setSearchData] = useState([]);

    const handleOnchange = (index, field, value) => {
        setSearchData((prevData) =>
            prevData.map((item, i) => i === index ? { ...item, data: { ...item.data, [field]: value } } : item)
        );
    }

    console.log(searchData);

    const handleAddRule = () => {
        setSearchData((prevData) => [
            ...prevData,
            {
                type: 'rule',
                data: { and: null }
            }
        ]);
    }

    const handleAddGroup = () => {
        setSearchData((prevData) => [
            ...prevData,
            {
                type: 'group',
                data: { guestid: null, is: null, groupName: null }
            }
        ])
    }

    const handleReset = () => {
        setSearchData([]);
    }

    const handleSave = () => {
        console.log(searchData);
    }

    return (
        <>
            <div className='flex items-center justify-between w-full'>
                <span className='text-2xl font-semibold w-full'>Search</span>

                <div className="w-full flex items-center justify-end  gap-4 px-8 ">
                    <div className="w-full max-w-[150px]">
                        <CustomButton
                            name="Reset"
                            handleClick={() => handleReset()}
                            isDisable={false}
                            isLoading={false}
                        />
                    </div>
                    <div className="w-full max-w-[150px]">
                        <CustomButton
                            name="Search"
                            handleClick={() => handleSave()}
                            isDisable={false}
                            isLoading={false}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-[23vh] flex justify-between gap-3 border border-gray-400 rounded-lg px-4 py-4 overflow-auto ">
                <div className="flex flex-col gap-3 w-full py-2">
                    <div className="flex gap-4 w-full ">
                        <div className="w-full max-w-[300px] lg:max-w-[20%]">
                            <Select
                                placeholder="AND"
                                isMulti={false}
                                styles={customStyles}
                                name='and'
                                options={[]}
                                value={searchData?.and}
                                onChange={handleOnchange}
                                components={animatedComponents}
                                className='capitalize'
                            />
                        </div>
                        <div>
                            <div className="w-full max-w-[150px] ">
                                <CustomButton
                                    name="Rule"
                                    handleClick={handleAddRule}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-full max-w-[150px]  ">
                                <CustomButton
                                    name="Group"
                                    handleClick={handleAddGroup}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='py-2 flex justify-center gap-2 flex-col'>
                        {
                            searchData.map((item, index) => {
                                return (
                                    <div key={index} className=''>
                                        {
                                            item.type === 'rule' ? (
                                                <div className="flex gap-4 w-full">
                                                    <div className="w-full max-w-[300px] lg:max-w-[20%]">
                                                        <Select
                                                            placeholder="AND"
                                                            isMulti={false}
                                                            styles={customStyles}
                                                            name='and'
                                                            options={and}
                                                            value={item.data.and}
                                                            onChange={(selectedOption) => handleOnchange(index, 'and', selectedOption)}
                                                            components={animatedComponents}
                                                            className='capitalize'
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="w-full max-w-[150px]  ">
                                                            <CustomButton
                                                                name="Rule"
                                                                handleClick={() => { }}
                                                                isDisable={false}
                                                                isLoading={false}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="w-full max-w-[150px]  ">
                                                            <CustomButton
                                                                name="Group"
                                                                handleClick={() => { }}
                                                                isDisable={false}
                                                                isLoading={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex gap-4 w-full">
                                                    <div className="w-full max-w-[300px] lg:max-w-[20%]">
                                                        <Select
                                                            placeholder="Guest_ID"
                                                            isMulti={false}
                                                            styles={customStyles}
                                                            name='guestid'
                                                            options={guestid}
                                                            value={item.data.guestid}
                                                            onChange={(selectedOption) => handleOnchange(index, 'guestid', selectedOption)}
                                                            components={animatedComponents}
                                                            className='capitalize'
                                                        />
                                                    </div>
                                                    <div className="w-full max-w-[300px] lg:max-w-[10%]">
                                                        <Select
                                                            placeholder="IS"
                                                            isMulti={false}
                                                            styles={customStyles}
                                                            name='is'
                                                            options={is}
                                                            value={item.data.is}
                                                            onChange={(selectedOption) => handleOnchange(index, 'is', selectedOption)}
                                                            components={animatedComponents}
                                                            className='capitalize'
                                                        />
                                                    </div>
                                                    <div className="w-full max-w-[300px] lg:max-w-[30%]">
                                                        <CustomInput
                                                            isNUmber={false}
                                                            isRequired={true}
                                                            isIcon={true}
                                                            label=""
                                                            placeholder=""
                                                            name="groupName"
                                                            value={item.data.groupName}
                                                            onChange={(e) => handleOnchange(index, 'groupName', e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>

    )
}

export default GuestSearchData