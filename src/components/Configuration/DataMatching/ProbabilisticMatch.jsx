import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5'
import { ProbabilisticMatchtableData, fetchProbabilisticConfig } from '@/assets/data';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CustomButton from '@/components/common/CustomButton';
import { FaPlus } from 'react-icons/fa';
import CustomModal from '@/components/common/CustomModal';
import ProbabilisticAdd from './ProbabilisticAdd';
import ProbabilisticMore from './ProbabilisticMore';
import { useDispatch, useSelector } from 'react-redux';
import { setProbMatchMore } from '@/store/ProbMatchSlice';

const ProbabilisticMatch = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(ProbabilisticMatchtableData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [managedModal, setManagedModal] = useState();
  const dispatch = useDispatch()
  const addData = useSelector(state => state?.ProbMatch?.add)

  useEffect(() => {
    ; (async () => {
      const Data = await fetchProbabilisticConfig()
      setRowData(Data?.columns)
    })()
  }, [])

  const [columnDefs] = useState([
    {
      field: "column",
      headerName: "Attribute",
      minWidth: 100,
      maxWidth: 215,
      filter: true,
    },
    {
      field: "model?.model-params?.threshold",
      headerName: "Col-Weight",
      minWidth: 100,
      maxWidth: 120,
      filter: true,
    },
    {
      field: "minmatch",
      headerName: "Min-match",
      minWidth: 100,
      maxWidth: 120,
      filter: true,
    },
    {
      field: "delete",
      headerName: " Delete",
      minWidth: 80,
      maxWidth: 100,
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
    },
    {

      field: '', headerName: "More Details", minWidth: 80, maxWidth: 130, cellRenderer: (params) => {
        const data = params.data;
        return (
          <div className="flex items-center justify-center h-full  ">
            <button
              onClick={(e) => handleMoreDetails(e, data)}
            >
              <BsThreeDotsVertical className="w-6 h-6 text-blue-B40" />
            </button>
          </div>
        );
      },
    },
    {

      field: '', headerName: "", minWidth: 80, maxWidth: 100, cellRenderer: (params) => {
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

  const defaultColDef = {
    filter: true,
    sortable: true,
    floatingFilter: true,
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

  const handleCellClicked = (param) => {
    // console.log(param?.column);
  };

  const gridOptions = {
    rowClass: "custom-row-hover",
    // domLayout: 'autoHeight',
  };

  const onGridReady = (params) => {
    tableRef.current = params.api;
    // params.api.setEditable(true);
  };

  const frameworkComponents = {
    agCheckboxCellRenderer: (params) => {

      return (
        <input
          type="checkbox"
          checked={params.value}
          onChange={() => params.api.startEditingCell({ rowKey: params.node.id, colKey: params.column.colId })}
          onBlur={() => params.api.stopEditing()}
        />
      );
    },
  };



  const handleMoreDetails = (e, data) => {
    setIsModalOpen(true);
    setManagedModal("More")
    dispatch(setProbMatchMore(data));
  }

  const handleAddRow = () => {
    setIsModalOpen(true);
    setManagedModal("Add")
  }

  useEffect(() => {
    if (addData && Object?.keys(addData)?.length > 0) {
      setRowData(prevData => [...prevData, addData])
    }
  }, [addData])


  const handleEdit = () => {
    setIsModalOpen(true);
    setManagedModal("Edit")
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='flex flex-col gap-3'>

      <CustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        {managedModal === "More" ? <ProbabilisticMore onClose={closeModal} /> : managedModal === "Add" ? <ProbabilisticAdd onClose={closeModal} /> : <ProbabilisticAdd onClose={closeModal} />}
      </CustomModal>

      <div className='flex items-center gap-10 '>
        <fieldset className='border pl-3 rounded-lg'>
          <legend className=''>Select Attribute</legend>
          <div className='flex items-center justify-start gap-5 p-3'>
            <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>
              <span>Name</span>
              <IoClose className='w-5 h-5 flex-shrink-0' />
            </div>
            <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
              <span>date_of_birth</span>
              <IoClose className='w-5 h-5 flex-shrink-0' />
            </div>
            <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
              <span>Aadhar</span>
              <IoClose className='w-5 h-5 flex-shrink-0' />
            </div>
            <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
              <span>Passport</span>
              <IoClose className='w-5 h-5 flex-shrink-0' />
            </div>
            <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
              <span>Driving_License</span>
              <IoClose className='w-5 h-5 flex-shrink-0' />
            </div>
          </div>
        </fieldset>
        <div className='flex flex-col items-start'>
          <span>Total-threshold </span>
          <span className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>0.2</span>
        </div>
      </div>

      <div className="flex w-full min-h-[50vh] pb-10  xl:max-h-[30%]  mx-auto ag-theme-alpine ">
        <div className="relative overflow-auto max-h-[500px]" style={{ width: "50%" }}>
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

      <div className="w-full max-w-[150px]" >
        <CustomButton
          name="ADD"
          handleClick={() => handleAddRow()}
          isDisable={false}
          isLoading={false}
          icon={<FaPlus />}
        />
      </div>
    </div>
  )
}

export default ProbabilisticMatch