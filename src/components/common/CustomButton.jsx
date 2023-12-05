import React from 'react'

const CustomButton = ({ name, handleClick, isDisable, isLoading = false, icon }) => {
    return (
        <div className='w-full h-full'>
            <button
                onClick={() => handleClick()}
                className={`h-10  px-6 transition-all duration-500 whitespace-nowrap py-2.5 w-full rounded-[4px] justify-center items-center gap-2 inline-flex text-center text-base font-semibold font-['Open Sans'] leading-normal ${isDisable ? 'bg-gray-G20 text-gray-G40 cursor-not-allowed' : 'bg-[#046e04] cursor-pointer hover:bg-[#096310] text-white'}`}
                disabled={isDisable}
            >
                <div className='flex gap-0.5 items-center justify-center'>
                    <div className='flex items-center justify-center gap-2 tr'>
                        {icon}
                        {name}
                    </div>

                    {isLoading && <span className="animate-pulse">...</span>}
                </div>
            </button>
        </div>
    )
}

export default CustomButton