import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
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

function SingleSelectDropDown({ handleSelectChange, selectedType, options, placeholder = "", target = "", creatableSelect, isClearable = true, isDisabled = false, iscapitalize=false }) {
    const animatedComponents = makeAnimated();
    const handleChange = (data) => {
        handleSelectChange(data, target)
    }
    return (
        <div className="w-full">
            {creatableSelect ? <CreatableSelect
                placeholder={placeholder}
                isClearable={isClearable}
                isMulti={false}
                styles={customStyles}
                options={options}
                value={selectedType}
                onChange={handleChange}
                components={animatedComponents}
                className={iscapitalize ? 'capitalize' : ''}
                isDisabled={isDisabled}
            /> : <Select
                placeholder={placeholder}
                isClearable={isClearable}
                isMulti={false}
                styles={customStyles}
                options={options}
                value={selectedType}
                onChange={handleChange}
                components={animatedComponents}
                className={iscapitalize ? 'capitalize' : ''}
                isDisabled={isDisabled}
            />}
        </div>
    )
}

export default SingleSelectDropDown