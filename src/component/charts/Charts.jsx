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


export default function Charts({title, dataKey}) {
    const data = [{
            name: 'Jan',
            'Active User': 3100,
        },
        {
            name: 'Feb',
            'Active User': 3000,
        },
        {
            name: 'Mar',
            'Active User': 2000,
        },
        {
            name: 'Apr',
            'Active User': 2780,
        },
        {
            name: 'May',
            'Active User': 1890,
        },
        {
            name: 'Jun',
            'Active User': 2390,
        },
        {
            name: 'Jul',
            'Active User': 3490,
        },
        {
            name: 'Aug',
            'Active User': 2390,
        },
        {
            name: 'Sep',
            'Active User': 2590,
        },
        {
            name: 'Oct',
            'Active User': 3590,
        },
        {
            name: 'Nov',
            'Active User': 2390,
        },
        {
            name: 'Dec',
            'Active User': 3990,
        },
    ];
  return (
    <div className='charts'>
        <h3 className='charts-title'>User Analytics</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#1363DF'/>
                <Line type='monotone' dataKey='Active User' stroke='#1363DF' />
                <Tooltip/>
                <CartesianGrid stroke='#E0DFDF' strokeDasharray='5 5'/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
