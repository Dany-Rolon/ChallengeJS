import {React, useEffect, useState} from 'react'
import {initAxiosInterceptors, getToken} from './Helpers/auth-helper'
import {Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/actions/userActions'
import {setBudgets} from './redux/actions/budgetsActions'
import {whoami} from './Helpers/user-helper'
import {getBudgets} from './Helpers/budget-helper'
import LandingPage from './components/LandingPage'
import AuthenticateUserView from './components/AuthenticaUserView'

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
        let data = await getBudgets()
        dispatch(setBudgets(data))

        setThereIsuser(true)
      }
    }
    setUserIfThereIsToken()
  }, [dispatch])

  return (
    <div>
      <Switch>
        {thereIsUser ? (<Redirect exact from="/" to="/home"/>) : (null)}
        <Route exact path="/" component={LandingPage}/>
        <AuthenticateUserView />
      </Switch>
    </div>
  );
}

export default App;
