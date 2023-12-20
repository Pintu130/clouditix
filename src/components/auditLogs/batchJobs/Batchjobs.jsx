import React from 'react'
import BatchJobsDataTable from './BatchJobsDataTable'
import BatchJobsStatusTable from './BatchJobsStatusTable'

const Batchjobs = () => {
    return (
        <div className='w-full h-full'>
            <div className='w-full '><BatchJobsStatusTable /></div>
            <div className='w-full '><BatchJobsDataTable /></div>
        </div>
    )
}

export default Batchjobs