import {ActionTypes} from '../constants/action-types'

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}

export const deleteUser = () => {
    return {
        type: ActionTypes.REMOVE_USER
    }
}