import React, { useRef, useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { batchJobsStatustbleData, fetchGetAllBatchStatus } from "@/assets/data";



const BatchJobsStatusTable = () => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState([]);


    const [columnDefs] = useState([
        {
            field: "batchId",
            headerName: "Batch_Id ",
            minWidth: 350,

        },
        {
            field: "status",
            headerName: "Batch_Status",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "batchStep",
            headerName: "Batch_Comment",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "startedAt",
            headerName: "Started_At",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "endedAt",
            headerName: "Ended_At",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
    ]);


    useEffect(() => {
        ; (async () => {
            const data = await fetchGetAllBatchStatus()
            console.log(data);
            setRowData(data)
        })()
    }, [])



    /* const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            // minWidth: 100,
            // editable: true,
            filter: true,
            sortable: true,
            resizeBy: true,
        };
    }, []); */

    const defaultColDef = {
        flex: 1,
        headerComponentParams: { placeholder: 'Enter Member ID' },
        resizable: true,
        suppressMovable: true,
        resizable: true,
        width: 100,
        filter: true,
        flex: 1,
        minWidth: 100,
        // cellStyle: {
        //     color: '#4A4A4A',
        //     fontFamily: 'Assistant',
        //     fontSize: '18px',
        //     fontStyle: 'normal',
        //     fontWeight: '400',
        //     lineHeight: "24px",
        //     paddingTop: "8px",
        //     paddingBottom: "8px",
        //     borderRight: '1px solid #a6a6a6',
        // },
        wrapText: true,
        // autoHeight: true,

        headerClass: "whitespace-normal",
        cellClass: "uppercase",
        flex: 1,
    }

    const frameworkComponents = {
        agCheckboxCellRenderer: (params) => {

            return (
                <input
                    type="checkbox"
                    checked={params.value}
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

    const handleSaveModal = () => { };

    const handleCancleModal = () => { };

    const handleUpdateModal = () => { };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 py-4 px-10">
            <div className="ag-theme-alpine overflow-auto " style={{ height: 400, width: "100% " }}>
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
    );
};

export default BatchJobsStatusTable;
