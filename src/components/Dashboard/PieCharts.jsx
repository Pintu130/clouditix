import { pieChartsData } from '@/assets/data';
import { AgChartsReact } from 'ag-charts-react';
import React, { useState } from 'react'


const PieCharts = () => {
  const [options, setOptions] = useState({
    data: pieChartsData,
    series: [
      {
        type: 'pie',
        angleKey: 'value',
        calloutLabelKey: 'label',
        sectorLabelKey: 'value',
        sectorLabel: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
    ],
  });
  return (
    <div className="w-full  h-[400px] ">
      <AgChartsReact options={options} />
    </div>
  )
}

export default PieCharts