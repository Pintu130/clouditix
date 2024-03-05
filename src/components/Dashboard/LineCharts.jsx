import { Top3Services } from '@/assets/data';
import { AgChartsReact } from 'ag-charts-react';
import React, { useState } from 'react'

const LineCharts = ({ xLable, yLable }) => {

  const [options, setOptions] = useState({
    autoSize: true,
    data: Top3Services,
    theme: {
      overrides: {
        line: {
          series: {
            highlightStyle: {
              series: {
                strokeWidth: 3,
                dimOpacity: 0.2,
              },
            },
          },
        },
      },
    },
    title: {
      text: 'Top 3 Services',
      fontSize: 18,
      spacing: 25,
    },
    footnote: {
      text: '',
    },
    series: [
      {
        type: 'line',
        xKey: 'ratingreceived',
        yKey: 'spatreatments',
        yName: "Spa Treatments",
        stroke: '#fbbc04',
        marker: {
          stroke: '#fbbc04',
          fill: '#fbbc04',
        },
        // tooltip,
      },
      {
        type: 'line',
        xKey: 'ratingreceived',
        yKey: 'restaurantdining',
        yName: "Restaurant Dining",
        stroke: '#4285f4',
        marker: {
          stroke: '#4285f4',
          fill: '#4285f4',
        },
        // tooltip,
      },
      {
        type: 'line',
        xKey: 'ratingreceived',
        yKey: 'conciergerequests',
        yName: "Concierge Requests",
        stroke: '#ea4335',
        marker: {
          stroke: '#ea4335',
          fill: '#ea4335',
        },
        // tooltip,
      },
    ],
    axes: [
      {
        position: 'bottom',
        type: 'data',
        tick: {
          // interval: time.month.every(2),
        },
        title: {
          text: 'data',
        },
        base: 0,
        label: {
          autoRotate: true,
        },
      },
      {
        position: 'left',
        type: 'number',
        title: {
          text: 'Price in pence',
        },
        base: 0,
        label: {
          autoRotate: true,
        },
      },
    ],
  });
  return (
    <div className="w-full h-[400px] " >
      <div className='relative h-[400px]'>
        {xLable && <span className='absolute z-10 rotate-[270deg] bottom-2/4 -left-[45px]'>{xLable}</span>}
        {yLable && <span className='absolute z-10 bottom-[15px] left-2/4'>{yLable}</span>}
        <AgChartsReact options={options} />
      </div>
    </div>
  )
}

export default LineCharts