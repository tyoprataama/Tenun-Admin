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
                    <span className='user-sm-title'>College Student</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Aby Martinez</span>
                    <span className='user-sm-title'>College Student</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Juan Carlos</span>
                    <span className='user-sm-title'>College Student</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image16x9.img.1536.high.jpg' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Max Verstappen</span>
                    <span className='user-sm-title'>Racing Driver</span>
                </div>
                <button className='widget-sm-btn'>
                    <Visibility className='widget-icon'/>
                    Display
                </button>
            </li>

             <li className='widget-sm-item'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K8IJvqdnYl_Vnmwl86u9fMSzrJuMfwFSzw&usqp=CAU' alt='user' className='widget-img'/>
                <div className='widget-sm-user'>
                    <span className='widget-sm-username'>Fernando Alonzo</span>
                    <span className='user-sm-title'>Racing Driver</span>
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