import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Verification from './Verification'
const Wrapper = styled.section`
  .backgroundImage {
    background-image: url('//cdn2.f-cdn.com/static/img/profiles/cover-product.jpg');
    background-repeat: no-repeat;
    opacity: 0.8;
    height: 400px;
  }
  .header_center {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
  }
`
const UserScreen = () => {
  return (
    <Wrapper>
      <div className='backgroundImage'></div>
      <div className='intro'>
        <section className='section__center header_center'>
          <Card />
          <Verification />
        </section>
      </div>
    </Wrapper>
  )
}

export default UserScreen
