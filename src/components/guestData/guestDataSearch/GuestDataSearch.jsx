import { GuestDataSearchData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import { useCallback, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from "react-icons/bi";
import GuestSearchData from "./GuestSearchData";


const GuestDataSearch = () => {
  const tableRef = useRef({});
  const [rowData, setRowData] = useState(GuestDataSearchData);

  const handleSearch = () => { };

  const handleEdit = (e, data) => {
    e.stopPropagation();

  };

  const [columnDefs] = useState([
    {
      field: "guest_id",
      headerName: "guest_id ",
      minWidth: 50,
      maxWidth: 90,
    },
    {
      field: "guest_category_type",
      headerName: "guest_category_type",
      minWidth: 180,
      maxWidth: 220,
    },
    {
      field: "full_name",
      headerName: "full_name",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "nationality",
      headerName: "nationality",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "company_name",
      headerName: "company_name",

      minWidth: 150,
      maxWidth: 200,
      editable: true,
    },
    {
      field: "address_line_1",
      headerName: "address_line_1",

      minWidth: 150,
      maxWidth: 200,
      editable: true,
    },
    {
      field: "address_line_2",
      headerName: "address_line_2",

      minWidth: 150,
      maxWidth: 200,
      editable: true,
    },
    {
      field: "address_line_3",
      headerName: "address_line_3",

      minWidth: 100,
      maxWidth: 150,
      editable: true,
    },
    {
      field: "city",
      headerName: "city",

      minWidth: 100,
      maxWidth: 150,
      editable: true,
    },
    {
      field: "country",
      headerName: "country",

      minWidth: 100,
      maxWidth: 150,
      editable: true,
    },
    {
      field: "start_date",
      headerName: "start_date",

      minWidth: 150,
      maxWidth: 190,
      editable: true,
    },
    {
      field: "end_date",
      headerName: "end_date",

      minWidth: 150,
      maxWidth: 190,
      editable: true,
    },
    {
      field: "is_active",
      headerName: "is_active",

      minWidth: 100,
      maxWidth: 150,
      editable: true,
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
    },
    {
      field: "edit",
      headerName: "edit",

      minWidth: 100,
      maxWidth: 150,
      editable: false,
      cellRenderer: (params) => {
        const data = params.data;
        return (
          <div className="flex items-center justify-center h-full  ">
            <button onClick={(e) => handleEdit(e, data)}>
              <BiSolidPencil className="w-6 h-6 text-blue-B40" />
            </button>
          </div>
        );
      },
    },
  ]);

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
  const defaultColDef = {
    filter: true,
    sortable: true,
    floatingFilter: true,
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
    headerClass: "whitespace-normal ",
    wrapText: true,
    autoHeight: true,
  };

  const gridOptions = {
    rowClass: "custom-row-hover",
  };

  const onGridReady = (params) => {
    // tableRef.current = params.api;
  };
  const handleCellClicked = (param) => {
    // console.log(param?.column);
  };

  return (
    <div className="w-full h-full flex flex-col  items-center gap-6 px-6 py-4  ">

      <GuestSearchData />

      <div className="flex w-full min-h-[62vh] pb-10  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto max-h-[800px]"
          style={{ width: "100%" }}
        >
          <AgGridReact
            ref={tableRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            frameworkComponents={frameworkComponents}
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

export default GuestDataSearch;
