import React from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

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

function SingleSelectDropDown({ handleSelectChange, selectedType, options, placeholder = "", target = "", isDisabled = false, isCreatable = true }) {
    const animatedComponents = makeAnimated();
    const handleChange = (data) => {
        handleSelectChange(data, target)
    }
    return (
        <div className="w-full">
            {isCreatable ? <CreatableSelect
                placeholder={""}
                isClearable={true}
                isMulti={false}
                styles={customStyles}
                options={options}
                value={selectedType}
                isDisabled={isDisabled}
                onChange={handleChange}
                components={animatedComponents}
            /> :
                <Select
                    placeholder={""}
                    isClearable={true}
                    isMulti={false}
                    styles={customStyles}
                    options={options}
                    value={selectedType}
                    isDisabled={isDisabled}
                    onChange={handleChange}
                    components={animatedComponents}
                />}
        </div>
    )
}

export default SingleSelectDropDown