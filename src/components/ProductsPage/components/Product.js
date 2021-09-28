import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{price}</p>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background-color: #000000;
    border-radius: 20px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 20px;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--green-shade);
    opacity: 0;
    cursor: pointer;
  }
  svg {
    font-size: 1.25rem;
    color: var(--white);
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
  }
  footer p {
    color: var(--green-shade);
  }
`

export default Product
