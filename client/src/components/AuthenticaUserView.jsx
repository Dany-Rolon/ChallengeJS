import {Route} from 'react-router-dom'
import Home from './Home'
import BudgetsView from './BudgetsView'
import BudgetDetails from './BudgetDetails'
import Nav from './Nav'

export default function AuthenticateUserView(){
    return(
        <>
            <Nav />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/budgets" component={BudgetsView}/>
            <Route exact path="/budgets/:id" component={BudgetDetails}/>
        </>
    )
}