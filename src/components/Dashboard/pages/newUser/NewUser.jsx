import React from 'react'
import styled from 'styled-components'
const NewUser = () => {
  return (
    <Wrapper className='newUser'>
      <h1 className='title'>New User</h1>
      <form className='form'>
        <div className='item'>
          <label htmlFor='usrename'>username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='item'>
          <label htmlFor='fullname'>Full Name</label>
          <input type='text' placeholder='john Smith' />
        </div>
        <div className='item'>
          <label htmlFor='email'>Email Address</label>
          <input type='text' placeholder='email@email.com' />
        </div>
        <div className='item'>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='item'>
          <label htmlFor='Address'>Address</label>
          <input type='text' placeholder='Address' />
        </div>
        <div className='item'>
          <label htmlFor='phone'>phone Number</label>
          <input type='text' placeholder='phone number' />
        </div>
        <div className='item'>
          <label htmlFor='gender'>Gender</label>
          <div className='gender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>female</label>
            <input type='radio' name='gender' id='others' value='others' />
            <label for='others'>others</label>
          </div>
        </div>
        <div className='item'>
          <label htmlFor='Active'>Active</label>
          <select className='select' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='btn'>Create</button>
      </form>
    </Wrapper>
  )
}

export default NewUser
const Wrapper = styled.section`
  flex: 4;
  .form {
    display: flex;
    flex-wrap: wrap;
  }
  .btn {
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-top: 10px;
    margin-right: 20px;
  }
  .item > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #a5a2a2;
  }
  .item > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .gender > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
  .gender > input {
    margin-top: 15px;
  }
  .select {
    border-radius: 5px;
    height: 40px;
  }
`
