import React, { useEffect, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5'
import { ProbabilisticMatchtableData, fetchProbabilisticConfig, fetchProbabilistic_Config } from '@/assets/data';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CustomButton from '@/components/common/CustomButton';
import { FaPlus } from 'react-icons/fa';
import CustomModal from '@/components/common/CustomModal';
import ProbabilisticAdd from './ProbabilisticAdd';
import ProbabilisticMore from './ProbabilisticMore';
import { useDispatch, useSelector } from 'react-redux';
import { setProbMatchMore } from '@/store/ProbMatchSlice';
import ProbabilisticEdit from './ProbabilisticEdit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from 'react-icons/md';
import DeletePopup from '@/components/common/DeletePopup';

const ProbabilisticMatch = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(ProbabilisticMatchtableData);
  const [rowEditData, setRowEditData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [managedModal, setManagedModal] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const [postProbabilistic_Config, setPostProbabilistic_Config] = useState({})
  const dispatch = useDispatch()
  const addData = useSelector(state => state?.ProbMatch?.add)




  useEffect(() => {
    ; (async () => {
      const Data = await fetchProbabilisticConfig()
      setRowData(Data?.columns)
      setRowEditData(Data)
    })()
  }, [postProbabilistic_Config])


  const getColumnValue = (data, field) => {
    const fieldKeys = field.split(".");
    return fieldKeys.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined), data);
  };

  const [columnDefs] = useState([
    {
      field: "column",
      headerName: "Attribute",
      minWidth: 100,
      // maxWidth: 215,
      filter: true,
    },
    {
      field: "model?.model-params?.threshold",
      headerName: "Col-Weight",
      minWidth: 100,
      maxWidth: 120,
      filter: true,
      valueGetter: (params) => getColumnValue(params.data, "model.model-params.threshold"),
    },
    {
      field: "minmatch",
      headerName: "Min-match",
      minWidth: 100,
      maxWidth: 120,
      filter: true,
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
      field: '', headerName: "Edit", minWidth: 80, maxWidth: 100, cellRenderer: (params) => {
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
    {
      field: '', headerName: "Delete", minWidth: 80, maxWidth: 100, cellRenderer: (params) => {
        const data = params.data;
        return (
          <div className="flex items-center justify-center h-full  ">
            <button
              onClick={(e) => handleDelete(e, data)}
            >

              <MdDelete className="w-6 h-6 text-blue-B40" />
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


  const handleEdit = (e, data) => {

    setIsModalOpen(true);
    setManagedModal("Edit")
    dispatch(setProbMatchMore(data));
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleDelete = async (e, data) => {
    e.preventDefault()

    setIsDelete(data);

    /*  const deleteRowData = await fetchProbabilisticConfig();
 
     const DeleteData = deleteRowData?.columns?.filter((item) => item?.column !== data?.column)
 
     const upEdit = {
       columns: DeleteData,
       rules: deleteRowData?.rules,
       "total-threshold": deleteRowData?.["total-threshold"]
     }
 
     const editApi = await fetchProbabilistic_Config(upEdit)
     setPostProbabilistic_Config(editApi);
 
     if (editApi.isSuccess) {
       toast.error('Delete Data', {
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
     } */

  };

  const deleteConfirmation = async () => {
    const deleteRowData = await fetchProbabilisticConfig();

    const DeleteData = deleteRowData?.columns?.filter((item) => item?.column !== isDelete?.column)

    const upEdit = {
      columns: DeleteData,
      rules: [{
        "column_rule": Array(DeleteData?.length).fill({
          "col_weight": null,
          "min_match": null,
          "name": null
        })
      }],
      "total-threshold": deleteRowData?.["total-threshold"]
    }

    const editApi = await fetchProbabilistic_Config(upEdit)
    setPostProbabilistic_Config(editApi);

    if (editApi.isSuccess) {
      setIsDelete("");
      toast.error('Delete Data', {
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

  const handleEditInApi = async (data) => {

    const hasMatchingColumn = rowData?.some(item => item.column === data.column);

    if (hasMatchingColumn) {
      const handleeditedData = rowData?.map((item) => {
        return item.column === data.column ? data : item
      })



      const upEdit = {
        columns: handleeditedData,
        rules: rowEditData?.rules,
        "total-threshold": rowEditData?.["total-threshold"]
      }



      const editApi = await fetchProbabilistic_Config(upEdit)
      setPostProbabilistic_Config(editApi);

      if (editApi.isSuccess) {
        toast.success('Data Update', {
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

    } else {

      const newData = [...rowData, data];


      const addValue = {
        "col_weight": null,
        "min_match": null,
        "name": null
      }

      /* const upEdit = {
        columns: newData,
        rules: rowEditData?.rules,
        "total-threshold": rowEditData?.["total-threshold"]
      } */

      const upEdit = {
        columns: newData,
        rules: [
          {
            "column_rule": [...rowEditData.rules[0].column_rule, addValue],
          }
        ],
        "total-threshold": rowEditData?.["total-threshold"]
      }

      const editApi = await fetchProbabilistic_Config(upEdit)
      setPostProbabilistic_Config(editApi);
      if (editApi.isSuccess) {
        toast.success('Data Update', {
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

  }

  const closePopup = () => {
    setIsDelete("");
  };

  return (
    <div className='flex flex-col gap-3'>

      <CustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        {managedModal === "More" ? <ProbabilisticMore onClose={closeModal} /> : managedModal === "Add" ? <ProbabilisticAdd onClose={closeModal} handleEditInApi={handleEditInApi} /> : <ProbabilisticEdit onClose={closeModal} handleEditInApi={handleEditInApi} />}
      </CustomModal>

      <DeletePopup
        isOpen={isDelete}
        onCancel={closePopup}
        onDelete={() => deleteConfirmation()}
      />

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
        <div className="relative overflow-auto max-h-[500px]" style={{ width: "60%" }}>
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
  )
}

export default ProbabilisticMatch