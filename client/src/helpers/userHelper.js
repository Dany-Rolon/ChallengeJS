import Axios from 'axios'
import {setToken, deleteToken} from '../helpers/authHelper'
import store from '../store'

async function Register(newUser,setThereIsUser){
    const res = await Axios.post('http://localhost:4000/user', newUser)
    if(res.status === 200){
        Login(newUser, setThereIsUser)
    }
}

async function Login(user,setThereIsUser){
    const res = await Axios.post('http://localhost:4000/user/login', user)
    if(res.status === 200){
        setToken(res.data)
        setThereIsUser(true)
    }
}

async function SignOut(setThereIsUser){
    deleteToken()
    setThereIsUser(false)
}

async function Whoami(setThereIsUser){
    const response = await Axios.get('http://localhost:4000/user/whoami')
    if(response.status === 200){
        store.dispatch({
            type: 'ADD_USER',
            user: response.data.email
        })
        setThereIsUser(true)
    }
}

export{
    Register,
    Login,
    Whoami,
    SignOut
}