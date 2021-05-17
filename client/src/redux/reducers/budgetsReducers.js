import {ActionTypes} from '../constants/action-types'

const defaultState = {
    budgets:[],
    currentBalance:0
}

export const budgetReducer = (state=defaultState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_BUDGETS:
            let total = getBalance(payload)
            return {
                ...state,
                budgets: payload,
                currentBalance: total
            }
        case ActionTypes.ADD_BUDGET:
            state.budgets.unshift(payload)
            return {
                ...state,
            }
        case ActionTypes.UPDATE_BALANCE:
            let updatedTotal = getBalance(state.budgets)
            return {
                ...state,
                currentBalance: updatedTotal
            }
        default:
            return state
    }
}

export const selectedBudgetReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_BUDGET:
            return {
                ...state,
                ...payload
            }
        case ActionTypes.REMOVE_SELECTED_BUDGET:
            return {}
        default:
            return state
    }
}

function getBalance(array){
    let total = 0
    array.forEach(element => {
        if(element.type === 'income') total += element.mount
        else total -= element.mount
    });
    return total
}