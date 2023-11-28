import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ selectedDate, onChange, name }) => {
    const handleChange = (data) => {
        const dateData = {
            data, type: "date", target: name
        }
        onChange(dateData)
    }
    return (
        <>
            {/*  <DatePicker
                selected={selectedDate}
                onChange={onChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="MM/DD/YYYY"
            /> */}

            {/* <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="MM/DD/yyyy"
                showMonthYearPicker
                placeholderText="MM/YYYY" /> */}
            <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="MM/dd/yyyy"
                className='font-medium text-black font-Assistant'
                placeholderText="MM/DD/YYYY"
            />

        </>
    );
};

export default DatePickerComponent;
