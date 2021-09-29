import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
const Wrapper = styled.section`
  width: 100%;
  /* height: 400px; */
  /* background-color: black; */
  .center {
    background: rgb(114, 189, 163);
    background: linear-gradient(
      149deg,
      rgba(114, 189, 163, 1) 1%,
      rgba(7, 60, 86, 1) 73%
    );
    height: 20vh;
    text-align: center;
    color: var(--white);
  }
`
const Banner = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <Wrapper className='section' onMouseOver={closeSubmenu}>
      <div className='section__center center'>
        <h1>Banner</h1>
      </div>
    </Wrapper>
  )
}

export default Banner
