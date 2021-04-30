import { useState } from "react"
import AutheticateUserView from './views/AuthenticateUser.view'
import NonAuthenticaUserView from './views/NonAuthenticateUser.view'

export default function App() {

  const [thereIsUser, setThereIsUser] = useState(false)

  return (
    thereIsUser ? <AutheticateUserView setThereIsUser={setThereIsUser}/> :  <NonAuthenticaUserView setThereIsUser={setThereIsUser}/>
  )
}