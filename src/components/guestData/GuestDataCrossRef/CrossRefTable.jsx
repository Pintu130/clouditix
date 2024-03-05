import React, { useCallback, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import { CrossTableData } from '@/assets/data';

const CrossRefTable = () => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ width: '100%' }), []);
    const [rowData, setRowData] = useState(CrossTableData);

    const CustomCellRenderer = ({ value }) => {
        const isNumber = !isNaN(value);
        const isDate = /\d{4}-\d{2}-\d{2}/.test(value);

        return (
            <div
                // style={{ textAlign: !isNumber || !isDate ? 'left' : 'right' }} 
                className={`${isNumber || isDate ? 'text-right' : 'text-left'}`}>
                {value}
            </div>
        );
    };

    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: "Table Name",
            field: 'tableName',
            rowGroup: false,
            minWidth: 260,
            maxWidth: 300,
            // rowGroup: true ,
            // enableRowGroup: true
        },
        {
            headerName: "Recoed Name",
            field: 'recoedName',
            minWidth: 260,
            maxWidth: 300,
            // enableRowGroup: true
        },
        {
            headerName: "Golden Record",
            field: 'goldenRecord',
            minWidth: 260,
            maxWidth: 300,
            cellRenderer: CustomCellRenderer,
            // enableRowGroup: true
        },
        {
            headerName: "CRM",
            field: 'crm',
            minWidth: 260,
            maxWidth: 300,
            cellRenderer: CustomCellRenderer,
            // enableRowGroup: true
        },
        {
            headerName: "PMS",
            field: 'pms',
            minWidth: 260,
            maxWidth: 300,
            cellRenderer: CustomCellRenderer,
            // enableRowGroup: true
        },
        {
            headerName: "CRS",
            field: 'crs',
            minWidth: 260,
            // maxWidth: 300,
            cellRenderer: CustomCellRenderer,
            // enableRowGroup: true
        }
    ]);



    const defaultColDef = {
        flex: 1,
        headerComponentParams: { placeholder: 'Enter Member ID' },
        resizable: true,
        suppressMovable: true,
        resizable: false,
        cellStyle: {
            color: '#4A4A4A',
            fontFamily: 'Assistant',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: "24px",
            paddingTop: "8px",
            paddingBottom: "8px",
            borderRight: '1px solid #a6a6a6',
        },
        wrapText: true,
        autoHeight: true,
        headerClass: "whitespace-normal",
    }


    const getRowHeight = useCallback(
        (params) => {

        },
        []
    );

    return (
        <>
            <div className="flex w-full h-full min-h-[85vh] pb-10  xl:max-h-[60%]  mx-auto ag-theme-alpine ">
                <div
                    className="relative overflow-auto"
                    style={{ width: "100%" }}
                >
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        groupDefaultExpanded={1}
                        getRowHeight={getRowHeight}
                    />
                </div>

            </div>
        </>
    )
}

export default CrossRefTable