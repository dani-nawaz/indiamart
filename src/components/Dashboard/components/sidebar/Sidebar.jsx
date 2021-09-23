import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import TimelineIcon from '@material-ui/icons/Timeline'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import StorefrontIcon from '@material-ui/icons/Storefront'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ReportIcon from '@material-ui/icons/Report'
import ErrorIcon from '@material-ui/icons/Error'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AssessmentIcon from '@material-ui/icons/Assessment'
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
