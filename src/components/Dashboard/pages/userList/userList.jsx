import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { rows } from '../../dummyData'

import { Link } from 'react-router-dom'

const UserList = () => {
  const [data, setData] = useState(rows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userList'>
            <img src={params.row.avatar} alt='s' />
            {params.row.username}
          </div>
        )
      },
    },

    { field: 'email', headerName: 'Email ', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      description: 'This column has a value getter and is not sortable.',

      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',

      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='userListDelete'
              onClick={() => {
                handleDelete(params.row.id)
              }}
            />
          </>
        )
      },
    },
  ]

  return (
    <Wrapper>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Wrapper>
  )
}

export default UserList
const Wrapper = styled.section`
  flex: 4;
  .userList {
    display: flex;
    align-items: center;
  }
  .userList img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .userListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    margin-right: 20px;
    cursor: pointer;
  }
  .userListDelete {
    color: red;
  }
`
