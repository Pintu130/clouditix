import CustomButton from "@/components/common/CustomButton";
import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState, useMemo, useCallback } from "react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import CustomModal from "@/components/common/CustomModal";
import ContactModel from "./ContactModel";
import SmCustomModal from "@/components/common/SmCustomModal";

const staticData = [
  {
    athlete: "Coralie Simmons",
    age: 23,
    country: "United States",
    year: 2000,
    date: "01/10/2000",
    sport: "Waterpolo",
    gold: 0,
    silver: 1,
    bronze: 0,
    total: 1,
  },
];

const GuestContactDetails = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState([
    {
      busineddCountryCode: "IND",
      homeCountryCode: "USA",
      busineddPhone: "123456789",
      homePhone: "987654321",
      mobileCountryCode: "IND",
      mobilePhone: "1597532648",
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
      emailBusiness: "business@email.com",
      emailPersonal: "personal@email.com",
      emailAlternate: "alternate@email.com"

    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleContactModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [columnDefs] = useState([
    {
      headerName: 'Business Phone',
      headerClass: "flex justify-center",
      children: [
        {
          field: 'busineddCountryCode',
          width: 180,
          headerName: "Country Code",
          filter: 'agTextColumnFilter',
        },
        {
          field: 'busineddPhone',
          headerName: "Phone",
          width: 90,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
    {
      headerName: 'Home Phone',
      headerClass: "flex justify-center",
      children: [
        {
          field: 'homeCountryCode',
          width: 180,
          headerName: "Country Code",
          filter: 'homeCountryCode',
        },
        {
          field: 'homePhone',
          headerName: "Phone",
          width: 90,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
    {
      headerName: 'Mobile Phone',
      headerClass: "flex justify-center",
      children: [
        {
          field: 'mobileCountryCode',
          width: 180,
          headerName: "Country Code",
          filter: 'agTextColumnFilter',
        },
        {
          field: 'mobilePhone',
          headerName: "Phone",
          width: 90,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
    {
      headerName: 'Email Address',
      headerClass: "flex justify-center",
      children: [
        {
          field: 'emailBusiness',
          minWidth: 250,
          headerName: "Business",
          filter: 'agTextColumnFilter',
        },
        {
          field: 'emailPersonal',
          headerName: "Personal",
          minWidth: 250,
          filter: 'agNumberColumnFilter',
        },
        {
          field: 'emailAlternate',
          headerName: "Alternate",
          minWidth: 250,
          filter: 'agNumberColumnFilter',
        },
      ],
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
    },
    wrapText: true,
    autoHeight: true,
    headerClass: "whitespace-normal",
  }

  const gridOptions = {
    rowClass: 'custom-row-hover',
  };

  return (
    <div className=" w-full  flex flex-col gap-2 border border-gray-400 rounded-lg p-2 h-full custom-scroll">

      <SmCustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <ContactModel />
      </SmCustomModal>

      <div className=" w-full h-full flex items-center gap-3">
        <FaChevronDown className="h-4 w-4" />
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

      <div className="flex w-full h-full min-h-[30vh] pb-10  xl:max-h-[60%]  mx-auto ag-theme-alpine ">
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
            animateRows={true}
            suppressRowClickSelection={true}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestContactDetails;
