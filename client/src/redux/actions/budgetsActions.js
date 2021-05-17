import {ActionTypes} from '../constants/action-types'

export const setBudgets = (budgets) => {
    return {
        type: ActionTypes.SET_BUDGETS,
        payload: budgets
    }
}

export const updateBalance = () => {
    return {
        type: ActionTypes.UPDATE_BALANCE
    }
}

export const addBudget = (budget) => {
    return {
        type: ActionTypes.ADD_BUDGET,
        payload: budget
    }
}

export const selectedBudget = (budget) => {
    return {
        type: ActionTypes.SELECTED_BUDGET,
        payload: budget
    }
}

export const removeSelectedBudget = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BUDGET
    }
}