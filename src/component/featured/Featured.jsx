import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react'
import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featured-item'>
            <span className='featured-title'>Revenue</span>
            <div className='featured-money-container'>
                <span className='featured-money'>Rp 45.700.000</span>
                <span className='featured-money-rate'>-9.9 <ArrowDownward className='featured-icon down'/></span>
            </div>
            <span className='featured-sub'>Compare to last month</span>
        </div>

        <div className='featured-item'>
            <span className='featured-title'>Sales</span>
            <div className='featured-money-container'>
                <span className='featured-money'>Rp 85.700.000</span>
                <span className='featured-money-rate'>-4.3 <ArrowDownward className='featured-icon down'/></span>
            </div>
            <span className='featured-sub'>Compare to last month</span>
        </div>

        <div className='featured-item'>
            <span className='featured-title'>Cost</span>
            <div className='featured-money-container'>
                <span className='featured-money'>Rp 5.220.000</span>
                <span className='featured-money-rate'>+3.6 <ArrowUpward className='featured-icon up'/></span>
            </div>
            <span className='featured-sub'>Compare to last month</span>
        </div>
    </div>
  )
}

export default Featured