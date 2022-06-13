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
            <img className='widget-td-img' src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='img'/>
            <span className='widget-td-name'>Veronica Hart</span>
          </td>
          <td className='widget-lg-date'>12 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 169.000</td>
          <td className='widget-lg-stat'><Btn type='Approve'/></td>
        </tr>

       <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='img'/>
            <span className='widget-td-name'>Veronica Hart</span>
          </td>
          <td className='widget-lg-date'>12 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 169.000</td>
          <td className='widget-lg-stat'><Btn type='Declined'/></td>
        </tr>

         <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='img'/>
            <span className='widget-td-name'>Veronica Hart</span>
          </td>
          <td className='widget-lg-date'>12 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 169.000</td>
          <td className='widget-lg-stat'><Btn type='Pending'/></td>
        </tr>

         <tr className='widget-lg-tr'>
          <td className='widget-lg-td'>
            <img className='widget-td-img' src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='img'/>
            <span className='widget-td-name'>Veronica Hart</span>
          </td>
          <td className='widget-lg-date'>12 Jun 2022</td>
          <td className='widget-lg-amount'>Rp 169.000</td>
          <td className='widget-lg-stat'><Btn type='Approve'/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetL