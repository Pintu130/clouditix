import React, { useRef, useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CustomButton from "@/components/common/CustomButton";
import { fetchsurvivorshipData, survivorshipData } from "@/assets/data";



const SurvivorshipRules = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {

    ; (async () => {
      const data = await fetchsurvivorshipData()

      if (data.length > 0) {
        const tableRowData = data?.map((item) => ({
          entity: item?.tableName,
          attribute: item?.columnName,
          priority1: item?.priority === 1 ? item?.source : "",
          priority2: item?.priority === 2 ? item?.source : "",
          priority3: item?.priority === 3 ? item?.source : ""
        }))

        setRowData(tableRowData);
      }

    })()

  }, [])


  const [columnDefs] = useState([
    {
      field: "entity",
      headerName: "Entity ",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "attribute",
      headerName: "Attribute",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "priority1",
      headerName: "Priority 1",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "priority2",
      headerName: "Priority 2",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "priority3",
      headerName: "Priority 3",
      cellClass: "uppercase",
      minWidth: 300,
      maxWidth: 350,
      editable: true,
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
    <div className="w-full flex flex-col justify-center items-center gap-2 py-4">
      <div className="flex w-full justify-end pr-8 ">
        <div className="w-full max-w-[100px]">
          <CustomButton
            name="Update"
            handleClick={() => handleUpdateModal()}
            isDisable={false}
            isLoading={false}
          />
        </div>
      </div>
      <div className="ag-theme-alpine" style={{ height: 530, width: 1550 }}>
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
          paginationPageSize={10}
        />
      </div>
      <div className="flex items-center w-full justify-end gap-8 p-3 pr-8 ">
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Save"
            handleClick={() => handleSaveModal()}
            isDisable={false}
            isLoading={false}
          />
        </div>
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Cancel"
            handleClick={() => handleCancleModal()}
            isDisable={false}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SurvivorshipRules;
