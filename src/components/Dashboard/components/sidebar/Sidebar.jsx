import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ReportIcon from '@mui/icons-material/Report'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AssessmentIcon from '@mui/icons-material/Assessment'

const Sidebar = () => {
  return (
    <Wrapper>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='links'>
              <li className='sidebarListItem active'>
                <LineStyleIcon className='sidebarIcons' />
                Home
              </li>
            </Link>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcons' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcons' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='links'>
              <li className='sidebarListItem '>
                <PermIdentityIcon className='sidebarIcons' />
                Users
              </li>
            </Link>
            <Link to='/products' className='links'>
              <li className='sidebarListItem'>
                <StorefrontIcon className='sidebarIcons' />
                Products
              </li>
            </Link>
            <li className='sidebarListItem'>
              <AttachMoneyIcon className='sidebarIcons' />
              Transaction
            </li>
            <li className='sidebarListItem'>
              <AssessmentIcon className='sidebarIcons' />
              Report
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notification</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem '>
              <MailOutlineIcon className='sidebarIcons' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeedIcon className='sidebarIcons' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutlineIcon className='sidebarIcons' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem '>
              <WorkOutlineIcon className='sidebarIcons' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcons' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportIcon className='sidebarIcons' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar
const Wrapper = styled.section`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #fffe;
  position: sticky;
  top: 50;
  .sidebarWrapper {
    padding: 20px;
    color: #555;
  }
  .links {
    text-decoration: none;
    color: inherit;
  }
  .sidebarMenu {
    margin-bottom: 10px;
  }
  .sidebarTitle {
    font-size: 13px;
    color: lightgray;
  }
  .sidebarIcons {
    margin-right: 5px;
    font-size: 20px !important;
  }
  .sidebarList {
    list-style: none;
    padding: 5px;
  }
  .sidebarListItem {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  .sidebarListItem.active,
  .sidebarListItem:hover {
    background-color: #7c727233;
  }
`
