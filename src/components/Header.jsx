import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import UserModal from './common/UserModal';
import { staticMenuItems } from '@/assets/data';

import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from "react-icons/gr"
import { MdExpandLess, MdExpandMore } from 'react-icons/md';


function Header({ children, handleChangeTab, selectedTab, handlelogout }) {
  const [allMenuData] = useState(staticMenuItems);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPage, setselectedPage] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setselectedPage(selectedTab)
  }, [selectedTab])

  const handleUserIconClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkTo = (link) => {
    handleChangeTab(link)
    setselectedPage(link?.linkTo)

  }


  function MenuItem({ item, handleLinkTo }) {
    const [isChildOpen, setIsChildOpen] = useState(false);
    const [isSubChildOpen, setIsSubChildOpen] = useState(false);

    useEffect(() => {
      if (item?.children?.map(item => item?.linkTo).includes(selectedTab) || (item?.children?.length && item?.children[0].linkTo === "intakeManagement" && selectedPage === "queryView")) {

        setIsChildOpen(true)
      } else {
        setIsChildOpen(false)
      }
    }, [item, selectedPage])

    const toggleChild = (target) => {
      setIsChildOpen(!isChildOpen);
    };

    const handleSubChildClick = (item) => {
      handleLinkTo(item);
      if (item?.children?.map(item => item?.linkTo).includes(selectedTab)) {
        setIsChildOpen(true)
      } else {
        setIsChildOpen(false)
      }
    }

    const toggleSubChild = () => {
      setIsSubChildOpen(!isSubChildOpen);
    };
    return (
      <div className={`flex  ${item.hasChildren ? 'flex-col' : ''} 
      items-${item.hasChildren ? 'start' : 'center hover:bg-[#EBF2FE]'} cursor-pointer  gap-2 py-2 ${selectedPage === item?.linkTo ?
          "bg-[#EBF2FE] " :
          "bg-white "
        }
        ${selectedPage === item?.linkTo ? !item.hasChildren ? "border-l-4 border-[#046e04] " : "border-l-4 border-transparent" : ""
        }
        `}
      >
        <button onClick={item.hasChildren ? () => toggleChild(item) : () => handleSubChildClick(item)} className="flex items-center w-full pl-3">
          <div className={`${selectedPage === item?.linkTo || item?.linkTo === "medicalRecordsCategories" && selectedPage === "medicalRecordsRules" ? "text-[#046e04]" : "text-gray-G60"}`}>
            {item.icon}
          </div>
          <div className='flex justify-between w-full'>
            <span className={`pl-2 text-base font-OpenSans leading-normal 
            ${selectedPage === item?.linkTo ? "text-[#046e04] font-bold" : "text-gray-G60 font-normal"}
              `}
            >{item.text}</span>
            {item.hasChildren && (isChildOpen ? <MdExpandLess className='w-6 h-6 mx-3' /> : <MdExpandMore className='w-6 h-6 mx-3' />)}
          </div>
        </button>

        {isChildOpen && item.children && (
          <ul className="w-full py-2">
            {item.children.map((child, index) => {
              return (
                <li key={index} onClick={!child.hasChildren ? () => handleSubChildClick(child) : undefined} className={`
                pl-8 py-2 hover:bg-[#EBF2FE] font-medium flex items-center gap-2
                  ${selectedPage === child?.linkTo ||
                    (child?.linkTo === "intakeManagement" && selectedPage === "queryView") ?
                    !child.hasChildren ? "border-l-4 text-[#046e04] border-[#046e04]" : "border-l-4 border-transparent" : "border-l-4 border-transparent"}
                  
                  `}
                >
                  <div className={`${selectedPage === child?.linkTo ? "text-[#046e04]" : "text-gray-G60 "}`}>
                    {child.icon}
                  </div>
                  {!child.hasChildren && child.text}
                  {child.hasChildren && (
                    <button onClick={() => toggleSubChild(child)} className="flex items-center w-full">
                      <div className='flex justify-between w-full'>
                        <span className="">{child.text}</span>
                        {isSubChildOpen ? <MdExpandLess className='w-6 h-6' /> : <MdExpandMore className='w-6 h-6' />}
                      </div>
                    </button>
                  )}
                  {isSubChildOpen && child.children && (
                    <ul className="w-full py-2 pl-8">
                      {child.children.map((subChild, subIndex) => (
                        <li key={subIndex} onClick={() => handleSubChildClick(subChild)} className="py-2 hover:bg-[#EBF2FE]">{subChild.text}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            }
            )}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div onClick={() => {
      handleCloseModal()
    }} className="relative ">
      <div className='px-3 pt-3 shadow-[0px_4px_6px_0px_#1143911A]  z-10 '>
        <div className='flex justify-between border-b '>
          <button className='flex items-center flex-shrink-0 gap-3 '>
              {!isSidebarOpen ? <AiOutlineMenu className='w-4 h-4 cursor-pointer sm:h-6 sm:w-6' onClick={toggleSidebar} /> : <GrClose className='w-4 h-4 cursor-pointer sm:h-6 sm:w-6 ' onClick={toggleSidebar} />}
            <Image
              src="/images/icon/logo.png"
              alt='HOM-logo'
              width="163"
              priority
              height="40"
              className='flex-shrink-0 w-[163px] h-auto pb-2'
            />
            <span className='text-xl font-bold'>Guest 360</span>
          </button>
          <div className='flex gap-4 items-center '>
            <Image src="/images/icon/Notification.svg" alt='Notification'
              width="40"
              height="40"
              className='cursor-pointer'
            />
            <div className="relative flex-shrink-0 bg-[#046e04] rounded-full w-9 h-9" onClick={(e) => handleUserIconClick(e)}>
              <div className="absolute flex items-center justify-center w-full h-full text-base font-bold leading-normal text-white cursor-pointer">CR</div>
              <div className=' absolute top-16 -right-2.5 z-50 custom-box-shadow '>
                <UserModal isOpen={isModalOpen} onClose={handleCloseModal} handlelogout={handlelogout} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex w-full h-full md:static'>
        {isSidebarOpen && <div
          className={`bg-white  absolute md:relative top-0 z-20 text-white mt-[7px] w-full max-w-[300px]  transition-all  duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }  ${allMenuData?.length < 9 ? "" : "overflow-auto"}`}
        >
          <div className="text-black absolute -top-[7px] bg-transparent h-5 border-r border-[#A6A6A6] w-full">

          </div>
          <div className="text-black min-h-screen border-r border-[#A6A6A6] h-full">
            <div className="mt-2">
              {allMenuData?.length > 0 &&
                allMenuData.map((item, index) => (
                  <MenuItem handleLinkTo={handleLinkTo} key={index} item={item} />
                ))}
            </div>
          </div>
        </div>}

        <div className={`flex transition-all duration-700 items-start justify-start w-full`}>
          {children}
        </div>

      </div>
    </div>
  )
}

export default Header     