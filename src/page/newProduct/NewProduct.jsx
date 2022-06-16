import React from 'react';
import './NewProduct.css';

const NewProduct = () => {
  return (
     <div className='newproduct'>
        <h1 className='newuser-title'>New Product</h1>
        <form className='newproduct-form'>
            <div className='newuser-form-item'>
                <label>Image</label>
                <input type='file' id='file'/>
            </div>
            <div className='newuser-form-item'>
                <label>Title</label>
                <input type='text' placeholder='Product Name'/>
            </div>
            <div className='newuser-form-item'>
                <label>Stock</label>
                <input type='text' placeholder='1234'/>
            </div>
            <div className='newuser-form-item'>
                <label>Active</label>
                <select className='newuser-select' name='active' id='active'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>
        </form>
        <div className='btn-wrap'>
            <button className='newuser-btn'>Create</button>
        </div>
    </div>
  )
}

export default NewProduct