import {ActionTypes} from '../constants/action-types'

const defaultState = {
    budgets:[]
}

export const budgetReducer = (state=defaultState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_BUDGETS:
            return {
                ...state,
                budgets: payload
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