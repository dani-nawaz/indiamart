import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../../../ProductsPage/components/Product'
import { products } from '../../../ProductsPage/components/productData'
const Wrapper = styled.section`
  background-color: var(--green-shade);
  text-align: center;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
const FeaturedProducts = () => {
  return (
    <Wrapper className='section'>
      <div className='title-wrapper'>
        <div className='title'>
          Featured
          <span className='subtitle'>Products</span>
          <div
            className='underline'
            style={{ backgroundColor: 'var(--darkpara)' }}
          ></div>
        </div>
      </div>
      <section className='section__center featured'>
        {products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
      <Link to='/products' className='cardbtn from-top' style={{ margin: '0' }}>
        all products
      </Link>
    </Wrapper>
  )
}

export default FeaturedProducts
