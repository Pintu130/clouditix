import { GuestCreateAddressData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

const GuestCreateAddress = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(GuestCreateAddressData);
  const [columnDefs] = useState([
    {
      field: "addressType",
      headerName: "AddressType",
      minWidth: 100,
      maxWidth: 150,
      filter: true,
    },
    {
      field: "addressLine1",
      headerName: "Address Line 1",
      minWidth: 100,
      maxWidth: 200,
      filter: true,
    },
    {
      field: "addressLine2",
      headerName: "Address Line 2",
      minWidth: 100,
      maxWidth: 150,
      filter: true,
    },
    {
      field: "addressLine3",
      headerName: " Address Line 3",
      minWidth: 200,
      maxWidth: 250,
    },
    {
      field: "city",
      headerName: "City ",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      field: "state",
      headerName: "State",
      minWidth: 180,
      maxWidth: 250,
    },
    {
      field: "country",
      headerName: "Country",

      minWidth: 80,
      maxWidth: 100,

      editable: true,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",

      minWidth: 80,
      maxWidth: 100,

      editable: true,
    },
    {
      field: "isActive",
      headerName: "isActive",
      cellClass: "uppercase",
      minWidth: 80,
      maxWidth: 100,
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
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <FaChevronDown className="h-4 w-4" />
        <div className=" w-[150px] flex gap-2   ">
          <CustomButton
            name="Address"
            handleClick={() => {}}
            isDisable={false}
            isLoading={false}
            icon={<MdOutlineAdd className="h-6 w-6  " />}
          />
        </div>
      </div>

      <div className="flex w-full h-full min-h-[50vh] pb-10  xl:max-h-[30%]  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto max-h-[140px]"
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
      </div>
    </div>
  );
};

export default GuestCreateAddress;
