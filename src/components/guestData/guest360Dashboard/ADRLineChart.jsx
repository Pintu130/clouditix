import { AgChartsReact } from 'ag-charts-react';
import React, { useState } from 'react'

const ADRLineChart = ({ xLable, yLable, mainLabel = "", dataWithColor = [], data = [] }) => {
    const [options, setOptions] = useState({
        autoSize: true,
        data: data,
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
            text: mainLabel,
            fontSize: 18,
            spacing: 25,
        },
        footnote: {
            text: '',
        },
        series: dataWithColor?.map(item => {
            const { name, color, key } = item
            return {
                type: 'line',
                xKey: 'ratingreceived',
                yKey: key,
                yName: name,
                stroke: color,
                marker: {
                    stroke: color,
                    fill: color,
                },
                // tooltip,
            }
        }),
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
        <div className="w-full relative h-[430px] " >
            <div className='flex h-full w-full '>
                <div className='w-full max-w-[30px] flex text-center'>
                    <div className='flex w-[40px] justify-center items-center'>
                        {xLable && <span className='flex -rotate-90 whitespace-nowrap w-full justify-center'>{xLable}</span>}
                    </div>
                </div>

                <div className='w-full'>
                    <AgChartsReact options={options} />
                </div>

            </div>
            {yLable && <span className='absolute text-center w-full bottom-2 justify-center '>{yLable}</span>}
        </div>
    )
}

export default ADRLineChart