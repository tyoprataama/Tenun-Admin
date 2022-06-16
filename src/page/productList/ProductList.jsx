import React from 'react';
import './ProductList.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@material-ui/icons';
import { ProductRows } from '../../data';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(ProductRows);

  const deleteHandler = (id) =>{
    setData(data.filter((item)=>item.id !== id));
  };

  const columns = [{
      field: 'id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) =>{
        return (
        <div className='product-table'>
          <img className='product-img' src={params.row.img} alt='user'/>
          {params.row.name}
        </div>
        )
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 100
    },
    {
      field: 'status',
      headerName: 'Status',
      width: '100'
    },
    {
      field: 'price',
      headerName: 'Price',
      width: '200'
    },
    
    {
      field: 'edit',
      headerName: 'Action',
      width: '100',
      renderCell: (params) =>{
        return(
          <>
          <Link to={'/product/' + params.row.id}>
          <button className='product-btn'>Edit</button>
          </Link>
          <Delete className='product-delete' 
          onClick={()=> deleteHandler(params.row.id)}/>
          </>
        );
      },
    },
  ];
  return (
    <div className='productlist'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList