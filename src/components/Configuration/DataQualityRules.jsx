import React, { useEffect, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import CustomButton from '../common/CustomButton';
import CustomModal from '../common/CustomModal';
import Image from 'next/image';
import SingleSelectDropDown from '../common/SingleSelectDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { setDataQualityCreate } from '@/store/dataQualitySlice';


const Entity = [
    { label: "guest", value: "guest" },
];
const DataSource = [
    { label: "CRM", value: "crm" },
];
const Attribute = [
    { label: "John", value: "john" },
    { label: "Jack", value: "jack" },
    { label: "Pitter", value: "pitter" },
    { label: "Rock", value: "rock" },
];

const ValidationRule = [
    { label: "datatype_check", value: "datatype_check" },
    { label: "empty_value_check", value: "empty_value_check" },
    { label: "null_value_check", value: "null_value_check" },
    { label: "length_check", value: "length_check" },
    { label: "special_character_check", value: "special_character_check" },
]

const RuleParameters = [
    { label: "string", value: "string" },
    { label: "number", value: "number" },
    { label: "!,@,#,$,%,^,&,*,+,-", value: "!,@,#,$,%,^,&,*,+,-" },
]

const tableData = [
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'datatype_check',
        attribute: 'name',
        ruleparameters: 'string',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'empty_value_check',
        attribute: 'name',
        ruleparameters: '',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'null_value_check',
        attribute: 'name',
        ruleparameters: 'string',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'length_check',
        attribute: 'name',
        ruleparameters: '255',
        ismandatory: false,
        isactive: false,
    },
    {
        datasource: 'CRM',
        entity: 'guest',
        validationrule: 'special_character_check',
        attribute: 'name',
        ruleparameters: '!,@,#,$,%,^,&,*,+,~,|,=',
        ismandatory: false,
        isactive: false,
    },
]

const DataQualityRules = () => {
    const tableRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowData, setRowData] = useState(tableData);

    const [columnDefs] = useState([
        {
            field: "datasource",
            headerName: "Data Source",
            minWidth: 100,
            maxWidth: 200,
            filter: true, 
        },
        {
            field: "entity",
            headerName: "Entity ",
            minWidth: 100,
            maxWidth: 200,
            cellClass: "uppercase"
        },
        {
            field: "validationrule",
            headerName: " Validation Rule",
            minWidth: 200,
            maxWidth: 250,
        },
        {
            field: "attribute",
            headerName: "Attribute",
            minWidth: 100,
            maxWidth: 200,
        },
        {
            field: "ruleparameters",
            headerName: " Rule Parameters",
            minWidth: 180,
            cellClass: "uppercase",
        },
        {
            field: "ismandatory",
            headerName: "Is Mandatory",
            cellClass: "uppercase",
            minWidth: 180,
            maxWidth: 200,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
        },
        {
            field: "isactive",
            headerName: "Is Active",
            cellClass: "uppercase",
            minWidth: 180,
            maxWidth: 200,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
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
        if (param?.column?.colId === "chartID") {
            // openPrevisitPage(param)
        }
    };

    const gridOptions = {
        rowClass: "custom-row-hover",
        // domLayout: 'autoHeight',
    };

    const onGridReady = (params) => {
        tableRef.current = params.api;
        // params.api.setEditable(true);
    };

    const handleCreateModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({})
    };



    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    const dataQualityTable = useSelector(state => state?.dataQuality?.data)
    const handleFromData = (data, target) => {
        setFormData({
            ...formData,
            [target]: data,
        })
    }

    const handleCreateSave = () => {
        dispatch(setDataQualityCreate(formData))
        closeModal()
    }

    const handleEdit = (e, data) => {
        e.stopPropagation();
        const modifyData = {
            datasource: { label: data?.datasource, value: data?.datasource },
            entity: { label: data?.entity, value: data?.entity },
            validationrule: { label: data?.validationrule, value: data?.validationrule },
            attribute: { label: data?.attribute, value: data?.attribute },
            ruleparameters: { label: data?.ruleparameters, value: data?.ruleparameters },
            ismandatory: data?.ismandatory,
            isactive: false,
        };
        setFormData(modifyData);
        setIsModalOpen(true);
    }

    useEffect(() => {
        if (dataQualityTable && Object?.keys(dataQualityTable)?.length > 0) {
            const addData = {
                datasource: dataQualityTable?.datasource?.label,
                entity: dataQualityTable?.entity?.label,
                validationrule: dataQualityTable?.validationrule?.label,
                attribute: dataQualityTable?.attribute?.label,
                ruleparameters: dataQualityTable?.ruleparameters?.label,
                ismandatory: dataQualityTable?.isMandatory,
                isactive: false,
            }
            setRowData(prevData => [...prevData, addData])
            dispatch(setDataQualityCreate({}))
        }
    }, [dataQualityTable])


    return (
        <div className="w-full flex flex-col  gap-6 p-3 xl:h-full">

            <CustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
                <div className='w-full h-full'>
                    <div className='flex justify-between border-b '>
                        <button className='flex items-center flex-shrink-0 gap-6 px-6 '>
                            <Image
                                src="/images/icon/logo.png"
                                alt='HOM-logo'
                                width="212"
                                priority
                                height="40"
                                className='flex-shrink-0  h-auto pb-2'
                            />
                        </button>
                    </div>
                    <div className='p-4 lg:p-6 flex flex-col gap-4 w-full h-full '>

                        <h2 className='text-xl font-bold '> Create Data Quality Rule </h2>
                        <div className='flex flex-col justify-center lg:justify-between h-full'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 w-full'>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        Entity
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Entity"
                                            options={Entity}
                                            target="entity"
                                            creatableSelect={true}
                                            selectedType={formData?.entity}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        Attribute
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Attribute"
                                            options={Attribute}
                                            target="attribute"
                                            creatableSelect={true}
                                            selectedType={formData?.attribute}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        Validation Rule
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Validation Rule"
                                            options={ValidationRule}
                                            target="validationrule"
                                            creatableSelect={true}
                                            selectedType={formData?.validationrule}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        Rule Parameters
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Rule Parameters"
                                            options={RuleParameters}
                                            target="ruleparameters"
                                            creatableSelect={true}
                                            selectedType={formData?.ruleparameters}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        Data Source
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Data Source"
                                            options={DataSource}
                                            target="datasource"
                                            // isDisabled={}
                                            creatableSelect={true}
                                            selectedType={formData?.datasource}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <div className='flex items-center w-full gap-2 custom-select pt-10'>
                                        <input
                                            type="checkbox"
                                            className='h-5 w-5 accent-blue-B40 border-[#4A4A4A] rounded-[4px] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none cursor-pointer'
                                            onChange={(e) => handleFromData(e.target.checked, 'isMandatory')}
                                        />
                                        <label htmlFor="speciality" className="text-[#5A5A5A] whitespace-nowrap w-full max-w-[145px] inline-block text-base font-normal">Is Mandatory
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className='flex items-center justify-end gap-10'>
                                <div className="w-full max-w-[150px]" >
                                    <CustomButton
                                        name="Save"
                                        handleClick={() => handleCreateSave()}
                                        isDisable={false}
                                        isLoading={false}
                                    />
                                </div>
                                <div className="w-full max-w-[150px]" >
                                    <CustomButton
                                        name="Cancel"
                                        handleClick={() => closeModal()}
                                        isDisable={false}
                                        isLoading={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomModal>

            <div className='flex items-center justify-end'>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="Create"
                        handleClick={() => handleCreateModal()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>

            <div className="flex w-full min-h-[50vh] pb-10  xl:max-h-[30%]  mx-auto ag-theme-alpine ">
                <div className="relative overflow-auto max-h-[500px]" style={{ width: "100%" }}>
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

            {/* <div className='flex items-center justify-end gap-10'>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="Cancel"
                        handleClick={() => { }}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="Save"
                        handleClick={() => { }}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div> */}
        </div>
    );
}

export default DataQualityRules