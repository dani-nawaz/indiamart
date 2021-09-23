import React from 'react'
import styled from 'styled-components'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
const data = [
  {
    id: 1,
    title: 'Tell us what you need',
    desc: 'Post your requirement to get the best deals from our wide network of 5.5 million verified suppliers',
  },
  {
    id: 1,
    title: 'Receive seller details',
    desc: 'We will send you the most relevant supplier contact details on your registered email address and mobile number',
  },
  {
    id: 1,
    title: 'Get the best deals',
    desc: 'Accurate information about the product will help us get you the best quote',
  },
]
const Wrapper = styled.section`
  .singleQ {
    padding: 34px 120px 34px 50px;
    border-style: solid;
    border-width: 0 0 1px;
  }
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .header h3 {
    font-size: 25px;
    font-weight: 700;
    /* padding-bottom: 8px; */
  }
  .desc {
    font-size: 14px;
    line-height: 18px;
  }
  span {
    color: #73cc00;
  }
  h4 {
    font-weight: 600;
  }
`
const LeftBottom = () => {
  return (
    <Wrapper>
      {data.map((qou) => {
        return (
          <div className='singleQ' key={qou.id}>
            <div className='header'>
              <h3>{qou.title}</h3>
              <span>
                <FormatQuoteIcon />
              </span>
            </div>
            <div className='desc'>{qou.desc}</div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default LeftBottom
