import React, { useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CustomInput from '@/components/common/CustomInput';
import CustomButton from '@/components/common/CustomButton';
import Rules from './Rules';
import { useSelector } from "react-redux";

const RolesAndPermissions = () => {
    const accLevel = useSelector((state) => state.roleSlice.acclevel)
    console.log("🚀 ~ RolesAndPermissions ------------->>>", accLevel)

    const tableRef = useRef(null);
    const [rowData, setRowData] = useState([]);
    const [formData, setFormData] = useState({});
    const [selectedData, setSelectedData] = useState({})

    const [columnDefs] = useState([
        {
            field: "screenName",
            headerName: "Screen Name",
            minWidth: 600
        },

        {
            field: "accessLevel",
            headerName: "accessLevel",
            minWidth: 233,
            filter: true,
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

    const handleFromData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleViewDetails = (data) => {
        // console.log(data, "SELECTED DATA");
        setSelectedData(data);
        setRowData(data?.roleScreens)
    }

    const handleCencelClick = () => {
        setRowData([])
        setSelectedData({});
    }
    return (
        <>
            {accLevel === 'No Access' ?
                <div className="flex justify-center items-center h-screen">
                    <div className="text-2xl font-bold text-center">
                        This page is not accessible.
                    </div>
                </div>
                :
                <div className='p-5 flex flex-col items-start gap-5 w-full custom-scroll overflow-auto  '>
                    <div className='w-full h-full border py-3 px-6 border-[#a6a6a6] rounded-xl'>
                        <Rules handleViewDetails={handleViewDetails} accLevel={accLevel} />
                    </div>
                    <div className='flex flex-col  gap-5 w-full border border-[#a6a6a6] py-3 px-6 h-full max-h-[480px] overflow-auto rounded-xl custom-scroll '>
                        <div className='flex items-center justify-between w-full'>
                            <span className='text-lg font-semibold w-56 '>View Role & Permission</span>
                        </div>

                        <div className='flex h-full flex-col gap-2'>
                            {selectedData?.roleName?.length > 0 && <div className='flex pb-2.5 text-base items-center gap-5'>
                                <div className='w-full items-center gap-3 flex max-w-[20%]'>
                                    <label htmlFor="isActive" className="text-[#5A5A5A] text-base font-normal whitespace-nowrap">Role Name
                                    </label>
                                    <CustomInput
                                        isNUmber={false}
                                        isRequired={false}
                                        isIcon={false}
                                        label=""
                                        placeholder="Enter Role Name"
                                        name="description"
                                        value={selectedData?.roleName}
                                        isdisablad={accLevel === 'View' ? true : false}
                                        onChange={(e) => { }}
                                    />
                                </div>
                                <div className='w-full items-center gap-3 flex max-w-[32%]'>
                                    <label htmlFor="isActive" className="text-[#5A5A5A] text-base font-normal whitespace-nowrap">Description
                                    </label>
                                    <CustomInput
                                        isNUmber={false}
                                        isRequired={false}
                                        isIcon={false}
                                        label=""
                                        placeholder="Enter description"
                                        name="description"
                                        value={selectedData?.description}
                                        isdisablad={true}
                                        onChange={(e) => { }}
                                    />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <label htmlFor="isActive" className="text-[#5A5A5A] text-base font-normal">IsActive
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="isActive"
                                        checked={selectedData?.isActive}
                                        disabled={!selectedData?.isActive}
                                        onChange={(e) => e.preventDefault()}
                                        className='h-5 w-5 accent-blue-600 disabled:accent-blue-500'
                                    />
                                </div>
                                <div className='w-full max-w-[100px] ml-12 md:max-w-[150px]'>
                                    <CustomButton
                                        name="CANCEL"
                                        handleClick={() => handleCencelClick()}
                                        isDisable={!(selectedData?.roleName?.length > 0)}
                                        isLoading={false}
                                    />
                                </div>
                            </div>}
                            <div className="flex  w-full overflow-auto  min-h-[35vh] xl:max-h-[70%]  mx-auto ag-theme-alpine  ">
                                <div className="relative overflow-auto max-h-[350px] max-w-[60%] " style={{ width: "100%" }}>
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
                        </div>
                    </div>

                </div>
            }

        </>

    )
}

export default RolesAndPermissions