import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { fetchGetUsers, fetchGetUsersDelete, userManagementTableData } from '@/assets/data';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserManagementSearch from './UserManagementSearch';

const UserManagementTable = ({ handleEditData, updateUser }) => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState([]);

    const [searchDatas, setSearchDatas] = useState([])

    //    User Role Is Active

    useEffect(() => {
        ; (async () => {
            const Data = await fetchGetUsers()

            const transformedData = Data.map((user) => {
                // Extract userRoles from user
                const { userRoles, ...restUser } = user;

                // Map each userRole to a new object
                const rolesArray = userRoles.map((role) => ({
                    ...restUser, // Include properties from the parent user object
                    ...role,     // Include properties from the role object
                }));

                return rolesArray;
            });

            // Flatten the array of arrays into a single array
            const flattenedData = [].concat(...transformedData);

            setRowData(flattenedData)
            setSearchDatas(flattenedData)
        })()
    }, [updateUser])




    const [columnDefs] = useState([
        {
            field: "firstName",
            headerName: "First Name",
            minWidth: 130,
            maxWidth: 170,
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

    const handleEdit = (e, data) => {
        handleEditData(data);
    };

    const handleSearchData = (data) => {

        console.log(data);

        /*  {
             roleName: { label: 'User', value: 'User' },
             emailId: { label: 'asmith@example.com', value: 'asmith@example.com' },
             status: { label: 'ALL', value: 'all' }
         } */

        if (Object.keys(data).length > 0) {

            const searchData = searchDatas?.filter((item) => (data?.roleName?.value === "All" || item?.roleName === data?.roleName?.value) &&
                (data?.emailId?.value === "All" || item?.emailId === data?.emailId?.value) &&
                (data?.status?.value === "all" || item?.isActive === data?.status?.value)
            )

            setRowData(searchData)
        }


    }


    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 ">

            <div className='border border-[#a6a6a6] rounded-xl p-4 w-full'>
                <UserManagementSearch searchDatas={searchDatas} handleSearchData={handleSearchData} />
            </div>

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
    )
}

export default UserManagementTable