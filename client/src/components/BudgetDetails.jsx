import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {editBudgets, updateBalance} from '../redux/actions/budgetsActions'
import {editBudget} from '../Helpers/budget-helper'

export default function BudgetDetails() {
    const history = useHistory()
    const dispath = useDispatch()
    const budgetFromStore = useSelector(state => state.allBudgets.selectedBudget)
    const [budget, setBudget] = useState({
        concept:budgetFromStore.concept,
        mount:budgetFromStore.mount,
        category: budgetFromStore.category
    })

    function onChange(e){
        e.preventDefault()
        setBudget({
            ...budget,
            [e.target.name] : e.target.value
        })
    }

    async function onSubmit(e){
        e.preventDefault()
        budget.mount = parseInt(budget.mount)
        budget.type = budgetFromStore.type
        budget.date = budgetFromStore.date
        let ok = await editBudget(budget, budgetFromStore.id)
        dispath(editBudgets(budgetFromStore.id, budget))
        dispath(updateBalance())
        history.push('/budgets')
    }

    return (
        <div className="grid grid-cols-1 w-screen mt-20 justify-items-center place-content-center">
            <div className="container mx-auto">
                <form className="m-10 sm:m-14 lg:m-28" onSubmit={onSubmit}>
                    <h1 className="text-3xl font-bold">Edit</h1>

                    {/* Concept */}
                    <h3 className="font-semibold">Concept</h3>
                    <input type="text" name="concept" className="w-full pl-1" placeholder={budgetFromStore.concept} value={budget.concept} onChange={onChange} />

                    {/* Mount */}
                    <h3 className="font-semibold">Mount</h3>
                    <input type="number" name="mount" placeholder={budgetFromStore.mount} value={budget.mount} className="w-full pl-1" onChange={onChange} />

                    {/* Category */}
                    <h3 className="font-semibold">Category</h3>
                    <select name="category" className="bg-warmgray-500 text-white rounded-md w-full" value={budget.category} onChange={onChange}>
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="services">Services</option>
                        <option value="job">Job</option>
                        <option value="others">Others</option>
                    </select>

                    {/* Type */}
                    <h3 className="font-semibold">Type</h3>
                    <h3 className="rounded-md bg-warmgray-800 text-white pl-1">{budgetFromStore.type}</h3>

                    {/* Date */}
                    <h5 className="font-semibold">Date: </h5>
                    <p className="pl-1">{budgetFromStore.date}</p>
                
                    <button type="submit" className="mt-2 w-full p-2 bg-warmgray-600 rounded-md font-bold text-white hover:bg-warmgray-800">Submit</button>
                </form>
            </div>
        </div>
    )
}