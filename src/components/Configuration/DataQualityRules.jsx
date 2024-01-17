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
import { ValidationRule, fetchDeleteTableData, fetchInsertTableData, fetchTableData, fetchUpdateTableData, fetchdatasource, fetchentity, fetchvalidationRule, tableData } from '@/assets/data';
import CustomInput from '../common/CustomInput';
import DataQualitySearch from './DataQualitySearch';
// import DeletePopup from '../common/DeletePopup';

const DataQualityRules = () => {
    const tableRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowData, setRowData] = useState(tableData);
    const [searchDatas, setSearchDatas] = useState([])
    const [datasourceData, setDatasourceData] = useState([])
    const [entity, setEntity] = useState([])
    const [columnName, setColumnName] = useState([])
    const [rule, setRule] = useState([])
    const [formData, setFormData] = useState({})
    // const [isDelete, setIsDelete] = useState()


    useEffect(() => {
        ; (async () => {
            const response = await fetchdatasource()
            
            const data = response?.data?.map((item) => ({
                label: item?.dataSource, value: item?.dataSource
            }))

            const uniqueValues = new Set();

            // Filter out duplicate entries and add unique values to the Set
            const uniqueData = data?.filter((entry) => {
                if (!uniqueValues.has(entry.value)) {
                    uniqueValues.add(entry.value);
                    return true;
                }
                return false;
            });

            setDatasourceData(uniqueData)


        })()
    }, [formData])

    useEffect(() => {
        ; (async () => {
            const respo = await fetchdatasource();

            if (respo?.data?.length > 0) {

                const response = respo?.data?.filter((item) => formData?.dataSource?.label === item.dataSource)

                const data = response?.map((item) => ({
                    label: item?.tableName, value: item?.tableName
                }))

                const uniqueValues = new Set();

                // Filter out duplicate entries and add unique values to the Set
                const uniqueData = data.filter((entry) => {
                    if (!uniqueValues.has(entry.value)) {
                        uniqueValues.add(entry.value);
                        return true;
                    }
                    return false;
                });

                setEntity(uniqueData)
            }


            if (respo?.data?.length > 0) {

                const response = respo?.data?.filter((item) => formData?.entity?.label === item.tableName)

                const data = response?.map((item) => ({
                    label: item?.columnName, value: item?.columnName
                }))

                const uniqueValues = new Set();

                // Filter out duplicate entries and add unique values to the Set
                const uniqueData = data.filter((entry) => {
                    if (!uniqueValues.has(entry.value)) {
                        uniqueValues.add(entry.value);
                        return true;
                    }
                    return false;
                });

                setColumnName(uniqueData)
            }


        })()
    }, [formData])




    useEffect(() => {
        ; (async () => {
            const data = await fetchvalidationRule()
            const uniqueValues = new Set();

            // Filter out duplicate entries and add unique values to the Set
            const uniqueData = data.filter((entry) => {
                if (!uniqueValues.has(entry.value)) {
                    uniqueValues.add(entry.value);
                    return true;
                }
                return false;
            });

            setRule(uniqueData)
        })()
    }, [formData])




    const [columnDefs] = useState([
        {
            field: "dataSource",
            headerName: "Data Source",
            minWidth: 100,
            maxWidth: 150,
            filter: true,
        },
        {
            field: "tableName",
            headerName: "Entity",
            minWidth: 100,
            maxWidth: 200,
            filter: true,
        },
        {
            field: "columnName",
            headerName: "Attribute",
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
            minWidth: 100,
            maxWidth: 110,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
            floatingFilter: false,
        },
        {
            field: "isActive",
            headerName: "Is Active",
            cellClass: "uppercase",
            minWidth: 80,
            maxWidth: 100,
            cellRenderer: "agCheckboxCellRenderer",
            editable: true,
            floatingFilter: false,
        },
        {

            field: '',
            headerName: "Edit",
            minWidth: 60,
            maxWidth: 80,
            floatingFilter: false,
            cellRenderer: (params) => {
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
        /* {

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
        }, */
    ]);


    const handleSearchData = (data) => {

        if (Object.keys(data).length > 0) {

            const searchData = searchDatas?.filter((item) => (data?.datasource?.value === "all" || item?.dataSource === data?.datasource?.value) &&
                (data?.entity?.value === "all" || item?.tableName === data?.entity?.value) &&
                (data?.attribute?.value === "all" || item?.columnName === data?.attribute?.value) &&
                (data?.rule?.value === "all" || item?.validationRule === data?.rule?.value) &&
                (data?.status?.value === "all" || item?.isActive === data?.status?.value)
            )

            setRowData(searchData)
        }


    }


    useEffect(() => {
        ; (async () => {
            const data = await fetchTableData()
            if (data?.length > 0) {
                setRowData(data);
                setSearchDatas(data);
            }
        }
        )()
    }, [])


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
        suppressMovable: true,
        resizable: false,
        cellStyle: {
            color: "#3B475A",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "normal",
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
        paginationPageSize: 10,
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
        setFormData({
            columnName: '',
            dataSource: '',
            tableName: '',
            validationRule: '',
            ruleParameters: '',
            isMandatory: '',
            isActive: '',
        })
    };

    /* const dispatch = useDispatch()
    const dataQualityTable = useSelector(state => state?.dataQuality?.data) */
    const handleFromData = (data, target) => {
        setFormData({
            ...formData,
            [target]: data,
        })
    }

    /* 
        const generateUniqueId = () => {
            return Math.floor(Math.random() * 1000000);;
        }; */

    const handleCreateSave = async () => {

        const checkEditdata = rowData.some(rowId => rowId.id === formData.id);
        if (checkEditdata) {
            const editData = {
                id: formData.id,
                tableId: formData.tableId,
                columnName: formData?.columnName?.label,
                dataSource: formData?.dataSource?.label,
                tableName: formData?.tableName?.label,
                validationRule: formData?.validationRule?.label,
                ruleParameters: formData?.ruleParameters,
                isMandatory: formData?.isMandatory,
                isActive: formData?.isActive,
            }

            const updateData = await fetchUpdateTableData(editData)

            if (updateData?.isSuccess) {
                const data = await fetchTableData()
                if (data?.length > 0) {
                    setRowData(data);
                }
                closePopup()
            }

            /* const updatedRowData = rowData.map((row) =>
                row.id === editData.id ? { ...row, ...editData } : row
            );
            setRowData(updatedRowData) */
        } else {
            const insertData = {
                id: 0,
                tableId: 0,
                columnName: formData?.columnName?.label,
                dataSource: formData?.dataSource?.label,
                tableName: formData?.tableName?.label,
                validationRule: formData?.validationRule?.label,
                ruleParameters: formData?.ruleParameters || '',
                isMandatory: formData?.isMandatory || false,
                isActive: formData?.isActive || false,
            }

            const createTable = await fetchInsertTableData(insertData)
            if (createTable?.isSuccess) {
                const data = await fetchTableData()
                if (data?.length > 0) {
                    setRowData(data);
                }
                closePopup()
            }
            // dispatch(setDataQualityCreate(formData))
        }
        closeModal()
    }

    // const handleDelete = async (e, data) => {
    //     if (data?.id) {
    //         setIsDelete(data?.id)
    //     }
    // }
    const handleEdit = (e, data) => {
        e.stopPropagation();
        const modifyData = {
            id: data.id,
            tableId: data?.tableId,
            columnName: { label: data?.columnName, value: data?.columnName },
            dataSource: { label: data?.dataSource, value: data?.dataSource },
            tableName: { label: data?.tableName, value: data?.tableName },
            validationRule: { label: data?.validationRule, value: data?.validationRule },
            ruleParameters: data?.ruleParameters,
            isMandatory: data?.isMandatory,
            isActive: data?.isActive,
        };
        setFormData(modifyData);
        setIsModalOpen(true);
    }

    const closePopup = () => {
        // setIsDelete()
    }

    /*     const deleteConfirmation = async () => {
            if (isDelete) {
                const deleteData = await fetchDeleteTableData(isDelete);
                if (deleteData?.data?.isSuccess) {
                    const data = await fetchTableData()
                    if (data?.length > 0) {
                        setRowData(data);
                    }
                    closePopup()
                }
            }
        } */
    return (
        <div className="w-full flex flex-col  gap-6 p-3 xl:h-full">

            {/* <DeletePopup
                isOpen={isDelete}
                onCancel={closePopup}
                onDelete={() => deleteConfirmation()}
            /> */}

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
                                        Data Source
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Select Data Source"
                                            options={datasourceData}
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
                                        Entity Name
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Select Entity Name"
                                            options={entity}
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
                                            placeholder="Select Attribute"
                                            options={columnName}
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
                                        Rule
                                    </label>
                                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                                        <SingleSelectDropDown
                                            placeholder="Select Rule"
                                            options={rule}
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

            <div className='flex items-center justify-end pr-4'>
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
                <DataQualitySearch searchDatas={searchDatas} handleSearchData={handleSearchData} />
            </div>

            <div className="flex w-full min-h-[70vh] pb-10  xl:max-h-[30%]  mx-auto ag-theme-alpine ">
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
                        // paginationAutoPageSize={true}
                        onGridReady={onGridReady}
                        suppressCopyRowsToClipboard={true}
                        animateRows={true}
                        paginationPageSize={10}
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