import React, { useCallback, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import { CrossManualTableData } from '@/assets/data';

const CrossRefManualTable = () => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ width: '100%' }), []);
    const [rowData, setRowData] = useState(CrossManualTableData);

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
            minWidth: 350,
            maxWidth: 450,
            // rowGroup: true ,
            // enableRowGroup: true
        },
        {
            headerName: "Recoed Name",
            field: 'recoedName',
            minWidth: 350,
            maxWidth: 450,
            // enableRowGroup: true
        },
        {
            headerName: "Source Record",
            field: 'sourcerecord',
            minWidth: 350,
            maxWidth: 450,
            cellRenderer: CustomCellRenderer,
            // enableRowGroup: true
        },
        {
            headerName: "Target Record",
            field: 'targetecord',
            minWidth: 350,
            maxWidth: 450,
            cellRenderer: CustomCellRenderer,
            // enableRowGroup: true
        },
    ]);



    const defaultColDef = {
        flex: 1,
        headerComponentParams: { placeholder: 'Enter Member ID' },
        resizable: true,
        suppressMovable: true,
        resizable: true,
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
        cellClass: "uppercase",
        flex: 1,
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
                    style={{ width: "90%", overflowX: 'auto' }}
                >
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        groupDefaultExpanded={1}
                        getRowHeight={getRowHeight}
                        animateRows={true}
                        enableBrowserTooltips={true}
                        tooltipShowDelay={{ tooltipShowDelay: 2 }}
                    />
                </div>

            </div>
        </>
    )
}

export default CrossRefManualTable