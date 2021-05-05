import {createStore} from 'redux'

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_USER' : 
            return{
                ...state,
                user: action.user
            }
        default : 
            return state
    }
}

export default createStore(reducer,{
    user: ''   
})