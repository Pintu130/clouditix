import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { RulesTableData, fetchDeleteRole, fetchGetRoles, fetchUpdateRole, userManagementTableData } from '@/assets/data';
import CustomButton from '@/components/common/CustomButton';
import SmCustomModal from '@/components/common/SmCustomModal';
import RulesCreateAndEdit from './RulesCreateAndEdit';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletePopup from '@/components/common/DeletePopup';

const Rules = () => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState(RulesTableData);
    const [isNewRuleModal, setIsNewRuleModal] = useState(false)
    const [editData, setEditData] = useState({})
    const [deletedata, setDeletedata] = useState({})
    const [isDelete, setIsDelete] = useState(false);


    useEffect(() => {
        ; (async () => {
            const Data = await fetchGetRoles();

            const transforData = Data.map((item) => {
                const { roleScreens, ...restData } = item;

                const rolesArray = roleScreens.map((role) => ({
                    ...role,
                    ...restData
                })
                )

                return rolesArray
            })

            const flattenedData = [].concat(...transforData)
            setRowData(flattenedData);

        })()
    }, [isNewRuleModal, deletedata])



    const updateRule = async (formData) => {
        const updatedData = {
            "roleId": formData?.roleId,
            "roleName": formData?.roleName,
            "description": formData?.description,
            "isActive": formData?.isActive,
            "createdBy": formData?.createdBy,
            "modifiedBy": formData?.modifiedBy,
            "roleScreens": [
                {
                    "roleScreenId": formData?.roleScreenId,
                    "screenName": formData?.screenName,
                    "accessLevel": formData?.accessLevel
                }
            ]
        }

        const updateData = await fetchUpdateRole(updatedData)

        if (updateData?.isSuccess) {
            setIsNewRuleModal("");
            setEditData({});

            toast.success('Update User', {
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
        } else {
            toast.error('User Not Update ', {
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

    const [columnDefs] = useState([
        {
            field: "roleName",
            headerName: "Role Name",
            minWidth: 130,
            maxWidth: 170,
        },
        {
            field: "description",
            headerName: "Description",
            minWidth: 130,
        },
        {
            field: "screenName",
            headerName: "screen Name",
            minWidth: 130,
        },
        {
            field: "accessLevel",
            headerName: "access Level",
            minWidth: 130,
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

    const handleCreateRule = () => {
        setIsNewRuleModal("Create");
        setEditData({});
    }

    const handleEdit = (e, data) => {

        setIsNewRuleModal("Edit");
        setEditData(data)
    }

    const removeEditData = () => {
        setEditData({});
    };


    const closeModal = () => {
        setIsNewRuleModal("");
    }


    return (
        <div className='flex flex-col items-start gap-5 w-full h-full '>
           
            <SmCustomModal type="Create" isopen={isNewRuleModal} onClose={closeModal} >
                <RulesCreateAndEdit isNewRuleModal={isNewRuleModal} onClose={closeModal} editData={editData} updateRule={updateRule} removeEditData={removeEditData} />
            </SmCustomModal>
            <div className='flex flex-col items-start gap-5 w-full h-full '>
                <span className='text-lg font-semibold  '>Role</span>
            </div>
            <div className='flex justify-between w-full'>
                <div className="ag-theme-alpine overflow-auto w-full" style={{ height: 270, width: 1300 }}>
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

                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="CREATE"
                        handleClick={() => handleCreateRule()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
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

export default Rules