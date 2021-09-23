import React from 'react'
import styled from 'styled-components'
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={' widgetLgButton ' + type}>{type}</button>
  }
  return (
    <Wrapper>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetlgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
              className='widgetLgImg'
              alt=''
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              className='widgetLgImg'
              src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-1/p200x200/158137653_4317276328437005_2836207799287130235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF1GE29vZ4MHa0IXXKL1sOxn39x78eN8giff3Hvx43yCENwrgANqkPvhksrhiwIiHDz1wvTdgN-Sx7HOH9cy4-e&_nc_ohc=-BIovldrRxgAX--xPPM&_nc_ht=scontent.fkhi2-2.fna&tp=6&oh=2cb6515a7e0ab35e3db43175d8af88c9&oe=60E9EA80'
              alt=''
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
      </table>
    </Wrapper>
  )
}

export default WidgetLg
const Wrapper = styled.section`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
  .widgetLgTitle {
    font-size: 22px;
    font-weight: 600;
  }
  .widgetLgDate,
  .widgetLgAmount {
    font-weight: 300;
  }
  .widgetLgImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .widgetLgButton {
    padding: 5px 7px;
    border: none;
    border-radius: 7px;
  }
  .widgetLgButton.Approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  .widgetLgButton.Declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  .widgetLgButton.Pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
  .widgetlgTable {
    width: 100%;
    border-spacing: 20px;
  }
  .widgetLgTh {
    text-align: left;
  }
  .widgetLgUser {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
`
