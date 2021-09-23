import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'
const Wrapper = styled.main`
  padding: 30px;
  display: flex;

  align-items: center;
  background: #fffffe;
  border-radius: 20px;
  margin-top: -60px !important;
  box-shadow: var(--shadow-2);

  img {
    height: 170px;
    width: 170px;
    position: relative;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    margin-top: -300px;
    border: 1px solid black;
  }
  .card_Info {
    flex: 2;
    margin-right: 20px;
  }
  .userName {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .info_stats {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 14px;
  }
  .description {
    font-size: 14px;
  }
  .EditButton {
    flex: 1;
  }
  .edit {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background-color: black;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
  }
  h5 {
  }
  .infoJob {
    align-items: flex-start;
    justify-content: space-between;
    /* color: hsla(0, 0%, 100%, 0.85); */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    text-align: left;
    margin-bottom: 1rem;
  }

  span {
    color: #5dc26a;
  }

  .jobsCompleted,
  .jobsOnBudget,
  .jobsOnTime,
  .jobsRepeatHireRate {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    justify-content: space-between;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Card = () => {
  return (
    <Wrapper>
      <img
        src='https://cdn2.f-cdn.com/ppic/179662623/logo/57706644/WY7qT/profile_logo_Facebook_57706644.jpg'
        alt=''
      />
      <div className='card_Info'>
        <div className='header'>
          <h2 className='userName'>@dani</h2>
          <div className='Editbutton'>
            <button className='edit'>Edit</button>
          </div>
        </div>
        <h5>WebDeveloper</h5>
        <div className='info_stats'>
          <Stars />
        </div>
        <div className='infoJob'>
          <div className='jobsCompleted'>
            <span>2 </span>
            Jobs Completed
          </div>
          <div className='jobsOnBudget'>
            <span>2 </span>
            On Budget
          </div>
          <div className='jobsOnTime'>
            <span>2 </span>
            On Time
          </div>
          <div className='jobsRepeatHireRate'>
            <span>2 </span>
            Repeat Hire Rate
          </div>
        </div>
        <div className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          dolore!
        </div>
      </div>
    </Wrapper>
  )
}

export default Card
