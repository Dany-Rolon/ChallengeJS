import { useState } from "react"
import {Link} from 'react-router-dom'

export default function NonAuthenticateUserView(){

    const [isLogin, setIsLogin] = useState(true)

    function onSubmit(e){
        e.preventDefault()
        if(isLogin){
            console.log('Loggin');
        } else {
            console.log('Registering');
        }
    }

    function onClick(e){
        e.preventDefault()
        setIsLogin(!isLogin)
    }

    return(
        <div className="grid grid-cols-1">
            <h1 className="text-primary text-center text-4xl mt-20 font-semibold">My Budgets</h1>
            <form onSubmit={onSubmit} className="grid grid-cols-1 border-2 border-secondary shadow-lg p-2 mt-14 m-2" >
                {
                    isLogin ? (null) : (<h2 className="text-2xl text-primary text-center">Create Account</h2>)
                }
                
                <h3 className="text-secondary font-bold">Email</h3>
                <input type="text" className="w-full pl-1"/>

                <h3 className="text-secondary font-bold">Password</h3>
                <input type="password" className="w-full pl-1"/>

                {
                    isLogin ? null : (
                        <div>
                            <h3 className="text-secondary font-bold">Repeat Password</h3>
                            <input type="password" className="w-full pl-1"/>
                        </div>
                    )
                }
                
                <button type="submit" className="border-2 border-secondary text-primary font-semibold py-2 mt-2 hover:bg-secondary hover:text-white">{isLogin ? 'Login' : 'Register'}</button>
            </form>

            {
                isLogin ?
                    (<div className="text-center">
                        <p>Don't have an account yet? <button className="text-secondary focus:outline-none" onClick={onClick}>Register</button></p> 
                    </div>)
                :
                    (<div className="text-center">
                        <p>Already have an account?  <button className="text-secondary focus:outline-none" onClick={onClick}>Login</button></p>
                    </div>)
            }

        </div>
    )
}
