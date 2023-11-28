import React, { useEffect, useState } from 'react';
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
            border: state?.isFocused ? "2px solid #092C63" : state?.menuIsOpen ? '2px solid #092C63' : "0.5px solid #A6A6A6",
            boxShadow: 'none'

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
    menuList: (provided, state) => ({
        ...provided,
        maxHeight: '200px',
        overflowY: 'auto',

        '@media screen and (max-width: 600px)': {
            maxHeight: '300px',
        },
    }),
};

const MultiSelectDropdown = ({
    placeholder = "",
    selectOptionData = [],
    onMultiSelectChange, target = "", label = "", isMultiSelect = false, isClear = false, allData = [], isMenuDisable = false }) => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    // useEffect(() => {
    //     setSelectedOptions([])
    //     onMultiSelectChange([], target)
    // }, [isClear])


    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        onMultiSelectChange(selectedOptions, target)
    };

    const animatedComponents = makeAnimated();
    return (
        <div className="flex items-center justify-between w-full gap-4 ">
            <label className='text-[#5A5A5A]  whitespace-nowrap w-[130px] text-base font-normal' htmlFor="">{label}</label>
            <div className='w-full custom-select 2xl:max-w-[490px]'>
                {isMenuDisable ?
                    <Select
                        isClearable={true}
                        styles={customStyles}
                        placeholder={""}
                        components={animatedComponents}

                        // dynamic
                        isMulti={isMultiSelect}
                        options={allData}
                        value={selectOptionData}
                        onChange={handleChange}


                        closeMenuOnSelect={!isMultiSelect}
                        menuIsOpen={false}
                    />
                    : <Select
                        isClearable={true}
                        styles={customStyles}
                        placeholder={""}
                        components={animatedComponents}

                        // dynamic
                        isMulti={isMultiSelect}
                        options={allData}
                        value={selectOptionData}
                        onChange={handleChange}

                        closeMenuOnSelect={!isMultiSelect}
                    />}

            </div>
        </div>
    );
};

export default MultiSelectDropdown;
