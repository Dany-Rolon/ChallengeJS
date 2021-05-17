import { useState } from "react"
import {useDispatch} from 'react-redux' 
import {useHistory} from 'react-router-dom'
import {removeSelectedBudget, updateBalance, selectedBudget} from '../redux/actions/budgetsActions'
import {deleteBudget} from '../Helpers/budget-helper'

export default function BudgetCard({ b, options }) { //b is for budget ;)
    const dispatch = useDispatch()
    const [isDeleting, setIsDeleting] = useState(false)
    const history = useHistory()
    function onCancel(e) {
        e.preventDefault()
        setIsDeleting(false)
    }

    async function onDeleting(){
        let ok = await deleteBudget(b.id)
        if(ok){
            dispatch(removeSelectedBudget(b.id))
            dispatch(updateBalance())
        }
        setIsDeleting(false)
    }

    function onEdit(e){
        e.preventDefault()
        dispatch(selectedBudget(b))
        history.push(`/budgets/${b.id}`)
    }

    return (
        <div className="mx-14 sm:mx-10 bg-white">
            <div className="px-4 pt-4">
                <div className="grid grid-cols-1">
                    {/* Concept */}
                    <h5 className="text-xl font-bold text-bluegray-600">{b.concept}</h5>

                    {/* Mount */}
                    <div className="flex mt-2">
                        <h5 className="font-semibold">Mount: </h5>
                        <p className="pl-1 text-blue-400">${b.mount}</p>
                    </div>

                    {/* Type */}
                    <div className="flex mt-2">
                        <h5 className="font-semibold">Type: </h5>
                        <p className={`${b.type === 'income' ? ('text-green-600') : ('text-red-500')} pl-1`}>{b.type}</p>
                    </div>

                    {/* Category */}
                    <div className="flex mt-2">
                        <h5 className="font-semibold">Category: </h5>
                        <p className="pl-1">{b.category}</p>
                    </div>

                    {/* Date */}
                    <div className="flex mt-2 mb-1">
                        <h5 className="font-semibold">Date: </h5>
                        <p className="pl-1">{b.date}</p>
                    </div>
                </div>
            </div>
            {/* Buttons */}
            {
                options ? (
                    <div className="grid grid-cols-2 px-">
                        <button className="block p-1 texet-center font-bold text-white bg-red-500 hover:bg-red-700" onClick={() => setIsDeleting(true)}>Delete</button>
                        <button className="block p-1 texet-center font-bold text-white bg-blue-500 hover:bg-blue-700" onClick={onEdit}>Edit</button>
                    </div>
                ) : (null)
            }

            {isDeleting ? (
                <div className="grid grid-cols-1 justify-items-center place-content-center w-screen h-screen fixed top-0 left-0 bg-white bg-opacity-50">
                    <div className="bg-warmgray-800 p-8 text-white">
                        <h2 className="col-span-2 text-2xl text-center">Are you sure you want to delete this budget?</h2>
                        <div className="grid grid-cols-2 mt-2">
                            <button onClick={onCancel} className="rounded-tl-md rounded-bl-md text-center font-bold bg-blue-500 p-2 hover:bg-blue-700 focus:outline-none">Cancel</button>
                            <button onClick={onDeleting} className="rounded-tr-md rounded-br-md text-center font-bold bg-red-500 p-2 hover:bg-red-700 focus:outline-none">Delete</button>
                        </div>
                    </div>
                </div>
            ) : (null)}

        </div>
    )
}