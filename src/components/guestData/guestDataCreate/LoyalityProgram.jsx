import CustomButton from "@/components/common/CustomButton";
import CustomModal from "@/components/common/CustomModal";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import LoyalityModel from "./LoyalityModel";
import { LoyalityData } from "@/assets/data";
import SmCustomModal from "@/components/common/SmCustomModal";
import { useSelector } from "react-redux"

const LoyalityProgram = ({ isHideAll, onHandleHide }) => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(LoyalityData);
  const loyality = useSelector(state => state?.createData?.loyality)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHideLoyalityProgram, setisHideLoyalityProgram] = useState(true);

  const handleLoyalityModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [columnDefs] = useState([
    {
      field: "loyalityProgramMembership",
      headerName: "Loyality Program Membership",
      minWidth: 150,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "tierLevel",
      headerName: "Tier Level",
      minWidth: 150,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      minWidth: 150,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "endDate",
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
      field: "remptionHistory",
      headerName: "Remption History ",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "loyalityPoints",
      headerName: "Loyality Points ",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "isActive",
      headerName: "Is Active ",
      minWidth: 150,
      maxWidth: 200,
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
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
      console.log(params);
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

  useEffect(() => {
    if (loyality?.length > 0) {
      const newData = loyality?.map((item) => ({
        id: rowData?.length + 1,
        loyalityProgramMembership: item?.loyaltyprogrammembership?.value,
        tierLevel: item?.tierlevel?.value,
        startDate: item?.membershipstartdate,
        endDate: item?.membershipenddate,
        earningHistory: item?.earninghistory,
        remptionHistory: item?.redemtionhistory,
        loyalityPoints: item?.loyaltypoints,
        isActive: item?.isActive,
      }));
      setRowData(newData);
    }
  }, [loyality])

  useEffect(() => {
    setisHideLoyalityProgram(isHideAll)
  }, [isHideAll])

  const handleHide = (e) => {
    e.stopPropagation();
    setisHideLoyalityProgram(!isHideLoyalityProgram);
    onHandleHide(!isHideLoyalityProgram);
  }

  return (
    <div className="flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-2 h-full custom-scroll">

      <SmCustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <LoyalityModel onClose={closeModal} />
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
