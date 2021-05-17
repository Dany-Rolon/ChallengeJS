import {combineReducers} from 'redux'
import {budgetReducer, selectedBudgetReducer} from './budgetsReducers'
import {userReducer} from './userReducers'

const reducers = combineReducers({
    allBudgets: budgetReducer,
    budgetSelected: selectedBudgetReducer,
    user: userReducer,
})

export default reducers