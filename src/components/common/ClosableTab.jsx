import React from 'react';
import { GrClose } from "react-icons/gr"

function ClosableTab({ title, isSelected, onClose, onSelect, isClosable, count = 0 }) {
  const closeClick = (e) => {
    e.stopPropagation()
    onClose()
  }
  return (
    <div
      className={`flex gap-2 pl-5 pr-3 py-1.5 items-center transition-colors cursor-pointer duration-500 ${isSelected ? '  bg-white border  border-gray-G20 rounded-t-md relative' : ''} `}
      onClick={onSelect}
    >
      {isSelected && <div className="w-full h-2 bg-white absolute left-0 -bottom-2"></div>}
      <div className={`text-base transition-all duration-700 leading-6 first-letter:capitalize text-gray-G60 font-IBMPlexSans whitespace-nowrap ${isSelected ? "font-bold" : "font-medium"} `}>{title} {count > 0 ? `(${count})` : ""}</div>
      {isClosable && <GrClose className={`h-6  p-1  w-6 cursor-pointer text-red-200 `} onClick={(e) => closeClick(e)} />}
    </div>
  );
}

export default ClosableTab