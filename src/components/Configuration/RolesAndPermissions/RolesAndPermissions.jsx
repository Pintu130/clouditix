import React, { useRef, useState } from 'react'
import { BiSolidPencil } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { rolesAndPermissionsTable, tableData } from '@/assets/data';
import CustomInput from '@/components/common/CustomInput';
import CustomButton from '@/components/common/CustomButton';
import Rules from './Rules';

const RolesAndPermissions = () => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState(rolesAndPermissionsTable);
    const [formData, setFormData] = useState({})

    const [columnDefs] = useState([
        {
            field: "section",
            headerName: "Section",
            minWidth: 100,
            maxWidth: 300,
            filter: true,
        },
        {
            field: "item",
            headerName: "Item",
            minWidth: 100,
            maxWidth: 350,
            filter: true,
        },
        {
            field: "admin",
            headerName: "Admin",
            minWidth: 100,
            // maxWidth: 150,
            filter: true,
        },
        {
            field: "datasteward",
            headerName: " Data Steward",
            minWidth: 200,
            // maxWidth: 250,
        },
        {
            field: "dataowner",
            headerName: "Data Owner ",
            minWidth: 100,
            // maxWidth: 200,
            cellClass: "uppercase"
        },
        {
            field: "dataentry",
            headerName: " Data Entry",
            minWidth: 180,
            // maxWidth: 250,
            cellClass: "uppercase",
        },
    ]);


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
        headerClass: "whitespace-normal",
        wrapText: true,
        autoHeight: true,
    };

    const handleCellClicked = (param) => {
        // console.log(param?.column);
    };

    const gridOptions = {
        rowClass: "custom-row-hover",
        // domLayout: 'autoHeight',
    };

    const onGridReady = (params) => {
        tableRef.current = params.api;
        // params.api.setEditable(true);
    };

    const handleFromData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <div className='p-5 flex flex-col items-start gap-5 w-full custom-scroll overflow-auto  '>
            <div className='w-full h-full border py-3 px-6 border-[#a6a6a6] rounded-xl'>
                <Rules />
            </div>
            <div className='flex flex-col  gap-5 w-full border border-[#a6a6a6] py-3 px-6 h-full max-h-[480px] overflow-auto rounded-xl custom-scroll '>
                <span className='text-lg font-semibold w-56 '>Set Permission</span>
                <div className="flex  w-full overflow-auto  min-h-[45vh] pb-10  xl:max-h-[70%]  mx-auto ag-theme-alpine  ">
                    <div className="relative overflow-auto max-h-[400px]" style={{ width: "100%" }}>
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
                <div className='flex items-center justify-end gap-10 w-full '>
                    <div className="w-full max-w-[150px]" >
                        <CustomButton
                            name="Save"
                            handleClick={() => { }}
                            isDisable={false}
                            isLoading={false}
                        />
                    </div>
                    <div className="w-full max-w-[150px]" >
                        <CustomButton
                            name="Cancel"
                            handleClick={() => { }}
                            isDisable={false}
                            isLoading={false}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RolesAndPermissions