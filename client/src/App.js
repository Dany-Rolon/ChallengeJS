import {initAxiosInterceptors} from './Helpers/auth-helper'
import {Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import LandingPage from './components/LandingPage'

function App() {
  initAxiosInterceptors()
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  );
}

export default App;
