import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';

const DynamicModal = ({ children, isopen, onClose, height = "50%", width = "80%" }) => {
    const [modalOpen, setModalOpen] = useState(isopen);

    useEffect(() => {
        setModalOpen(isopen);
    }, [isopen]);

    const closeModal = () => {
        setModalOpen(false);
        onClose();
    };

    return (
        <div className={`fixed inset-0 backdrop-blur-[1.5px] flex items-center justify-center z-50   transition-all duration-700
            ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div className={`bg-white  w-full  h-full  overflow-auto custom-scroll shadow-[#64646f33_0px_7px_29px_0px]  rounded-lg py-2 md:py-3 transform transition-transform ease-in-out duration-300 relative 
            `}

                style={{ maxHeight: height, maxWidth: width }}
            >
                <div className="absolute flex justify-end right-5 top-5">
                    <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                        <GrClose className="w-5 h-5 font-bold" />
                    </button>
                </div>
                <div className={`h-full`}>{children}</div>
            </div>
        </div>
    );
};

export default DynamicModal;
