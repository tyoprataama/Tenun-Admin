import { Visibility } from '@material-ui/icons';
import React from 'react';
import './Widget.css';

const Widget = () => {
  return (
    <div className='widget-sm'>
        <span className='widget-sm-title'>New Users</span>
        <ul className='widget-sm-list'>
            <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Veronica Hart</span>
                    <span className='user-sm-title'>Product Manager</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Veronica Hart</span>
                    <span className='user-sm-title'>Product Manager</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Veronica Hart</span>
                    <span className='user-sm-title'>Product Manager</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Veronica Hart</span>
                    <span className='user-sm-title'>Product Manager</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Veronica Hart</span>
                    <span className='user-sm-title'>Product Manager</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Widget