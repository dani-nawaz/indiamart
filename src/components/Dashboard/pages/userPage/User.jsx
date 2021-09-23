import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import { Input } from '@material-ui/core'
// or
import InputLabel from '@material-ui/core/InputLabel'
const User = () => {
  return (
    <Wrapper>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Anna Becker</span>
              <span className='userShowUserTitle'>Software Enginner</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Detail</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>annabecker99</span>
            </div>

            <span className='userShowTitle'>Contact Detail</span>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>10.12.1999</span>
            </div>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+9 999 999 99</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>annabecker99@email.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>BWp</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>edit</span>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label htmlFor='UserName'>UserName</label>
                <input
                  type='text'
                  placeholder='annabecker99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='UserName'>Full Name</label>
                <input
                  type='text'
                  placeholder='Full Name'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='UserName'>Email</label>
                <input
                  type='email'
                  placeholder='email@email.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='UserName'>Phone</label>
                <input
                  type='number'
                  placeholder='+9 999 999 99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='UserName'>Adress</label>
                <input
                  type='text'
                  placeholder='New York | USA'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='icon' />
                </label>
                <input
                  type='file'
                  name=''
                  style={{ display: 'none' }}
                  id='file'
                />
              </div>
              <button className='userUpdatebtn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default User
const Wrapper = styled.section`
  flex: 4;
  padding: 20px;
  .userTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .userUpdatebtn {
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
  }
  .icon {
    cursor: pointer;
  }
  .userUpdateUpload {
    display: flex;
    align-items: center;
  }
  .userUpdateItem {
    display: flex;
    flex-direction: column;

    margin-top: 10px;
  }
  .userUpdateItem > input {
    margin-bottom: 5px;
    font-size: 14px;
  }
  .userUpdateInput {
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
  }
  .userUpdateForm {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .userUpdateImg {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }
  .userUpdateTitle {
    font-size: 24px;
    font-weight: 600;
  }
  .userShowInfo {
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
  }
  .userShowIcon {
    font-size: 16px !important;
  }
  .userShowUsername {
    font-weight: 600;
  }
  .userShowBottom {
    margin-top: 20px;
  }
  .userShowTitle {
    font-size: 14px;
    font-weight: 600;
    color: #646464;
  }
  .userShowUserTitle {
    font-weight: 300;
  }
  .userShowTop {
    display: flex;
    align-items: center;
  }
  .userShowTopTitle {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
  .userShowImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .userAddButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
  }
  .userContainer {
    display: flex;
    margin-top: 20px;
  }
  .userShow {
    flex: 1;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .userUpdate {
    flex: 2;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
  }
  .userUpdateRight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .userShowInfoTitle {
    margin-left: 11px;
  }
`
