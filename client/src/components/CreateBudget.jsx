import { useState } from 'react'
import { postBudget } from '../Helpers/budget-helper'
import {useDispatch} from 'react-redux'
import {addBudget, updateBalance} from '../redux/actions/budgetsActions'
import moment from 'moment'

export default function CreateBudget() {
    const dispatch = useDispatch()

    const [newBudget, setNewBduget] = useState({
        concept: '',
        mount: 0,
        type: 'income',
        category: 'others'
    })

    function OnChange(e){
        e.preventDefault()
        setNewBduget({
            ...newBudget,
            [e.target.name] : e.target.value
        })
    }

    async function OnSubmit(e){
        e.preventDefault()
        newBudget.mount = parseInt(newBudget.mount)
        let date = moment()
        newBudget.date = date.format('dddd Do MMMM YYYY')
        let result = await postBudget(newBudget)
        dispatch(addBudget(result))
        dispatch(updateBalance())
    }

    return (
        <div className="container mx-auto">
            <form className="m-10 sm:m-14 lg:m-28" onSubmit={OnSubmit}>
                <h1 className="text-3xl font-bold">Create a budget</h1>

                {/* Concept */}
                <h3 className="font-semibold">Concept</h3>
                <input type="text" name="concept" value={newBudget.concept} className="w-full pl-1" onChange={OnChange}/>

                {/* Mount */}
                <h3 className="font-semibold">Mount</h3>
                <input type="number" name="mount" value={newBudget.mount} className="w-full pl-1" onChange={OnChange}/>

                {/* Type */}
                <h3 className="font-semibold">Type</h3>
                <select name="type" value={newBudget.type} onChange={OnChange} className="bg-warmgray-500 text-white rounded-md w-full">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                {/* Category */}
                <h3 className="font-semibold">Category</h3>
                <select name="category" value={newBudget.category} onChange={OnChange} className="bg-warmgray-500 text-white rounded-md w-full">
                    <option value="all">All</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="services">Services</option>
                    <option value="job">Job</option>
                    <option value="others">Others</option>
                </select>
                <button type="submit" className="mt-2 w-full p-2 bg-warmgray-600 rounded-md font-bold text-white hover:bg-warmgray-800">Create</button>
            </form>
        </div>
    )
}