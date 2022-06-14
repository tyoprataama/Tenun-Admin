import { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@material-ui/icons';
import { UserRows } from '../../data';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [ data, setData ] = useState(UserRows);

  const deleteHandler = (id) =>{
    setData(data.filter((item)=>item.id !== id));
  };

  const columns = [{
      field: 'id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'user',
      headerName: 'User name',
      width: 200,
      renderCell: (params) =>{
        return (
        <div className='user-table'>
          <img className='user-img' src={params.row.profile} alt='user'/>
          {params.row.username}
        </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: '100'
    },
    
    {
      field: 'edit',
      headerName: 'Action',
      width: 100,
      renderCell: (params) =>{
        return(
          <>
          <Link to={'/user/' + params.row.id}>
          <button className='user-btn'>Edit</button>
          </Link>
          <Delete className='user-delete' 
          onClick={()=> deleteHandler(params.row.id)}/>
           </>
        );
      },
    },
  ];
  return (
    <div className='userlist'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList