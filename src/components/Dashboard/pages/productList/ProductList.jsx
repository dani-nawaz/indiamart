import React, { useState } from 'react'
import styled from 'styled-components'
import { pRows } from '../../dummyData'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Link } from 'react-router-dom'
const ProductList = () => {
  const [data, setData] = useState(pRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='s' className='productListImg' />
            {params.row.name}
          </div>
        )
      },
    },

    { field: 'stock', headerName: 'Stock ', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price ',
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
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='productListDelete'
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

export default ProductList
const Wrapper = styled.section`
  flex: 4;
  .productListItem {
    display: flex;
    align-items: center;
  }

  .productListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .productListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
  }

  .productListDelete {
    color: red;
    cursor: pointer;
  }
`
