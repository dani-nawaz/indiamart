import React from 'react'
import styled from 'styled-components'
import Form from './Form'
const Wrapper = styled.section`
  /* background: #15161e; */
  background-color: #fffffe;
  border-radius: 20px;
  margin-top: -10rem;
  @media screen and (max-width: 992px) {
    margin-top: 0;
  }
`
const RightBottom = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Form />
      </div>
    </Wrapper>
  )
}

export default RightBottom
