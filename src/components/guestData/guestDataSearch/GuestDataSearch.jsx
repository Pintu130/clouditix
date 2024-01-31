import { fetchSearchGeust } from "@/assets/data";

import { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from "react-icons/bi";
import GuestSearchData from "./GuestSearchData";
import { useDispatch } from "react-redux"
import { setChangeTab, setDetails, setEdititem } from "@/store/guestDetails";


const GuestDataSearch = () => {
  const tableRef = useRef({});
  const [rowData, setRowData] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    ; (
      async () => {
        const data = await fetchSearchGeust()
        if (data?.length > 0) {
          setRowData(data);
        }
      }
    )()
  }, [])

  const handleRestart = async () => {
    const data = await fetchSearchGeust()
    if (data?.length > 0) {
      setRowData(data);
    }
  };



  const [columnDefs] = useState([
    {
      field: "goldenId",
      headerName: "golden_id ",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "guestCategoryTypeDesc",
      headerName: "guest_category_type",
      minWidth: 180,
      maxWidth: 220,
    },
    {
      field: "fullName",
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
      field: "companyName",
      headerName: "company_name",

      minWidth: 150,
      maxWidth: 200,
      editable: true,
    },
    {
      field: "addressLine1",
      headerName: "address_line_1",

      minWidth: 150,
      maxWidth: 200,
      editable: true,
    },
    {
      field: "addressLine2",
      headerName: "address_line_2",

      minWidth: 150,
      maxWidth: 200,
      editable: true,
    },
    {
      field: "addressLine3",
      headerName: "address_line_3",

      minWidth: 150,
      maxWidth: 200,
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
      field: "startDate",
      headerName: "start_date",

      minWidth: 150,
      maxWidth: 190,
      editable: true,
    },
    {
      field: "mobilePhoneCountryCode",
      headerName: "country_code",

      minWidth: 150,
      maxWidth: 190,
      editable: true,
    },
    {
      field: "mobilePhone",
      headerName: "mobile_phone",

      minWidth: 150,
      maxWidth: 190,
      editable: true,
    },
    {
      field: "personalEmail",
      headerName: "personal_email",

      minWidth: 150,
      maxWidth: 190,
      editable: true,
    },
    {
      field: "isActiveFlag",
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
          <div className="flex items-center justify-center h-full  " onClick={(e) => handleEdit(e, data)}>
            <button >
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

  const handleEdit = (e, data) => {
    e.stopPropagation();
    dispatch(setEdititem('Edit'));
  };

  const handleCellClicked = (param) => {
    const data = param?.data?.goldenId
    dispatch(setDetails(data));

    const Link = { text: 'Guest Data - Create', linkTo: 'guest-data-create', icon: '' };
    dispatch(setChangeTab(Link));
  };

  const handleRoeData = (data) => {
    setRowData(data)
  }

  return (
    <div className="w-full h-full flex flex-col  items-center gap-6 px-6 py-4  ">

      <GuestSearchData rowData={rowData} handleRoeData={handleRoeData} handleRestart={handleRestart} />

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
