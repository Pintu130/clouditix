import React, { useState } from 'react'
import { AgChartsReact } from 'ag-charts-react';

import{issueData,TimeToReslove,UpsellRevenue,CustomerLifeTime,SatisfactionScore,NumberOfResponse,Postitive_Mentions,Negative_Mentions,Total_Mentions,Engagement_Ratio,Website_visit,Reservation_Calls,Inquiries,Check_in_score,RoomServiceScore} from '@/assets/data'


const Histogram = ({status}) => {


  const [options, setOptions] = useState({
    title: {
      text: status=="NIF"?"No Of Issues Faced in Previous Month":status=="TTR"?"No Of Guests vs. Time To Resolve(InMinutes)":status=="USR"?"Upsell_Revenue":status=="CLV"?"Customer Lifetime Value":status=="SS"?"Satifaction_Score":status=="NOR"?"Number Of Response":status=="PM"?"Positive_Mentions":status=="NM"?"Negative_Mentions":status=="TM"?"Total_Mention":status=="ER"?"Engagement_Ratio":status=="WV"?"Website Vists":status=="RC"?"Reservation Calls":status=="IQ"?"Inquiries":status=="CIS"?"Check in Score":status=="RSS"?"Room Service Score":"",
    },
    data:status=="NIF"?issueData:status=="TTR"?TimeToReslove:status=="USR"?UpsellRevenue:status=="CLV"?CustomerLifeTime:status=="SS"?SatisfactionScore:status=="NOR"?NumberOfResponse:status=="PM"?Postitive_Mentions:status=="NM"?Negative_Mentions:status=="TM"?Total_Mentions:status=="ER"?Engagement_Ratio:status=="WV"?Website_visit:status=="RC"?Reservation_Calls:status=="IQ"?Inquiries:status=="CIS"?Check_in_score:status=="RSS"?RoomServiceScore:"",
    series:status=="NIF"?
    [
      {
        type: "histogram",
        xKey: "Issue",
        xName: "Number of issue",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
        bins: [
          [0, 5],
          [5,10],
          [10,15],
          [15,20],
          [20,25],


        
        ],
        fill: '#93c47d'
      },
    ]:status=="TTR"?[


      {
        type: "histogram",
        xKey: "TTR",
        xName: "Time to resolve",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
        bins: [
          [0, 5],
          [5,10],
          [10,15],
          [15,20],
          [20,25],
          [25,30],



        
        ],
        fill: '#93c47d'
      },




    ]:status=="USR"?[


      {
        type: "histogram",
        xKey: "USR",
        xName: "Upsell_Revenue",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [2500, 5000],
          [5000,7500],
          [7500,10000],
          [10000,12500],
          [12500,15000],
          [15000,17500],
          [17500,20000],
          [20000,25000],





        
        ],
        fill: '#93c47d'
      },




    ]:status=="CLV"?[


      {
        type: "histogram",
        xKey: "CLT",
        xName: "Customer Lifetime Value",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [100000, 145000],
          [145000,190000],
          [190000,235000],
          [235000,280000],
          [280000,325000],
          [325000,370000],
          [370000,415000],
          [415000, 460000],
          [460000, 540000],
],
        fill: '#93c47d'
      },




    ]:status=="SS"?[


      {
        type: "histogram",
        xKey: "SS",
        xName: "Satisfaction_Score",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [3, 3.25],
          [3.25, 3.50],
          [3.50, 3.75],
          [3.75, 4],
          [4, 4.25],
          [4.25, 4.50],
          [4.50, 4.75],
          [4.75, 5],
          [5, 5.25],







       
],
        fill: '#93c47d'
      },




    ]:status=="NOR"?[


      {
        type: "histogram",
        xKey: "Nr",
        xName: "Number_of_Response",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [3, 3.25],
          [3.25, 3.50],
          [3.50, 3.75],
          [3.75, 4],
          [4, 4.25],
          [4.25, 4.50],
          [4.50, 4.75],
          [4.75, 5],
          [5, 5.25],







       
],
        fill: '#93c47d'
      },




    ]:status=="PM"?[


      {
        type: "histogram",
        xKey: "PM",
        xName: "Positive_Mentions",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [0,2.5 ],
          [2.5, 5],
          [5, 7.50],
          [7.50, 10],
          [10, 12.5],
          [12.5, 15],
          [15, 17.5],
          [17.5, 20],
          [20, 22.5],







       
],
        fill: '#93c47d'
      },




    ]:status=="NM"?[


      {
        type: "histogram",
        xKey: "NM",
        xName: "Negative_Mentions",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [1.00,1.35 ],
          [1.35, 1.7],
          [1.7, 2.05],
          [2.05, 2.40],
          [2.40, 2.75],
          [2.75, 3.10],
          [3.10, 3.45],
          [3.45, 3.80],
          [3.80, 4.15],
          [ 4.15, 4.50],








       
],
        fill: '#93c47d'
      },




    ]:status=="TM"?[


      {
        type: "histogram",
        xKey: "TM",
        xName: "Total_Mentions",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [0,2.50 ],
          [2.50, 5],
          [5, 7.5],
          [ 7.5, 10],
          [ 10, 12.5],
          [12.5, 15],
          [15, 17.5],
          [17.5, 20],
          [20, 22.5],
          [ 22.5, 25.5],








       
],
        fill: '#93c47d'
      },




    ]:status=="ER"?[


      {
        type: "histogram",
        xKey: "ER",
        xName: "Engagement_Mentions",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [0.10,0.19 ],
          [0.19, 0.27],
          [ 0.27, 0.36],
          [0.36, 0.44],
          [ 0.44, 0.53],
          [ 0.53, 0.61],
          [0.61, 0.70],
          [0.70, 0.78],
          [0.78, 0.87],
          [ 0.87, 0.95],








       
],
        fill: '#93c47d'
      },




    ]:status=="WV"?[


      {
        type: "histogram",
        xKey: "WV",
        xName: "Website Visits",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [70,78.50 ],
          [78.50, 87],
          [87, 95.50],
          [95.50, 104],
          [104, 112.50],
          [112.50, 121],
          [ 121, 129.50],
          [129.50, 138],
          [138, 146.50],
          [146.50, 155.00],








       
],
        fill: '#93c47d'
      },




    ]:status=="RC"?[


      {
        type: "histogram",
        xKey: "RC",
        xName: "Reservation Calls",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [2,2.55],
          [2.55, 3.10],
          [3.10, 3.65],
          [ 3.65, 4.20],
          [4.20, 4.75],
          [4.75, 5.30],
          [ 5.30, 5.85],
          [5.85, 6.40],
          [6.40, 6.95],
          [6.95, 7.50],








       
],
        fill: '#93c47d'
      },




    ]:status=="IQ"?[


      {
        type: "histogram",
        xKey: "IQ",
        xName: "Reservation Calls",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [50,56.50],
          [56.50, 63],
          [63, 69.50],
          [69.50, 76],
          [76, 82.50],
          [82.50, 89],
          [ 89, 95.50],
          [95.50, 102],
          [102, 108.50],
          [108.50, 115],








       
],
        fill: '#93c47d'
      },




    ]:status=="CIS"?[


      {
        type: "histogram",
        xKey: "CIS",
        xName: "Check in Score",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [3,3.25],
          [3.25, 3.50],
          [3.50, 3.75],
          [3.75, 4],
          [4, 4.25],
          [4.25, 4.50],
          [4.50, 4.75],
          [4.75, 5],
          [5, 5.25],
          [5.25, 5.50],








       
],
        fill: '#93c47d'
      },




    ]:status=="RSS"?[


      {
        type: "histogram",
        xKey: "RSS",
        xName: "Room Service score",
        yKey: "data",
        aggregation: "sum",
        yName: "Number of Guest",
      
        bins: [
          [3,3.25],
          [3.25, 3.50],
          [3.50, 3.75],
          [3.75, 4],
          [4, 4.25],
          [4.25, 4.50],
          [4.50, 4.75],
          [4.75, 5],
          [5, 5.25],
          [5.25, 5.50],

],
        fill: '#93c47d'
      },




    ]:[],
    axes:status=="NIF"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "No of issue" },
        // domain: [0],
        tick: { interval: 5 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="TTR"?[



      {
        type: "number",
        position: "bottom",
        title: { text: "Time to resolve" },
        // domain: [0],
        tick: { interval: 5 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },


    ]:status=="USR"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Upsell_Revenue" },
        // domain: [0],
        tick: { interval: 2500 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="CLV"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Customer Lifetime Value" },
        // domain: [0],
        // domain: [100000, 505000],
        tick: { interval:45000 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="SS"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Satisfaction_Score" },
        
        tick: { interval:0.25 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="NOR"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Number_of_Response" },
        
        tick: { interval:0.25 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="PM"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Positive_Mentions" },
        
        tick: { interval:2.5 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="NM"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Negative_Mentions" },
        
        tick: { interval:.35 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="TM"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Total_Mentions" },
        
        tick: { interval:2.5 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="ER"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Engagement_Ratio" },
        
        tick: { interval:0.09 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="WV"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Website Visit" },
        
        tick: { interval:8.5 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="RC"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Reservation Calls" },
        
        tick: { interval:0.55 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="IQ"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Inquiries" },
        
        tick: { interval:6.5 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="CIS"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Check in Score" },
        
        tick: { interval:.25 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:status=="RSS"? [
      {
        type: "number",
        position: "bottom",
        title: { text: "Room Service Score" },
        
        tick: { interval:.25 }, // Adjust the interval as needed
      },
      {
        type: "number",
        position: "left",
        title: { text: "No of guest" },
      },
    ]:[],
  });




    
  return (
    <div className="w-full h-[410px] ">
    <div className='relative h-[400px]'>

    <AgChartsReact options={options} />
    </div>
    </div>
  )
}

export default Histogram