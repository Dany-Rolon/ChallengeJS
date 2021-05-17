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

export {
    getBudgets,
    postBudget
}