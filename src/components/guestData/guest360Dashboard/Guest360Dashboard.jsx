import React from 'react'
import BarCharts from './BarCharts'
import LineCharts from '@/components/Dashboard/LineCharts'
import Histogram from './Histogram'
import PieCharts from './PieCharts'
import ADRLineChart from './ADRLineChart'
import { CLVData, adrGrapgData, repeatGuestChartData, revParData, reviewsvalue, gsinex, attribution } from '@/assets/data'

const Guest360Dashboard = () => {
    const dataWithColor = [
        { name: "Standard", color: '#4285f4', key: "spatreatments" },
        { name: "Deluxe", color: '#ea4335', key: "restaurantdining" },
        { name: "Suite", color: '#fbbc04', key: "conciergerequests" },
    ]
    const repeatGuestDataColor = [
        // { name: "Repeat Guests", color: '#4285f4', key: "spatreatments" },
        // { name: "Total Guests", color: '#ea4335', key: "restaurantdining" },
        { name: "Repeat Guest Rate", color: '#93c47d', key: "conciergerequests" },
    ]
    return (
        <div className='w-full h-full flex flex-col py-5 px-5 gap-5 pb-5'>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 '>
                <div className='w-full border border-[#a6a6a6] rounded-lg px-5' >
                    <ADRLineChart data={adrGrapgData} dataWithColor={dataWithColor} xLable="ADR" yLable="Day" mainLabel='ADR' />
                </div>
                <div className='w-full border border-[#a6a6a6] rounded-lg px-5' >
                    <ADRLineChart data={revParData} dataWithColor={dataWithColor} xLable="REVPAR" yLable="Day" mainLabel='REVPAR' />
                </div>
            </div>


            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 '>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <BarCharts status="CLV" title="Customer Lifetime Value (CLV)" xLable="No Of Guests" yLable="CLV" data={CLVData} />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <ADRLineChart data={repeatGuestChartData} dataWithColor={repeatGuestDataColor} xLable="Repeat Guest Rate(%)" yLable="Year" mainLabel='Repeat Guest Rate' />
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 '>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <BarCharts status="RV" title="Reviews for last 3 months" xLable="Review Valume" yLable="Platfom" data={reviewsvalue} />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <BarCharts status="GSI" title="Guest Satisfaction index" xLable="No Of Guests" yLable="GSI" data={gsinex} />
                </div>
            </div>
            <div className='flex items-center justify-center border border-[#a6a6a6] rounded-lg px-5 '>
                <BarCharts status="MC" title="Marketing Channels through years" xLable="" yLable="Marketing Channel
" data={attribution} />
            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 '>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <BarCharts status={"LOS"} xLable="No Of Guests" yLable="Length of Stay (LOS)" />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 ' >
                    <BarCharts status={"Rating"} xLable="No Of Guests" yLable="Satisfaction Level" />
                </div>
            </div>
            <div className='flex items-center justify-center border border-[#a6a6a6] rounded-lg px-5 '>
                <LineCharts xLable="No Of Guests" yLable="Rating received" />
            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 '>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <BarCharts status={"LTOR"} xLable="No Of Guests" yLable="Likelihood to Recommend" />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 ' >
                    <BarCharts status={"GSH"} xLable="No Of Guests" yLable="Guest Stay History" />
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"USR"} xLable="No Of Guests" yLable="Upsell_Revenue" />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 overflow-x-auto' >
                    <Histogram status={"CLV"} xLable="No Of Guests" yLable="Customer Lifetime Value" />
                </div>
            </div>

            <div className='w-full flex  flex-col md:flex-row items-center justify-center gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"TTR"} xLable="No Of Guests" yLable="Time To Resolve(InMinutes)" />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 overflow-x-auto' >
                    <BarCharts status={"LA"} xLable="No Of Guests" yLable="Level Achieved" />
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"NIF"} xLable="No Of Guests" yLable="No of issue" />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 overflow-x-auto' >
                    <BarCharts status={"NVR"} xLable="No Of Guests" yLable="Menu variety Options rating" />
                </div>
            </div>


            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <BarCharts status={"RDO"} xLable=" Guests Rating" yLable="Location" />

                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 overflow-x-auto' >
                    <BarCharts status={"GSR"} xLable="No Of Guests" yLable="Guest Satisfaction Rating" />
                </div>

            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <PieCharts />
                </div>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 overflow-x-auto' >
                    <BarCharts status={"RT"} xLable="Response Time" yLable="Staff Involved" />
                </div>


            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5 overflow-x-auto' >
                    <BarCharts status={"LLP"} xLable="No Of Guests" yLable="Level Achieved" />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"SS"} xLable="No Of Guests" yLable="No of issue" />
                </div>


            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center  gap-5'>


                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"NOR"} />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"PM"} />
                </div>


            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center  gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"NM"} />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"TM"} />
                </div>



            </div>


            <div className='w-full flex flex-col md:flex-row items-center justify-center  gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"ER"} />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"WV"} />
                </div>



            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center  gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"RC"} />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"IQ"} />
                </div>



            </div>


            <div className='w-full flex flex-col md:flex-row items-center justify-center  gap-5'>
                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"CIS"} />
                </div>

                <div className='w-full md:w-1/2 border border-[#a6a6a6] rounded-lg px-5' >
                    <Histogram status={"RSS"} />
                </div>
            </div>


            <br />
            <br />
            <br />
        </div>
    )
}

export default Guest360Dashboard