import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-wrap'>
            <div className='sidebar-dash'>
                <h3 className='sidebar-title'>Dashboard</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <LineStyle/> Home
                    </li>
                      <li className='sidebar-list-item'>
                        <Timeline/>   Analytics
                    </li>
                      <li className='sidebar-list-item'>
                        <TrendingUp/> Sales
                    </li>
                </ul>
            </div>

             <div className='sidebar-dash'>
                <h3 className='sidebar-title'>Dashboard</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <LineStyle/> Home
                    </li>
                      <li className='sidebar-list-item'>
                        <Timeline/>   Analytics
                    </li>
                      <li className='sidebar-list-item'>
                        <TrendingUp/> Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar