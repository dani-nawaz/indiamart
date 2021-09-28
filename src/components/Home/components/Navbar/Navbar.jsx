import React from 'react'
import styled from 'styled-components'
// import { useGlobalContext } from '../context'

const Wrapper = styled.nav`
  /* height: 5rem; */
  /* display: flex;
  align-items: center;
  justify-content: center;
  background-color: #073c56;
  position: relative;
  z-index: 1; */
  .nav {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #073c56;
    position: relative;
    z-index: 1;
  }

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .signin-btn {
    display: none;
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;

      align-items: center;
    }

    .toggle-btn {
      display: none;
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      display: block;
      justify-self: center;
      display: flex;
      /* grid-template-columns: 1fr 1fr 1fr; */
      text-align: center;
      height: 100%;
      margin-top: 1rem;
      /* display: grid; */
      align-items: center;
    }
    .nav-links li {
      height: 100%;
      /* width: 100%; */
    }

    .link-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: white;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
    }
  }
`

export const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav'>
        <div className='nav-center'>
          <ul className='nav-links'>
            <li>
              <button className='Navbtn from-top'>drugs and pharma</button>
            </li>
            <li>
              <button className='Navbtn from-top'>agriculture</button>
            </li>
            <li>
              <button className='Navbtn from-top'>electronics</button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
