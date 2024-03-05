import React, { useState } from 'react'
import BatchJobsDataTable from './BatchJobsDataTable'
import BatchJobsStatusTable from './BatchJobsStatusTable'
import { useSelector } from "react-redux";

const Batchjobs = () => {
    const accLevel = useSelector((state) => state.roleSlice.acclevel)
    const [batchId, setBatchId] = useState();

    const getBatchId = (data) => {
        setBatchId(data)
    };


    return (
        <>
            {accLevel === 'No Access' ?
                <div className="flex justify-center items-center h-screen">
                    <div className="text-2xl font-bold text-center">
                        This page is not accessible.
                    </div>
                </div>
                :
                <div className='w-full h-full ' >
                    <div className='w-full  '><BatchJobsStatusTable getBatchId={getBatchId} /></div>
                    <div className='w-full '><BatchJobsDataTable batchId={batchId} /></div>
                </div>
            }
        </>

    )
}

export default Batchjobs;