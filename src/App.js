import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AccountBox } from './components/accountBox'
import { PostCom } from './components/post'
import { UserScreen } from './components/userScreen'

function App() {
  return (
    <Router>
      <Route path='/user' component={UserScreen} />
      <Route path='/post' component={PostCom} />
      <Route path='/login' component={AccountBox} />
      <Route path='/login' component={DashBoard} />
    </Router>
  )
}

export default App
