import CustomButton from "@/components/common/CustomButton";
import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState, useMemo, useCallback, useEffect } from "react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import ContactModel from "./ContactModel";
import SmCustomModal from "@/components/common/SmCustomModal";
import { useSelector } from "react-redux";
import { BiSolidPencil } from "react-icons/bi";



const GuestContactDetails = ({ isHideAll, onHandleHide }) => {
  const tableRef = useRef(null);
  const [updateRowData, setUpdateRowData] = useState({})
  const [rowData, setRowData] = useState([
    {
      busineddCountryCode: "IND",
      homeCountryCode: "USA",
      busineddPhone: "123456789",
      homePhone: "987654321",
      mobileCountryCode: "IND",
      mobilePhone: "1597532648",
      alternateeCountryCode: "INZ",
      alternatPhone: "9863475112",
      emailBusiness: "business@email.com",
      emailPersonal: "personal@email.com",
      emailAlternate: "alternate@email.com"

    },
    {
      busineddCountryCode: "USA",
      homeCountryCode: "IND",
      busineddPhone: "123456789",
      homePhone: "987654321",
      mobileCountryCode: "ESZ",
      mobilePhone: "1597532648",
      alternateeCountryCode: "INZ",
      alternatPhone: "9863475112",
      emailBusiness: "business@email.com",
      emailPersonal: "personal@email.com",
      emailAlternate: "alternate@email.com"

    },
    {
      busineddCountryCode: "UKS",
      homeCountryCode: "PAK",
      busineddPhone: "123456789",
      homePhone: "987654321",
      mobileCountryCode: "AIZ",
      mobilePhone: "1597532648",
      alternateeCountryCode: "INZ",
      alternatPhone: "9863475112",
      emailBusiness: "business@email.com",
      emailPersonal: "personal@email.com",
      emailAlternate: "alternate@email.com"

    },
  ]);

  const [columnDefs] = useState([
    {
      headerName: 'Business Phone',
      headerClass: "flex justify-center border-r border-[#a6a6a6]",
      children: [
        {
          field: 'busineddCountryCode',
          width: 180,
          headerName: "Country Code",
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
          filter: 'agTextColumnFilter',
        },
        {
          headerClass: "flex justify-center border-r",
          field: 'busineddPhone',
          headerName: "Phone",
          width: 90,
          filter: 'agNumberColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
      ],
    },
    {
      headerName: 'Home Phone',
      headerClass: "flex justify-center border-r border-[#a6a6a6]",
      children: [
        {
          field: 'homeCountryCode',
          width: 180,
          headerName: "Country Code",
          filter: 'homeCountryCode',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
        {
          field: 'homePhone',
          headerName: "Phone",
          width: 90,
          filter: 'agNumberColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
      ],
    },
    {
      headerName: 'Mobile Phone',
      headerClass: "flex justify-center border-r border-[#a6a6a6]",
      children: [
        {
          field: 'mobileCountryCode',
          width: 180,
          headerName: "Country Code",
          filter: 'agTextColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
        {
          field: 'mobilePhone',
          headerName: "Phone",
          width: 90,
          filter: 'agNumberColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
      ],
    },
    {
      headerName: 'Alternate Phone',
      headerClass: "flex justify-center border-r border-[#a6a6a6]",
      children: [
        {
          field: 'alternateeCountryCode',
          width: 180,
          headerName: "Country Code",
          filter: 'agTextColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
        {
          field: 'alternatPhone',
          headerName: "Phone",
          width: 200,
          filter: 'agNumberColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
      ],
    },
    {
      headerName: 'Email Address',
      headerClass: "flex justify-center ",
      children: [
        {
          field: 'emailBusiness',
          minWidth: 200,
          headerName: "Business",
          filter: 'agTextColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
        {
          field: 'emailPersonal',
          headerName: "Personal",
          minWidth: 200,
          filter: 'agNumberColumnFilter',
          headerClass: "flex justify-center border-r border-[#a6a6a6]",
        },
        {
          field: 'emailAlternate',
          headerName: "Alternate",
          minWidth: 200,
          filter: 'agNumberColumnFilter',
          headerClass: "flex justify-center ",
        },
      ],
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
    flex: 1,
    headerComponentParams: { placeholder: 'Enter Member ID' },
    resizable: true,
    suppressMovable: true,
    resizable: false,
    cellStyle: {
      color: '#4A4A4A',
      fontFamily: 'Assistant',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: "24px",
      paddingTop: "8px",
      paddingBottom: "8px",
      // borderRight: '1px solid #a6a6a6',
    },
    wrapText: true,
    autoHeight: true,
    headerClass: "whitespace-normal",
  }

  const gridOptions = {
    rowClass: 'custom-row-hover',
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHideContact, setisHideContact] = useState(true);
  const contectData = useSelector(state => state?.createData?.contect)
  useEffect(() => {

    if (contectData?.length > 0) {
      const newContect = contectData?.map((item) => ({
        id: item?.id,
        busineddCountryCode: "IND",
        homeCountryCode: "USA",
        busineddPhone: item?.businessphone,
        homePhone: item?.homephone,
        mobileCountryCode: "IND",
        alternateeCountryCode: "IND",
        mobilePhone: item?.mobilephone,
        alternatPhone: item?.alternatephone,
        emailBusiness: item?.businessemail,
        emailPersonal: item?.personalemail,
        emailAlternate: item?.alternateemail
      }));

      setRowData(newContect)
    }
  }, [contectData])


  const handleContactModal = () => {
    setIsModalOpen(true);
    setUpdateRowData({})
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateRowData({})
  };



  useEffect(() => {
    setisHideContact(isHideAll)
  }, [isHideAll])

  const handleHide = (e) => {
    e.stopPropagation();
    setisHideContact(!isHideContact);
    onHandleHide(!isHideContact);
  }

  const handleEdit = (e, data) => {
    e.stopPropagation();
    setUpdateRowData(data);
    setIsModalOpen(true);
  }

  return (
    <div className=" w-full  flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-2 h-full custom-scroll">

      <SmCustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <ContactModel onClose={closeModal} updateRowData={updateRowData} />
      </SmCustomModal>

      <div className=" w-full h-full flex items-center gap-3">

        <FaChevronDown className={`h-4 w-4 transform ${!isHideContact ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-transform duration-300 ease-in-out`} onClick={(e) => handleHide(e)} />

        <div className=" w-[170px] flex gap-2   ">
          <CustomButton
            name="Contact Details"
            handleClick={() => handleContactModal()}
            isDisable={false}
            isLoading={false}
            icon={<MdOutlineAdd className="h-6 w-6" />}
          />
        </div>
      </div>

      {isHideContact && <div className="flex w-full h-full min-h-[30vh] pb-10  xl:max-h-[60%]  mx-auto ag-theme-alpine ">
        <div
          className="relative overflow-auto"
          style={{ width: "100%" }}
        >
          <AgGridReact
            ref={tableRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            rowSelection='multiple'
            gridOptions={gridOptions}
            paginationAutoPageSize={true}
            pagination={true}
            animateRows={true}
            suppressRowClickSelection={true}
          />
        </div>
      </div>}
    </div>
  );
};

export default GuestContactDetails;
