import React from 'react'
import styled from 'styled-components'
import VisibilityIcon from '@material-ui/icons/Visibility'

const WidgetSmall = () => {
  return (
    <Wrapper>
      <span className='widgetSmTitle'>New join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
            alt=''
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Abdul Raheem</span>
            <span className='widgetSmUserTitle'>Lofar</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
            alt=''
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Abdul Raheem</span>
            <span className='widgetSmUserTitle'>Lofar</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
            alt=''
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Abdul Raheem</span>
            <span className='widgetSmUserTitle'>Lofar</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
            alt=''
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Abdul Raheem</span>
            <span className='widgetSmUserTitle'>Lofar</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
            alt=''
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Abdul Raheem</span>
            <span className='widgetSmUserTitle'>Lofar</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetMsIcon' />
            Display
          </button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default WidgetSmall
const Wrapper = styled.section`
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
  .widgetSmTitle {
    font-size: 22px;
    font-weight: 600;
  }
  .widgetSmUserTitle {
    font-weight: 300;
  }
  .widgetSmImg {
    width: 40px;
    height: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .widgetSmList {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .widgetSmListItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
  }
  .widgetSmUser {
    display: flex;
    flex-direction: column;
  }
  .widgetSmButton {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
  }
  .widgetMsIcon {
    font-size: 15px;
    margin-right: 5px;
  }
`
