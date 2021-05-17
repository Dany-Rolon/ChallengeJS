import {ActionTypes} from '../constants/action-types'

const defaultState = {
    budgets:[],
    currentBalance:0,
    selectedBudget:{}
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
        case ActionTypes.REMOVE_SELECTED_BUDGET:
            let newBudgets = deleteItem(payload, state.budgets)
            return {
                ...state,
                budgets: newBudgets
            }
        case ActionTypes.SELECTED_BUDGET:
            return {
                ...state,
                selectedBudget: payload
            }
        case ActionTypes.EDIT_BUDGETS:
            let editedBudgets = replaceItem(payload.id, state.budgets, payload.newBudget)
            return {
                ...state,
                budgets: editedBudgets
            }
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

function deleteItem(id, array){
    const result = array.filter(item => item.id !== id)
    return result
}

function replaceItem(id, array, newBudget){
    let index = array.findIndex(item => item.id === id)
    array[index] = newBudget
    return array
}
