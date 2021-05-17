import { Route } from 'react-router-dom'
import Home from './Home'
import BudgetsView from './BudgetsView'
import BudgetDetails from './BudgetDetails'
import Nav from './Nav'
import CreateBudget from './CreateBudget'

export default function AuthenticateUserView() {
    return (
        <div className="grid grid-cols-1">
            <Nav />
            <div className="mt-16">
                <Route exact path="/home" component={Home} />
                <Route exact path="/budgets" component={BudgetsView} />
                <Route exact path="/createBudget" component={CreateBudget} />
                <Route exact path="/budgets/:id" component={BudgetDetails} />
            </div>
        </div>
    )
}