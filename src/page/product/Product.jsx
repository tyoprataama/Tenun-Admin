import { CloudUploadOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Charts from '../../component/charts/Charts';
import { productdata } from '../../data';
import './Product.css'

const Product = () => {
  return (
    <div className='product'>
        <div className='product-title-container'>
            <h1 className='product-title'>Product</h1>
            <Link to='/newproduct'>
            <button className='product-add-btn'>Create</button>
            </Link>
        </div>
        <div className='product-top'>
            <div className='product-top-left'>
                <Charts data={productdata} dataKey='Sales' title='Sales'/>
            </div>
            <div className='product-top-right'>
              <div className='product-top-info'>
                <img className='product-info-img' src='https://i.ibb.co/HXRjYY4/Product4.png' alt='product'/>
                <span className='product-name'>Standard Short Sleeves Shirt - Blooming Gray Kawung</span>
              </div>
              <div className='product-bot-info'>
                <div className='product-info-bot'>
                  <span className='product-key'>id:</span>
                  <span className='product-value'>vpj223</span>
                </div>
                 <div className='product-info-bot'>
                  <span className='product-key'>sold:</span>
                  <span className='product-value'>234</span>
                </div>
                 <div className='product-info-bot'>
                  <span className='product-key'>active:</span>
                  <span className='product-value'>yes</span>
                </div>
                 <div className='product-info-bot'>
                  <span className='product-key'>in stock:</span>
                  <span className='product-value'>65</span>
                </div>
              </div>
            </div>
        </div>
        <div className='product-bottom'>
          <form className='form-product'>
            <div className='product-form-left'>
              <label>Product Name</label>
              <input type='text' placeholder='Product Title'></input>
              <label>In Stock</label>
              <select name='instock' id='idStock'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
              <label>Active</label>
              <select name='active' id='active'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
            </div>
            <div className='product-form-right'>
              <div className='product-upload'>
                <img className='product-up-img' src='https://i.ibb.co/D7DCW0v/Product6.png' alt='product'/>
                <label for='file'>
                  <CloudUploadOutlined className='prod-up-icon'/>
                </label>
                <input type='file' id='file' style={{display: 'none'}}/>
              </div>
              <button className='product-up-btn'>Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Product