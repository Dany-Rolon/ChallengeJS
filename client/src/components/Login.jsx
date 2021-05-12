import { useState } from 'react'
import {login} from '../Helpers/user-helper'
import {useDispatch} from 'react-redux'
import {setUser} from '../redux/actions/userActions'

export default function Login(){
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })

    async function Login(e){
        e.preventDefault()
        let user = await login(newUser)
        dispatch(setUser(user))
    }

    function onChange(e){
        e.preventDefault()
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={Login}>
                <p>Email: </p>
                <input type="text" name="email" onChange={onChange} value={newUser.email}/>
                <br />
                <p>Password: </p>
                <input type="password" name="password" onChange={onChange} value={newUser.password} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}