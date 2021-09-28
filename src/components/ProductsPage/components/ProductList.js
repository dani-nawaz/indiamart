import React from 'react'
import styled from 'styled-components'
import GridView from './GridView'
import ListView from './ListView'
import { products } from './productData'
const Wrapper = styled.section``
const ProductList = () => {
  // if (products.length < 1) {
  //   return (
  //     <h5 style={{ textTransform: 'none' }}>
  //       Sorry, no products matched your search.
  //     </h5>
  //   )
  // }

  if (true) {
    return <ListView products={products} />
    // return <GridView   products={products}/>
  }
}

export default ProductList
