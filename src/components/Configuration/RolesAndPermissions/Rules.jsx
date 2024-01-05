import React, { useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { RulesTableData, userManagementTableData } from '@/assets/data';
import CustomButton from '@/components/common/CustomButton';
import SmCustomModal from '@/components/common/SmCustomModal';
import RulesCreateAndEdit from './RulesCreateAndEdit';

const Rules = () => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState(RulesTableData);
    const [isNewRuleModal, setIsNewRuleModal] = useState(false)


    const [columnDefs] = useState([
        {
            field: "rolename",
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

    const handleCreateRule = () => {
        setIsNewRuleModal("Create");
    }

    const handleEdit = () => {
        setIsNewRuleModal("Edit");
    }

    const closeModal = () => {
        setIsNewRuleModal("");
    }

    return (
        <div className='flex flex-col items-start gap-5 w-full h-full '>
            <SmCustomModal type="Create" isopen={isNewRuleModal} onClose={closeModal} >
                <RulesCreateAndEdit isNewRuleModal={isNewRuleModal} onClose={closeModal} />
            </SmCustomModal>
            <div className='flex flex-col items-start gap-5 w-full h-full '>
                <span className='text-lg font-semibold  '>Role</span>
            </div>
            <div className='flex justify-between w-full'>
                <div className="ag-theme-alpine overflow-auto w-full" style={{ height: 270, width: 950 }}>
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

                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="CREATE"
                        handleClick={() => handleCreateRule()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Rules