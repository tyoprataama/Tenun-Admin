import React from 'react';
import './Chart.css';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';


export default function Charts({title, data, dataKey, grid}) {
  return (
    <div className='charts'>
        <h3 className='charts-title'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                < XAxis dataKey = 'name'
                stroke = '#A760FF' / >
                < Line type = 'monotone'
                dataKey = {
                  dataKey
                }
                stroke = '#A760FF' / >
                <Tooltip/>
                {grid && <CartesianGrid stroke='#E0DFDF' strokeDasharray='5 5'/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
