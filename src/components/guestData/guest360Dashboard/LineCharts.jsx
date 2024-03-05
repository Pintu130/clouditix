import { AgChartsReact } from 'ag-charts-react';
import { time } from 'ag-charts-community';
import React, { useState } from 'react'
import { getData } from '@/assets/data';

const LineCharts = () => {

  // const dateFormatter = new Intl.DateTimeFormat('en-US');
  // const tooltip = {
  //   renderer: ({ title, xValue, yValue }) => ({
  //     title,
  //     content: `${dateFormatter.format(xValue)}: ${yValue}`,
  //   }),
  // };

  const [options, setOptions] = useState({
    autoSize: true,
    data: getData,
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
      text: 'Source Systems',
      fontSize: 18,
      spacing: 25,
    },
    footnote: {
      text: '',
    },
    series: [
      {
        type: 'line',
        xKey: 'data',
        yKey: 'source',
        stroke: '#01c185',
        marker: {
          stroke: '#01c185',
          fill: '#01c185',
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
        label: {
          autoRotate: true,
        },
      },
    ],
  });
  return (
    <div className="w-full h-[400px] " >
      <AgChartsReact options={options} />
    </div>
  )
}

export default LineCharts