import { useEffect, useState } from "react"
import {initAxiosInterceptors, getToken} from './helpers/authHelper'
import { BrowserRouter as Router } from "react-router-dom"
import AutheticateUserView from './views/AuthenticateUser.view'
import NonAuthenticaUserView from './views/NonAuthenticateUser.view'
import {Whoami} from './helpers/userHelper'

export default function App() {

  const [thereIsUser, setThereIsUser] = useState(false)

  initAxiosInterceptors()

  useEffect(() => {
    if(getToken()){
      Whoami(setThereIsUser)
    }
  }, [])

  return (
    <Router>
      {
        thereIsUser ? <AutheticateUserView setThereIsUser={setThereIsUser} /> : <NonAuthenticaUserView setThereIsUser={setThereIsUser} />
      }
    </Router>
  )
}