import React from 'react';
import './WidgetL.css';

const WidgetL = () => {
  const Btn = ({type}) =>{
    return <button className={'widget-lg-btn ' + type}>{type}</button>
  };
  return (
    <div className='widget-lg'>
      <h3 className='widget-lg-title'>Latest Transactions</h3>
      <table className='widget-lg-table'>
        <tr className='widget-lg-tr'>
          <th className='widget-lg-th'>Costumer</th>
          <th className='widget-lg-th'>Date</th>
          <th className='widget-lg-th'>Amount</th>
          <th className='widget-lg-th'>Status</th>
        </tr>

        <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='img'/>
            <span className='widget-td-name'>Kiernan Shipka</span>
          </td>
          <td className='widget-lg-date'>29 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 109.000</td>
          <td className='widget-lg-stat'><Btn type='Pending'/></td>
        </tr>

       <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='img'/>
            <span className='widget-td-name'>Jess Griffin</span>
          </td>
          <td className='widget-lg-date'>30 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 377.000</td>
          <td className='widget-lg-stat'><Btn type='Declined'/></td>
        </tr>

         <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://avatars.githubusercontent.com/u/91719525?v=4' alt='img'/>
            <span className='widget-td-name'>Moch Farrel</span>
          </td>
          <td className='widget-lg-date'>30 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 260.000</td>
          <td className='widget-lg-stat'><Btn type='Approved'/></td>
        </tr>

         <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://avatars.githubusercontent.com/u/93205598?v=4' alt='img'/>
            <span className='widget-td-name'>Tyo Pratama P P</span>
          </td>
          <td className='widget-lg-date'>30 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 189.000</td>
          <td className='widget-lg-stat'><Btn type='Approved'/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetL