import React, { useEffect, useState } from "react";

import { ChartTabData } from "@/assets/data";
import Header from "../Header";
import DataQualityRules from "../Configuration/DataQualityRules";
import Dashboard from "../Dashboard/Dashboard";
import DataMatchingRules from "../Configuration/DataMatching/DataMatchingRules";
import SurvivorshipRules from "../Configuration/SurvivorshipRules/SurvivorshipRules";
import RolesAndPermissions from "../Configuration/RolesAndPermissions/RolesAndPermissions";
import UserManagement from "../Configuration/UserManagement/UserManagement";
import GuestDataSearch from "../guestData/guestDataSearch/GuestDataSearch";
import GuestDataCreate from "../guestData/guestDataCreate/GuestDataCreate";
import GuestDataCrossRef from "../guestData/GuestDataCrossRef/GuestDataCrossRef";
import GuestDataManual from "../guestData/GuestDataCrossRefManual/GuestDataManual";
import Batchjobs from "../auditLogs/batchJobs/Batchjobs";
import Guest360Dashboard from "../guestData/guest360Dashboard/Guest360Dashboard";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setAccLevel } from "@/store/roleSlice";

function ChartsPage({ handlelogout }) {
  const getSingleRole = useSelector((state) => state?.roleSlice?.singleRole);
  // console.log("🚀 ~ ChartsPage ~ getSingleRole:", getSingleRole)
  const [subSelectedTab, setSubSelectedTab] = useState("Guest 360 Dashboard");
  // console.log("🚀 ~ ChartsPage ~ subSelectedTab:", subSelectedTab)
  const [tabs, setTabs] = useState(ChartTabData);
  // console.log("🚀 ~ ChartsPage ~ tabs:", tabs)
  const dispatch = useDispatch();

  const checkData = (name) => {
    if (getSingleRole.value?.length > 0) {
      const scrName = getSingleRole?.value?.find(item => item?.screenName === name);
      console.log("🚀 ~ useEffect ~ scrName:77777777777777", scrName)
      dispatch(setAccLevel(scrName?.accessLevel));
    }
  }

  const generateUniqueKey = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `${timestamp}-${random}`;
  };

  const handleChangeTab = (data) => {
    setSubSelectedTab(data?.linkTo)
    checkData(data?.linkTo)
    const convertedData = tabs.map((tab) => ({ ...tab, selected: false }));
    try {
      const previsitTabData = tabs?.filter(
        (item) => item?.key === data?.linkTo
      );
      if (previsitTabData?.length > 0) {
        const updatedAllData = convertedData.map((item) => {
          return item?.key === data?.linkTo
            ? { ...item, selected: true }
            : item;
        });

        setTabs(updatedAllData);
      } else {
        const newTab = {
          id: generateUniqueKey(),
          title: data?.text,
          selected: true,
          key: data?.linkTo,
        };
        setTabs([...convertedData, newTab]);
      }
    } catch (error) {
      console.log(error), "ERROR";
    }
  };
  const changePage = (target = "") => {
    setSubSelectedTab(target);
  };

  return (
    <div>
      <div className="sticky top-0 w-full h-full ">
        <Header
          selectedTab={subSelectedTab}
          handleChangeTab={handleChangeTab}
          handlelogout={handlelogout}
        >
          <div className="flex flex-col w-full h-full">
            <div
              className={`w-full h-full h-screen bg-white custom-scroll overflow-auto
             `}
            >
              <div className="w-full h-full p-px">
                {subSelectedTab === "Data Matching Rules" ? (
                  <div className="h-full">
                    <DataMatchingRules />
                  </div>
                ) : subSelectedTab === "Admin Dashboard" ? (
                  <div className="h-full">
                    <Dashboard />
                  </div>
                ) : subSelectedTab === "Data Quality Rules" ? (
                  <div className="h-full">
                    <DataQualityRules />
                  </div>
                ) : subSelectedTab === "Suvivorship Rule" ? (
                  <div className="h-full">
                    <SurvivorshipRules />
                  </div>
                ) : subSelectedTab === "User Management" ? (
                  <div className="h-full">
                    <UserManagement />
                  </div>
                ) : subSelectedTab === "Roles & Permissions" ? (
                  <div className="h-full">
                    <RolesAndPermissions />
                  </div>
                ) : subSelectedTab === "Guest 360 - Search" ? (
                  <div className="h-full">
                    <GuestDataSearch />
                  </div>
                ) : subSelectedTab === "Guest 360 - Create" ? (
                  <div className="h-full">
                    <GuestDataCreate openGuestSearchPage={changePage} />
                  </div>
                ) : subSelectedTab === "Guest 360 - Cross Ref" ? (
                  <div className="h-full">
                    <GuestDataCrossRef />
                  </div>
                ) : subSelectedTab === "guest-data-cross-ref-manual" ? (
                  <div className="h-full">
                    <GuestDataManual />
                  </div>
                ) : subSelectedTab === "Batch Jobs" ? (
                  <div className="h-full">
                    <Batchjobs />
                  </div>
                ) : subSelectedTab === "Guest 360 Dashboard" ? (
                  <div className="h-full">
                    <Guest360Dashboard />
                  </div>
                ) : (
                  <div className="p-6"> {subSelectedTab}</div>
                )}

              </div>
            </div>
          </div>
        </Header>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ChartsPage;
