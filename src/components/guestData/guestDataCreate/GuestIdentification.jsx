import { IdentificationData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomModal from "@/components/common/CustomModal";
import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import IdentificationModel from "./IdentificationModel";
import SmCustomModal from "@/components/common/SmCustomModal";

const GuestIdentification = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(IdentificationData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIdentificationModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [columnDefs] = useState([
    {
      field: "identificationType",
      headerName: "Identification Type",
      minWidth: 200,
      maxWidth: 250,
      filter: true,
    },
    {
      field: "identificationValue",
      headerName: "identification Value",
      minWidth: 200,
      maxWidth: 250,
      filter: true,
    },
    {
      field: "issuingCountry",
      headerName: "Issuing Country",
      minWidth: 200,
      maxWidth: 250,
      filter: true,
    },
    {
      field: "issueDate",
      headerName: " Issue Date",
      minWidth: 200,
      maxWidth: 250,
    },
    {
      field: "expiryDate",
      headerName: "Expiry Date ",
      minWidth: 200,
      maxWidth: 250,
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
    // params.api.setEditable(true);
  };

  const handleCellClicked = (param) => {
    // console.log(param?.column);
  };

  const gridOptions = {
    rowClass: "custom-row-hover",
    // domLayout: 'autoHeight',
  };
  return (
    <div className="flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-2 h-full max-h-[250px] custom-scroll">

      <SmCustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <IdentificationModel onClose={closeModal} />
      </SmCustomModal>

      <div className="flex items-center gap-3">
        <FaChevronDown className="h-4 w-4" />
        <div className=" w-[150px] flex gap-2   ">
          <CustomButton
            name="Identification"
            handleClick={() => handleIdentificationModal()}
            isDisable={false}
            isLoading={false}
            icon={<MdOutlineAdd className="h-6 w-6  " />}
          />
        </div>
      </div>

      <div className="flex w-full h-full min-h-[25vh] pb-10  xl:max-h-[30%]  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto max-h-[150px]"
          style={{ width: "70%" }}
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
      </div>
    </div>
  );
};

export default GuestIdentification;
