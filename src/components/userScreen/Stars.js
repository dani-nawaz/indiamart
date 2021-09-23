import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
const Stars = ({ stars, reviews, fontSize }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarIcon />
        ) : stars >= number ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      {reviews > 0 ? <p className='reviews'>{reviews} customer reviews</p> : ''}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  span {
    color: yellow;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-top: 0;
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
