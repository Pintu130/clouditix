import React, { useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import CustomButton from '../common/CustomButton';

const tableData = [
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'datatype_check',
        attribute: 'name',
        ruleparameters: 'string',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'empty_value_check',
        attribute: 'name',
        ruleparameters: '',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'null_value_check',
        attribute: 'name',
        ruleparameters: 'string',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'length_check',
        attribute: 'name',
        ruleparameters: '255',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'special_character_check',
        attribute: 'name',
        ruleparameters: '!,@,#,$,%,^,&,*,+,~,|,=',
        ismandatory: false,
        isactive: false,
    },
]

const DataQualityRules = () => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState(tableData);

    const [columnDefs] = useState([
        {
            field: "datasource",
            headerName: "Data Source",
            minWidth: 100,
            maxWidth: 200,
        },
        {
            field: "entity",
            headerName: "Entity ",
            minWidth: 100,
            maxWidth: 200,
            cellClass: "uppercase"
        },
        {
            field: "validationrule",
            headerName: " Validation Rule",
            minWidth: 200,
            maxWidth: 250,
        },
        {
            field: "attribute",
            headerName: "Attribute",
            minWidth: 100,
            maxWidth: 200,
        },
        {
            field: "ruleparameters",
            headerName: " Rule Parameters",
            minWidth: 180,
            cellClass: "uppercase",
        },
        {
            field: "ismandatory",
            headerName: "Is Mandatory",
            cellClass: "uppercase",
            minWidth: 180,
            maxWidth: 200,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
        },
        {
            field: "isactive",
            headerName: "Is Active",
            cellClass: "uppercase",
            minWidth: 180,
            maxWidth: 200,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
        },
        {

            field: '', headerName: "", minWidth: 80, maxWidth: 100, cellRenderer: (params) => {
                const data = params.data;
                return (
                    <div className="flex items-center justify-center h-full  ">
                        <button
                        // onClick={() => handleEdit(data.id)}
                        >
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
                    onChange={() => params.api.startEditingCell({ rowKey: params.node.id, colKey: params.column.colId })}
                    onBlur={() => params.api.stopEditing()}
                />
            );
        },
    };

    const defaultColDef = {
        // filter: true,
        sortable: true,
        // floatingFilter: true,
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
        if (param?.column?.colId === "chartID") {
            // openPrevisitPage(param)
        }
    };

    const gridOptions = {
        rowClass: "custom-row-hover",
        // domLayout: 'autoHeight',
    };

    const onGridReady = (params) => {
        tableRef.current = params.api;
        // params.api.setEditable(true);
    };

    return (
        <div className="w-full gap-6 p-3 xl:h-full">
            <div className="flex w-full min-h-[50vh] pb-10  xl:max-h-[30%]  mx-auto ag-theme-alpine ">
                <div className="relative overflow-auto max-h-[500px]" style={{ width: "100%" }}>
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

            <div className='flex items-center justify-end gap-10'>
                <div
                    className="w-full max-w-[200px]"
                >
                    <CustomButton
                        name="Cancel"
                        handleClick={() => { }}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
                <div
                    className="w-full max-w-[200px]"

                >
                    <CustomButton
                        name="Save"
                        handleClick={() => { }}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default DataQualityRules