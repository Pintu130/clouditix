import { SocialMediaData } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomModal from "@/components/common/CustomModal";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import SocialMediaModel from "./SocialMediaModel";
import SmCustomModal from "@/components/common/SmCustomModal";
import { useSelector } from "react-redux"
import { BiSolidPencil } from "react-icons/bi";

const SocialMedia = ({ isHideAll, onHandleHide, allData }) => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHideSocialMedia, setisHideSocialMedia] = useState(true);
  const [updateRowData, setUpdateRowData] = useState({})
  const socialMedia = useSelector(state => state?.createData?.socialMedia)

  const handleSocialModal = () => {
    setIsModalOpen(true);
    setUpdateRowData({})
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateRowData({})
  };


  useEffect(() => {
    if (allData?.socialMediaProfiles?.length > 0) {
      setRowData(allData?.socialMediaProfiles)
    }
  }, [allData])

  const [columnDefs] = useState([
    {
      field: "socialMediaApp",
      headerName: "Social Media Application ",
      minWidth: 250,
      maxWidth: 300,
      filter: true,
    },
    {
      field: "profile",
      headerName: "Social Media Profile ",
      minWidth: 250,
      filter: true,
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

    if (socialMedia?.length > 0) {
      const newData = socialMedia?.map((item) => ({
        id: item.id,
        socialMediaApp: item?.socialMediatype?.value,
        profile: item?.Profile,
      }));
      setRowData(newData)
    }
  }, [socialMedia])


  useEffect(() => {
    setisHideSocialMedia(isHideAll)
  }, [isHideAll])

  const handleHide = (e) => {
    e.stopPropagation();
    setisHideSocialMedia(!isHideSocialMedia);
    onHandleHide(!isHideSocialMedia);
  }

  const handleEdit = (e, data) => {
    e.stopPropagation();
    setUpdateRowData(data);
    setIsModalOpen(true);
  }

  return (
    <div className="flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-2 h-full custom-scroll">

      <SmCustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <SocialMediaModel onClose={closeModal} updateRowData={updateRowData} />
      </SmCustomModal>

      <div className="flex items-center gap-3">

        <FaChevronDown className={`h-4 w-4 transform ${!isHideSocialMedia ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-transform duration-300 ease-in-out`} onClick={(e) => handleHide(e)} />

        <div className=" w-[150px] flex gap-2   ">
          <CustomButton
            name="Social Media"
            handleClick={() => handleSocialModal()}
            isDisable={false}
            isLoading={false}
            icon={<MdOutlineAdd className="h-6 w-6  " />}
          />
        </div>
      </div>

      {isHideSocialMedia && <div className="flex w-full h-full min-h-[30vh] pb-10  xl:max-h-[60%]  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto"
          style={{ width: "50%" }}
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

export default SocialMedia;
