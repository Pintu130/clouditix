import React, { useState } from 'react'
import { AgChartsReact } from 'ag-charts-react';
import { LengthofStay, NumberIssueFace, diningOption, MenuVareityOption, SatisfactionLevel, NumberOfGuest, GuestStayHis, UpsellRevenue, CustomerLifeTime, TTR, LevelAchieved, GuestSatisfication, ResponseTime, LevelOfLoality, gsinex, attribution } from '@/assets/data';


const BarCharts = ({ status, xLable, yLable, title = "", data = [] }) => {
    const [options, setOptions] = useState({
        title: {
            text: title?.length > 0 ? title : status === "LOS" ? "No Of Guests vs. Length of Stay (LOS)" : status === "Rating" ? "Satisfaction Level" : status === "LTOR" ? "Likelihood to Recommend vs. No Of Guests" : status === "GSH" ? "Guest Stay History" : status === "USR" ? "Upsell_Revenue" : status === "CLV" ? "Customer Lifetime Value" : status === "TTR" ? "No Of Guests vs. Time To Resolve(InMinutes)" : status === "LA" ? "No Of Guests vs. Level Achieved" : status === "NIF" ? "No Of Issues Faced in Previous Month" : status === "NVR" ? "No of guest VS Menu Variety Options rating" : status === "RDO" ? "Rating Of dining options" : status == "GSR" ? "No of Guest  vs. Guest Satisfaction Rating" : status == "RT" ? "Response Time" : status == "LLP" ? "Levels of Loyalty Program" : status == "RV" ? "Review for last 3 months" : status == "GSI" ? "Guest Satisfaction index" : status == "MC" ? "Marketing Channels through years" : "",
        },
        subtitle: {
            text: '',
        },
        data: data?.length > 0 ? data : status === "LOS" ? LengthofStay : status === "Rating" ? SatisfactionLevel : status === "LTOR" ? NumberOfGuest : status === "GSH" ? GuestStayHis : status === "USR" ? UpsellRevenue : status === "CLV" ? CustomerLifeTime : status === "TTR" ? TTR : status === "LA" ? LevelAchieved : status === "NIF" ? NumberIssueFace : status === "NVR" ? MenuVareityOption : status === "RDO" ? diningOption : status == "GSR" ? GuestSatisfication : status == "RT" ? ResponseTime : status == "LLP" ? LevelOfLoality : status == "RV" ? reviewsvalue : status == "GSI" ? gsinex : status == "MC" ? attribution : "",
        seriesDefaults: {
            candlestick: {
                width: 10, // Adjust the candle width here
            },
        },

        series: status === "CLV" ? [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                yName: title,
                fill: '#4285f4',


                column: {
                    width: 10,
                },
            },
        ] : status === "LOS" ? [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                yName: "Length of Stay (LOS)",
                fill: '#93c47d',


                column: {
                    width: 10,
                },
            },
        ] : status === "GSI" ? [
            {
                type: "column",
                xKey: "rating",
                yKey: "Guests",
                yName: "No of Guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "RV" ? [
            {
                type: "column",
                xKey: "rating",
                yKey: "Dec2023",
                yName: "Dec 2023",
                fill: '#4285f4',
                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "Jan2024",
                yName: "Jan 2024",
                fill: '#ea4335',
                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "Feb2024",
                yName: "Feb 2024",
                fill: '#fbbc04',
                column: {
                    width: 10,
                },
            },
        ] : status === "MC" ? [
            {
                type: "column",
                xKey: "rating",
                yKey: "Organic",
                yName: "Organic Search",
                fill: '#4285f4',
                column: {
                    width: 100,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "Paid",
                yName: "Paid Search",
                fill: '#ea4335',
                column: {
                    width: 100,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "Direct",
                yName: "Direct",
                fill: '#fbbc04',
                column: {
                    width: 100,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "Other",
                yName: "Other",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "Rating" ? [
            {
                type: "column",
                xKey: "rating",
                yKey: "checkin",
                yName: "Check-in",
                yName: "Check-in",
                fill: '#4285f4',

                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "roomservice",
                yName: "Check-in",
                yName: "Room Service",
                fill: '#ea4335',

                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "amenities",
                yName: "Check-in",
                yName: "Amenities",
                fill: '#fbbc04',

                column: {
                    width: 10,
                },
            },
        ] : status === "LTOR" ? [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                yName: "No Of Guests",
                fill: '#93c47d',


                column: {
                    width: 10,
                },
            },
        ] : status === "GSH" ? [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                yName: "Guest stay history",
                fill: '#93c47d',


                column: {
                    width: 10,
                },
            },
        ] : status === "USR" ? [
            {
                type: 'column',
                xKey: "range",
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',


                column: {
                    width: 10,
                },
            },
        ] : status === "CLV" ? [

            {

                type: 'column',
                xKey: "range",
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',


                column: {
                    width: 100,
                },
            },
        ] : status === "TTR" ? [
            {
                type: 'column',
                xKey: "range",
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "LA" ? [
            {
                type: 'column',
                xKey: "name",
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "NIF" ? [
            {
                type: 'column',
                xKey: "range",
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "NVR" ? [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "RDO" ? [
            {
                type: "column",
                xKey: "rating",
                yKey: "OverallRating",
                yName: "OverallRating",
                yName: "Overall Rating",
                fill: '#4285f4',

                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "FoodQualityRating",
                yName: "FoodQualityRating",
                yName: "Food Quality Rating Service",
                fill: '#ea4335',

                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "MenuOptionsRating",
                yName: "MenuOptionsRating",
                yName: "Menu Options Rating",
                fill: '#fbbc04',

                column: {
                    width: 10,
                },
            },

        ] : status === "GSR" ? [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : status === "RT" ? [
            {
                type: "column",
                xKey: "rating",
                yKey: "SumOFResponseTime",
                yName: "SumOFResponseTime",
                yName: "Sum OF Response Time",
                fill: '#4285f4',

                column: {
                    width: 10,
                },
            },
            {
                type: "column",
                xKey: "rating",
                yKey: "COUNTAofGuest",
                yName: "COUNTAofGuest",
                yName: "COUNTA of Guest",
                fill: '#ea4335',

                column: {
                    width: 10,
                },
            },


        ] : status === "LLP" ? [
            {
                type: 'column',
                xKey: 'name',
                yKey: 'data',
                yName: "No of guest",
                fill: '#93c47d',
                column: {
                    width: 100,
                },
            },
        ] : []
    });


    return (
        <div className="w-full h-[410px] mb-4 relative">
            <div className='relative h-[400px]'>
                {xLable && <span className='absolute z-10 rotate-[270deg] bottom-2/4 -left-[45px]'>{xLable}</span>}

                <AgChartsReact options={options} />
            </div>
            {/* {yLable && <span className='absolute z-10 -bottom-[5px] left-1/3'>{yLable}</span>} */}
            {yLable && <span className='absolute text-center w-full bottom-0 justify-center '>{yLable}</span>}
        </div>
    )
}

export default BarCharts