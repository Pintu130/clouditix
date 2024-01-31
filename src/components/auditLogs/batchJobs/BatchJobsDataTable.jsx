import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { fetchGetJobStatus } from '@/assets/data';

const BatchJobsDataTable = ({ batchId }) => {
    const tableRef = useRef(null);
    const [rowData, setRowData] = useState([]);


    const [columnDefs] = useState([
        {
            field: "batchId",
            headerName: "Batch_Id ",
            minWidth: 100,
            maxWidth: 110,

        },
        {
            field: "jobId",
            headerName: "run_id",
            minWidth: 100,
            maxWidth: 110,
        },
        {
            field: "tableId",
            headerName: "table Id",
            minWidth: 100,
            maxWidth: 120,
        },
        {
            field: "status",
            headerName: "job_status",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "tableName",
            headerName: "job_name",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "jobParameters",
            headerName: "job_parameters",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "destinationAthenaTableName",
            headerName: "destination Athena TableName",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "errorAthenaTableName",
            headerName: "error Athena TableName",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "sourceLocation",
            headerName: "source_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "destinationLocation",
            headerName: "destination_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "archiveLocation",
            headerName: "archive_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "tableRecordCount",
            headerName: "table_record_count",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "startedAt",
            headerName: "started_at",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "endedAt",
            headerName: "ended_at",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "jobComments",
            headerName: "job_comments",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "dataSource",
            headerName: "data_source",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "errorRecordCount",
            headerName: "error_record_count",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "errorFileLocation",
            headerName: "error_file_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
    ]);

    useEffect(() => {
        ; (async () => {

            if (batchId > 0) {
                const data = await fetchGetJobStatus(batchId)

                if (data.length > 0) {
                    const sortId = data?.sort((a, b) => b.batchId - a.batchId).sort((a, b) => b.jobId - a.jobId).sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt))

                    if (data.length > 0) {
                        setRowData(sortId);
                    } else {
                        setRowData([]);
                    }
                }
            }
        })()
    }, [batchId])

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
        autoHeight: true,

        headerClass: "whitespace-normal",
        cellClass: "uppercase",
        flex: 1,
    }

    const handleCellClicked = (param) => { };

    const gridOptions = {
        rowClass: "custom-row-hover",
    };

    const onGridReady = (params) => {
        tableRef.current = params.api;
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 py-4 px-10">
            <div className="ag-theme-alpine overflow-auto " style={{ height: 500, width: "100% " }}>
                <AgGridReact
                    ref={tableRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}

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
        </div>
    )
}

export default BatchJobsDataTable