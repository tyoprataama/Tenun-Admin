import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navb'>
      <div className='nav-wrap'>
        <div className='left'>
          <span className='logo'>TenunAdmin</span>
        </div>
        <div className='right'>
          <div className='navb-icon'>
            <Settings/>
          </div>
           <div className='navb-icon'>
            <Language/>
            <span className='badge-icon'>3</span>
          </div>
           <div className='navb-icon'>
            <NotificationsNone/>
             <span className='badge-icon'>3</span>
          </div>
          <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='' className='user-pict'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar