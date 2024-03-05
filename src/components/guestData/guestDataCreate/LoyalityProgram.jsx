import CustomButton from "@/components/common/CustomButton";
import CustomModal from "@/components/common/CustomModal";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import LoyalityModel from "./LoyalityModel";
import { LoyalityData, fetchGoldLoyaltyProgram } from "@/assets/data";
import SmCustomModal from "@/components/common/SmCustomModal";
import { useDispatch, useSelector } from "react-redux"
import { BiSolidPencil } from "react-icons/bi";
import { setLotalityData } from "@/store/guestDataCreateSlice";

const initialData = {
  loyaltyPrgMemId: 0,
  goldenId: 0,
  programName: "",
  levelName: "",
  memberId: 0,
  memStartDate: "",
  memEndDate: "",
  membershipStatus: "",
  redemptionHistory: "",
  earningHistory: "",
  loyaltyPoints: 0,
  createById: "data_entry_user_id",
  lastUpdatedById: "data_entry_user_id",
  isDeleted: false,
  source: "res",
  isActiveFlag: true
}

const LoyalityProgram = ({ isHideAll, onHandleHide, allData }) => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [loyality, setLoyality] = useState(initialData)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHideLoyalityProgram, setisHideLoyalityProgram] = useState(true);
  const [updateRowData, setUpdateRowData] = useState({})
  const dispatch = useDispatch();

  const handleLoyalityModal = () => {
    setIsModalOpen(true);
    setUpdateRowData({});
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateRowData({});
    setLoyality(initialData)
  };

  useEffect(() => {

    if (allData?.loyaltyProgramMemberships?.length > 0) {
      setRowData(allData?.loyaltyProgramMemberships)
      dispatch(setLotalityData(allData?.loyaltyProgramMemberships));
    }else{
      setRowData([])
    }
  }, [allData])

  const [columnDefs] = useState([
    {
      field: "programName",
      headerName: "Loyality Program Membership",
      minWidth: 150,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "levelName",
      headerName: "Level",
      minWidth: 150,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "memStartDate",
      headerName: "Start Date",
      minWidth: 150,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "memEndDate",
      headerName: " End Date",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "earningHistory",
      headerName: "Earning History ",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "redemptionHistory",
      headerName: "Remption History ",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "loyaltyPoints",
      headerName: "Loyality Points ",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "isActiveFlag",
      headerName: "Is Active ",
      minWidth: 150,
      maxWidth: 200,
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
    },
    {

      field: '', headerName: "Edit", minWidth: 60, maxWidth: 80, cellRenderer: (params) => {
        const data = params.data;
        return (
          <div className="flex items-center justify-center h-full  ">
            <button
              onClick={(e) => handleEdit(e, data)}
            >
              <BiSolidPencil className="w-6 h-6 text-blue-B40" />
            </button>
          </div>
        );
      },
    },
  ]);

  const defaultColDef = {
    filter: true,
    sortable: true,

    flex: 1,
    headerComponentParams: { placeholder: "Enter Member ID" },
    resizable: true,
    suppressMovable: true,
    resizable: false,
    cellStyle: {
      color: "#3B475A",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      fontFamily: "Assistant",
    },
    headerClass: "whitespace-normal",
    wrapText: true,
    autoHeight: true,
  };

  const frameworkComponents = {
    agCheckboxCellRenderer: (params) => {

      return (
        <input
          type="checkbox"
          checked={params.value}
          onChange={() =>
            params.api.startEditingCell({
              rowKey: params.node.id,
              colKey: params.column.colId,
            })
          }
          onBlur={() => params.api.stopEditing()}
        />
      );
    },
  };

  const onGridReady = (params) => {
    tableRef.current = params.api;
  };

  const handleCellClicked = (param) => { };

  const gridOptions = {
    rowClass: "custom-row-hover",
  };

  /*   useEffect(() => {
      if (loyality?.length > 0) {
        const newData = loyality?.map((item) => ({
          id: item?.id,
          programName: item?.loyaltyprogrammembership?.value,
          levelName: item?.tierlevel?.value,
          memStartDate: item?.membershipstartdate,
          memEndDate: item?.membershipenddate,
          earningHistory: item?.earninghistory,
          redemptionHistory: item?.redemtionhistory,
          loyaltyPoints: item?.loyaltypoints,
          isActiveFlag: item?.isActive,
        }));
        setRowData(newData);
      }
    }, [loyality]) */

  useEffect(() => {
    setisHideLoyalityProgram(isHideAll)
  }, [isHideAll])

  const handleHide = (e) => {
    e.stopPropagation();
    setisHideLoyalityProgram(!isHideLoyalityProgram);
    onHandleHide(!isHideLoyalityProgram);
  }

  const handleEdit = (e, data) => {
    e.stopPropagation();
    setUpdateRowData(data);
    // console.log(data);
    setIsModalOpen(true);
  }

  const UpdatedData = (data) => {

    if (data?.length > 0) {
      const modifyData = data.map(item => {

        // console.log(item?.loyaltyPoints);
        // console.log(+item?.loyaltyPoints);

        return {
          ...item,
          programName: item?.programName?.value?.length > 0 ? item?.programName?.value : item?.programName,
          levelName: item?.levelName?.value?.length > 0 ? item?.levelName?.value : item?.levelName,
          loyaltyPoints: +item?.loyaltyPoints
        }
      });
      setRowData(modifyData);
      dispatch(setLotalityData(modifyData));
    }

  }



  return (
    <div className="flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-2 h-full custom-scroll">

      <SmCustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <LoyalityModel onClose={closeModal} updateRowData={updateRowData} UpdatedData={UpdatedData} rowData={rowData} allData={allData?.guest} initialData={initialData} loyality={loyality} setLoyality={setLoyality}/>
      </SmCustomModal>

      <div className="flex items-center gap-3">

        <FaChevronDown className={`h-4 w-4 transform ${!isHideLoyalityProgram ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-transform duration-300 ease-in-out`} onClick={(e) => handleHide(e)} />

        <div className=" w-[190px] flex gap-2   ">
          <CustomButton
            name="Loyality Program"
            handleClick={() => handleLoyalityModal()}
            isDisable={false}
            isLoading={false}
            icon={<MdOutlineAdd className="h-6 w-6  " />}
          />
        </div>
      </div>

      {isHideLoyalityProgram && <div className="flex w-full h-full min-h-[30vh] pb-10  xl:max-h-[60%]  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto "
          style={{ width: "100%" }}
        >
          <AgGridReact
            ref={tableRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            frameworkComponents={frameworkComponents}
            enableBrowserTooltips={true}
            tooltipShowDelay={{ tooltipShowDelay: 2 }}
            rowSelection="multiple"
            pagination={true}
            onCellClicked={handleCellClicked}
            gridOptions={gridOptions}
            paginationAutoPageSize={true}
            onGridReady={onGridReady}
            suppressCopyRowsToClipboard={true}
            animateRows={true}
          />
        </div>
      </div>}
    </div>
  );
};

export default LoyalityProgram;
