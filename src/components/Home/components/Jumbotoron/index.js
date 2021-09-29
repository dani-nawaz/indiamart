import React from 'react'
import styled from 'styled-components'
import Info from './Info'
import { jumboData } from './JumboData'
const Wrapper = styled.section``
const Index = () => {
  return (
    <Wrapper>
      <article className='section__center jumbo'>
        <Info.Container>
          <div className='title-wrapper'>
            <div className='title'>
              top
              <span className='subtitle'>categories</span>
            </div>
            <div className='underline'></div>
          </div>
          {jumboData.map((item) => {
            console.log(item)
            return (
              <Info key={item.id} direction={item.direction}>
                <Info.Pane style={{ width: '30%' }}>
                  <Info.Img src={item.img} />
                </Info.Pane>
                <Info.Pane style={{ width: '70%' }}>
                  <Info.Title>{item.title}</Info.Title>
                  <Info.SubTitle>{item.subtitle}</Info.SubTitle>
                </Info.Pane>
              </Info>
            )
          })}
        </Info.Container>
      </article>
    </Wrapper>
  )
}

export default Index
