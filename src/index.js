import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './normalize.css'
import { FilterProvider } from './context/FilterContext'
import { AppProvider } from './components/Home/components/context'

ReactDOM.render(
  <AppProvider>

  <FilterProvider>
    <App />
  </FilterProvider>
  </AppProvider>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
