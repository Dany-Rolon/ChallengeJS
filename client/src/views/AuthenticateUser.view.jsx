import { Route, Switch } from 'react-router-dom'

import Home from './Home.view'
import Operations from './Operations.view'
import Nav from '../components/Nav'

export default function AuthenticateUserView() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/operations" component={Operations} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )
}