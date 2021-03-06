import { useState } from 'react'
import { login } from '../Helpers/user-helper'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/actions/userActions'
import { getBudgets } from '../Helpers/budget-helper'
import { setBudgets } from '../redux/actions/budgetsActions'
import { Redirect } from 'react-router'
import Loading from '../components/Loading'

export default function Login() {
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(false)

    async function Login(e) {
        e.preventDefault()
        setLoading(true)
        let user = await login(newUser)
        dispatch(setUser(user))
        let data = await getBudgets()
        dispatch(setBudgets(data))
        setIsLogin(true)
    }

    function onChange(e) {
        e.preventDefault()
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        isLogin ? (<Redirect to="/home" />) : (
            <div className="p-10 rounded-lg border-4 border-white">
                {loading ? <Loading /> : null}
                <h1 className="text-center text-4xl font-semibold">Login</h1>
                <form onSubmit={Login}>

                    {/* Email input */}
                    <h4 className="text-xl font-semibold">Email: </h4>
                    <input type="text" name="email" onChange={onChange} value={newUser.email} className="w-full text-black pl-0.5"/>

                    {/* Password input */}
                    <h4 className="text-xl font-semibold pt-4">Password: </h4>
                    <input type="password" name="password" onChange={onChange} value={newUser.password} className="w-full text-black pl-0.5"/>

                    <button type="submit" className="text-center w-full p-1 border rounded-lg mt-4 font-bold hover:bg-white hover:text-warmgray-700">Submit</button>
                </form>
            </div>
        )
    )
}