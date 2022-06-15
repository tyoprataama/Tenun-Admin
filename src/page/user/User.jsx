import { CalendarToday, CloudUploadOutlined, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
  return (
    <div className='user'>
      <div className='user-title-container'>
        <h1 className='user-title'>Edit User</h1>
        <Link to='/newUser'>
        <button className='user-create-btn'>Create</button>
        </Link>
      </div>
      <div className='user-container'>
        <div className='user-show'>
          <div className='user-top'>
            <img className='user-top-img' alt='user' src='https://www.themoviedb.org/t/p/w500/rk9CgKva4MW7VS6QxGhe0417G1L.jpg'/>
            <div className='user-top-title'>
              <span className='user-top-username'>Victoria Predetti</span>
              <span className='user-top-job'>Activist</span>
            </div>
          </div>
          <div className='user-bot'>
            <span className='user-bot-title'>Account Details</span>

            <div className='user-bot-info'>
              <PermIdentity className='user-bot-icon'/>
              <span className='user-bot-name'>victoria004</span>
            </div>
            <div className='user-bot-info'>
              <CalendarToday className='user-bot-icon'/>
              <span className='user-bot-name'>23/3/1995</span>
            </div>
             <span className='user-bot-title'>Contact Details</span>
            <div className='user-bot-info'>
              <MailOutline className='user-bot-icon'/>
              <span className='user-bot-name'>victoriaa004@gmail.com</span>
            </div>
            <div className='user-bot-info'>
              <PhoneAndroid className='user-bot-icon'/>
              <span className='user-bot-name'>+1 098 765</span>
            </div>
            <div className='user-bot-info'>
              <LocationSearching className='user-bot-icon'/>
              <span className='user-bot-name'>Anaheim | CA</span>
            </div>

          </div>
        </div>

        <div className='user-update'>
          <span className='user-up-title'>Edit</span>
          <form className='user-up-form'>
            <div className='user-update-left'>

              <div className='user-update-item'>
                <label>Username</label>
                <input 
                className='user-update-input' 
                type='text' placeholder='victoria004'/>
              </div>
              <div className='user-update-item'>
                <label>Fullname</label>
                <input 
                className='user-update-input' 
                type='text' placeholder='Victoria Predetti'/>
              </div>
              <div className='user-update-item'>
                <label>E-mail</label>
                <input 
                className='user-update-input' 
                type='text' placeholder='victoriaa004@gmail.com'/>
              </div>
              <div className='user-update-item'>
                <label>Phone Number</label>
                <input 
                className='user-update-input' 
                type='text' placeholder='+1 098 765'/>
              </div>
              <div className='user-update-item'>
                <label>Address</label>
                <input 
                className='user-update-input' 
                type='text' placeholder='Anaheim | CA'/>
              </div>

            </div>
            <div className='user-update-right'>
              <span className='user-img-title'>Change Picture</span>
              <div className='user-update-upload'>
                <img className='user-update-img' src='https://www.themoviedb.org/t/p/w500/rk9CgKva4MW7VS6QxGhe0417G1L.jpg' alt='user'/>
                <label htmlFor='file'><CloudUploadOutlined className='user-update-icon'/> Choose file</label>
                <input type='file' id='file' style={{ display:'none' }}/>
              </div>
              <button className='user-update-btn'>Save Change</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default User
