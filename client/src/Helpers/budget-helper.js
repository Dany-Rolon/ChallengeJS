import axios from 'axios'

async function getBudgets(){
    const {data,status} = await axios.get('http://localhost:4000/budget')
    if(status === 200){
        return data
    }
}

async function postBudget(budget){
    const {data, status} = await axios.post('http://localhost:4000/budget', budget)
    if(status === 200){
        return data
    }
}

async function deleteBudget(id){
    const {status} = await axios.delete(`http://localhost:4000/budget/delete/${id}`)
    if(status === 200){
        return true
    } else return false
}

async function editBudget(budget, id){
    const {state} = await axios.put(`http://localhost:4000/budget/edit/${id}`, budget)
    if(state === 200){
        return true
    } else {
        return false
    }
} 

export {
    getBudgets,
    postBudget,
    deleteBudget,
    editBudget
}