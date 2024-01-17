import React, { useRef, useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CustomButton from "@/components/common/CustomButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchsurvivorshipData, fetchsurvivorshipDataUpdate } from "@/assets/data";



const SurvivorshipRules = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {

    ; (async () => {
      const data = await fetchsurvivorshipData()

      if (data?.length > 0) {

        const updatedData = data?.map((item, index) => ({
          id: index,
          ...item,
        }))

        setRowData(updatedData);
      }
    })()
  }, [])


  const [columnDefs, setColumnDefs] = useState([]);

  useEffect(() => {
    if (rowData.length > 0) {
      const firstRow = rowData[0] || {}; // Use the first row to extract keys

      const colDefs = Object.keys(firstRow).map((key) => {
        if (key === 'id') {
          return null; // Skip adding 'id' as a column definition
        }

        return {
          field: key,
          headerName: key,
          minWidth: 300,
          maxWidth: 350,
        };
      }).filter(Boolean);

      setColumnDefs(colDefs)
    }
  }, [rowData])

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

  const handleSaveModal = async () => {

    if (rowData.length > 0) {

      const data = rowData.map((row) => ({
        "Entity": row.Entity,
        "Attribute": row.Attribute,
        "Priority 1": row['Priority 1'],
        "Priority 2": row['Priority 2'],
        "Priority 3": row['Priority 3']
      }));

      const res = await fetchsurvivorshipDataUpdate(data)

      if (res?.isSuccess) {
        toast.success('Update Rule', {
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

  };

  const handleCancleModal = () => { };

  const handleUpdateModal = () => { };

  const handleCellEditingStopped = (params) => {

    const updatedRowData = params.api.getRowNode(params.node.id).data;

    const updateRow = rowData.filter((row) => row.id === updatedRowData.id ? updatedRowData : row)

    setRowData(updateRow);

  };

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
          onCellEditingStopped={handleCellEditingStopped}
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
  );
};

export default SurvivorshipRules;
