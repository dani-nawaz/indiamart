import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
const Wrapper = styled.section`
  width: 100%;
  height: 400px;
  background-color: black;
`
const Banner = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <Wrapper className='section' onMouseOver={closeSubmenu}>
      <div className='section__center'>s</div>
    </Wrapper>
  )
}

export default Banner
