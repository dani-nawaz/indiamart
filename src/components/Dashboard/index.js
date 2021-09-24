import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  NewProduct,
  NewUser,
  Product,
  ProductList,
  User,
  UserList,
  Home,
} from './pages'
import { Sidebar, Topbars } from './components'
function DashBoard() {
  return (
    <Router>
      <Wrapper>
        <Topbars />
        <div className='container'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path='/newUser'>
              <NewUser />
            </Route>
            <Route path='/products'>
              <ProductList />
            </Route>
            <Route path='/product/:productId'>
              <Product />
            </Route>
            <Route path='/newProduct'>
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </Wrapper>
    </Router>
  )
}

export default DashBoard
const Wrapper = styled.section`
  .container {
    display: flex;
    margin-top: 10px;
  }
  .others {
    flex: 4;
    background-color: darkcyan;
  }
`
