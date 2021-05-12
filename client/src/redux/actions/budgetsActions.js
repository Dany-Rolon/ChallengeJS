import {ActionTypes} from '../constants/action-types'

export const setBudgets = (budgets) => {
    return {
        type: ActionTypes.SET_BUDGETS,
        payload: budgets
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