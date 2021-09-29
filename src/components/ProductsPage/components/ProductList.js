import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../../context/FilterContext'
import GridView from './GridView'
import ListView from './ListView'
import { products } from './productData'
const Wrapper = styled.section``
const ProductList = () => {
  const { grid_view } = useFilterContext()

  // console.log(products)

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view === true) {
    return <GridView products={products} />
  }
  return <ListView products={products} />
}

export default ProductList
