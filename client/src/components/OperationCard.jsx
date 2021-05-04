import { Link } from 'react-router-dom'
export default function OperationCard({ operation, options }) {
    return (
        <li className="p-4 m-4 bg-bg_2 shadow-xl sh rounded-md">
            <h6 className="text-2xl mb-3 text-primary title">{operation.concept}</h6>
            <div className="flex flex-wrap justify-between">
                <h6><b className="text-primary">Mount:</b> {operation.mount}</h6>
                <h6 ><b className="text-primary">Type:</b><p className={`${operation.type === 'income' ? 'text-green-600' : 'text-red-600'} inline`}> {operation.type}</p>
                </h6>
            </div>
            <div className="flex flex-wrap justify-between">
                <h6><b className="text-primary">Date:</b> {operation.date}</h6>
                <h6><b className="text-primary">Category:</b> {operation.category}</h6>
            </div >

            {
                options ? (
                    <div className="grid grid-cols-2 mt-4 ">
                        <Link to={{ pathname: "/edit_operation", item: operation }} className="title text-center rounded-lg px-2 border-2 border-secondary text-primary text-xl font-bold hover:bg-secondary hover:text-bg_1">Edit</Link>
                        <button className="title rounded-lg px-2 border-2 border-secondary text-primary text-xl font-bold hover:bg-red-600 hover:text-bg_1">Delete</button>
                    </div>
                ) : null
            }
        </li>
    )
}