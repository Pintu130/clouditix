import React, { useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { userManagementTableData } from '@/assets/data';

const UserManagementTable = () => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState(userManagementTableData);

    //    User Role Is Active


    const [columnDefs] = useState([
        {
            field: "firstname",
            headerName: "First Name",
            minWidth: 130,
            maxWidth: 170,
        },
        {
            field: "lastname",
            headerName: "Last Name",
            minWidth: 130,
            maxWidth: 170,
        },
        {
            field: "email",
            headerName: "Email",
            minWidth: 310,
            maxWidth: 350,
        },
        {
            field: "phonenumber",
            headerName: "Phone Number",
            minWidth: 250,
            maxWidth: 300,
        },
        {
            field: "username",
            headerName: "User Name",
            cellClass: "uppercase",
            minWidth: 200,
            maxWidth: 250,
            editable: true,
        },
        {
            field: "userrole",
            headerName: "User Role",
            cellClass: "uppercase",
            minWidth: 200,
            maxWidth: 250,
            editable: true,
        },
        {
            field: "isactive",
            headerName: "Is Active",
            cellClass: "uppercase",
            minWidth: 100,
            maxWidth: 150,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
            floatingFilter: false,
        },
        {

            field: '',
            headerName: "Edit",
            minWidth: 80,
            maxWidth: 100,
            floatingFilter: false,
            cellRenderer: (params) => {
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

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            editable: true,
            filter: true,
            sortable: true,
        };
    }, []);

    const frameworkComponents = {
        agCheckboxCellRenderer: (params) => {
            console.log(params);
            return (
                <input
                    type="checkbox"
                    checked={params.value}
                    onChange={() => params.api.startEditingCell({ rowKey: params.node.id, colKey: params.column.colId })}
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


    return (
        <div>
            <div className="ag-theme-alpine overflow-auto" style={{ height: 270, width: 1550 }}>
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
                    paginationPageSize={5}
                />
            </div>
        </div>
    )
}

export default UserManagementTable