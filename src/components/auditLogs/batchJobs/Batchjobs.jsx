import React, { useState } from 'react'
import BatchJobsDataTable from './BatchJobsDataTable'
import BatchJobsStatusTable from './BatchJobsStatusTable'

const Batchjobs = () => {
    const [batchId, setBatchId] = useState();

    const getBatchId = (data) => {
        setBatchId(data)
        console.log(data);
    };


    return (
        <div className='w-full h-full ' >
            <div className='w-full  '><BatchJobsStatusTable getBatchId={getBatchId} /></div>
            <div className='w-full '><BatchJobsDataTable batchId={batchId} /></div>

        </div>
    )
}

export default Batchjobs;