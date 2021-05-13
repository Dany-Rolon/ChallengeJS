import {Link, useHistory} from 'react-router-dom'
import {deleteToken} from '../Helpers/auth-helper'

export default function Nav(){
    const history = useHistory()

    function onClick(e){
        e.preventDefault()
        deleteToken()
        history.push('./')
    }

    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to="/budgets">Budgets</Link>
            <button onClick={onClick}>SingOut</button>
        </div>
    )
}