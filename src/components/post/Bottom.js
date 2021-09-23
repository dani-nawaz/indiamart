import React from 'react'
import styled from 'styled-components'
import LeftBottom from './LeftBottom'
import RightBottom from './RightBottom'

const Wrapper = styled.section`
  /* color: #fffffe; */
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  grid-gap: 2rem;
  max-width: 1200px;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 40% 60%;
    justify-content: space-between;

    grid-gap: 2rem;
    max-width: 1500px;
  } ;
`
const Bottom = () => {
  return (
    <Wrapper className='section__center'>
      <LeftBottom />
      <RightBottom />
    </Wrapper>
  )
}

export default Bottom
