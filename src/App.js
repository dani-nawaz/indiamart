import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AccountBox } from './components/accountBox'
import DashBoard from './components/Dashboard'
import { Home } from './components/Home'
import { PostCom } from './components/post'
import { ProductsPage } from './components/ProductsPage'
import { UserScreen } from './components/userScreen'
import Header from './components/Home/components/Header/Header'
import { Sidebar } from './components/Home/components/Navbar/Sidebar'

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/user' component={UserScreen} />
        <Route path='/post' component={PostCom} />
        <Route path='/login' component={AccountBox} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/dashboard' component={DashBoard} />
      </Switch>
    </Router>
  )
}

export default App
