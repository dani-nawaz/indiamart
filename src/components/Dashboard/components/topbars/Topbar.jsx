import React from 'react'
import styled from 'styled-components'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
const Topbar = () => {
  return (
    <Wrapper className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>I'madmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNoneIcon />
            <span className='topIconBag'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <LanguageIcon />
            <span className='topIconBag'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <SettingsIcon />
          </div>
          <img
            src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/168179189_2958555014411784_1075468537876350186_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGSgy10_NjDl_n8ZvsSKdnTqNHDqKesW0yo0cOop6xbTEhQ-5z1bNNNU00lzlMkpN3JOvWp09M2zdsiUb8TqXLv&_nc_ohc=U0hsKWlSb1UAX9kAqhz&_nc_ht=scontent.fkhi2-2.fna&oh=abefd81ef8bc6db5a69492b45a4be7d3&oe=60E84682'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default Topbar
const Wrapper = styled.section`
  .topRight {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .topbar {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .topbarWrapper {
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    font-weight: 39px;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
  }
  .topbarIconContainer {
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
  }
  .topIconBag {
    position: absolute;
    top: -5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: white;
    display: flex;
    right: 0px;
    background-color: red;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
  .topAvatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`

/*
increase in assest and expencse in debit;
increase in liablities capital and revnue is credited



*/
