import { GuestCreateAddressData, StateData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import CustomModal from "@/components/common/CustomModal";
import AddressModel from "./AddressModel";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidPencil } from "react-icons/bi";
import { setCreateAddressData } from "@/store/guestDataCreateSlice";

const initialValue = {
  addressId: 0,
  goldenId: 0,
  stateCode: "",
  addressType: "",
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  city: "",
  country: "",
  zipCode: "",
  isPrimary: true,
  startDate: "2024-01-27T08:09:20.794Z",
  endDate: "2024-01-27T08:09:20.794Z",
  isActive: true,
  createById: "data_entry_user_id",
  lastUpdatedById: "data_entry_user_id",
  isDeleted: false,
  source: "res",
  isActiveFlag: true,
};

const GuestCreateAddress = ({ isHideAll, onHandleHide, allData }) => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHideAddress, setIsHideAddress] = useState(true);
  const [updateRowData, setUpdateRowData] = useState({})
  console.log("🚀 ~ GuestCreateAddress ~ updateRowData:lJKlskfnafl-----", updateRowData)
  const [formData, setFormData] = useState(initialValue);
  const dispatch = useDispatch();

  // console.log("rowData1", rowData);


  useEffect(() => {
    if (allData?.addresses?.length > 0) {
      setRowData(allData?.addresses?.map((item) => { return ({ ...item, stateCode: stateFilter(item?.stateCode) }) }))
      dispatch(setCreateAddressData(allData?.addresses))
    }else {
      setRowData([])
    }
  }, [allData])

  const stateFilter = (state) => {
    const data = StateData?.filter((item) => item.value === state)?.[0]?.label
    return data ? data : state
  }

  const [columnDefs] = useState([
    {
      field: "addressType",
      headerName: "AddressType",
      minWidth: 100,
      maxWidth: 150,
      filter: true,
    },
    {
      field: "addressLine1",
      headerName: "Address Line 1",
      minWidth: 100,
      filter: true,
    },
    {
      field: "addressLine2",
      headerName: "Address Line 2",
      minWidth: 100,
      filter: true,
    },
    {
      field: "addressLine3",
      headerName: " Address Line 3",
      minWidth: 200,
    },
    {
      field: "city",
      headerName: "City ",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      field: "stateCode",
      headerName: "State",
      minWidth: 180,
      maxWidth: 250,
    },
    {
      field: "country",
      headerName: "Country",

      minWidth: 80,
      maxWidth: 100,

      editable: true,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      minWidth: 80,
      maxWidth: 100,
      editable: true,
    },
    {
      field: "isPrimary",
      headerName: "isPrimary",
      cellClass: "uppercase",
      minWidth: 80,
      maxWidth: 100,
      // cellRenderer: "agCheckboxCellRenderer",
      editable: true,
      cellRenderer: (params) => {
        tableRef.current = params.api
        return (
          <div className={params?.data?.isPrimary ? "ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper ag-checked" : "ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"}>
            <input
              type="checkbox"
              className="ag-checkbox-input-wrapper input, .ag-checkbox-input-wrapper input"
              onClick={() => AddressValueChange(params?.data, tableRef.current.getModel().rowsToDisplay.map((rowNode) => rowNode.data))}
              checked={params?.data?.isPrimary}
            />
          </div>
        )

      }
    },
    {
      field: "isActiveFlag",
      headerName: "isActive",
      cellClass: "uppercase",
      minWidth: 80,
      maxWidth: 100,
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
    },
    {

      field: '', headerName: "Edit", minWidth: 60, maxWidth: 80, cellRenderer: (params) => {
        const data = params.data;
        return (
          <div className="flex items-center justify-center h-full  ">
            <button
              onClick={(e) => handleEdit(e, data)}
            >
              <BiSolidPencil className="w-6 h-6 text-blue-B40" />
            </button>
          </div>
        );
      },
    },
  ]);



  const AddressValueChange = (data, allData) => {
    const finelData = allData?.map((item) => {
      if (item?.addressId === data?.addressId) {
        return { ...item, isPrimary: !data?.isPrimary }
      } else {
        return { ...item, isPrimary: false }
      }
    })
    setRowData(finelData)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateRowData({})
    setFormData(initialValue);
  };

  const defaultColDef = {
    filter: true,
    sortable: true,

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

  const onGridReady = (params) => {
    tableRef.current = params.api;
    // params.api.setEditable(true);
  };

  const handleCellClicked = (param) => {
    // console.log(param?.column);
  };

  const gridOptions = {
    rowClass: "custom-row-hover",
    // domLayout: 'autoHeight',
  };

  useEffect(() => {
    setIsHideAddress(isHideAll)
  }, [isHideAll])

  const handleHide = (e) => {
    e.stopPropagation();
    setIsHideAddress(!isHideAddress);
    onHandleHide(!isHideAddress);
  }

  const handleEdit = (e, data) => {
    e.stopPropagation();
    setUpdateRowData(data);
    setIsModalOpen(true);
  }

  const updatedRowData = (data) => {
    // console.log(data);
    if (data?.length > 0) {
      const modifyData = data.map(item => {
        return {
          ...item,
          stateCode: item?.stateCode?.value?.length > 0 ? item?.stateCode?.value : item?.stateCode,
          addressType: item?.addressType?.value?.length > 0 ? item?.addressType?.value : item?.addressType,
        }
      })
      setRowData(modifyData);
      dispatch(setCreateAddressData(modifyData))
    }
  }

  return (
    <div className="flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-2 h-full custom-scroll ">
      <CustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <AddressModel onClose={closeModal} updateRowData={updateRowData} rowData={rowData} updatedRowData={updatedRowData} allData={allData?.guest} initialValue={initialValue} setFormData={setFormData} formData={formData}/>
      </CustomModal>
      <div className="flex items-center gap-3">
        <FaChevronDown className={`h-4 w-4 transform ${!isHideAddress ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-transform duration-300 ease-in-out`} onClick={(e) => handleHide(e)} />

        <div className=" w-[150px] flex gap-2   ">
          <CustomButton
            name="Address"
            handleClick={() => { setIsModalOpen(true), setUpdateRowData({})}}
            isDisable={false}
            isLoading={false}
            icon={<MdOutlineAdd className="h-6 w-6  " />}
          />
        </div>
      </div>

      {isHideAddress && <div className="flex w-full h-full min-h-[30vh] pb-10  xl:max-h-[60%]  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto "
          style={{ width: "100%" }}
        >
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
      </div>}
    </div>
  );
};

export default GuestCreateAddress;
