import React from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from 'recharts'
import styled from 'styled-components'

const Charts = ({ data, dataKey, grid, title }) => {
  return (
    <Wrapper>
      <h3 className='chartsTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' stroke='#8884d8' />
          <Line
            type='monotone'
            dataKey={dataKey}
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray='5 5' stroke='#e0dfdf' />}
          {/* <Legend /> */}
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default Charts
const Wrapper = styled.section`
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  .chartsTitle {
    margin-bottom: 20px;
  }
`
