import Axios from 'axios'
import {setToken} from './auth-helper'

async function login(newUser){
    try {
        const {data: token, status} = await Axios.post('http://localhost:4000/user/login', newUser)
        if(status === 200){
            setToken(token)
            const user = whoami()
            return user
        }
    } catch (error) {
        console.log('Error happened while login: ', error);
    }
    
}

async function register(newUser){
    try {
        const {status} = await Axios.post('http://localhost:4000/user/register', newUser)
        if(status === 200){
            let user = login(newUser)
            return user
        }
    } catch (error) {
        console.log('Error happened while registering: ', error);
    }
}

async function whoami(){
    try {
        const {status,data} = await Axios.get('http://localhost:4000/user/whoami')
        if(status === 200){
            return data
        }    
    } catch (error) {
        console.log('Error happened while requesting user info', error)
    }
}

export{
    login,
    register,
    whoami
}