import React from 'react'
import styled from 'styled-components'
import Filters from './components/Filters'
import ProductList from './components/ProductList'
import PageHero from './components/PageHero'
import Sort from './components/Sort'
const Wrapper = styled.section`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
  }
  .div {
    background-color: #fffffe;
    padding: 1rem;
    border-radius: 20px;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 250px 1fr;
    }
  }
`
const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section__center products'>
          <div>
            <Filters />
          </div>

          <div className='div'>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default ProductsPage
