import React from 'react'
import styled from 'styled-components'
import FeaturedInf from '../../components/featuredInfo/FeaturedInf'
import Charts from '../../components/charts/Charts'
import { data } from '../../DummyData'
import WidgetSmall from '../../components/WidgetSm/WidgetSmall'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <Wrapper>
      <FeaturedInf />
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
