import React from 'react';
import './NewUser.css';

const NewUser = () => {
  return (
    <div className='newuser'>
        <h1 className='newuser-title'>New User</h1>
        <form className='newuser-form'>
            <div className='newuser-form-item'>
                <label>Username</label>
                <input type='text' placeholder='username'/>
            </div>
            <div className='newuser-form-item'>
                <label>Full name</label>
                <input type='text' placeholder='fullname'/>
            </div>
            <div className='newuser-form-item'>
                <label>E-mail</label>
                <input type='text' placeholder='example@email.com'/>
            </div>
            <div className='newuser-form-item'>
                <label>Password</label>
                <input type='password' placeholder='password'/>
            </div>
            <div className='newuser-form-item'>
                <label>Phone</label>
                <input type='text' placeholder='+1 234 56789'/>
            </div>
            <div className='newuser-form-item'>
                <label>Address</label>
                <input type='text' placeholder='New York | USA'/>
            </div>
            <div className='newuser-form-item'>
                <label>Active</label>
                <select className='newuser-select' name='active' id='active'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>
            <div className='newuser-form-item'>
                <label>Gender</label>
                <select className='newuser-select' name='active' id='active'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='others'>Others</option>
                </select>
            </div>
        </form>
        <div className='btn-wrap'>
            <button className='newuser-btn'>Create</button>
        </div>
    </div>
  )
}

export default NewUser