import { useState } from "react"
import {Register, Login} from '../helpers/userHelper'

export default function NonAuthenticateUserView({setThereIsUser}){

    const [isLogin, setIsLogin] = useState(true)
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [user, setUser] = useState({
        email:'',
        password: ''
    })

    async function onSubmit(e){
        e.preventDefault()
        if(isLogin){
            Login(user,setThereIsUser)
        } else {
            if(user.password === repeatedPassword) Register(user,setThereIsUser)
            else alert('Make sure that passwords are equals')
        }
    }

    function onClick(e){
        e.preventDefault()
        setIsLogin(!isLogin)
    }

    function onChange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    function onChangeRepeatedPassword(e){
        setRepeatedPassword(e.target.value)
    }

    return(
        <div className="grid grid-cols-1">
            <h1 className="text-primary text-center text-4xl mt-20 font-semibold title md:italic">My Budgets</h1>
            <form onSubmit={onSubmit} className="grid grid-cols-1 border-2 border-secondary shadow-lg p-2 mt-10 m-2 rounded-lg pt-4" >
                {
                    isLogin ? (<h2 className="text-3xl text-primary text-center title">Login</h2>) : (<h2 className="text-3xl text-primary text-center title">Create Account</h2>)
                }
                
                <h3 className="text-secondary font-bold pt-3">Email</h3>
                <input name="email" value={user.email} onChange={onChange} type="text" className="w-full pl-1"/>

                <h3 className="text-secondary font-bold pt-3">Password</h3>
                <input name="password" value={user.password} onChange={onChange} type="password" className="w-full pl-1"/>

                {
                    isLogin ? null : (
                        <div>
                            <h3 className="text-secondary font-bold pt-3">Repeat Password</h3>
                            <input onChange={onChangeRepeatedPassword} type="password" className="w-full pl-1"/>
                        </div>
                    )
                }
                
                <button type="submit" className="border-2 border-secondary text-primary py-2 mt-4 rounded-lg text-2xl title hover:bg-secondary hover:text-white">{isLogin ? 'Submit' : 'Register'}</button>
            </form>

            {
                isLogin ?
                    (<div className="text-center">
                        <p>Don't have an account yet? <button className="text-secondary mt-4 underline focus:outline-none" onClick={onClick}>Register</button></p> 
                    </div>)
                :
                    (<div className="text-center">
                        <p>Already have an account?  <button className="text-secondary mt-4 underline focus:outline-none" onClick={onClick}>Login</button></p>
                    </div>)
            }

        </div>
    )
}
