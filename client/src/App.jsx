import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AutheticateUserView from './views/AuthenticateUser.view'
import NonAuthenticaUserView from './views/NonAuthenticateUser.view'

export default function App() {

  const [thereIsUser, setThereIsUser] = useState(true)

  return (
    <Router>
      {
        thereIsUser ? <AutheticateUserView setThereIsUser={setThereIsUser} /> : <NonAuthenticaUserView setThereIsUser={setThereIsUser} />
      }
    </Router>
  )
}