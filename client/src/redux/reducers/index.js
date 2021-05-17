import {combineReducers} from 'redux'
import {budgetReducer} from './budgetsReducers'
import {userReducer} from './userReducers'

const reducers = combineReducers({
    allBudgets: budgetReducer,
    user: userReducer,
})

export default reducers