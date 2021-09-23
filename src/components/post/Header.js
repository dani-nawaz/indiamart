import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 210px;
  background: linear-gradient(to right, #2e3192, #00a699);

  .header_title {
    margin-top: 0;
    color: #fff;
    font-size: 22px;
    letter-spacing: 1px;
    padding-top: 2rem;
    max-width: 1500px;

    /* padding-left: 2rem; */
  }
`
const Header = () => {
  return (
    <Wrapper>
      <div className='header_title section__center'>
        <h4> Tell us what you need</h4>
        <h3>
          We'll give you the <br /> best quotes!
        </h3>
      </div>
    </Wrapper>
  )
}

export default Header
