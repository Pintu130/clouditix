import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BiSolidPencil } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import SingleSelectDropDown from '../common/SingleSelectDropDown';
import CustomButton from '../common/CustomButton';
import CustomModal from '../common/CustomModal';
import { setDataQualityCreate } from '@/store/dataQualitySlice';
import { DataSource,  ValidationRule, columnName, fetchDeleteTableData, fetchInsertTableData, fetchTableData, fetchUpdateTableData, ruleDescription, tableData, tableName } from '@/assets/data';
import CustomInput from '../common/CustomInput';
import DataQualitySearch from './DataQualitySearch';
import { MdDeleteForever } from 'react-icons/md';

const DataQualityRules = () => {
    const tableRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowData, setRowData] = useState(tableData);

    const [columnDefs] = useState([
        {
            field: "columnName",
            headerName: "Column Name",
            minWidth: 100,
            maxWidth: 150,
            filter: true,
        },
        {
            field: "tableName",
            headerName: "Table Name",
            minWidth: 100,
            maxWidth: 200,
            filter: true,
        },
        {
            field: "dataSource",
            headerName: "Data Source",
            minWidth: 100,
            maxWidth: 150,
            filter: true,
        },
        {
            field: "validationRule",
            headerName: " Validation Rule",
            minWidth: 200,
            maxWidth: 250,
        },
        {
            field: "ruleDescription",
            headerName: "Rule Description ",
            minWidth: 100,
            // maxWidth: 200,
            cellClass: "uppercase"
        },
        {
            field: "ruleParameters",
            headerName: " Rule Parameters",
            minWidth: 180,
            maxWidth: 250,
            cellClass: "uppercase",
        },
        {
            field: "isMandatory",
            headerName: "Is Mandatory",
            cellClass: "uppercase",
            minWidth: 80,
            maxWidth: 100,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
        },
        {
            field: "isActive",
            headerName: "Is Active",
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
        {

            field: '', headerName: "Delete", minWidth: 60, maxWidth: 80, cellRenderer: (params) => {
                const data = params.data;
                return (
                    <div className="flex items-center justify-center h-full  ">
                        <button
                            onClick={(e) => handleDelete(e, data)}
                        >
                            <MdDeleteForever className="w-6 h-6 text-blue-B40" />
                        </button>
                    </div>
                );
            },
        },
    ]);



    useEffect(() => {
        ; (async () => {
            const data = await fetchTableData()

            if (data?.length > 0) {
                setRowData(data);
            }
        }
        )()
    }, [])


    const frameworkComponents = {
        agCheckboxCellRenderer: (params) => {
            console.log(params);
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
        const id = formData.id || generateUniqueId();
        setFormData({
            ...formData,
            id,
            [target]: data,
        })
    }


    const generateUniqueId = () => {
        return Math.floor(Math.random() * 1000000);;
    };

    const handleCreateSave = async () => {

        const checkEditdata = rowData.some(rowId => rowId.id === formData.id);
        if (checkEditdata) {
            const editData = {
                id: formData.id,
                tableId: 1,
                columnName: formData?.columnName?.label,
                dataSource: formData?.dataSource?.label,
                tableName: formData?.tableName?.label,
                validationRule: formData?.validationRule?.label,
                ruleDescription: formData?.ruleDescription?.label,
                ruleParameters: formData?.ruleParameters,
                isMandatory: formData?.isMandatory,
                isActive: formData?.isActive,
            }

            console.log(editData);
            const updateData = await fetchUpdateTableData(editData)
            console.log(updateData);

            const updatedRowData = rowData.map((row) =>
                row.id === editData.id ? { ...row, ...editData } : row
            );
            setRowData(updatedRowData)
        } else {
            console.log(formData);
            const insertData = {
                id: 0,
                tableId: 1,
                columnName: formData?.columnName?.label,
                dataSource: formData?.dataSource?.label,
                tableName: formData?.tableName?.label,
                validationRule: formData?.validationRule?.label,
                ruleDescription: formData?.ruleDescription?.label,
                ruleParameters: formData?.ruleParameters,
                isMandatory: formData?.isMandatory,
                isActive: formData?.isActive,
            }

            const createTable = await fetchInsertTableData(insertData)

            console.log(createTable);
            console.log(insertData);
            dispatch(setDataQualityCreate(formData))
        }
        closeModal()
    }

    const handleDelete = async (e, data) => {
        console.log(data?.id);
        if (data?.id) {
            const deleteData = await fetchDeleteTableData(data?.id);
            console.log(deleteData);
        }
    }

    const handleEdit = (e, data) => {
        e.stopPropagation();
        const modifyData = {
            id: data.id,
            columnName: { label: data?.columnName, value: data?.columnName },
            dataSource: { label: data?.dataSource, value: data?.dataSource },
            tableName: { label: data?.tableName, value: data?.tableName },
            validationRule: { label: data?.validationRule, value: data?.validationRule },
            ruleDescription: { label: data?.ruleDescription, value: data?.ruleDescription },
            ruleParameters: data?.ruleParameters,
            isMandatory: data?.isMandatory,
            isActive: data?.isActive,
        };
        setFormData(modifyData);
        setIsModalOpen(true);
    }

    useEffect(() => {
        if (dataQualityTable && Object?.keys(dataQualityTable)?.length > 0) {
            const addData = {
                id: dataQualityTable?.id,
                columnName: dataQualityTable?.columnName?.label,
                tableName: dataQualityTable?.tableName?.label,
                ruleDescription: dataQualityTable?.ruleDescription?.label,
                dataSource: dataQualityTable?.dataSource?.label,
                validationRule: dataQualityTable?.validationRule?.label,
                ruleParameters: dataQualityTable?.ruleParameters,
                isMandatory: dataQualityTable?.isMandatory,
                isActive: false,
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
                                        columnName
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Column Name"
                                            options={columnName}
                                            target="columnName"
                                            creatableSelect={true}
                                            selectedType={formData?.columnName}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        dataSource
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Data Source"
                                            options={DataSource}
                                            target="dataSource"
                                            creatableSelect={true}
                                            selectedType={formData?.dataSource}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        tableName
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Table Name"
                                            options={tableName}
                                            target="tableName"
                                            creatableSelect={true}
                                            selectedType={formData?.tableName}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        validationRule
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter validationRule"
                                            options={ValidationRule}
                                            target="validationRule"
                                            creatableSelect={true}
                                            selectedType={formData?.validationRule}
                                            handleSelectChange={handleFromData}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <label
                                        htmlFor="speciality"
                                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                                    >
                                        ruleDescription
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Enter Rule Description"
                                            options={ruleDescription}
                                            target="ruleDescription"
                                            creatableSelect={true}
                                            selectedType={formData?.ruleDescription}
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
                                        <CustomInput
                                            isNUmber={false}
                                            isRequired={true}
                                            isIcon={true}
                                            label=""
                                            placeholder=""
                                            name="ruleParameters"
                                            value={formData?.ruleParameters}
                                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <div className='flex items-center w-full gap-2 custom-select '>
                                        <input
                                            type="checkbox"
                                            className='h-5 w-5 accent-blue-B40 border-[#4A4A4A] rounded-[4px] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none cursor-pointer'
                                            checked={formData?.isMandatory}
                                            onChange={(e) => handleFromData(e.target.checked, 'isMandatory')}
                                        />
                                        <label htmlFor="speciality" className="text-[#5A5A5A] whitespace-nowrap w-full max-w-[145px] inline-block text-base font-normal">Is Mandatory
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                                    <div className='flex items-center w-full gap-2 custom-select '>
                                        <input
                                            type="checkbox"
                                            className='h-5 w-5 accent-blue-B40 border-[#4A4A4A] rounded-[4px] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none cursor-pointer'
                                            checked={formData?.isActive}
                                            onChange={(e) => handleFromData(e.target.checked, 'isActive')}
                                        />
                                        <label htmlFor="speciality" className="text-[#5A5A5A] whitespace-nowrap w-full max-w-[145px] inline-block text-base font-normal">Is Active
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

            <div className='border border-[#a6a6a6] rounded-xl p-4'>
                <DataQualitySearch />
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