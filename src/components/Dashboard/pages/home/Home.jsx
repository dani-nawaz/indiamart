import React from 'react'
import styled from 'styled-components'
import { Charts, FeaturedInfo, WidgetSmall, WidgetLg } from '../../components'
import { data } from '../../dummyData'

const Home = () => {
  return (
    <Wrapper>
      <FeaturedInfo />
      <Charts
        data={data}
        dataKey={'Active User'}
        grid
        title={'User Analytics'}
      />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLg />
      </div>
    </Wrapper>
  )
}

export default Home
const Wrapper = styled.section`
  flex: 4;
  .homeWidgets {
    display: flex;
    margin: 20px;
  }
`
