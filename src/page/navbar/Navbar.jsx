import { NotificationsNone } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navb'>
      <div className='nav-wrap'>
        <div className='left'>
          <span className='logo'>admin.tenun</span>
        </div>
        <div className='right'>
          <div className='navb-icon'>
            <NotificationsNone/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar