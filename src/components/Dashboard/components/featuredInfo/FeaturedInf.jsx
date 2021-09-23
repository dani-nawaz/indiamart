import React from 'react'
import styled from 'styled-components'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
const FeaturedInf = () => {
  return (
    <Wrapper>
      <div className='feacturedItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4
            <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='feacturedItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4,415</span>
          <span className='featuredMoneyRate'>
            -1.4
            <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='feacturedItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            +211.4
            <ArrowUpwardIcon className='featuredIcon positive' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </Wrapper>
  )
}

export default FeaturedInf
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .feacturedItem {
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .featuredTitle {
    font-size: 20px;
  }
  .featuredMoneyContainer {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }
  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }
  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .featuredIcon {
    font-size: 20px !important;
    margin-left: 5px;
    color: green;
  }
  .negative {
    color: red;
  }
  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`
