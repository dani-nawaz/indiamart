import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #073c56;
  position: relative;
  z-index: 1;
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      height: 100%;
      margin-top: 1rem;
      display: grid;
      align-items: center;
    }
    .nav-links li {
      height: 100%;
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
  const { openSidebar, closeSubmenu, openSubmenu } = useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    console.log(page)
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    openSubmenu(page, { center, bottom })
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <Wrapper>
      <div className='nav-center' onMouseOver={handleSubmenu}>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              drugs and pharma
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              agriculture
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              electronics
            </button>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
