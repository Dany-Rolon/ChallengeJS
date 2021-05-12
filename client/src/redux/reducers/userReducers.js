import {ActionTypes} from '../constants/action-types'

const defaultState={
    user: {}
}

export const userReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: payload
            }
        default :
            return state
    }
}