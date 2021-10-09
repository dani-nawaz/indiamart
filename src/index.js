import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './normalize.css'
import { FilterProvider } from './context/FilterContext'
import store from './store'
import { Provider } from 'react-redux'
import { AppProvider } from './components/Home/components/context'
ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </AppProvider>
  </Provider>,
  document.getElementById('root')
)
