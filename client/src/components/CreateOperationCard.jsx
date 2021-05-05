import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import {createBudget} from '../helpers/budgetHelper'
import {Moment} from 'moment'

export default function CreateOperationCard(props) {

    const item = props.location.item
    
    const [operation, setOperation] = useState({
        concept: '',
        mount: 0,
        date: '',
        type: 'expense',
        category: 'other'
    })
    
    useEffect(() => {
        setOperation({
            ...item
        })
    }, [])

    function onChangeHandler(e) {
        e.preventDefault()
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }

    function onClick(e){
        e.preventDefault()
        if(item){
            //edit
        } else {
            operation.mount = parseInt(operation.mount)
            createBudget(operation)
        }
    }

    return (
        <div>
            <h3 className="text-4xl text-center text-stark font-bold pt-10 title">{item ? 'Edit Operation' : 'Create Operation'}</h3>

            <form className="mx-5 p-4 border-2 shadow-lg rounded-lg border-secondary mt-14 md:w-80 md:mt-28 sm:container sm:mx-auto">

                <h6 className="font-bold text-fuschia">Concept:</h6>
                <input className="bg-void border-b-2 border-stark text-stark w-full pl-0.5 focus:outline-none" type="text" value={operation.concept} onChange={onChangeHandler} name="concept" />

                <h6 className="font-bold text-fuschia pt-1">Mount:</h6>
                <input className="bg-void border-b-2 border-stark text-stark w-full pl-0.5 focus:outline-none" type="number" value={operation.mount} onChange={onChangeHandler} name="mount" />

                {
                    item ? null : (
                        <div className="pt-1">
                            <h6 className="font-bold text-fuschia">Type:</h6>
                            <input className="bg-void border border-stark text-stark  w-full pl-0.5 focus:outline-none" type="text" value={operation.type} onChange={onChangeHandler} name="type" />
                        </div>
                    )
                }
                
                <h6 className="font-bold text-fuschia pt-1">Date:</h6>
                <input className="bg-void border-b-2 border-stark text-stark w-full pl-0.5 focus:outline-none" type="text" value={operation.date} onChange={onChangeHandler} name="date" />


                <h6 className="font-bold text-fuschia pt-1">Category:</h6>
                <input className="bg-void border border-stark text-stark w-full pl-0.5 focus:outline-none" type="text" value={operation.category} onChange={onChangeHandler} name="category" />

                <div className="grid grid-cols-2 mt-5">
                    <Link to="/operations" className="text-center px-2 border-2 border-secondary text-jewel text-xl font-bold rounded-lg title hover:bg-secondary hover:text-bg_1">Cancel</Link>
                    <button onClick={onClick} className="px-2 border-2 border-secondary text-fuschia text-xl font-bold rounded-lg title hover:bg-secondary hover:text-bg_1">{item ? 'Edit' : 'Create'}</button>
                </div>
            </form>
        </div>
    )
}