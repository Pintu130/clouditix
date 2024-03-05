import React, { useRef, useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CustomButton from "@/components/common/CustomButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Survivorship_Rule,
  fetchsurvivorshipData,
  fetchsurvivorshipDataUpdate,
} from "@/assets/data";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";

const SurvivorshipRules = () => {
  const accLevel = useSelector((state) => state.roleSlice.acclevel)
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchsurvivorshipData();
      if (data?.length > 0) {
        const updatedData = data?.map((item, index) => ({
          id: index,
          ...item,
        }));

        setRowData(updatedData);
      }
    })();
  }, []);

  const handleOnChange = (e, data, allData) => {
    const { name, value } = e.target;
    const finelData = allData?.map((item) => {
      if (item?.id === data?.id) {
        return {
          ...item,
          [name]: value,
        };
      } else {
        return item;
      }
    });
    setRowData(finelData);
    const filtered = finelData?.filter((item) => !uniueArray(item));
    setStatus(filtered?.length > 0 ? filtered : false);
  };

  const uniueArray = (item) => {
    return (
      new Set([item["Priority 1"], item["Priority 2"], item["Priority 3"]])
        .size === 3
    );
    // return Survivorship_Rule?.filter((item) => !data?.includes(item));
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "Entity",
      headerName: "Entity",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "Attribute",
      headerName: "Attribute",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "Priority 1",
      headerName: "Priority 1",
      minWidth: 300,
      maxWidth: 350,
      editable: false,
      cellRenderer: (params) => {
        const data = params.data;
        const allData = params.api.rowModel.rowsToDisplay?.map(
          (row) => row?.data
        );
        return (
          <select
            className={`w-full max-w-[300px] lg:max-w-[100%]`}
            name="Priority 1"
            value={data?.["Priority 1"]}
            disabled={accLevel === 'View' ? true : false}
            onChange={(e) => handleOnChange(e, data, allData)}
          >
            {Survivorship_Rule?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        );
      },
    },
    {
      field: "Priority 2",
      headerName: "Priority 2",
      minWidth: 300,
      maxWidth: 350,
      editable: false,
      cellRenderer: (params) => {
        const data = params.data;
        const allData = params.api.rowModel.rowsToDisplay?.map(
          (row) => row?.data
        );
        return (
          <select
            className={`w-full max-w-[300px] lg:max-w-[100%]`}
            name="Priority 2"
            value={data?.["Priority 2"]}
            disabled={accLevel === 'View' ? true : false}
            onChange={(e) => handleOnChange(e, data, allData)}
          >
            {Survivorship_Rule?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        );
      },
    },
    {
      field: "Priority 3",
      headerName: "Priority 3",
      minWidth: 300,
      maxWidth: 350,
      editable: false,
      cellRenderer: (params) => {
        const data = params.data;
        const allData = params.api.rowModel.rowsToDisplay?.map(
          (row) => row?.data
        );
        return (
          <select
            className={`w-full max-w-[300px] lg:max-w-[100%]`}
            name="Priority 3"
            value={data?.["Priority 3"]}
            disabled={accLevel === 'View' ? true : false}
            onChange={(e) => handleOnChange(e, data, allData)}
          >
            {Survivorship_Rule?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
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
      const data = rowData?.map((row) => ({
        Entity: row.Entity,
        Attribute: row.Attribute,
        "Priority 1": row["Priority 1"],
        "Priority 2": row["Priority 2"],
        "Priority 3": row["Priority 3"],
      }));

      const res = await fetchsurvivorshipDataUpdate(data);

      if (res?.isSuccess) {
        toast.success("Update Rule", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "toastId",
        });
      }
    }
  };

  const handleCancleModal = () => { };

  const handleUpdateModal = () => { };

  const handleCellEditingStopped = (params) => {
    const updatedRowData = params.api.getRowNode(params.node.id).data;

    const updateRow = rowData.filter((row) =>
      row.id === updatedRowData.id ? updatedRowData : row
    );

    setRowData(updateRow);
  };

  return (
    <>
      {
        accLevel === 'No Access' ?
          <div className="flex justify-center items-center h-screen">
            <div className="text-2xl font-bold text-center">
              This page is not accessible.
            </div>
          </div>
          :
          <div className="w-full flex flex-col justify-center items-center gap-2 py-4">
            <div className="flex w-full justify-end pr-8 ">
              <div className="w-full max-w-[100px]">
                <CustomButton
                  name="Update"
                  handleClick={() => handleUpdateModal()}
                  isDisable={accLevel === 'View' ? true : false}
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
                paginationAutoPageSize={false}
                onGridReady={onGridReady}
                suppressCopyRowsToClipboard={true}
                animateRows={true}
                paginationPageSize={10}
                onCellEditingStopped={handleCellEditingStopped}
              />
            </div>
            <div className="flex items-start w-full justify-end gap-8 p-3 pr-8 ">
              <div className="w-full max-w-[300px] items-end">
                {status && (
                  <div>
                    <p>Priority values are not unique to this field.</p>
                    <div className="flex">
                      {status?.map((item, index) => {
                        // console.log("9999999999999999",status?.length , index);
                        return <div key={item?.id}> {item?.id + 1}{!(status?.length === index + 1) && ", "}</div>;
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full max-w-[150px]">
                <CustomButton
                  name="Save"
                  handleClick={() => handleSaveModal()}
                  isDisable={status || accLevel === 'View' ? true : false}
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
      }
    </>
  );
};

export default SurvivorshipRules;
