import React from 'react'
import BarCharts from './BarCharts'
import LineCharts from './LineCharts'
import PieCharts from './PieCharts'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex flex-col  py-5 px-5 gap-5'>
      <div className='w-full flex items-center justify-center gap-5 '>
        <div className='w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
          <PieCharts />
        </div>
        <div className='w-1/2 border border-[#a6a6a6] rounded-lg px-5 ' >
          <LineCharts />
        </div>
      </div>
      <div className='flex items-center justify-center border border-[#a6a6a6] rounded-lg px-5 '>
        <BarCharts />
      </div>
    </div>
  )
}

export default Dashboard