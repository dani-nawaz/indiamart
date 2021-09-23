import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100%;
  background: #fffffe;
  color: var(--text-color);
  width: 100%;
  margin-top: -55px !important;
  border-radius: 20px;
  color: hsla(0, 0%, 100%, 0.85);
  text-align: left;

  .heading {
    padding: 16px;
    color: #073c56;
    font-size: 22px;
    font-weight: 600;
    border-bottom: 1px solid black;
    text-align: left;
  }
  .verified {
    padding: 16px;
    color: #000000;
  }
`

const Verification = () => {
  return (
    <Wrapper>
      <div className='heading'>Verifcation</div>
      <div className='verified'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
        recusandae.
      </div>
    </Wrapper>
  )
}

export default Verification
