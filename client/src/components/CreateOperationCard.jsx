import { useState } from "react"
import {Link} from 'react-router-dom'

export default function CreateOperationCard() {

    const [operation, setOperation] = useState({
        concept: '',
        mount: 0,
        date: '',
        type: 'expense',
        category: 'other'
    })

    function onChangeHandler(e) {
        e.preventDefault()
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h3 className="text-4xl text-center text-stark font-bold pt-10">Create Operation</h3>

            <form className="mx-5 p-4 border-2 border-stark mt-14 md:w-80 md:mt-28 sm:container sm:mx-auto">

                <h6 className="font-bold text-fuschia">Concept:</h6>
                <input className="bg-void border-b-2 border-stark text-stark w-full pl-0.5 focus:outline-none" type="text" value={operation.concept} onChange={onChangeHandler} name="concept" />

                <h6 className="font-bold text-fuschia pt-1">Mount:</h6>
                <input className="bg-void border-b-2 border-stark text-stark w-full pl-0.5 focus:outline-none" type="number" value={operation.mount} onChange={onChangeHandler} name="mount" />

                <h6 className="font-bold text-fuschia pt-1">Date:</h6>
                <input className="bg-void border-b-2 border-stark text-stark w-full pl-0.5 focus:outline-none" type="text" value={operation.date} onChange={onChangeHandler} name="date" />

                <h6 className="font-bold text-fuschia pt-1">Type:</h6>
                <input className="bg-void border border-stark text-stark  w-full pl-0.5 focus:outline-none" type="text" value={operation.type} onChange={onChangeHandler} name="type" />

                <h6 className="font-bold text-fuschia pt-1">Category:</h6>
                <input className="bg-void border border-stark text-stark w-full pl-0.5 focus:outline-none" type="text" value={operation.category} onChange={onChangeHandler} name="category" />

                <div className="flex mt-4 justify-evenly">
                    <Link to="/operations" className="px-2 border-2 border-jewel text-jewel text-xl font-bold hover:bg-jewel hover:text-stark">Cancel</Link>
                    <button className="px-2 border-2 border-fuschia text-fuschia text-xl font-bold hover:bg-fuschia hover:text-stark">Create</button>
                </div>
            </form>
        </div>
    )
}