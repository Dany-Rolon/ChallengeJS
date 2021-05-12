import {React, useEffect, useState} from 'react'
import {initAxiosInterceptors, getToken} from './Helpers/auth-helper'
import {Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/actions/userActions'
import {whoami} from './Helpers/user-helper'
import Register from './components/Register'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import BudgetsView from './components/BudgetsView'
import BudgetDetails from './components/BudgetDetails'
import Nav from './components/Nav'

function App() {
  initAxiosInterceptors()
  const dispatch = useDispatch()

  const [thereIsUser, setThereIsuser] = useState(false)

  useEffect(() => {
    async function setUserIfThereIsToken(){
      if(getToken()){
        let user = await whoami()
        dispatch(setUser(user))
        // Charge the store with the budgets here
        setThereIsuser(true)
      }
    }
    setUserIfThereIsToken()
  }, [dispatch])

  return (
    <div>
      {thereIsUser ? (<Nav />) : (null)}
      <Switch>
        {thereIsUser ? (<Redirect exact from="/" to="/home"/>) : (null)}
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/budgets" component={BudgetsView}/>
        <Route exact path="/budgets/:id" component={BudgetDetails}/>
      </Switch>
    </div>
  );
}

export default App;
