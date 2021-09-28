import { Checkbox, FormControlLabel, Slider, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  padding: 1rem;
  border-radius: 20px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--white);

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    /* padding: 0.5rem; */
    letter-spacing: var(--spacing);
    border-color: var(--darkpara);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  .search-input:focus {
    border-color: var(--darkpara);
  }
  .company {
    background: var(--white);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--primary);
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .clear-btn {
    background: var(--clr-red-light);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .shipping {
    align-items: center;
    text-transform: capitalize;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`
const Filters = () => {
  return (
    <Wrapper>
      <div className='content'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className='form-control'>
            <TextField
              id='outlined-basic'
              label='Search'
              variant='outlined'
              type='text'
              name='text'
              // value={text}
              // onChange={updateFilters}

              className='search-input'
            />
          </div>
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {/* {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                )
              })} */}
              <button
                className='filterBtn active'
                type='button'
                name='category'
              >
                All
              </button>
              <button className='filterBtn' type='button' name='category'>
                Drugs
              </button>
              <button className='filterBtn' type='button' name='category'>
                Pharma
              </button>
              <button className='filterBtn' type='button' name='category'>
                Electronics
              </button>
            </div>
          </div>
          <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              // value={company}
              // onChange={updateFilters}
              className='company'
            >
              {/* {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                )
              })} */}
            </select>
          </div>

          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>
              12314
              {/* {formatPrice(price)} */}
            </p>
            {/* <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            /> */}
            <Slider
              getAriaLabel={() => 'Price Range'}
              // value={value}
              type='range'
              name='price'
              // min={min_price}
              min={123}
              // max={max_price}
              max={44444}
              valueLabelDisplay='auto'
              // getAriaValueText={valuetext}
            />
          </div>
          <div className='form-control shipping'>
            <FormControlLabel
              control={
                <Checkbox
                  // defaultChecked
                  type='checkbox'
                  name='shipping'
                  id='shipping'
                  color='success'

                  // checked={shipping}
                  // onChange={updateFilters}
                />
              }
              label='Free Shipping'
            />
          </div>
        </form>
        <button
          type='button'
          className='clear-btn'
          // onClick={clearFilters}
        >
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

export default Filters
