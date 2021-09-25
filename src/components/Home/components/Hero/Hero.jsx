import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
const Wrapper = styled.section`
  text-align: center;
  background-color: #ccc;
  background-image: url('https://hm.imimg.com/imhome_gifs/bg-img.jpg');
  padding: 45px;
  position: relative;
  height: 230px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 100% 32%;
  overflow: hidden;
`
const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return <Wrapper onMouseOver={closeSubmenu}></Wrapper>
}

export default Hero
