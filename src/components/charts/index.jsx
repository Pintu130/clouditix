import React, { useEffect, useState } from 'react'

import { ChartTabData, intakeSubTabs, medicalRecordsTabs } from '@/assets/data';
import Header from '../Header'
import DataQualityRules from '../Configuration/DataQualityRules';

function ChartsPage({handlelogout}) {
  const [subSelectedTab, setSubSelectedTab] = useState('');
  const [tabs, setTabs] = useState(ChartTabData);



  useEffect(() => {
    const targetTab = tabs.find(tab => tab.selected);
    setSubSelectedTab(targetTab?.key)
  }, [tabs])

  const generateUniqueKey = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `${timestamp}-${random}`;
  }

  const handleChangeTab = (data) => {
    const convertedData = tabs.map(tab => ({ ...tab, selected: false }))
    try {
      const previsitTabData = tabs?.filter(item => item?.key === data?.linkTo);
      if (previsitTabData?.length > 0) {
        const updatedAllData = convertedData.map(item => {
          return (item?.key === data?.linkTo) ? { ...item, selected: true } : item
        }
        );

        setTabs(updatedAllData);
      } else {
        if (data?.linkTo === "intakeManagement") {
          const newTab = {
            id: generateUniqueKey(),
            title: data?.text,
            selected: true,
            key: data?.linkTo,
            subTabs: intakeSubTabs
          };

          setTabs([...convertedData, newTab]);
        }
        else if (data?.linkTo === "medicalRecordsCategories") {
          const newTab = {
            id: generateUniqueKey(),
            title: data?.text,
            selected: true,
            key: data?.linkTo,
            subTabs: medicalRecordsTabs
          };

          setTabs([...convertedData, newTab]);
        } else {
          const newTab = {
            id: generateUniqueKey(),
            title: data?.text,
            selected: true,
            key: data?.linkTo,

          };

          setTabs([...convertedData, newTab]);
        }
      }
    } catch (error) {
      console.log(error), "ERROR";
    }
  }

  return (
    <div>
      <div className='sticky top-0 w-full h-full '>
        <Header selectedTab={subSelectedTab} handleChangeTab={handleChangeTab} handlelogout={handlelogout}>
          <div className='flex flex-col w-full h-full'>
            <div className={`w-full 2xl:h-full h-screen bg-white custom-scroll overflow-auto  
             ${subSelectedTab === "charts" ? "p-3" : ""}
             ${subSelectedTab === "loi" ? "h-full" : "3xl:h-[90vh] "}
             `}>
              <div className='w-full h-full p-px'>
                {subSelectedTab === "data-quality-rules" ?
                  <div className='h-full'>
                    <DataQualityRules />
                  </div>
                  :
                  (
                    <div className="p-6"> {subSelectedTab}</div>
                  )}
              </div>
            </div>
          </div>
        </Header>
      </div >
    </div >
  )
}

export default ChartsPage