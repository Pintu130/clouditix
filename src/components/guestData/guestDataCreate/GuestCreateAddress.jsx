import { GuestCreateAddressData } from "@/assets/data";
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

const GuestCreateAddress = ({ isHideAll, onHandleHide, allData }) => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHideAddress, setIsHideAddress] = useState(true);
  const [updateRowData, setUpdateRowData] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    if (allData?.addresses?.length > 0) {
      console.log("Addresses");
      setRowData(allData?.addresses)
      dispatch(setCreateAddressData(allData?.addresses))
    }
  }, [allData])

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
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
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

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateRowData({})
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
    console.log(data);
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
        <AddressModel onClose={closeModal} updateRowData={updateRowData} rowData={rowData} updatedRowData={updatedRowData} />
      </CustomModal>
      <div className="flex items-center gap-3">
        <FaChevronDown className={`h-4 w-4 transform ${!isHideAddress ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-transform duration-300 ease-in-out`} onClick={(e) => handleHide(e)} />

        <div className=" w-[150px] flex gap-2   ">
          <CustomButton
            name="Address"
            handleClick={() => { setIsModalOpen(true), setUpdateRowData({}) }}
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
