import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AccountBox } from './components/accountBox'
import DashBoard from './components/Dashboard'
import { Home } from './components/Home'
import { PostCom } from './components/post'
import { ProductsPage } from './components/ProductsPage'
import { UserScreen } from './components/userScreen'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/user' component={UserScreen} />
      <Route path='/post' component={PostCom} />
      <Route path='/login' component={AccountBox} />
      <Route path='/products' component={ProductsPage} />
      <Route path='/dashboard' component={DashBoard} />
    </Router>
  )
}

export default App
