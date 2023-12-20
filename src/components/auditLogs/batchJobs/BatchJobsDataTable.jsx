import React, { useCallback, useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const BatchJobsDataTable = () => {
    const tableRef = useRef(null);
    const containerStyle = useMemo(() => ({ width: '100%', height: '40vh' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState([
        {
            batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
            runid: "01307125-2bec-47¢3-802d-fb9eef9a14fa",
            table1d: "0",
            jobstatus: "",
            jobname: "guests",
            jobparameters: "{'table_name': 'guest'}",
            dqstatus: "Successful",
            validationrules: "",
            sourcelocation: "53://guest360mdm-dev/dq_framework/tables/guest/guest data.csv",
            destinationlocation: "53://guest360mdm-dev/dq_framework/tables/guest/guest data.csv",
            archivelocation: "53://guest360mdm-dev/dq_framework/tables/guest/guest data.csv",
            tablerecordcount: "0",
            startedat: "26-11-2023 08:47:02",
            endedat: "26-11-2023 08:47:02",
            jobcomments: "No DQ rules config",
            datasource: "AWS S3",
            errorrecordcount: "",
            errorfilelocation: ""
        }
    ]);

    const [columnDefs] = useState([
        {
            field: "batchid",
            headerName: "Batch_Id ",
            minWidth: 350,

        },
        {
            field: "runid",
            headerName: "run_id",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "table1d",
            headerName: "table 1d",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "jobstatus",
            headerName: "job_status",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "jobname",
            headerName: "job_name",
            minWidth: 300,
            maxWidth: 350,
        },
        {
            field: "jobparameters",
            headerName: "job_parameters",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "dqstatus",
            headerName: "dq_status",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "validationrules",
            headerName: "validation_rules",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "sourcelocation",
            headerName: "source_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "destinationlocation",
            headerName: "destination_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "archivelocation",
            headerName: "archive_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "tablerecordcount",
            headerName: "table_record_count",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "startedat",
            headerName: "started_at",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "endedat",
            headerName: "ended_at",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "jobcomments",
            headerName: "job_comments",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "datasource",
            headerName: "data_source",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "errorrecordcount",
            headerName: "error_record_count",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
        {
            field: "errorfilelocation",
            headerName: "error_file_location",
            cellClass: "uppercase",
            minWidth: 300,
            maxWidth: 350,
            // editable: true,
        },
    ]);

    const autoSizeStrategy = useMemo(() => {
        return {
            type: 'fitGridWidth',
        };
    }, []);

    const onGridReady = useCallback((params) => {

    }, []);

    return (
        <div className='px-10' style={containerStyle}>
            <div
                style={gridStyle}
                className={
                    "ag-theme-quartz"
                }
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    autoSizeStrategy={autoSizeStrategy}
                    onGridReady={onGridReady}
                />
            </div>
        </div>
    )
}

export default BatchJobsDataTable