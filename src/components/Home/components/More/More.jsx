import React from 'react'
import styled from 'styled-components'
import { card } from '../../data'
const Wrapper = styled.section`
  .center {
    max-width: 1300px;
    background-color: #fffffe;
    padding: 15px;
  }
  .card {
    margin: 30px 0 15px;
    text-align: center;
    padding: 10px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr;

    align-items: center;
    justify-content: center;

    /* display: flex; */
    /* flex-wrap: wrap; */
  }
  @media screen and (min-width: 739px) {
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 999px) {
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1000px) {
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .wrapper {
    position: relative;
  }
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
    margin-bottom: 1rem;
  }
  .icon svg {
    fill: var(--primary);
    width: 100%;
    height: 100%;
  }
  h3 {
    margin: 5px 0;
    display: block;
    color: #333;
    font-weight: 700;
  }
  .desc {
    color: #888;
    display: block;
    clear: both;
    padding: 0 15px;
    margin: 10px 0 25px 0;
    font-size: 14px;
  }
`
const More = () => {
  return (
    <Wrapper className='section'>
      <div className='title-wrapper'>
        <div className='title'>
          more
          <span className='subtitle'>Info</span>
        </div>
      </div>
      <div className='section__center center'>
        <div className='cards'>
          {card.map((card) => {
            const { id, title, desc, icon } = card
            return (
              <article key={id}>
                <div className='card'>
                  <div className='wrapper'>
                    <div className='icon'>{icon}</div>
                    <h5>{title}</h5>
                    <p className='decs'>{desc}</p>
                  </div>
                  <div className='cardbtn from-right'>hello</div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default More
