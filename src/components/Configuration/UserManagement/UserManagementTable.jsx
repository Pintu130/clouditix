import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { fetchGetUsers, fetchGetUsersDelete, userManagementTableData } from '@/assets/data';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletePopup from '@/components/common/DeletePopup';

const UserManagementTable = ({ handleEditData, updateUser }) => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState(userManagementTableData);
    const [deletedata, setDeletedata] = useState();
    const [isDelete, setIsDelete] = useState(false);

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
        })()
    }, [updateUser, deletedata])




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
            field: "userId",
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
            headerName: "Delete",
            minWidth: 80,
            maxWidth: 100,
            floatingFilter: false,
            cellRenderer: (params) => {
                const data = params.data;
                return (
                    <div className="flex items-center justify-center h-full  ">
                        <button
                            onClick={(e) => handleDelete(e, data)}
                        >
                            <MdDelete className="w-6 h-6 text-blue-B40" />
                        </button>
                    </div>
                );
            },
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

    const handleDelete = async (e, data) => {
        const deleteUserID = data?.userId;
        setIsDelete(data?.userId)

    };

    const closePopup = () => {
        setIsDelete(false);
    }

    const deleteConfirmation = async () => {
        const deleteUser = await fetchGetUsersDelete(isDelete)

        setDeletedata(deleteUser)
        if (deleteUser?.isSuccess) {
            closePopup()
            toast.success('Delete User', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                toastId: "toastId"
            });
        }
    }

    return (
        <div>
            <DeletePopup
                isOpen={isDelete}
                onCancel={closePopup}
                onDelete={() => deleteConfirmation()}
            />
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