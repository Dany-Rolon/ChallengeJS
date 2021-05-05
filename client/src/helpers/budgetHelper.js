import Axios from 'axios'

async function createBudget(item){
    const res = await Axios.post('http://localhost:4000/budget', item)
    console.log(res)
}

export  {
    createBudget
}