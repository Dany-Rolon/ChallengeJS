import { Link, useHistory } from 'react-router-dom'
import { deleteToken } from '../Helpers/auth-helper'

export default function Nav() {
    const history = useHistory()

    function onClick(e) {
        e.preventDefault()
        deleteToken()
        history.push('../')
    }

    return (
        <div className="fixed w-screen bg-warmgray-700">
            <div className="flex justify-between py-4 px-2 sm:px-8 text-white">
                <h1 className="text-2xl font-semibold titles">My Budgets</h1>
                <div className="pt-1">
                    <Link to="/home" className="mr-2 font-semibold hover:underline">Home</Link>
                    <Link to="/budgets" className="mr-2 font-semibold hover:underline">Budgets</Link>
                    <button onClick={onClick} className="font-semibold hover:underline focus:outline-none">SignOut</button>
                </div>
            </div>
        </div>
    )
}