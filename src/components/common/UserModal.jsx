import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const UserModal = ({ isOpen, handlelogout}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const router = useRouter()

    const handleItemClick = (e, item) => {
        e.stopPropagation();
        setSelectedItem(item);
        if (item === "Log Out") {
            handlelogout(false);
            router.push("/")
        } else if ("All Services") {
            router.push("/services")
        }
    };

    const handleChengePassword = () => {
        // setOpenChangePassword(true);
    }
    const handleChengePhoto = () => {
        // setOpenChangePhoto(true);
    }

    return (
        <>
            {isOpen && <div className=" relative z-50 border-[1px] border-[#D0D0CE] shadow-[0px_2px_4px_0px_#4A4A4A26] animate-fadeIn" >
                <div className="py-3 bg-white rounded-lg w-72">
                    <Image
                        src="/images/icon/Polygon1.svg"
                        alt='Hibiscus'
                        width="27"
                        height="27"
                        className='flex-shrink-0 absolute -top-4 right-3.5 -z-10'
                    />
                    <ul>

                        <li
                            className={`cursor-pointer hover:bg-[#EBF2FE] px-4 py-2 flex items-center gap-2  ${selectedItem === 'Change Photo' ? 'bg-gray-100' : ''
                                }`}
                            onClick={(e) => handleChengePhoto(e, 'Change Photo')}
                        >
                            <Image src="/images/icon/user.svg"
                                alt='Notification'
                                width="22"
                                height="22"
                                className='cursor-pointer'
                            />
                            <span className='text-base  font-normal leading-6 text-[#4A4A4A] '>Change Photo</span>
                        </li>
                        <li
                            className={`cursor-pointer hover:bg-[#EBF2FE] px-4 py-2 flex items-center gap-2 ${selectedItem === 'Change Password' ? 'bg-gray-100' : ''
                                }`}
                            onClick={(e) => handleChengePassword(e, 'Change Password')}
                        >
                            <Image src="/images/icon/lock.svg"
                                alt='Notification'
                                width="22"
                                height="22"
                                className='cursor-pointer'
                            />
                            <span className='text-base  font-normal leading-6 text-[#4A4A4A] ' >Change Password</span>
                        </li>
                        <hr className='h-[1px] border-[#4A4A4A] ' />
                        <li
                            className={`cursor-pointer  mt-3 hover:bg-[#EBF2FE] px-4 py-2 flex items-center gap-2  ${selectedItem === 'Log Out' ? 'bg-gray-100' : ''
                                }`}
                        onClick={(e) => handleItemClick(e, 'Log Out')}
                        >
                            <Image src="/images/icon/Logout.svg"
                                alt='Notification'
                                width="22"
                                height="22"
                                className='cursor-pointer'
                            />
                            <span className='text-base  font-normal leading-6 text-[#F8251B]' >Log Out</span>
                        </li>
                    </ul>
                </div>
            </div>}
        </>
    );
};

export default UserModal;
