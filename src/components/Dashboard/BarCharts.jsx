import React, { useState } from 'react'
import { AgChartsReact } from 'ag-charts-react';
import { barChartsData } from '@/assets/data';

const BarCharts = () => {
    const [options, setOptions] = useState({
        title: {
            text: "Source Systems",
        },
        subtitle: {
            text: '',
        },
        data: barChartsData,
        seriesDefaults: {
            candlestick: {
                width: 10, // Adjust the candle width here
            },
        },

        series: [
            {
                type: 'column',
                xKey: 'source',
                yKey: 'data',
                // fill: '#3498db',
                column: {
                    width: 10, 
                },
            },
        ],
    });
    return (
        <div className="w-full h-[400px]  ">
            <AgChartsReact options={options} />
        </div>
    )
}

export default BarCharts