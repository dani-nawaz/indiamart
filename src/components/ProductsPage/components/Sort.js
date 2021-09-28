import React from 'react'
import styled from 'styled-components'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import FormControl from '@mui/material/FormControl'
import { IconButton, InputLabel, MenuItem, Select } from '@mui/material'
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
  }
  svg {
    /* font-size: 1rem; */
  }
  .active {
    background: var(--green-shade);
    /* color: var(--clr-white); */
  }
`
const Sort = () => {
  return (
    <Wrapper>
      <div className='btn-container'>
        <IconButton color='success' className='active'>
          <GridViewIcon />
        </IconButton>
        <IconButton color='success'>
          <ViewListIcon />
        </IconButton>
      </div>
      <p>{/* {products.length} */}0 products found</p>
      <hr />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Sort'
          name='sort'
          id='sort'
          // value={sort}
          // onChange={updateSort}
        >
          <MenuItem value='price-lowest'>price (lowest)</MenuItem>
          <MenuItem value='price-highest'>price (highest)</MenuItem>
          <MenuItem value='name-a'>name (a - z)</MenuItem>
          <MenuItem value='name-z'>name (z - a)</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  )
}

export default Sort
