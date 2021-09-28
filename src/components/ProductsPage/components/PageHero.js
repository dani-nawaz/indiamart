import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ product, title }) => {
  return (
    <Wrapper>
      <div className='section__center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products' />}/{title}
        </h3>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--green-shade);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--primary);
  a {
    color: var(--darkpara);
    padding: 0.5rem;
    transition: all 250ms ease-in;
  }
  a:hover {
    color: var(--primary);
  }
`

export default PageHero
