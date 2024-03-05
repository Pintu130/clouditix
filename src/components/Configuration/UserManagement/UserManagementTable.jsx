import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from "react-icons/bi";
import { fetchGetUsers } from "@/assets/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserManagementSearch from "./UserManagementSearch";

const UserManagementTable = ({ accLevel, setRowData, rowData, handleEditData, updateUser, setSearchDatas, searchDatas, ViewallData }) => {
  const tableRef = useRef(null);
  console.log('UserManagementTable---->>', accLevel);

  useEffect(() => {
    ViewallData()
  }, [updateUser]);

  const [columnDefs] = useState([
    {
      field: "firstName",
      headerName: "First Name",
      minWidth: 130,
      maxWidth: 170,
      filter: true,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      minWidth: 130,
      maxWidth: 170,
    },
    {
      field: "emailId",
      headerName: "Email",
      minWidth: 310,
      maxWidth: 350,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      minWidth: 250,
      maxWidth: 300,
    },
    {
      field: "userName",
      headerName: "User Name",
      cellClass: "uppercase",
      minWidth: 200,
      maxWidth: 250,
      editable: true,
    },
    {
      field: "roleName",
      headerName: "User Role",
      cellClass: "uppercase",
      minWidth: 200,
      maxWidth: 250,
      editable: true,
    },
    {
      field: "isActive",
      headerName: "Is Active",
      cellClass: "uppercase",
      minWidth: 100,
      maxWidth: 150,
      cellRenderer: "agCheckboxCellRenderer",
      editable: false,
      floatingFilter: false,
    },
    {
      field: "",
      headerName: "Edit",
      minWidth: 80,
      maxWidth: 100,
      floatingFilter: false,
      cellRenderer: (params) => {
        const data = params.data;
        return (
          <div className="flex items-center justify-center h-full  ">
            <button onClick={(e) => handleEdit(e, data)} disabled={accLevel === 'View' ? true : false}>
              <BiSolidPencil className={`w-6 h-6  ${accLevel === 'View' ? 'text-[#678bb4]' : 'text-blue-B40'}`} />
            </button>
          </div>
        );
      },
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      editable: true,
      filter: true,
      sortable: true,
      floatingFilter: true,
      resizable: true,
      suppressMovable: true,
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
  }, []);

  const frameworkComponents = {
    agCheckboxCellRenderer: (params) => {
      return (
        <input
          type="checkbox"
          checked={params.value}
          disabled={accLevel === 'View' ? true : false}
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

  const handleCellClicked = (param) => { };

  const gridOptions = {
    rowClass: "custom-row-hover",
  };

  const onGridReady = (params) => {
    tableRef.current = params.api;
  };

  const handleEdit = (e, data) => {
    handleEditData(data);
  };

  const handleSearchData = (data) => {
    if (Object.keys(data).length > 0) {
      const searchData = searchDatas?.filter(
        (item) =>
          (data?.roleName?.value === "All" ||
            item?.roleName === data?.roleName?.value) &&
          (data?.emailId?.value === "All" ||
            item?.emailId === data?.emailId?.value) &&
          (data?.status?.value === "all" ||
            item?.isActive === data?.status?.value)
      );

      setRowData(searchData);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 ">
      {/* <div className='border border-[#a6a6a6] rounded-xl p-4 w-full'>
                <UserManagementSearch searchDatas={searchDatas} handleSearchData={handleSearchData} />
            </div> */}

      <div
        className="ag-theme-alpine overflow-auto"
        style={{ height: 310, width: 1550 }}
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
          paginationAutoPageSize={false}
          onGridReady={onGridReady}
          suppressCopyRowsToClipboard={true}
          animateRows={true}
          paginationPageSize={5}
        />
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
};

export default UserManagementTable;
