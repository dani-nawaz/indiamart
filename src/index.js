import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './normalize.css'
import { FilterProvider } from './context/FilterContext'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <FilterProvider>
      <App />
    </FilterProvider>
  </Provider>,
  document.getElementById('root')
)
