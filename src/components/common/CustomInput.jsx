import React from 'react'

function CustomInput({ label = "", placeholder = "", name = "", value = "", onChange, errors = "", isRequired = false, isIcon = false, isNUmber = false, isdisablad=false }) {
    return (
        <div className="relative flex flex-col w-full gap-1">
            {label?.length > 0 && <label htmlFor={name} className="text-[#5A5A5A] text-base font-normal">{label || ""}
                {isRequired && <span className='text-[#FF0000] text-[20px] pl-1'>*</span>}
            </label>}
            <input
                type={isNUmber ? "number" : "text"}
                placeholder={placeholder || ""}
                autoComplete='false'
                id={name}
                name={name || ""}
                value={value || ""}
                onChange={(e) => onChange(e)}
                disabled={isdisablad}
                className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none
                ${isIcon ? "pr-7" : ""}
                ${errors?.length > 0 ? 'border-Error' : 'border-[#4A4A4A]'}
                `} />
            {errors?.length > 0 && <span className='absolute pt-1 text-sm font-normal leading-4 -bottom-4 text-Error animate-fade-in '>{errors}</span>}
        </div>
    )
}

export default CustomInput 