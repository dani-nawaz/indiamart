import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  .container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 1rem;
  }

  #contact input[type='text'],
  #contact input[type='email'],
  #contact input[type='tel'],
  #contact input[type='url'],
  #contact textarea,
  #contact button[type='submit'] {
    font: 400 12px/16px 'Roboto', Helvetica, Arial, sans-serif;
  }

  #contact {
    color: black;
    padding: 25px;
    margin: 50px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type='text'],
  #contact input[type='email'],
  #contact input[type='tel'],
  #contact input[type='url'],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 5px;
    padding: 10px;
  }

  #contact input[type='text']:hover,
  #contact input[type='email']:hover,
  #contact input[type='tel']:hover,
  #contact input[type='url']:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type='submit'] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4caf50;
    color: #fff;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #contact button[type='submit']:hover {
    background: #43a047;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type='submit']:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }
`
const Form = () => {
  return (
    <Wrapper>
      <div class='container'>
        <h1 style={{ textAlign: 'center' }}>Requirment Information</h1>
        <form id='contact' action='' method='post'>
          <fieldset>
            <input
              placeholder='Enter Product/ Service Name'
              type='text'
              tabindex='1'
              required
              autofocus
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder='Add Additional Info....'
              tabindex='5'
              required
            ></textarea>
          </fieldset>
          <div>
            <h4>Contact Details</h4>
          </div>
          <fieldset>
            <input placeholder='Your Name' type='text' tabindex='2' required />
          </fieldset>
          <fieldset>
            <input
              placeholder='Your Email Address'
              type='email'
              tabindex='2'
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder='Your Phone Number (optional)'
              type='tel'
              tabindex='3'
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder='Your Web Site (optional)'
              type='url'
              tabindex='4'
              required
            />
          </fieldset>

          <fieldset>
            <button
              name='submit'
              type='submit'
              id='contact-submit'
              data-submit='...Sending'
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </Wrapper>
  )
}

export default Form
